import mongoose from 'mongoose';

const MovieSchema = mongoose.Schema({
    poster_path: String,
    genre_ids: [Number],
    title: {
        type: String,
        required: [true, 'El título es requerido'],
    },
    vote_average: Number,
    overview: String,
    release_date: Date,
    UserId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});
const MovieModel = mongoose.model('Movie', MovieSchema);
export default MovieModel;