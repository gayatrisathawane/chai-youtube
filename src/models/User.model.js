import { model, Schema } from 'mongoose'
impo

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String,  //cloudinary
        required: true,

    },
    coverImage: {
        type: String,  //cloudinary
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: [true, "password is required"]
    },
    refeshToken: {

    }

}, { timestamps: true })


userSchema.methods.generateAccessToken = function () {
    return Jwt.sign(
        {

            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname

        },
        process.env.ACCESS_TOKEN_SECRET, {
        expireIn: process.env.ACCESS_TOKEN_EXPIRY
    }
    )
}
userSchema.methods.generateRefreshToken = function () {

    return Jwt.sign(
        {

            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expireIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )

}


export const User = model('User', userSchema)