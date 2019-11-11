$(function(){
    $("#js-menu").on("click",function(){
        $("#js-menu")
        .siblings(".ss")
        .slideToggle();
    });

    // $(function(){
    //     $(document).snowfall();
    // })
    $(document).snowfall({
        flakeCount:50,
        minSize  : 10,    // 雪の最小サイズ
        maxSize  : 20,    // 雪の最大サイズ
        minSpeed : 1,    // 雪の最低速度
        maxSpeed : 3,    // 雪の最高速度
        round    : true, // 雪の形を丸くする
        // shadow   : true, // 雪に影をつける
        flakeColor : "pink", // 雪の色を指定
        image :"https://lib.tree-web.net/image/sakura_hanabira3.png"
    });

    // $("#touch").on("click",function(){
    //     $(".fade").fadeOut(1000);
    // })

    // $("#touch1").on("click",function(){
    //     $(".fade").fadeIn(1000);
    // })


    // $(document).scroll(function (){
    //     $('.fade').each(function(){
    //         let elemPos = $(this).offset().top,
    //             scroll = $(document).scrollTop(),
    //             windowHeight = $(document).height();
    //         if (scroll > elemPos - windowHeight + 100){
    //             $(this).addClass('scrollin');
    //             }
    //         });
    //     });


        $(window).scroll(function (){
            $('.fade').each(function(){
                let elemPos = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();
                if (scroll > elemPos - windowHeight + 100){
                    $(this).addClass('scrollin');
                    }
                });
            });



            // $(".js-scroll").on("click",function(){


            //     let target =$(".jj").offset().top;
            //     $("html,body").animate({scrollTop: target},1000)
            // })




})
$(function(){
    $(".ff").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    });




    $(".hat").on("click", function () {


        let target=$("#hello").offset().top;
        $("html,body").animate({ scrollTop: target }, 2000)
    });



    $(".god").on("click",function(){
        console.log("クリック");
        let hi=$("#good").offset().top;
        $("html,body").animate({ scrollTop: hi }, 2000)
    });



    $(".kot").on("click",function(){
        let yes=$("#morning").offset().top;
        $("html,body").animate({ scrollTop: yes }, 2000)

    });

    $(".no").on("click",function(){
        let bot=$("#noon").offset().top;
        $("html,body").animate({ scrollTop: bot }, 2000)
    });


    $(".roller").on("click",function(){
        let yamanashi =$(".jj").offset().top;
        $("html,body").animate({scrollTop:yamanashi},2000)
    });

    $("#aaa").on("click",function(){
        let yamanashi =$(".jj").offset().top;
        $("html,body").animate({scrollTop:yamanashi},2000)
    });



});








