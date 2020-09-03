(function(){
var screen=document.querySelector("#screen");
var clear=document.querySelector(".btn-clear");
var equal=document.querySelector(".btn-equal");
var buttons=document.querySelector(".btn");
 
 
 buttons.forEach(function(button){
 buttons.addEventlistener('click',function(e)
 {
 	var answer=e.target.dataset.num;
 	screen.value+=answer;
 })
});

equal.addEventListener('click',functio(e){
	if(screen.value==='')
		screen.value='please enter a value';
	else
	{
		let value=eval(screen.value);
		screen.value=value;
	}
})

clear.addEventlistener('click',function(e){
	screen.value='';
})
})();