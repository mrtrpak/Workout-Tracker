# Workout-Tracker

## Synopsis
This app is designed for people to check out what others are entering in for a workout and to be able to add in an exercise with a time amount for how long they will do that exercise. This is a basic app which is utilizing mongodb, mongoose and express to create and save the data entered.

## Difficulties
I ran into some struggles when putting together this app. I had major issues getting this app deployed to heroku and even though I can run it locally and it works fine it isn't able to work with the heroku link. I have to tinker with it more to figure out the issue so that it can work. Also with this assignment being pretty open ended it was tough to nail down the most efficient way to go about writing the code for this app. This is one that I will need to work further on to get it to a place that I am satisfied with. 

## Fixes
I was able to finally get the Heroku link to work. The error was in the models folder that on github the Workout.js file was actually saved in the repo as workout.js. Since I am using windows it was working locally because windows doesn't mind it being capital or not and will read it either way, but in heroku it created it to break. I was able to overwrite the file name in github itself to change that difference and it is working now. Phew!!

This app now shows the added exercises once they have been added and added some basic styles to the boxes. 

I also added in the capability to delete all of the workouts listed from the form "Delete All" button. Also with each workout a delete button is generated which will delete that specific workout only.

## Future Implementations
Besides getting it working on heroku I want to be able to update the different workouts as well being able to view the exercise name with the duration inline for better looking data.

## Tools Used

- [mongoose](https://mongoosejs.com/)
- [express](https://expressjs.com/)
- HTML
- CSS
- Javascript
- JQuery

## Link
<a href="https://thawing-retreat-17443.herokuapp.com/" target="_blank">Heroku Link</a>
