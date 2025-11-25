$(function(){
  // subtle name animation on landing
  $('header h1').hide().fadeIn(700);

  // highlight current nav (simple)
  const path = location.pathname.split('/').pop();
  $('nav a').each(function(){
    if($(this).attr('href') === path || (path === '' && $(this).attr('href') === 'index.html')){
      $(this).css({'text-decoration':'underline'});
    }
  });
});
