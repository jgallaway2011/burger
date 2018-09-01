
$(function () {

  // On-click function for client to side to submit form data to the server
  $("#submit").click(function () {
    var newBurger = {
      burger_name: $("#new-burger").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        location.reload();
      }
    );
  });

  // On-click function for client to send update request to server
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");
    var newDevourState = {
      devoured: newDevour
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});