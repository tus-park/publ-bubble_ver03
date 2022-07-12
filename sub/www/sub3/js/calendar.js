$(document).ready(function () {
			var timeonoff; //자동기능 변수
		var cnt=true; // true=>왼쪽  false=>오른쪽

			$('.leftBtn').click(function () {  //왼쪽 버튼을 클릭시
		 clearInterval(timeonoff );
		 cnt=true;
						$('.calendar li').last().prependTo('.calendar ul');
			 //첫번째 li를 가장 마지막으로 이동 시킨다.
				});
		$('.RightBtn').click(function () {  //오른쪽 버튼을 클릭시
		 clearInterval(timeonoff );
		 cnt=false;
						$('.calendar li').first().appendTo('.calendar ul');
			//마지막번째 li를 가장 처음으로 이동 시킨다.
				});


	});
