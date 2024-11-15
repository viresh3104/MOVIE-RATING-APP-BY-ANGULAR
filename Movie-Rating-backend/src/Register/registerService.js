var UserModel = require('./registerModel');
var key = '123456789abcabcs';
var encryptor = require('simple-encryptor')(key);

module.exports.registerUserDBservice = async (userDetails) => {
    try {
        var UserData = new UserModel();

        UserData.firstname = userDetails.firstname;
        UserData.lastname = userDetails.lastname;
        UserData.email = userDetails.email;
        UserData.password = encryptor.encrypt(userDetails.password);

        // Use await to save the UserData without a callback
        await UserData.save();

        return true; // Resolve the promise with true on success
    } catch (error) {
        console.error("Error saving user:", error);
        throw false; // Reject the promise with false on error
    }
};
