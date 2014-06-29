function removeNavButtonSelection() {
    var numButtons = $("#global-actions li").length;
    var button;
    for (i = 0; i < numButtons; i++) {
    	button = $('#global-actions').children().eq(i);
    	if ($(button).hasClass("active")) {
        	$(button).removeClass("active");
        }
    }
}

