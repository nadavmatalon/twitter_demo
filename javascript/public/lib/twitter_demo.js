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

function addTweet() {
	var newTweet = $("#tweet-container").clone();
	$(newTweet).appendTo(".tweet-column-wrapper").slideDown();
};

$(document).ready(function(){
    $(".nav-button").click(function() {
        var selected_button = $(this);
        removeNavButtonSelection();
        $(selected_button).addClass("active");
    });

    $("#direct-message").click(function() {
        console.log("direct-message button clicked");
    });

    $("#settings").click(function() {
        console.log("settings button clicked");
    });

    $("#compose").click(function() {
        console.log("compose button clicked");
    });

    $("#user-link").click(function() {
        console.log("user link clicked");
    });
    $(window).scroll(function () {
        if($(window).scrollTop() + $(window).height() == $(document).height() ) {
            $(".spinner").show(function() {
                setTimeout(function() {
                    $(".spinner").hide();
                    addTweet();
                    addTweet();
                }, 1500);
            });
        };
    });

    $('.textbox').on('focus', function() {
        $('.user-info-bottom').removeClass('container-blur');
        $('.textbox').removeClass('textbox-blur');
        $('.user-info-bottom').addClass('container-focus');
        $('.textbox').addClass('textbox-focus');
        $('.textbox').scrollTop($('.textbox')[0].scrollHeight +40);
    }).on('blur', function() {
        $('.user-info-bottom').removeClass('container-focus');
        $('.textbox').removeClass('textbox-focus');
        $('.user-info-bottom').addClass('container-blur');
        $('.textbox').addClass('textbox-blur');
    });
    
    $('#search-box').on('focus', function() {
        $('#search-box').css('transition', 'background-color 0.3s ease-out');
        $('#search-box').css('background-color', 'rgb(100, 100, 100)')
    }).on('blur', function() {
        $('#search-box').css('transition', 'background-color 0.3s ease-out');
        $('#search-box').css('background-color', 'gray');
    });
});
