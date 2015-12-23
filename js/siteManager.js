
//Prototype Funcionsss
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
//------------------------------------------------------------------------


var header_initial_string = "*****************";
var header_target_string = "Hey I am Victor !";
var header_actual_string = "*****************";
var al = "abcdefgihjklmnopqrstuvwxyz1234567890:^`{}^`!@#$%¨&*()";
var header = document.getElementsByClassName("header-back");//.getElementById("ht");
var count = 0;
var to;

function header_loop(){

	console.log(header[0].querySelector("#ht").innerHTML);
	if(header[0].querySelector("#ht").innerHTML == header_target_string){
		clearTimeout(to);
	}
	else{
		header_actual_string =  header_actual_string.replaceAt(count,header_target_string[count]);
		header[0].querySelector("#ht").innerHTML = header_actual_string;
		count++;
	}


	 to = setTimeout( header_loop, 300);
}
