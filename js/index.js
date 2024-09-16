$(document).ready(function() {
    var wid = $(window).width();



    //menu
    // var menus = $("#menu li").length;
     //for (var i = 0; i < menus; i++) {
      //   var a = "page" + (i + 1);
     //    var b = "#page" + (i + 1);
      //   $("#menu li").eq(i).attr("data-menuanchor", a);
     //    $("#menu li").eq(i).children("a").attr("href", b);
    // }
    
    //footer va menu
    if (wid < 913){
        $(document).click(function() {
            if($(".foot").hasClass("active")){
                $(".foot").removeClass("active");
            }
            $(".hanbager").removeClass("open");
            $(".head-right").css("left", "100%");
        });
        $(".hanbager").click(function() {
            event.stopPropagation();
            if ($(this).hasClass("open")) {
                $(this).removeClass("open");
                $(".head-right").css("left", "100%");
            } else {
                $(this).addClass("open");
                $(".head-right").css("left", "50%");
            }
        });
    }


});


