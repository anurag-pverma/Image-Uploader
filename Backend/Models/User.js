const {Schema, model} = require ('mongoose')

const  UserSchema = new  Schema({
    name: {type : String},
    username: String,
    email: String,
    password: String,
    mobile: String,
    country: String,
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Unspecified'],
    }
})

const User = model("User", UserSchema);
module.exports = User;
