import Time "mo:core/Time";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
    // Initialize the access control system
    let accessControlState = AccessControl.initState();
    include MixinAuthorization(accessControlState);

    // User profile type and storage
    public type UserProfile = {
        name : Text;
    };

    let userProfiles = Map.empty<Principal, UserProfile>();

    // User profile management functions
    public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
        if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
            Runtime.trap("Unauthorized: Only users can access profiles");
        };
        userProfiles.get(caller);
    };

    public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
        if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
            Runtime.trap("Unauthorized: Can only view your own profile");
        };
        userProfiles.get(user);
    };

    public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
        if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
            Runtime.trap("Unauthorized: Only users can save profiles");
        };
        userProfiles.add(caller, profile);
    };

    // Contact form data structure
    public type ContactMessage = {
        timestamp : Time.Time;
        name : Text;
        phone : Text;
        email : Text;
        message : Text;
    };

    var contactMessages : [ContactMessage] = [];

    // Public contact form submission - accessible to everyone including guests
    public shared ({ caller }) func submitContactForm(name : Text, phone : Text, email : Text, message : Text) : async () {
        let newMessage : ContactMessage = {
            timestamp = Time.now();
            name = name;
            phone = phone;
            email = email;
            message = message;
        };
        contactMessages := contactMessages.concat([newMessage]);
    };

    // Admin-only function to retrieve all contact messages
    public query ({ caller }) func getContactMessages() : async [ContactMessage] {
        if (not (AccessControl.isAdmin(accessControlState, caller))) {
            Runtime.trap("Unauthorized: Only admins can view contact messages");
        };
        contactMessages;
    };
};
