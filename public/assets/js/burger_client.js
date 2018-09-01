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