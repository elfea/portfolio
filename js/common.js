$(document).ready(function(){

  //스크롤트리거
  $(window).scroll(function () {
    $('.ani_stop').each(function (i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object) {
            $(this).removeClass('ani_stop');
        }
        if (bottom_of_window < bottom_of_object) {
            $(this).addClass('ani_stop');
        }
    });
});


//상단고정
$(window).scroll(function () {
if ($(this).scrollTop() > 300) {
$("#header").addClass("fix");
} else {
$("#header").removeClass("fix");
}
});





$('.bi_rooms').hide();

$('.bi_btn').click(function(){
$('.bi_rooms').fadeIn();
});
$('.bi_close').click(function(){
$('.bi_rooms').fadeOut();
});


$('.G_layer').hide();

$('.G_close').click(function(){
$('.G_layer').fadeOut();
});



$('.LF_btn').click(function(){
$('.G_leaflet_layer').fadeIn();
});
$('.AI_btn').click(function(){
$('.G_AI_layer').fadeIn();
});
$('.I_btn').click(function(){
$('.G_ILLUST_layer').fadeIn();
});



new fullpage('#fullpage', {



// Navigation
anchors: ['m1', 'm2', 'm3', 'm4'],     // 섹션 내의 특정 슬라이드로 직접 이동, data-anchor사용
navigation: true,	// 작은 원으로 구성된 탐색 모음이 표시
navigationPosition: 'left',	// 탐색 모음이 표시될 위치 left, right
//navigationTooltips: ['Home', 'Project', 'About', 'Contact'],	// 탐색 모음 설명
showActiveTooltip: true,	// 지속적인 도구 설명을 표시 = ture 
slidesNavigation: true,	// 슬라이드 작은 원 표시
// Scrolling
autoScrolling: true,		// "자동" 스크롤을 사용할지 "일반" 스크롤을 사용할지 정의

// Design
responsiveWidth: 1280,		// 정의된 너비(픽셀) 아래에서 0일반 스크롤( )이 사용

});






});