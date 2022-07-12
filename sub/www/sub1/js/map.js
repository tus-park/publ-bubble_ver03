// JavaScript Document

 function initialize() {
  var myLatlng = new google.maps.LatLng(37.576006, 127.024721);
  var myOptions = {
   zoom: 15,
   center: myLatlng

  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  var marker = new google.maps.Marker({
   position: myLatlng,
   map: map,
   title:"교보교육재단"
  });


  var infowindow = new google.maps.InfoWindow({
   content: "서울시 동대문구 왕산로 10 교보재단빌딩 9층"
  });

  infowindow.open(map,marker);
 }


 window.onload=function(){
  initialize();
 }
