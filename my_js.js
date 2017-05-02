$("#num1,#num2").on('input', function(event) {
	$("#num3").val(parseFloat($("#num1").val()) + parseFloat($("#num2").val()));
});