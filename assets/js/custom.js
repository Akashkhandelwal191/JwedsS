$(function () {
    AOS.init(),
        setInterval(function () {
            var o, e, l, n, t, a, s;
            (n = Math.floor((l = (o = Date.parse((o = new Date("2 March 2024 23:59:00"))) / 1e3) - (e = Date.parse((e = new Date())) / 1e3)) / 86400)),
                (t = Math.floor((l - 86400 * n) / 3600)),
                (a = Math.floor((l - 86400 * n - 3600 * t) / 60)),
                (s = Math.floor(l - 86400 * n - 3600 * t - 60 * a)),
                t < "10" && (t = "0" + t),
                a < "10" && (a = "0" + a),
                s < "10" && (s = "0" + s),
                $("#adays").html(n),
                $("#ahours").html(t),
                $("#aminutes").html(a),
                $("#aseconds").html(s);
        }, 1e3),
        setInterval(function () {
            var o, e, l, n, t, a, s;
            (n = Math.floor((l = (o = Date.parse((o = new Date("08 December 2020 9:56:00 GMT+01:00"))) / 1e3) - (e = Date.parse((e = new Date())) / 1e3)) / 86400)),
                (t = Math.floor((l - 86400 * n) / 3600)),
                (a = Math.floor((l - 86400 * n - 3600 * t) / 60)),
                (s = Math.floor(l - 86400 * n - 3600 * t - 60 * a)),
                t < "10" && (t = "0" + t),
                a < "10" && (a = "0" + a),
                s < "10" && (s = "0" + s),
                $("#rdays").html(n),
                $("#rhours").html(t),
                $("#rminutes").html(a),
                $("#rseconds").html(s);
        }, 1e3),
        $(window).scroll(function () {
            250 < $(this).scrollTop() ? $(".scrollup").fadeIn() : $(".scrollup").fadeOut();
        }),
        $(".scrollup").click(function () {
            return $("html, body").animate({ scrollTop: 0 }, 300), !1;
        }),
        $(document).on("click", ".mob-toggle", function () {
            $(this).toggleClass("open"), $(".navmenu").toggleClass("open");
        }),
        $(".headerBtn a").click(function () {
            $(".mob-toggle").removeClass("open"), $(".navmenu").removeClass("open"), $("html, body").animate({ scrollTop: +$("#header").offset().top }, 1500);
        }),
        $(".introductionBtn a").click(function () {
            $(".mob-toggle").removeClass("open"), $(".navmenu").removeClass("open"), $("html, body").animate({ scrollTop: +$("#introduction").offset().top }, 1500);
        }),
        $(".coupleBtn a").click(function () {
            $(".mob-toggle").removeClass("open"), $(".navmenu").removeClass("open"), $("html, body").animate({ scrollTop: +$("#couple").offset().top }, 1500);
        }),
        $(".tilakBtn a").click(function () {
            $(".mob-toggle").removeClass("open"), $(".navmenu").removeClass("open"), $("html, body").animate({ scrollTop: +$("#tilak").offset().top }, 1500);
        }),
        $(".haldiBtn a").click(function () {
            $(".mob-toggle").removeClass("open"), $(".navmenu").removeClass("open"), $("html, body").animate({ scrollTop: +$("#haldi").offset().top }, 1500);
        }),
        $(".weddingBtn a").click(function () {
            $(".mob-toggle").removeClass("open"), $(".navmenu").removeClass("open"), $("html, body").animate({ scrollTop: +$("#wedding").offset().top }, 1500);
        }),
        $(".galleryBtn a").click(function () {
            $(".mob-toggle").removeClass("open"), $(".navmenu").removeClass("open"), $("html, body").animate({ scrollTop: +$("#gallery").offset().top }, 1500);
        });
});
