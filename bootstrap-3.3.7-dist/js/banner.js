		$.fn.extend({
					//分页器切换
					pagination:function (){
						$('ol li').each(function(index){
						$(this).click(function(){
							$('img').eq(index).show().siblings().hide();
							$(this).addClass('active').siblings().removeClass('active');
							})
						})
					},
					horizon: function () {
						//左右切换
						var index = $('img').index();
						$('.left').click(function(){
							if(index > 0){
							index -= 1;
							}else{
								index = $('img').length - 1
							}
							$('img').eq(index).show().siblings().hide();
							$('ol li').eq(index).addClass('active').siblings().removeClass('active');
						})
						$('.right').click(function(){
							if(index >= 0 && index < $('img').length - 1){
							index += 1;
							}else{
								index = 0;
							}
							$('img').eq(index).show().siblings().hide();
							$('ol li').eq(index).addClass('active').siblings().removeClass('active');
						})
					}
				});