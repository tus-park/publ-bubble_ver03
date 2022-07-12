// JavaScript Document

$(document).ready(function(){
  var tabcnt=3; //탭 메뉴 개수 ***
  $('.tabs .contlist:eq(0)').show(); // 첫번째 탭메뉴의 콘텐츠만 보여라 (eq:컨텐츠 순서 - 0 1 2 3 순)
  $('.tabs .tab1').css('background','url(images/content2/tab1on.png)no-repeat');
     //첫번째 탭메뉴 활성화

  $('.tabs .tab').each(function (index) { //각각의 탭메뉴.. (0 1 2)
    $(this).click(function(){    // 각각의 탭메뉴를 클릭하면.. 0 1 2

	  $(".tabs .contlist").hide(); //모든 탭메뉴의 콘텐츠를 안보이게 해라
	  $(".tabs .contlist:eq("+index+")").show();
	         //클릭한 해당 메뉴의 콘텐츠만 보여라

	  for(var i=1;i<=tabcnt;i++){  // 1 2 3  모든 탭메뉴를 비활성화 시켜라
           $('.tab'+i).css('background','url(images/content2/tab'+i+'.png)no-repeat');
      }
      $(this).css('background','url(images/content2/tab'+(index+1)+'on.png)no-repeat');
	  //클릭한 탭메뉴만 활성화 시켜라~~

   });
  });
});
