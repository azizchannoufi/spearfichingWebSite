var d=new Date();
var j=d.getDate();
var a=d.getFullYear();
var m=d.getMonth()+1;
var h=d.getHours();
var s=d.getSeconds();
var min=d.getMinutes();
d1=j+"/"+m+"/"+a
h1=h+":"+min+":"+s
document.getElementById('date').innerHTML=("le date est:   "+d1)
document.getElementById("heure").innerHTML=("l'heure est:  "+h1)


let tabPanes = document.getElementsByClassName("tab-header")
[0].getElementsByTagName("div");

for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click",function(){
        document.getElementsByClassName("tab-header")
        [0].getElementsByClassName("active")
        [0].classList.remove("active");
        tabPanes[i].classList.add("active");

                 document.getElementsByClassName("tab-content")
            [0].getElementsByClassName("active")
            [0].classList.remove("active");
                document.getElementsByClassName("tab-content")
            [0].getElementsByClassName("tab-body")
            [i].classList.add("active");
                     
    });
}



var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()
	chrono()
}
function chronoContinue(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()-diff
	start = new Date(start)
	chrono()
}
function chronoReset(){
	document.getElementById("chronotime").innerHTML = "00:00:00"
	start = new Date()
}
function chronoStopReset(){
	document.getElementById("chronotime").innerHTML = "00:00:00"
	document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop(){
	document.chronoForm.startstop.value = "start!"
	document.chronoForm.startstop.onclick = chronoContinue
	document.chronoForm.reset.onclick = chronoStopReset
	clearTimeout(timerID)
}


/*$(document).ready(function(){
    var centiemeSeconde=0;
    var seconde=0;
    var minute=0;
    var heure=0;
    
    setInterval(function(){
       if( centiemeSeconde<99){
        centiemeSeconde++;
       }else{
        centiemeSeconde=0;
       if (seconde<59){
           seconde++;
       }else{
           seconde=0
           if(minute<59){
               minute++
           }else{
               minute=0
               heure++
           }
         } 
       }
        $('#chrono').text(heure+':'+minute+':'+seconde+':'+centiemeSeconde)
    },10)
})*/