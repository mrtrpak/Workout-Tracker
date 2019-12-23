const showWorkouts = () => {
    $.getJSON("/workouts", data => {
        for (let i = 0; i <data.length; i++) {
            $(".container").prepend(`
            <div class="workouts">
                <h3 class="eName inputs">${data[i].exerciseName}</h3>
                <p class="eDur inputs">Minutes: ${data[i].duration}</p>
                <button class="deleteOne" id="${data[i]._id}">Delete</button>
            </div>
            `)
        }
    })

}

showWorkouts();

$("#submit").on("click", () => {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "/submit",
        dataType: "json",
        data: {
            exerciseName: $("#workoutName").val(),
            duration: $("#workoutDuration").val()
        }
    }).then(data => {
        console.log(data);
        $("#workoutName").val("");
        $("#workoutDuration").val("");
        window.location.reload();
    })
})

$(document).on("click", ".deleteOne", (e) => {
    const thisId = e.target.id;
    $.ajax({
        type: "DELETE",
        url: "/delete/" + thisId,
        success: result => {
            return result;
        }
    });
    window.location.reload();
});

$("#delete").on("click", () => {
    event.preventDefault();
    $.ajax({
        type: "DELETE",
        url: "/clearall",
        success: result => {
            return result;
        }
    });
    window.location.reload();
});