var num = 16;

$(document).ready(function()
{

	genSketchPad(num);

});
//creates grid
function genSketchPad(num)
{
	$("#container").empty();

	for( i=0 ; i < num * num ; i++ )
	{
		
		$("#container").append("<div class='tile'></div>");

	}

		
	$('.tile').css({'width': 'calc(100% / ' + num + ')', 'padding-top': 'calc(100% / ' + num + ')'});//there is a better way	


	$(".tile").mouseenter(function()
	{
		if($(this).hasClass("filled")) 
		{
			//extract rgb values from css
			var fillColor = $(this).css("background-color");
			var vals = fillColor.substring(4, fillColor.length-1)
			//create array with rgb values
			var array = JSON.parse("[" + vals + "]");
			//alert('r' + array[0] + "g" + array[1]);	
			//create new rgb values that are 10% lighter
			var newRVal = Math.floor(array[0] - array[0]*.10);
			//alert(newRVal);
			var newGVal = Math.floor(array[1] - array[1]*.10);
			var newBVal = Math.floor(array[2] - array[2]*.10);
			//shade division based upon new values
			$(this).css({'background-color':'rgb('+newRVal+','+newGVal+','+newBVal+')'});
		} else 
		{
			$(this).addClass("filled");

			var rVal=Math.floor(Math.random()*255);
			var gVal=Math.floor(Math.random()*255);
			var bVal=Math.floor(Math.random()*255);
			$(this).css({'background-color':'rgb('+rVal+','+gVal+','+bVal+')'});
		}
	});
}
//extracts rgb values from colored pixels
//function getValues(fillColor)
//{
//	fillColor.substring(3,-1)

//}



//removes the color from filled tiles
$("#reset").click(function()
{

	//num = prompt("Please enter a side length for grid (2-40)");
	$(".tile").removeClass("filled");
	num = 0;	
		while(isNaN(num)||num<2||num>45)
		{
			num = prompt("Please enter a VALID side length for grid (2-45)");
		//generates 16 x 16 grid if user cancels or enters empty text field
		if(num===null||num=='')	
			{
				num=16;
			}

		} 
		genSketchPad(num);
});


