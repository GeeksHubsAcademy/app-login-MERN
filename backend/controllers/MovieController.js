import MovieModel from "../models/Movie.js";

const MovieController = {
    async getAll(req, res) {
        try {
            const movies = await MovieModel.find().populate('UserId');
            // const movies = await MovieModel.aggregate([{ //aggregate es de MongoDB se salta el modelo de mongoose
            //     $lookup: {
            //         from: 'users',
            //         localField: 'UserId',
            //         foreignField: '_id',
            //         as: 'user'
            //     }
            // }])
            res.send(movies)
        } catch (error) {
            console.error(error)
            res.status(400).send({
                message: 'There was a problem trying to get the movies',
                error
            })
        }
    },
    async create(req, res) {
        try {
            req.body.UserId = req.user._id;
            const movie = await MovieModel.create(req.body);
            res.status(201).send(movie);
        } catch (error) {
            console.error(error)
            res.status(400).send({
                message: 'There was a problem trying to create the movie',
                error
            })
        }
    }
}
export default MovieController;