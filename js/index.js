(function() {

	/*屏幕大小改变 调用不同背景图片*/
	function resize() {
		var windowWidth = $(window).width();
		/*判断屏幕尺寸*/
		var isSmall = windowWidth < 768;
		$('#carousel > #carousel-example-generic .carousel-inner .item').each(function(i, e) {
			var $e = $(e);
			/*取自定义属性的值*/
			var imagerul = $e.data(isSmall ? 'image-xs' : 'image-lg');
			$e.css('backgroundImage', 'url(' + imagerul + ')');
			if (isSmall) {
				//注入img
				$e.html('<img src="'+imagerul+'" alt="" />')
			}else{  //清空img
				$e.empty();
			}
		})

	}
	/*屏幕改变时 调用resize函数*/
	$(window).on('resize',resize).trigger('resize');




	function products(data) {
		var dom1 = '';
		var dom2 = '';
		for (var i = 0; i < data.item.length; i++) {
			dom1 += '<div class="row" id="my_jq_wrap'+i+'">';
			dom1 += '<div class="col-xs-12 my_products">';
			dom1 += '<div class=" my_left" id="bg'+i+'" style="background:url('+data.item[i].bgimg+')no-repeat center" >';
			dom1 += '<div class="leftTop">';
			dom1 += '<h3>'+data.item[i].name+'</h3>';
			dom1 += '<p class="badge">'+data.item[i].nameZs+'</p>';
			dom1 += '</div>';
			dom1 += '<div class="leftBottom">';
			dom1 += '<span class="pull-left hidden-xs hidden-sm">'+data.item[i].yytb+'</span>';
			dom1 += '<span class="pull-right hidden-xs hidden-sm" >'+data.item[i].ckgd+'</span>';
			dom1 += '</div>';
			dom1 += '</div>';
			dom1 += '<div class=" my_right">';
			$('#products > .container').append(dom1);
			dom1='';
		}
		for(var j=0; j<data.smallItem.length; j++){
			dom2 += '<div class="item'+j+'">';
			dom2 += '<div class="prTop">';
			dom2 += '<h4>'+data.smallItem[j].name+'</h4>';
			dom2 += '<div class="pull-left hidden-xs hidden-sm">';
			dom2 += '<p class="plb hidden-xs hidden-sm">'+data.smallItem[j].plb+'</p>';
			dom2 += '<p class="ply hidden-xs hidden-sm">'+data.smallItem[j].pls+'</p>';
			dom2 += '</div>';
			dom2 += '<div class="pull-right hidden-xs hidden-sm">';
			dom2 += '<p class="plt hidden-xs hidden-sm">'+data.smallItem[j].t+'</p>';
			dom2 += '<p class="plj hidden-xs hidden-sm">'+data.smallItem[j].tZs+'</p>';
			dom2 += '</div>';
			dom2 += '</div>';
			dom2 += '<div class="prBottom hidden-xs hidden-sm">';
			dom2 += '<ul>';
			dom2 += '<li>';
			dom2 += '<p>'+data.smallItem[j].cj+'</p>';
			dom2 += '<p>'+data.smallItem[j].cjZs+'</p>';
			dom2 += '</li>';
			dom2 += '<li>';
			dom2 += '<p>'+data.smallItem[j].xj+'</p>';
			dom2 += '<p>'+data.smallItem[j].xjZs+'</p>';
			dom2 += '</li>';
			dom2 += '<li>';
			dom2 += '<p>'+data.smallItem[j].tx+'</p>';
			dom2 += '<p>'+data.smallItem[j].txZs+'</p>';
			dom2 += '</li>';
			dom2 += '</ul>';
			dom2 += '</div>';
			dom2 += '</div>';
		}
		$('#products .my_products .my_right').append(dom2);

	}
 products(
	 {
		 item:[{
			 name:'灵活短期',
			 nameZs:'1-3个月期限',
			 yytb:'预约投标',
			 ckgd:'查看更多',
			 bgimg:"./image/bg1.png"
		 },{
			 name:'中期稳健',
			 nameZs:'4-9个月期限',
			 yytb:'预约投标',
			 ckgd:'查看更多',
			 bgimg:"./image/bg2.png"
		 },
			 {
				 name:'长期省心',
				 nameZs:'10个月以上期限',
				 yytb:'预约投标',
				 ckgd:'查看更多',
				 bgimg:'./image/bg3.png'
			 },{
				 name:'微转让',
				 nameZs:'经常关注 会有惊喜',
				 yytb:'预约投标',
				 ckgd:'查看更多',
				 bgimg:'./image/bg4.png'
			 }
		 ],
		 smallItem:[{
			 name:'xxxxxx',
			 plb:'8.5%',
			 pls:'预测年化收益',
			 t:'105天',
			 tZs:'借款期限',
			 cj:'筹集金额（元）',
			 cjZs:'30万',
			 xj:'产品星级',
			 xjZs:'xxxxx',
			 tx:'投资进度',
			 txZs:'--------'
		 },
			 {
				 name:'xxxxxx',
				 plb:'8.5%',
				 pls:'预测年化收益',
				 t:'105天',
				 tZs:'借款期限',
				 cj:'筹集金额（元）',
				 cjZs:'30万',
				 xj:'产品星级',
				 xjZs:'xxxxx',
				 tx:'投资进度',
				 txZs:'--------'},
			 {
				 name:'xxxxxx',
				 plb:'8.5%',
				 pls:'预测年化收益',
				 t:'105天',
				 tZs:'借款期限',
				 cj:'筹集金额（元）',
				 cjZs:'30万',
				 xj:'产品星级',
				 xjZs:'xxxxx',
				 tx:'投资进度',
				 txZs:'--------'
			 }]
	 }
 );


})();
