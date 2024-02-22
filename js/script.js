

  $('.counter_count').counterUp({
    delay: 10,
    time: 1200
});

let main_manu = document.querySelector('.main_menu')
console.log(main_manu);
window.addEventListener('scroll',()=>{
  let scrollAmount = window.scrollY
  if(scrollAmount > 300){
main_manu.classList.add('fixed_menu')
  }
  else{
    main_manu.classList.remove('fixed_menu')
  }
})



var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
