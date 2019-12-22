const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exerciseName: {
        type: String,
        trim: true,
        unique: true
    },
    duration: Number
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
