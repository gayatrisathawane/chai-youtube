import { Schema, model } from 'mongoose'

const videoSchema = new Schema({

    videoFile: {
        type: String,  //cloudinary url
        required: true
    },
    thumbnail: {
        type: String,  //cloudinary url
        required: true
    },
    tittle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number, //cloudinary url
        required: true
    },
    views: {
        type: Number,  //cloudinary url
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"

    }

}, { timestamps: true })

export const Video = model('Video', videoSchema)