import mongoose from 'mongoose';
const Schema = mongoose.Schema

const BookShema = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    favorite: {
        type: String,
        required: true
    },
    fileCover: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
});

export default mongoose.model('Express', BookShema)