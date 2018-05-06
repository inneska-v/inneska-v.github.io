(function() {

  var overlay = document.querySelector("#overlay_wrapper.overlay");
  var feedbackBtn = document.querySelector(".button_act");
  var closeForm = document.querySelector("#overlay_wrapper .overlay_close");

  if (!overlay || !feedbackBtn || !closeForm) return;

  feedbackBtn.addEventListener("click", function(event) {

    event = event || window.event;
    event.preventDefault();
    overlay.classList.add("overlay--visible");

  }, false);

  closeForm.addEventListener("click", function() {

    overlay.classList.remove("overlay--visible");

  }, false);

})();