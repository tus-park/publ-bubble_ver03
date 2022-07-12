// JavaScript Document
   $(document).ready(function () {
	     var timeonoff; //자동기능 변수
		 var colcnt=true; // true=>왼쪽  false=>오른쪽

	     $('.leftBtn').click(function () {  //왼쪽 버튼을 클릭시
			clearInterval(timeonoff );
			colcnt=false;
             $('.column li').last().prependTo('.column ul');
			 //마지막번째 li를 가장 처음으로 이동 시킨다.

         });
		 $('.RightBtn').click(function () {  //오른쪽 버튼을 클릭시
			clearInterval(timeonoff );
			colcnt=true;
             $('.column li').first().appendTo('.column ul');
			  //첫번째 li를 가장 마지막으로 이동 시킨다.
         });

		 timeonoff =  setInterval(function () {
			   if(colcnt==true){
				   $('.columnx li').first().appendTo('.column ul');
			   }else{
				   $('.column li').last().prependTo('.column ul');
			   }
            }, 4000);

//column tab end


//activitygallery start
   var timeonoff; //자동기능 변수
   var actcnt=true; // true=>왼쪽  false=>오른쪽

     $('.prev').click(function () {  //왼쪽 버튼을 클릭시
    clearInterval(timeonoff );
    actcnt=false;
            $('.slider li').last().prependTo('.slider ul');
      //첫번째 li를 가장 마지막으로 이동 시킨다.
        });
   $('.next').click(function () {  //오른쪽 버튼을 클릭시
    clearInterval(timeonoff );
    actcnt=true;
            $('.slider li').first().appendTo('.slider ul');
     //마지막번째 li를 가장 처음으로 이동 시킨다.
        });


         });
