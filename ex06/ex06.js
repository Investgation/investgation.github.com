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
                //toggleClass():如果元素有这个类名，它将补移除；反之，如果元素没有这个类名，那么将加上这个类名
            }
        });
    });

    //2.页面的滑动门技术，即点击上方导航按钮，将按钮背景颜色设置为灰色，并且切换下方内容.
    $(".ui-box").css({"text-align":"center","line-height":"300px","font-size":"100px","color":"#616161"});
    //设定数字样式
    $(".ui-block-rectangle").click(function () {
        $(".ui-block-rectangle").removeClass("back");
        $(this).addClass("back");
        //点击另一个按钮式原来的按钮背景色变为白色，当前点击的按钮背景色变为灰色
        $(".ui-box").fadeIn(".add");
        $(".ui-box").eq($(this).index()).fadeOut(".add");
    })
    //通过fadeIn()和fadeOut()函数来改变add类的淡入淡出，从而调整元素是否被隐藏
    $("#fitem").click(function () {
        $(".ui-box").text("1");
    });
    $("#sitem").click(function () {
        $(".ui-box").text("2");
    });
    $("#titem").click(function () {
        $(".ui-box").text("3");
    });
    //在不同的页面添加对应的数字

    //3.数据管理操作
    var number = 3;
    $(".ui-cell-del").click(function () {
        var count = $(".ui-cell-num").length;
        $(this).parent().remove();
        number--;
        for(var i = 0;i < count;i++)
            $(".ui-cell-num").eq(i).text(i + 1);
    })
    //使原有的三个元素实现删除行并重新排序
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
        //重新排序函数
    }
    function addmain() {//添加按钮功能函数
        var main = $("<div></div>").addClass("ui-main");
        var num = $("<div></div>").addClass("ui-cell-num");//数字
        var mid = $("<div></div>").addClass("ui-cell-mid");
        var del = $("<div></div>").addClass("ui-cell-del").text("delete");//删除按钮
        main.append(num);//添加数字
        main.append(mid);//添加文本框
        main.append(del);//添加删除按钮
        $(".ui-cell-button").before(main);
        number++;
        renumber();//重新排序
        del.click(function () {//使新添加的行也实现删除行并重新排序
            $(this).parent().remove();
            renumber();
        })
    }
    $(".ui-cell-button").click(function () {//添加按钮
        number++;
        addmain();
    })
});
