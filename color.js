var numsquares=6;
var color=generaterandomcolor(numsquares);
  var pickedcolor= pickcolor();
  var colorDisplay=document.getElementById("colordisplay");
  var messagedisplay=document.querySelector("#message");
  var squares=document.querySelectorAll(".square");
  var h1=document.querySelector("h1");
  var resetbutton=document.querySelector("#reset");

  var easy=document.querySelector("#easybtn");
  var hard=document.querySelector("#hardbtn");

  easy.addEventListener("click",function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    numsquares=3;
    color=generaterandomcolor(numsquares);
    pickedcolor=pickcolor();
    colorDisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++)
    {
      if(color[i])
         squares[i].style.background=color[i];
      else
        squares[i].style.display="none"; 
    }
  });  
  
  hard.addEventListener("click",function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numsquares=6;
     color=generaterandomcolor(numsquares);
    pickedcolor=pickcolor();
    colorDisplay.textContent=pickedcolor;
    for(var i=0;i<squares.length;i++)
    {
         squares[i].style.background=color[i];
         squares[i].style.display="block";
     } 
  });  

  resetbutton.addEventListener("click",function(){
  	color=generaterandomcolor(numsquares);
  	 pickedcolor=pickcolor();
  	 colorDisplay.textContent=pickedcolor;
  	 for(var  i=0;i<squares.length;i++)
  	 {
  	 	squares[i].style.background=color[i];
  	 }	
  	 h1.style.background="steelblue";
  });	 
  colorDisplay.textContent=pickedcolor;

  
  
  for(var i=0;i<squares.length;i++)
  {
   	//apply colors to square
  	squares[i].style.background = color[i];

  	//add click listner to square
   	squares[i].addEventListener("click",function(){
   		var clickedcolor=this.style.background;
   	//compare clicked color to picked color
  	if(clickedcolor===pickedcolor)
   	{
   		messagedisplay.textContent="Correct";
          changecolors(clickedcolor);
          h1.style.background=clickedcolor;
          resetbutton.textContent="Play Again";
   	}	
   	else
   	{
   		this.style.background="#232323";
   		messagedisplay.textContent="wrong";
   	}
   });
  }

  function changecolors(color)
  {
    for(var i=0;i<squares.length;i++)
    {
    	squares[i].style.background= color;
    }
  }

  function pickcolor()
  {
  	var random=Math.floor(Math.random()*color.length);
  	return color[random];
  }

  function generaterandomcolor(num)
  {
  	var arr=[];
  	for(var i=0;i<num;i++)
  	{
  		arr.push(randomcolor());

  	}
  	return arr;
  }

  function randomcolor()
  {
  	var r=Math.floor(Math.random()*256);
  	var g=Math.floor(Math.random()*256);
  	var b=Math.floor(Math.random()*256);
  	return "rgb(" + r + ", " + g + ", " + b + ")";
  }