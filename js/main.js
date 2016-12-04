var years=["","1885","1886 (Contracts to 12 stocks)","1894","1896","1896","1896","1898-1899","1901 (Contracts to 11 stocks)","1905-1915","1916 (Expands to 20 stocks)","1920","1924","1925","1925","1927","1928 (Expands to 30 stocks)","1929","1930","1932","1933","1934 - 1935","1939","1956 - 1959","1976","1979","1982","1985","1987","1991","1997","1999","2003","2004","2005","2008","2009","2012","2013"];
var left =16,right=38;
var count=1,action="",	interval,val = 1,move=-58 , interval2;
var audio = new Audio('../Life Is Good.mp3');
myLayout=0;
replay=false;

$(document).ready(function(){
	
	onStart();
});
function onReplay(){
document.location.reload();
}
function onStart(){
	$( "#progressbar" ).progressbar({
      value: 0
    });

	var show= document.getElementById("slow");
	$("table").each(function(index){
		$(this).css("display","none");
	});
	show.innerHTML=years[1];
    $("#slow").css("display","block");
    $( "#progressbar" ).progressbar({
      value: 1
    });
    $("#yearshow").css("margin-left","-58px");
    $('#controller').css("display","none");

    
  		$(".table1").fadeIn( 1000 );
    //contain main logic for sliding lables 
	interval = setInterval(function() {
    count++;
    $div=$('.table'+count);
    action=".table"+count;
    $div1=$('.table'+(count-1));
     
    $div.css("display","block");
    $div1.css("display","none");
    $(action+" .animate").each(function(){
    	$(this).blink();
  	});
  	if (count == 2 || count == 8 || count == 10 || count == 16) {
  		$("#yearshow").css("width","220px");

  	}
  	else
  		$("#yearshow").css("width","140px");
  	show.innerHTML=years[count];
    $("#slow").css("display","block");
    if (count === 25) {audio.currentTime = 72;}
    if (count === 39) { clearInterval(interval);$div.css("display","none");$('#process').css("display","none");compareScreen();}
  }, 6000);
	
	audio.play();


	interval2=setInterval(function() {

		val=val+1;
		move=move+10.5;
		$( "#progressbar" ).progressbar({
      		value: val
    	});
    	$("#yearshow").css("margin-left",move+"px");
    	
    	if (val===100) {clearInterval(interval2);};
	}, 2280);

}
function compareScreen(){
	$('.table16').css("display","block");
	$('.table38').css("display","block");
	$('#controller').css("display","block");

		// TOGGLER CUSTOMIZATION SETTINGS
	var toggleButtons	= '<div class="btnCenter"></div>'
						+ '<div class="btnBoth"></div>'
						+ '<div class="btnWest"></div>';
		// CREATE THE LAYOUT
		myLayout = $('div.b2b_container').layout({
			resizeWhileDragging: 			true
		,	sizable:						false
		,	animatePaneSizing:				true
		,	fxSpeed:						'slow'
		,	west__size:						"50%"
		,	spacing_open:					0
		,	spacing_closed:					0
		,	west__spacing_closed:			8
		,	west__spacing_open:				8
		,	west__togglerLength_closed:		105
		,	west__togglerLength_open:		105
		,	west__togglerContent_closed:	toggleButtons
		,	west__togglerContent_open:		toggleButtons
		});

		// customize the west-toggler events
		myLayout.togglers.west
			// UN-BIND DEFAULT TOGGLER FUNCTIONALITY
			.unbind("click")
			// BIND CUSTOM WEST METHODS
			.find(".btnCenter")	.click( maximizeCenter ).attr("title", "Maximize Center")	.end()
			.find(".btnWest")	.click( maximizeWest )	.attr("title", "Maximize West")		.end()
			.find(".btnBoth")	.click( equalizePanes  ).attr("title", "Reset to 50/50")	.end()
		;

	// CUSTOM WEST METHODS
	function maximizeCenter	(evt) { myLayout.close("west"); evt.stopPropagation(); };
	function maximizeWest	(evt) { myLayout.sizePane("west", "100%"); myLayout.open("west"); evt.stopPropagation(); };
	function equalizePanes	(evt) { myLayout.sizePane("west",  "50%"); myLayout.open("west"); evt.stopPropagation(); };

	// GENERIC HELPER FUNCTION
	function sizePane (pane, size) {
		myLayout.sizePane(pane, size);
		myLayout.open(pane); // open pane if not already
	};
}
function changeOnLeft(){
	if (left > 18) {
		$('.tablei'+left).css("display","none");
	}
	else {
		$('.table'+left).css("display","none");
	}
	
	var l= document.getElementById("leftSelect").value;
	if (l > 18) {
		$('.tablei'+l).fadeIn( 1500 );
	}
	else {
		$('.table'+l).fadeIn( 1500 );
	}
	left=l;
}
function changeOnRight(){
	if (right < 19) {
		$('.table'+right).css("display","none");
	}
	else {
		$('.table'+right).css("display","none");
	}
	
	var l= document.getElementById("rightSelect").value;
	if (l < 19) {
		$('.tablei'+l).fadeIn( 1500 );
	}
	else {
		$('.table'+l).fadeIn( 1500 );
	}
	right=l;
}