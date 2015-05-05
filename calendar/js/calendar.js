// JavaScript source code
//generate time list
/*
var events = [
	 {start:30, end:150},
	 {start:540, end:600},
	 {start:560, end:620},
	 {start:610, end:670}
	 ]; 
*/
function makeCalender() {
    var time = 9 * 60;
    var timeList=[];
    while (time <= (21 * 60)) {
        var hour = time / 60 | 0;

        var minute = (time % 60 == 0) ? "00" : (time % 60);
        var sun = '';
        if (time % 60 == 0 && hour / 12 < 1)
            sun = ' AM';
        else if (time % 60 == 0 && hour / 12 >= 1)
            sun = ' PM';
		else
			sun="";
        if (hour % 12 == 0)
            hour = 12;
        else
            hour = hour % 12;
        timeList[timeList.length] = [time, hour + ":" + minute, sun];
        time = time + 30;

    }
return timeList;
};

//test makeCalender() on Console.log()
function runMakeCalender1(){

var timelist=makeCalender();
console.log(timelist);
};

//test makeCalender() on Browser
var func=(function runMakeCalender2(){
var timelist=makeCalender();
var text="";

for (var i=0; i<timelist.length;i++)
{
if (timelist[i][2]!=""){
	text+="<div class=\"row\">" + "<div class=\"timeList\">" + "<strong style=\"font-size:11px\">" 
	+ timelist[i][1] +"</strong>" +timelist[i][2] +"</div>"
	+"</div>";
	}
else {
	text+="<div class=\"row\">" +"<div class=\"timeList\">" + timelist[i][1] +"</div>"
	+"</div>";
	}
};

document.getElementById("eventCalender").innerHTML =text;
})();


