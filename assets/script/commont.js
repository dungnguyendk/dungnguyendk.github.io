$(function(){
   
    $('body').on('click', '.sidebar-toggler', function (e) {
        var body = $('body');
        var sidebar = $('.page-sidebar');
        var sidebarMenu = $('.page-sidebar-menu');
        $(".sidebar-search", sidebar).removeClass("open");

        if (body.hasClass("page-sidebar-closed")) {
            body.removeClass("page-sidebar-closed");
            sidebarMenu.removeClass("page-sidebar-menu-closed");
            if (Cookies) {
                Cookies.set('sidebar_closed', '0');
            }
        } else {
            body.addClass("page-sidebar-closed");
            sidebarMenu.addClass("page-sidebar-menu-closed");
            if (body.hasClass("page-sidebar-fixed")) {
                sidebarMenu.trigger("mouseleave");
            }
            if (Cookies) {
                Cookies.set('sidebar_closed', '1');
            }
        }

        $(window).trigger('resize');
    });

    // Add DataTable
    $("#table_dashboard_1").DataTable();

    var handleGoTop = function () {
        var offset = 200;
        var duration = 500;

        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {  // ios supported
            $(window).bind("touchend touchcancel touchleave", function (e) {
                if ($(this).scrollTop() > offset) {
                    $('.scroll-to-top').fadeIn(duration);
                } else {
                    $('.scroll-to-top').fadeOut(duration);
                }
            });
        } else {  // general 
            $(window).scroll(function () {
                if ($(this).scrollTop() > offset) {
                    $('.scroll-to-top').fadeIn(duration);
                } else {
                    $('.scroll-to-top').fadeOut(duration);
                }
            });
        }

        $('.scroll-to-top').click(function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        });
    };

    handleGoTop();
});