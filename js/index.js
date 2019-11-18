// console.log($)
$(function(){

	// 防抖
	// function debounce(fn,wait){
	// 	let timeout;
	// 	return function(){
	// 		let that = this;

	// 		if(timeout) clearTimeout(timeout);

	// 		let callNow = !timeout;
	// 		timeout = setTimeout(()=>{
	// 			timeout = null;

	// 		},wait)

	// 		if(callNow) fn.apply(that)
	// 	}
	// }


	$('.shop_car').mouseenter(function(){
		$(this).css('backgroundColor','#fff');
		$('.shop_car a span').add($('.shop_car a i')).css('color','#ff6700');
		$('.shop_list').slideDown(400)
	}).mouseleave(function(){
		$('.shop_list').slideUp(300,function(){
			$('.shop_car').css('backgroundColor','#333');
			$('.shop_car a span').add($('.shop_car a i')).css('color','#b0b0b0');
		})
	})	
})



