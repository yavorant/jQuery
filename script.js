$("h1").css("color", "red"); //set prop
$("h1").css("color"); //get prop

$("h1").addClass("big-title margin100"); //add classes
$("h1").removeClass("big-title"); // remove classes
console.log($("h1").hasClass("margin100")); //Is there a class (return true/false)

$("h1").text("Good bye!");
//$("button").text("Don't do it!");
$("button").html("<i>Don't do it!</i>"); //innerHtml
