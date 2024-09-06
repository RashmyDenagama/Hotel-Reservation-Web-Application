function displayDate()
{
	let today = new Date();
	alert("Today is :"+today.toString());
}
		
function mouseOver()
{
	document.pic.src="163947161.jpg";
	pic.style.height='500px';
	pic.style.width='800px';
}
function mouseOut()
{
	document.pic.src="camping2.webp";
	pic.style.height='500px';
	pic.style.width='800px';
}
function ChangeText()
{
	document.getElementById("p1").innerHTML= "Hello from JavaScript";
}
function ConverToUpperCase()
{
	let tfvalue = document.getElementById("txtvalue").value;
	let inuppercase = tfvalue.toUpperCase();
	document.getElementById("txtvalue").value=inuppercase; 
}