// console.log($)
$(function(){

	// 防抖 非立即执行版
	function debounce_1(fn,wait){
		// 设置定时器默认为 null;
		var timer= null;
		// 设置指向
		var that = this;
		return function(){
			// 不管任何时候,当走到这一步,必须清除定时器
			clearTimeout(timer);
			// 设置定时器重新计时
			timer = setTimeout(function(){
				// 让传入的函数 调用
				fn.apply(that,arguments)
			},wait)
		}
	}
	// 防抖 立即执行版本
	function debounce_2(fn,wait){
		var timer = null;
		var flag = true;
		var that = this;
		return function(){
			clearTimeout(timer);
			if(flag){
				fn.apply(that,arguments);
				flag = false
			}
			timer = setTimeout(function(){
				flag = true
			},wait)
		}
	}

	// 防抖 双剑合并版
	function debounce_merge(fn,wait = 500,isTmmedate = false){
		var timer = null;
		var flag = true;
		var that = this;
		if(isTmmedate){
			return function(){
				clearTimeout(timer);
				if(flag){
					fn.apply(that,arguments);
					flag = false;	
				}
				timer = setTimeout(function(){
					flag = true
				},wait)
			}
		}
	}




	$('.shop_car').on('mouseenter',debounce_2(function(){
		$('.shop_car').css('backgroundColor','#fff');
		$('.shop_car a span').add($('.shop_car a i')).css('color','#ff6700');
		$('.shop_list').slideDown(400)
	},1000))

	$('.shop_car').on('mouseleave',debounce_1(function(){
		$('.shop_list').slideUp(300,function(){
			$('.shop_car').css('backgroundColor','#333');
			$('.shop_car a span').add($('.shop_car a i')).css('color','#b0b0b0');
		})
	},1000))
	// $('.shop_car').mouseenter(function(){
	// 	$(this).css('backgroundColor','#fff');
	// 	$('.shop_car a span').add($('.shop_car a i')).css('color','#ff6700');
	// 	$('.shop_list').slideDown(400)
	// }).mouseleave(function(){
	// 	$('.shop_list').slideUp(300,function(){
	// 		$('.shop_car').css('backgroundColor','#333');
	// 		$('.shop_car a span').add($('.shop_car a i')).css('color','#b0b0b0');
	// 	})
	// })	
})



