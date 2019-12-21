//內容縮放動畫
$('#seedout').click(function(){
    $('#seedtxt h2,#seedtxt p').slideToggle(1000);
});
$('#serviceout').click(function(){
    $('#graph,.service h3').fadeToggle(1000);
});
$('#productout').click(function(){
    $('.product .pic,.product h3').slideToggle(1000);
});


//置頂按扭滑動
$('#gotop').click(function(){
window.scrollTo({ 
top: 0, 
behavior: "smooth" 
});
});

var scroll = $(window).scroll(function(){

if(scroll.scrollTop() >= $('.seed').offset().top -50){
    $('#gotop').css('display','block')
}else{
    $('#gotop').css('display','none')
};  
});


//選單滑動
$('#toAbout').click(function(){
window.scrollTo({ 
top: $('.seed').offset().top, 
behavior: "smooth" 
});
});

$('#toService').click(function(){
window.scrollTo({ 
top: $('.service').offset().top, 
behavior: "smooth" 
});
});

$('#toproduct').click(function(){
window.scrollTo({ 
top: $('.product').offset().top, 
behavior: "smooth" 
});
});

$('#toContact').click(function(){
window.scrollTo({ 
top: $('.contact').offset().top, 
behavior: "smooth" 
});
});