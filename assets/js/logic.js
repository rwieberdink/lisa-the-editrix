var i = 0;
var txt = 'An editor who edits their own work has a fool for an editor.';
var speed = 70;
const typing = () => {
	if (i < txt.length) {
		document.getElementById("live").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typing, speed);
	}else {
		document.getElementById('live').classList.add("live");
		document.getElementById('belongTo').classList.add("fade-in");
		document.getElementById('belongTo').classList.remove("hidden");
	}
		
};

typing();


// For disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(".jumbotron").css({ height: $(window).height() + "px" });

$(window).on("resize", function() {
  $(".jumbotron").css({ height: $(window).height() + "px" });
});

// $('.navbar-toggler').click(function() {
//   $(this).toggleClass('active');
// });