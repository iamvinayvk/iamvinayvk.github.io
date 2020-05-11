var m="HI I AM VINAY";
var next_main="I AM A WEBDEVELOPER";
var speed=100;
var i=0;

window.onload=function types()
{ 

  if(i<m.length)
  { console.log(m.charAt(i));
    document.getElementById('name').innerHTML+=m.charAt(i);
    i++;
    setTimeout(types,speed);
  }
}
window.onload=function types()
{ 

  if(i<next_main.length)
  { console.log(next_main.charAt(i));
    document.getElementById('name').innerHTML+=next_main.charAt(i);
    i++;
    setTimeout(types,speed);
  }
}
