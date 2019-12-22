const showWorkouts = () => {
    $.getJSON("/workouts", data => {
        for (let i = 0; i <data.length; i++) {
            $(".container").prepend(`
            <div class="workouts">
                <h3 class="eName inputs" contenteditable="false">${data[i].exerciseName}</h3>
                <p class="eDur inputs" contenteditable="false">Minutes: ${data[i].duration}</p>
                <button class="updateBtn">Edit Text</button>
                <button class="submitUpdate" data-id="${data[i]._id}">Submit Edit</button>
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

$(document).on("click", ".updateBtn", () => {
    $(".inputs").attr("contenteditable", true);
});

$(document).on("click", ".submitUpdate", () => {
    $(".inputs").attr("contenteditable", false);
    $.ajax({
        type: "PUT",
        url: "/workouts/",
        dataType: "json"
    }).then(data => {
        console.log(data);
    });
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