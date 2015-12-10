//全局变量区域

//增加mouseover鼠标指针变化事件
$(document).on('mousemove', '.book1,.book2,.BookNumber div table td:nth-child(odd)', function() {
	$(this).css('cursor', 'pointer');
});
//计算总价函数
function CountPrice(){
	var cp = 0;
	$(".Price").each(function() {
		var b = parseFloat($(this).text());
		cp = cp + b;
	});
	$("#CountPrice").text(cp.toFixed(2));
};
//DOM页面加载完成函数==========================================================
$(document).ready(function() {
	//	滚动增加盒子阴影
	$(window).on('scroll', function() {
			29
			if ($(window).scrollTop() >= 29) {
				$(".zhegai").addClass("ZhegaiShadow");
			} else {
				$(".zhegai").removeClass("ZhegaiShadow");
			}
		})
		//  $(".hearder-logo").click(function(){
		//  	alert($(window).scrollTop());
		//  })
		//	导航栏鼠标悬浮变色
	$(".HearderContentTable tr td").mouseover(function() {
		$(this).css('background-color', "#05A2EF");
	}).mouseleave(function() {
		$(this).css('background-color', '#54BAEC');
	});
	//   导航栏上面点击事件
	$(".HearderContentTable tr td:nth-child(1)").click(function() {
		window.location.href = "index.html"
	});
	$(".HearderContentTable tr td:nth-child(2)").click(function() {
		window.location.href = "sell.html"
	});
	$(".HearderContentTable tr td:nth-child(3)").click(function() {
		window.location.href = "buy.html";
	});
	$(".HearderContentTable tr td:nth-child(4)").click(function() {
		window.location.reload();
	});
	//购物车操控函数-----------------------
	//选择新旧书 而 变颜色
	$(".BookKind").on("click", "div", function() {
		//		$(".BookKind div").css("border-color", "gainsboro");
		//		$(this).css("border-color", "#E05C49");
		if ($(this).attr('class') == "BookOld") {
			$(this).css("border-color", "#E05C49").next().css("border-color", "gainsboro");
			var danjia1 = $(this).parents(".ShopCarListX").find(".BookPrice").children("#book1").text();
			var shuliang1 = $(this).parents(".ShopCarListX").find(".shuliang").text();
			var jiage1 = (parseFloat(danjia1) * parseInt(shuliang1)).toFixed(2);
			$(this).parents(".ShopCarListX").find(".Price").text(jiage1);
			CountPrice();
		} else if ($(this).attr('class') == "BookNew") {
			$(this).css("border-color", "#E05C49").prev().css("border-color", "gainsboro");
			var danjia = $(this).parents(".ShopCarListX").find(".BookPrice").children("#book2").text();
			var shuliang = $(this).parents(".ShopCarListX").find(".shuliang").text();
			var jiage = (parseFloat(danjia) * parseInt(shuliang)).toFixed(2);
			$(this).parents(".ShopCarListX").find(".Price").text(jiage);
			CountPrice();
		}
	});
	//加减数量===函数
	$(".BookNumber div table tr td:nth-child(3)").on("click", function() {
		var a = $(this).prev().text();
		$(this).prev().text(parseInt(a) + 1);
		if ($(this).parents(".ShopCarListX").find(".BookOld").css('border-color') == "rgb(224, 92, 73)") {
			var danjia1 = $(this).parents(".ShopCarListX").find(".BookPrice").children("#book1").text();
			var shuliang1 = $(this).parents(".ShopCarListX").find(".shuliang").text();
			var jiage1 = (parseFloat(danjia1) * parseInt(shuliang1)).toFixed(2);
			$(this).parents(".ShopCarListX").find(".Price").text(jiage1);
			CountPrice();
		} else if ($(this).parents(".ShopCarListX").find(".BookOld").css('border-color') == "rgb(220, 220, 220)") {
			var danjia = $(this).parents(".ShopCarListX").find(".BookPrice").children("#book2").text();
			var shuliang = $(this).parents(".ShopCarListX").find(".shuliang").text();
			var jiage = (parseFloat(danjia) * parseInt(shuliang)).toFixed(2);
			$(this).parents(".ShopCarListX").find(".Price").text(jiage);
			CountPrice();
		}
	});
	$(".BookNumber div table tr td:nth-child(1)").on("click", function() {
		var a = parseInt($(this).next().text());
		if (a > 1) {
			$(this).next().text(a - 1);
			if ($(this).parents(".ShopCarListX").find(".BookOld").css('border-color') == "rgb(224, 92, 73)") {
				var danjia1 = $(this).parents(".ShopCarListX").find(".BookPrice").children("#book1").text();
				var shuliang1 = $(this).parents(".ShopCarListX").find(".shuliang").text();
				var jiage1 = (parseFloat(danjia1) * parseInt(shuliang1)).toFixed(2);
				$(this).parents(".ShopCarListX").find(".Price").text(jiage1);
				CountPrice();
			} else if ($(this).parents(".ShopCarListX").find(".BookOld").css('border-color') == "rgb(220, 220, 220)") {
				var danjia = $(this).parents(".ShopCarListX").find(".BookPrice").children("#book2").text();
				var shuliang = $(this).parents(".ShopCarListX").find(".shuliang").text();
				var jiage = (parseFloat(danjia) * parseInt(shuliang)).toFixed(2);
				$(this).parents(".ShopCarListX").find(".Price").text(jiage);
				CountPrice();
			}
		} else if (a == 1) {
			var r = confirm("确认要删除这样商品名么");
			if (r == true) {
				$(this).parents(".ShopCarListX").remove();
				CountPrice();
			} else {
				//document.write("You pressed Cancel!")
			}
		}
	});
	//每个商品单独总价格
	$(".Price").each(function() {
		var danjia = $(this).parents(".ShopCarListX").find(".BookPrice").children("#book1").text();
		var shuliang = $(this).parents(".ShopCarListX").find(".shuliang").text();
		$(this).text((parseFloat(danjia) * parseInt(shuliang)).toFixed(2));
	});
	CountPrice();
}); //===============================================