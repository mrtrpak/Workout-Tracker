const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    exerciseName: {
        type: String,
        trim: true,
        unique: true
    },

    duration: Number

    // workoutCreated: {
    //     type: Date,
    //     default: Date.now
    // },

    // lastUpdated: Date,

    // fullExercise: String
});

// WorkoutSchema.methods.setFullExercise = function() {
//     this.fullExercise = `${this.exerciseName} for ${this.duration} minutes`;
//     return this.fullExercise;
// };

// WorkoutSchema.methods.lastUpdatedDate = function() {
//     this.lastUpdated = Date.now();
//     return this.lastUpdated;
// };

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;