// JavaScript Document

$(document).ready(function() {
    var timeonoff; // 타이머 동작/중지
    var imageCount=7;  //이미지 개수 ***
    var cnt=1; // 이미지 카운트 1 2 3 4 5 1 2 3 4 5....
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때

    $('.btn1').css('background','url(images/onvbtn1.png)no-repeat');  //첫번째 불켜
    $('.btn1').css('background-size','cover');
    $('.gallery .link1').fadeIn('slow'); //첫번째 이미지만 보여~

    function moveg(){
      cnt++;  //카운트 12345  12345 ...

     for(var i=1;i<=imageCount;i++){  //모든 이미지를 안보이게 한다.
            $('.gallery .link'+i).hide();
     }
     $('.gallery .link'+cnt).fadeIn('slow'); //해당 이미지만 보여라

     for(var i=1;i<=imageCount;i++){  // 모든 버튼 불꺼..
          $('.btn'+i).css('background','url(images/vbtn'+i+'.png)no-repeat');
          $('.btn'+i).css('background-size','cover');
      }
      $('.btn'+cnt).css('background','url(images/onvbtn'+cnt+'.png)');
      $('.btn'+cnt).css('background-size','cover');
	    //해당 버튼만 불켜~~
       if(cnt==imageCount)cnt=0; //카운트 초기화
     }

    timeonoff= setInterval( moveg , 4000); //4초마다 moveg()함수 호출

  $('.mbutton').click(function(event){ //각 버튼 클릭시
	var $target=$(event.target);  //클릭한 해당 버튼을 $target으로..
     clearInterval(timeonoff); //타이머 중지

	for(var i=1;i<=imageCount;i++){  //모든 이미지를 안보이게 한다.
	      $('.gallery .link'+i).hide();
    }

	if($target.is('.btn1')){  //각 버튼 클릭시 해당 이미지 번호를 맞춘다.***
    	   cnt=1;
	}else if($target.is('.btn2')){
    	   cnt=2;
	}else if($target.is('.btn3')){
    	   cnt=3;
	}else if($target.is('.btn4')){
    	   cnt=4;
	}else if($target.is('.btn5')){
    	   cnt=5;
	}else if($target.is('.btn6')){
    	   cnt=6;
	}else if($target.is('.btn7')){
    	   cnt=7;
	}
	$('.gallery .link'+cnt).fadeIn('slow'); //해당 이미지만 보여라

	for(var i=1;i<=imageCount;i++){ //모든 버튼 불꺼
		$('.btn'+i).css('background','url(images/vbtn'+i+'.png)no-repeat');
    $('.btn'+i).css('background','cover');
	}
     $('.btn'+cnt).css('background','url(images/onvbtn'+cnt+'.png)no-repeat');
     $('.btn'+cnt).css('background','cover');
	   //클릭한 버튼만 불켜~~
     if(cnt==imageCount)cnt=0;  // 이미지 카운트 초기화
     timeonoff= setInterval( moveg , 4000); //타이머 재 동작

	  if(onoff==false){
		 onoff=true;
		 $('.ps').css('background','url(images/stop.png)no-repeat; background-size: cover;');
	 }

    });


	  //겔러리에 마우스 오버/아웃시 타이머 동작/중지
  $('.gallery').hover(function(){
	       clearInterval(timeonoff);       //타이머를 멈춤
   } , function(){
		   timeonoff= setInterval( moveg , 4000);      //타이머를 동작
  });

  //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){
       if(onoff==true){
	       clearInterval(timeonoff);   // stop버튼 클릭시
		   $(this).css('background','url(images/play.png)no-repeat; background-size: cover;');
           onoff=false;
	   }else{
		  timeonoff= setInterval( moveg , 4000); //play버튼 클릭시
		   $(this).css('background','url(images/stop.png)no-repeat; background-size: cover;');
		   onoff=true;
	   }
  });


});
