$(document).ready(function(){
	//menu down show start
	$(".js_section").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky");
		}else{
			$("nav").removeClass("sticky");
		}
		
	});
	});
	
	//for mobile menu
function openNav(){
	document.getElementById("myNav").style.height = "100%";
}
function closeNav(){
	document.getElementById("myNav").style.height = "0%";
}