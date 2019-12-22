const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTrainerDb", { useNewUrlParser: true });

db.User.create({ name: "Test User" }).then(dbUser => {
    console.log(dbUser);
}).catch(({ message }) => {
    console.log(message);
});

app.get("/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

app.post("/submit", ({body}, res) => {
   db.Workout.create(body).then(({ _id }) => db.User.findOneAndUpdate({}, 
    { $push: { workouts: _id } }, { new: true })).then(dbUser => {
        res.json(dbUser);
    }).catch(err => {
        res.json(err);
    })
});

app.put("/workouts/:id", ({ params }, res) => {
    db.Workout.update(
        {
            _id: mongojs.ObjectId(params.id)
        },
        {
            $set: {
                exerciseName: req.body.exercisePlan,
                duration: req.body.duration
            }
        },
        (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
        }
    );
});

app.delete("/clearall", (req, res) => {
    db.Workout.remove({}, (error, response) => {
        if (error) {
            res.send(error);
        }  else {
            res.send(response);
        }
    });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});