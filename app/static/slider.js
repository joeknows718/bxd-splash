var currentBackground = 0;
var backgrounds = [];
backgrounds[0] = 'http://www.brooklynstreetart.com/theblog/wp-content/uploads/2010/07/brooklyn-street-art-907-ufo-sadue-jaime-rojo-web.jpg'; //change  logo 1 by switching filename
backgrounds[1] = '/static/dondi.jpg'; //change  logo 1 by switching filename
backgrounds[2] = 'http://www.mtn-world.com/wp-content/uploads/2013/05/ghost_graffiti_mtn3.jpg';//change  logo 1 by switching filename

var currentLogos = 0;
var logos = [];
logos[0] = '/static/graffiti_dondi_large.png'; //change  logo 1 by switching this file
logos[1] = '/static/servers.png'; //change logo 2 by switching this file
logos[2] = 'static/world_map.png'; //change logo 3 by switching this file

var currentTitle = 0; 
var titles = [];
titles[0] = 'Title'; //change title 1 by switching text
titles[1] = 'Title2';//change title 2 by switching text
titles[2] = 'Title3';//change title 3 by switching text

var currentText = 0; 
var text = [];
//switch text below to change text 1
text[0] = '1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
//switch text below to change text 2
text[1] = '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
//switch text below to change text 3
text[2] = '3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';


function changeBackground() {

    currentBackground++;

    if(currentBackground > 2) currentBackground = 0;

    $('.header-img').fadeOut(500,function() {
        $('.header-img').css({
            'background-image' : "url('" + backgrounds[currentBackground] + "')"
        });
        $('.header-img').fadeIn(500);
    });


    setTimeout(changeBackground, 10000);
}

function changeLogos() {

	currentLogos++;

	if (currentLogos > 2) currentLogos = 0;

	$('#logos').fadeOut(500,function() {
		$('#logos').attr("src", logos[currentLogos]);
		$('#logos').fadeIn(500);
	});

	setTimeout(changeLogos, 10000);
}

function changeContent(){
	currentTitle++;
	currentText++;

	if (currentText > 2) currentText = 0;
	if (currentTitle > 2) currentTitle =0;

	$('.slider-content').fadeOut(500,function() {
		$('#slider-title').text(titles[currentTitle]);
		$('#slider-text').text(text[currentText]);
		$('.slider-content').fadeIn(500);
	});

	setTimeout(changeContent, 10000);
}


$(document).ready(function() {
//	$('.header-img')('background-image', backgrounds[0]);
    setTimeout(changeBackground, 10000);  
    setTimeout(changeLogos, 10000);
    setTimeout(changeContent, 10000);

/* if you want to stop on hover uncomment this
    rotateTerm(); //start it on document.ready
    $("header").hover(function() {
        thread && window.clearTimeout(thread);
    }, function() {
        rotateTerm();
    });
*/
}); 