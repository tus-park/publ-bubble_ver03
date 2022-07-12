// JavaScript Document

// mainNotice
$(document).ready(function () {
 var article = $('.mntc .marticle');  //모든 li
 //article.find('.a').slideUp(100);   //모든 답변을 닫아라

 $('.mntc .marticle .mtrigger').click(function(){  //각각의 질문을 클릭하면
 var myArticle = $(this).parents('.marticle'); //클릭한 질문의 부모 li태그

 if(myArticle.hasClass('hide')){ //클릭한 해당 li가 hide(class)상태냐??
     article.find('.ma').slideUp(100); //모든 li의 답변을 닫아라
       article.removeClass('show').addClass('hide'); //모든 li를 show=>hide

   myArticle.removeClass('hide').addClass('show'); // hide=>show
     myArticle.find('.ma').slideDown(100);    // 클릭한 li의 답변을 열어라
  } else {   //클릭한 해당 li가 show(class)상태냐??
    myArticle.removeClass('show').addClass('hide'); //show=>hide
    myArticle.find('.ma').slideUp(100);   //클릭한 li의 답변을 닫아라
 }
 });

 //모두 여닫기 추가
   $('.mall').toggle(function(){  //모두 여닫기 버튼 클릭시
     article.find('.ma').slideDown(100); //모든 li의 답변을 열어라
     article.removeClass('hide').addClass('show'); //hide=>show
   $(this).text('모두닫기▲');
 },function(){
     article.find('.ma').slideUp(100);  // 모든 답변을 닫아라
     article.removeClass('show').addClass('hide'); //show=>hide
   $(this).text('모두열기▼');
 });
});

//mainNotice end
// notice areaa
$(document).ready(function () {
 var article = $('.ntc .article');  //모든 li
 //article.find('.a').slideUp(100);   //모든 답변을 닫아라

 $('.ntc .article .trigger').click(function(){  //각각의 질문을 클릭하면
 var myArticle = $(this).parents('.article'); //클릭한 질문의 부모 li태그

 if(myArticle.hasClass('hide')){ //클릭한 해당 li가 hide(class)상태냐??
     article.find('.a').slideUp(100); //모든 li의 답변을 닫아라
       article.removeClass('show').addClass('hide'); //모든 li를 show=>hide

   myArticle.removeClass('hide').addClass('show'); // hide=>show
     myArticle.find('.a').slideDown(100);    // 클릭한 li의 답변을 열어라
  } else {   //클릭한 해당 li가 show(class)상태냐??
    myArticle.removeClass('show').addClass('hide'); //show=>hide
    myArticle.find('.a').slideUp(100);   //클릭한 li의 답변을 닫아라
 }
 });

 //모두 여닫기 추가
   $('.all').toggle(function(){  //모두 여닫기 버튼 클릭시
     article.find('.a').slideDown(100); //모든 li의 답변을 열어라
     article.removeClass('hide').addClass('show'); //hide=>show
   $(this).text('모두닫기▲');
 },function(){
     article.find('.a').slideUp(100);  // 모든 답변을 닫아라
     article.removeClass('show').addClass('hide'); //show=>hide
   $(this).text('모두열기▼');
 });
});
