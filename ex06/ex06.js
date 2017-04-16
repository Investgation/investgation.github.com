$(document).ready(function () {

    //1.点击图片列表中的某个元素，该图片放大显示.
    // $("#elements").hide();
    // $("li").click(function () {
    //     $("#elements").show(function () {
    //         $(document).click(function () {
    //             $("#elements").hide();
    //         });
    //     });
    // });
    $(function () {
        $(document).click(function (e) {
            if ($(".ui-img-show").length || e.target.src) {
                $("#show").attr("src",e.target.src);
                $("#show").toggleClass("ui-img-show");
                $("#show").toggleClass("ui-img");
                $(".ui-element").toggleClass("");
            }
        });
    });

    //2.页面的滑动门技术，即点击上方导航按钮，将按钮背景颜色设置为灰色，并且切换下方内容.
    $(".ui-box").css({"text-align":"center","line-height":"300px","font-size":"100px","color":"#616161"});
    $(".ui-block-rectangle").click(function () {
        $(".ui-block-rectangle").removeClass("back");
        $(this).addClass("back");
        $(".ui-box").fadeIn(".add");
        $(".ui-box").eq($(this).index()).fadeOut(".add");
    })
    $("#fitem").click(function () {
        $(".ui-box").text("1");
    });
    $("#sitem").click(function () {
        $(".ui-box").text("2");
    });
    $("#titem").click(function () {
        $(".ui-box").text("3");
    });

    //3.数据管理操作
    var number = 3;
    $(".ui-cell-del").click(function () {
        var count = $(".ui-cell-num").length;
        $(this).parent().remove();
        number--;
        for(var i = 0;i < count;i++)
            $(".ui-cell-num").eq(i).text(i + 1);
    })
    function renumber() {
        // $(".ui-cell-num").each(function(index) {
        //     $(this).children(":first").html(index);
        // });

        // var count = $(".ui-cell-num").length;
        // for(var i = 0;i < count;i++)
        //     $('.ui-cell-mid-num').eq(i).text(i + 1);

        $('.ui-cell-num').each(function(index, n) {
            $(n).text(index + 1);
        });
    }
    function addmain() {
        var main = $("<div></div>").addClass("ui-main");
        var num = $("<div></div>").addClass("ui-cell-num");
        var mid = $("<div></div>").addClass("ui-cell-mid");
        var del = $("<div></div>").addClass("ui-cell-del").text("delete");
        main.append(num);
        main.append(mid);
        main.append(del);
        $(".ui-cell-button").before(main);
        number++;
        renumber();
        del.click(function () {
            $(this).parent().remove();
            renumber();
        })
    }
    $(".ui-cell-button").click(function () {
        number++;
        addmain();
    })
});
