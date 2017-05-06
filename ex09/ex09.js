var map = new BMap.Map("container");// 创建地图实例
var point = new BMap.Point(120.152385, 30.241183);  // 创建点坐标
map.centerAndZoom(point, 15);// 初始化地图，设置中心点坐标和地图级别
map.enableScrollWheelZoom();//在地图中使用鼠标滚轮控制缩放
map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
map.setCurrentCity("杭州");
var marker = new BMap.Marker(point);// 创建标注
map.addOverlay(marker);

var local = new BMap.LocalSearch(map, {
    renderOptions: {
        map: map,
        panel: "results",
        autoViewport: true
    }
});
local.searchNearby("宾馆", "西湖风景区");

var ways = [];
var transit = new BMap.TransitRoute(map, {
    renderOptions: {
        map: map,
        panel:"way"
    }
});
local.setMarkersSetCallback(function(position) {
    for (var i = 0; i < position.length; i++) {
        ways[i] = position[i].marker;
        position[i].marker.addEventListener("click", function(e) {
            transit.search("杭州师范大学仓前新校区", this.z.title);
            transit.clearResults();
        })
    }
});

var buildings = {list:[
    {
        opts : {
            width: 250,
            height: 200,
            title:'杭州师范大学仓前新校区',
        },
        marker:null,
        name:'一鸣真鲜奶吧',
        position: {
            lng: 120.019218,
            lat: 30.296381
        },
        pic:'img/01.jpg'
    },
    {
        opts : {
            width: 250,
            height: 200,
            title:'杭州师范大学仓前新校区',
        },
        marker:null,
        name:'篮球场',
        position: {
            lng: 120.012375,
            lat: 30.296314
        },
        pic:'img/02.jpg'
    },
    {
        opts : {
            width: 250,
            height: 200,
            title:'杭州师范大学仓前新校区',
        },
        marker:null,
        name:'体育场',
        position: {
            lng: 120.014369,
            lat: 30.295113
        },
        pic:'img/03.jpg'
    },
    {
        opts : {
            width: 250,
            height: 200,
            title:'杭州师范大学仓前新校区',
        },
        marker:null,
        name:'阿里巴巴商学院',
        position: {
            lng: 120.020083,
            lat: 30.294833
        },
        pic:'img/04.jpg'
    },
    {
        opts : {
            width: 250,
            height: 200,
            title:'杭州师范大学仓前新校区',
        },
        marker:null,
        name:'恕园7号楼',
        position: {
            lng: 120.019058,
            lat: 30.295222
        },
        pic:'img/05.jpg'
    },
    {
        opts : {
            width: 250,
            height: 200,
            title:'杭州师范大学仓前新校区',
        },
        marker:null,
        name:'博文印象',
        position: {
            lng: 120.016792,
            lat: 30.293668
        },
        pic:'img/06.jpg'
    },
    {
        opts : {
            width: 250,
            height: 200,
            title:'杭州师范大学仓前新校区',
        },
        marker:null,
        name:'丰子恺研究中心',
        position: {
            lng: 120.015373,
            lat: 30.297722
        },
        pic:'img/07.jpg'
    },
    {
        opts : {
            width: 250,
            height: 200,
            title:'杭州师范大学仓前新校区',
        },
        marker:null,
        name:'超市',
        position: {
            lng: 120.017026,
            lat: 30.295337
        },
        pic:'img/08.jpg'
    },
]};

var list = buildings.list;
for(var i = 0;i < list.length;i++){
    list[i].marker = new BMap.Marker(new BMap.Point(list[i].position.lng, list[i].position.lat));
    map.addOverlay(list[i].marker);
    list[i].marker.id = i;
    list[i].marker.addEventListener('click',function(e){
        var image='<img src="'+list[this.id].pic+'" width="100%" height="150"/>'+list[this.id].name;
        var infoWindow = new BMap.InfoWindow(image, list[this.id].opts);
        var local = new BMap.Point(e.point.lng, e.point.lat);
        map.openInfoWindow(infoWindow, local);
    })
}