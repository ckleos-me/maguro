    $('#page-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //スクロールした際の動きを関数でまとめる
    function PageTopAnime() {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) { //上から200pxスクロールしたら
            $('#page-top').addClass('show'); //#page-topについているUpMoveというクラス名を付与
        } else {
            $('#page-top').removeClass('show'); //UpMoveというクラス名を除き
        }
    }
    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
        PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
    });


    $(".js-support-title").click(function () {
        $(this).next().toggle("slow");
    });


    $(".openbtn1").click(function () {
        $(this).toggleClass('active');
        $(".header__inner__nav").toggleClass('active');
    });

    function aboutMenu() {
        $('#about-child-menu').toggleClass('active');
        $('#online-child-menu').removeClass('active');
        $('#company-child-menu').removeClass('active');
    }

    function onlineMenu() {
        $('#online-child-menu').toggleClass('active');
        $('#about-child-menu').removeClass('active');
        $('#company-child-menu').removeClass('active');
    }

    function companyMenu() {
        $('#company-child-menu').toggleClass('active');
        $('#about-child-menu').removeClass('active');
        $('#online-child-menu').removeClass('active');
    }
