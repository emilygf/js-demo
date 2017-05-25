$("#num1,#num2").on('input', function() {
	$("#num3").val(parseFloat($("#num1").val()) + parseFloat($("#num2").val()));
});

$("#minutes").on('input', function() {
	var temp = 0;

	if (parseFloat($("#minutes").val()) > 0) {
		temp = parseFloat($("#minutes").val());
	} else {
		temp = 0;
	}

	document.getElementById("mins").innerHTML = temp;
});

var timerId = 0;

function myTimer() {

	var mins = parseFloat(document.getElementById("mins").innerHTML);
	var seconds = parseFloat(document.getElementById("seconds").innerHTML);

    if (mins > 0 && seconds == 0) {
    	document.getElementById("seconds").innerHTML = 59;
    	document.getElementById("mins").innerHTML = mins - 1;
    } else if (seconds > 10) {
    	document.getElementById("seconds").innerHTML = seconds - 1;
    } else if (seconds > 0) {
    	document.getElementById("seconds").innerHTML = "0" + (seconds - 1);
    } else {
    	document.getElementById("seconds").innerHTML = "00";
    	document.getElementById("mins").innerHTML = 0;
    }

}

$("#timer-start").on('click', function() {
	$("#minutes").attr("disabled","true");
	timerId = setInterval(myTimer, 1000);
});

$("#timer-pause").on('click', function() {
	$("#minutes").attr("disabled","true");
	clearInterval(timerId);
	$("#timer-start").html("Restart");
});

$("#timer-reset").on('click', function() {
	$("#minutes").attr("disabled", true);
	clearInterval(timerId);
	document.getElementById("seconds").innerHTML = "00";
    	document.getElementById("mins").innerHTML = 0;
    	document.getElementById("minutes").value = "";
    	$("#minutes").attr("disabled", false);
	$("#timer-start").html("Start");
});
