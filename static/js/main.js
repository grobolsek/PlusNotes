$(document).ready(function(){
    console.log("js in working")
	// add list with button
	$( "#addList" ).click(function() {
		$( "#main" ).append( '<ol class="list"></ol>' );
		$( ".list:last-child" ).append( "<li>Appended item</li>" );
	});

	// change div for br when creating new line
	document.execCommand("defaultParagraphSeparator", false, "br");

	// placeholder for note
	jQuery(function($){
        $("[contenteditable]").focusout(function(){
            const element = $(this);
            if (!element.text().trim().length) {
                element.empty();
            }
        });
    });

});