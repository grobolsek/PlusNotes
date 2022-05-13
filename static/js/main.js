$(document).ready(function(){
	console.log( "js is working" )
	$( "#addList" ).click(function() {
		$( "#main" ).append( '<ol class="list"></ol>' );
		$( ".list:last-child" ).append( "<li>Appended item</li>" );
	});

	document.execCommand("defaultParagraphSeparator", false, "br");
});