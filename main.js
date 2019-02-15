
$(document).ready(function(){
    let $menuItem = $('#menu ul li a')
	let totWidth=0;
	let positions = new Array();
	
	$('#slides .slide').each(function(i){
		positions[i]= totWidth;
		totWidth += $(this).width();
			if(!$(this).width())
		{
			alert("Please, fill in width & height for all your images!");
			return false;
		}
	});
	$('#slides').width(totWidth);
	$menuItem.click(function(e,keepScroll){
			$('li.menuItem').removeClass('act');
			$(this).parent().addClass('act');
			
			var pos = $(this).parent().prevAll('.menuItem').length;
			// console.log(pos)
            $('#slides').stop().animate({marginLeft:-positions[pos]+'px'},618);
			e.preventDefault();
			if(!keepScroll) clearInterval(itvl);
	});
	$('#menu ul li.menuItem:first').addClass('act');

	/*****	Enabling auto-advance. */
	 
	let current=1;
	function autoAdvance()
	{
		if(current==-1) return false;
        $menuItem.eq(current%$menuItem.length).trigger('click',[true]);	
		current++;
	}
	var changeEvery = 10;
	var itvl = setInterval(function(){autoAdvance()},changeEvery*1000);
});