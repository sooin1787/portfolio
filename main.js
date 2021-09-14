$(function(){
////////////////start///////////////////
$("#myweb").fullpage({
    anchors:['m01', 'm02','m03','m04','m05','m06','m07','m09'],
	//navigation: true,
    afterLoad: function(origin, destination, direction){
        //console.log(destination.index)
        var idx=destination.index;
        console.log(idx)
        $(".section").eq(idx).addClass("on").siblings().removeClass("on");
        $("nav li").eq(idx).addClass("on").siblings().removeClass("on");
    },
});





$("#intro").YTPlayer({
    containment:'.m01',
    autoPlay:true,
    mute:true,
    startAt:0,
    showControls: false,
    playOnlyIfVisible: true,
    //realfullscreen: true,
    //anchor: 'center,center',
    //optimizeDisplay: false,
    //ratio: 'auto',
    //abundance: 0,
    useOnMobile: true,
    startAt:165,
});








//영상
$("#portfolio01").YTPlayer({
    containment:'.portfolio01',
    autoPlay:true,
    mute:true,
    startAt:0,
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay: false,
});

$(".m02 .xi-pause-circle-o").on("click", function(){
    $("#portfolio01").YTPPause();
});



// $(".m02 .xi-volume-up").on("click", function(){
//     $("#portfolio01").YTPUnmute();
// });


$(".m02 .xi-volume-up").on("click", function(){
    $("#portfolio01").YTPToggleVolume();
});










//영상
$("#portfolio02").YTPlayer({
    containment:'.portfolio02',
    autoPlay:true,
    mute:true,
    startAt:0,
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay: false,
});

$(".m03 .xi-pause-circle-o").on("click", function(){
    $("#portfolio02").YTPPause();
});


$("#portfolio02").YTPlayer({
    containment:'.portfolio02',
    autoPlay:true,
    mute:true,
    startAt:0,
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay: false,
});

$(".m03 .xi-play-circle-o").on("click", function(){
    $("#portfolio02").YTPPlay();
});


$(".m03 .xi-volume-up").on("click", function(){
    $("#portfolio02").YTPToggleVolume();
});



//영상
$("#portfolio03").YTPlayer({
    containment:'.portfolio03',
    autoPlay:true,
    mute:true,
    startAt:0,
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay: false,
});

$(".m04 .xi-pause-circle-o").on("click", function(){
    $("#portfolio03").YTPPause();
});


$("#portfolio03").YTPlayer({
    containment:'.portfolio03',
    autoPlay:true,
    mute:true,
    startAt:0,
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay: false,
});

$(".m04 .xi-play-circle-o").on("click", function(){
    $("#portfolio03").YTPPlay();
});


$(".m04 .xi-volume-up").on("click", function(){
    $("#portfolio03").YTPToggleVolume();
});





//영상
$("#portfolio04").YTPlayer({
    containment:'.portfolio04',
    autoPlay:true,
    mute:true,
    startAt:0,
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay: false,
});

$(".m05 .xi-pause-circle-o").on("click", function(){
    $("#portfolio04").YTPPause();
});


$("#portfolio04").YTPlayer({
    containment:'.portfolio04',
    autoPlay:true,
    mute:true,
    startAt:0,
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay: false,
});

$(".m05 .xi-play-circle-o").on("click", function(){
    $("#portfolio04").YTPPlay();
});


$(".m05 .xi-volume-up").on("click", function(){
    $("#portfolio04").YTPToggleVolume();
});




//web
$("#webbg").YTPlayer({
    containment:'.m06',
    autoPlay:true,
    mute:true,
    startAt:0,
    showControls: false,
    playOnlyIfVisible: true,
    //realfullscreen: true,
    //anchor: 'center,center',
    //optimizeDisplay: false,
    //ratio: 'auto',
    //abundance: 0,
    useOnMobile: true,
    startAt:6,
    cc_load_policy:false,
});









//photo_slider
$(".photo_slider").slick({
    arrows: false,
    dots:true,
    slidesToShow: 3,
    autoplay: 4000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
});


$(".m07 i.xi-angle-left").on("click", function(){
    $(".photo_slider").slick("slickPrev");
});

$(".m07 i.xi-angle-right").on("click", function(){
    $(".photo_slider").slick("slickNext");
});




//full open
$("#header i, .m09 img").on("click",function(){
    $("#full").addClass("on")
});

$("#full i,#full a").on("click",function(){
    $("#full").removeClass("on")
});













///////////////end////////////////////
});