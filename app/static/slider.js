var currentBackground = 0;
var backgrounds = [];
backgrounds[0] = '/static/hackathon.jpg'; //change  logo 1 by switching filename
backgrounds[1] = '/static/arial.jpg'; //change  logo 1 by switching filename
backgrounds[2] = '/static/i<3BX.jpg';//change  logo 1 by switching filename

var currentLogos = 0;
var logos = [];
logos[0] = '/static/graffiti_dondi_large.png'; //change  logo 1 by switching this file
logos[1] = '/static/servers.png'; //change logo 2 by switching this file
logos[2] = 'static/world_map.png'; //change logo 3 by switching this file

var currentTitle = 0; 
var titles = [];
titles[0] = 'Preparing our youth for the present and future:'; //change title 1 by switching text
titles[1] = 'Uplifting our borough:';//change title 2 by switching text
titles[2] = 'Join us:';//change title 3 by switching text

var currentText = 0; 
var text = [];
//switch text below to change text 1
text[0] = 'The tech sector is among the highest-paying and fastest-growing industries. By 2020 there will be at least 2 million tech jobs with 291,000 jobs in New York City, representing $30 billion in wages each year.';
//switch text below to change text 2
text[1] = '35% of 16-24 year olds in the Bronx are disconnected from school and work. Technology skills empower young people to become producers and thrive in the innovation economy. Support us in creating at least 1,000 jobs by 2020.  ';
//switch text below to change text 3
text[2] = 'The private and public sectors must work together to bring economic opportunities to our young people. By implementing collective impact strategies and by leveraging meaningful partnerships, we can turn the Bronx into the next tech hub.';


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