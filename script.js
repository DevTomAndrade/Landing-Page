$('.cover *').hide();
$('.content button').hide();

setTimeout(function(){
  $('.cover p').fadeIn(1000);
},1000);
setTimeout(function(){
  $('.cover span').fadeIn(1000);
},2000);
setTimeout(function(){
  $('.content').show();
},4000);
setTimeout(function(){
  $('.cover .shadow').fadeIn(1000);
},4000);
setTimeout(function(){
  $('.cover').removeClass('closed');
},4000);
setTimeout(function(){
  $('.cover-back').removeClass('closed');
},4000);
setTimeout(function(){
  $('.cover-back .shadow').fadeOut(1000);
},4000);

setTimeout(function(){
  $('.content').removeClass('closed');
},5000);
setTimeout(function(){
  $('.content button').fadeIn(1000);
},8000);
setTimeout(function(){
  $('.reviews blockquote:eq(0)').removeClass('hidden');
},10000);
setTimeout(function(){
  $('.reviews blockquote:eq(1)').removeClass('hidden');
},11000);
setTimeout(function(){
  $('.reviews blockquote:eq(2)').removeClass('hidden');
},12000);