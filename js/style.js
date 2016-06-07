$(function(){
	$('.first .logo img')[3].addEventListener('animationend',function(){
		$(this).addClass('rotate');
	},false);
});