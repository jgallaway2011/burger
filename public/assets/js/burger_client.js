
$(function () {

  $("#submit").click(function () {

    var newBurger = {
      burger_name: $("#new-burger").val().trim(),
      devoured: 0
    };
    console.log(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("Created new burger");
        location.reload();
      }
    );
  });

  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");
    console.log(id);
    console.log(newDevour);
    var newDevourState = {
      devoured: newDevour
    };
    console.log(newDevourState);
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("Changed sleep to ", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});