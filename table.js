function set_color() {
    document.getElementById("tb11").style.background="red";
}

function set_time() {
    var myDate = new Date();
    var year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    var month = myDate.getMonth();       //获取当前月份(0-11,0代表1月)
    var day = myDate.getDate();        //获取当前日(1-31)
    document.getElementById("tb12").innerHTML = year + "-"+ (month + 1) + "-" + day;
}

function set_add() {
    var row = document.getElementById("tb21").parentNode.parentNode;
    var newrow = document.createElement("tr");
    row.insertBefore(newrow,document.getElementById("tb21").parentNode.nextSibling);
}

function set_delete() {
    var row = document.getElementById("tb21").parentNode;
    row.remove();
}

function get_position(event) {
    var x = event.clientX;
    var  y = event.clientY;
    document.getElementById("tb31").innerHTML = "(" + x + "," + y + ")";
}

function open_newpage() {
    window.open("http://www.taobao.com");
}

// var tdlist = document.querySelectorAll('td');
// for(i = 0;i<tdlist.length;i++) {
//     var item = tdlist[i];
//     item.addEventListener('click',showMes);
// }
//
// function showMes(e) {
//     var item = e.target;
//     console.log(item.innerHTML);
// }