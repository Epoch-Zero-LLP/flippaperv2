var hellocookie = Number(localStorage.getItem('hellocookie-hidden'));
if(hellocookie === 0) {
    localStorage.setItem('hellocookie-hidden', 0);
    $('.hellocookie').removeClass( "hellocookie__hide" );

};
$('.js-closeCookie').on('click', function(e) {
     e.preventDefault();
     $('.hellocookie').addClass( "hellocookie__hide" );
     localStorage.setItem('hellocookie-hidden', 1);
});

