const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const config = require('config');


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50

    },
    lastName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        minlength: 1,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 3,

    },
    // confirm_password: {
    //     type: String,
    //     required: true,
    //     minlength: 3,

    // },
    dateRegistered: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    },

    isAdmin: {
        type: Boolean,
        default: false
    }

});


userSchema.methods.generateAuthToken = function() {
    const user = this;
    return jwt.sign({
            _id: user._id,
            email: user.email,
            isAdmin: user.isAdmin,
            isVerified: user.isVerified
        },
        config.get('coPrivateKey')
    );

};

userSchema.statics.findByCredentials = async function(loginCredential) {
    const User = this;
    const { username, password } = loginCredential;
    //  find the user by the username or email address
    const user = await User.findOne({ username })

    if (user) {
        // tell bcrypt to compare their password
        const validated = await bcrypt.compare(password, user.password);

        if (validated) {
            // if password is valid
            return Promise.resolve(user);
        } else {
            return Promise.reject(new Error('Password Mismatch'));
        }
    }
};

// before saving the user hash the password
userSchema.pre('save', async function(next) {
    const user = this;

    // if the password is modified, encrypt it
    if (user.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        next();
    } else {
        next();
    }
});

// joi to validate users input
function Validate(reqbody) {
    const schema = {
        firstName: Joi.string()
            .min(3)
            .max(50)
            .required(),
        lastName: Joi.string()
            .min(3)
            .max(50)
            .required(),
        phoneNumber: Joi.string().required(),
        address: Joi.string()
            .min(10)
            .max(50),
        email: Joi.string()
            .email()
            .max(100)
            .required(),
        password: Joi.string()
            .min(5)
            .max(50)
            .required()
            .strict(),
        confirm_password: Joi.string()
            .valid(Joi.ref('password'))
            .required()
            .strict()
    };
    return Joi.validate(reqbody, schema);
}

function loginValidate(reqbody) {
    const schema = {
        email: Joi.string()
            .required()
            .error(err => ({ message: 'email address is required' })),
        password: Joi.string().required()
    };
    return Joi.validate(reqbody, schema);
}

const User = mongoose.model('User', userSchema);

module.exports = { User, Validate, userSchema, loginValidate };