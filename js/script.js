
var $one = $("#j1");
var $onep = $("#jp1");
var $two = $("#j2");
var $twop = $("#jp2");
var $three = $("#j3");
var $threep = $("#jp3");

$one.on("click", function() {
	$(this).hide();
	$onep.show();
	$("body").css("background-color", "grey")
	$(".jokes p").css("color", "purple");
})

$onep.on("click", function() {
	$(this).hide();
	$two.show();
	$("body").css("background-color", "white")
	$(".jokes p").css("color", "#404040");
})

$two.on("click", function() {
	$(this).hide();
	$twop.show();
	$("body").css("background-color", "purple")
	$(".jokes p").css("color", "white");
})

$twop.on("click", function() {
	$(this).hide();
	$three.show();
	$("body").css("background-color", "white")
	$(".jokes p").css("color", "#404040");
})

$three.on("click", function() {
	$(this).hide();
	$threep.show();
	$("body").css("background-color", "violet")
	$(".jokes p").css("color", "grey");
})

$threep.on("click", function() {
	$(this).hide();
	$one.show();
	$("body").css("background-color", "white")
	$(".jokes p").css("color", "#404040");
})

