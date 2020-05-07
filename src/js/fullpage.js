var fullpage = document.getElementsByClassName('fullpage');
var maxPage = fullpage.length;
var page = 0; // 现在显示的页面
var lastpage = maxPage - 1; //最后一个页面的数组下标
var a = true; // 是否监听事件
var cent = 0; //top百分比


/* 滑入滑出效果 */
function up() {
    var doUp = setInterval(function () {
        cent -= 1;
        for (var i = 0; i < maxPage; i++) {
            fullpage[i].style.top = cent + '%';
        }
        if (cent % 100 === 0) {
            clearInterval(doUp);
        }
    }, 6);
}
function down() {
    var doDown = setInterval(function () {
        cent += 1;
        for (var i = 0; i < maxPage; i++) {
            fullpage[i].style.top = cent + '%';
        }
        if (cent % 100 === 0) {
            clearInterval(doDown);
        }
    }, 6);
}

windowAddMouseWheel();
windowAddKey();

/* 监听页面滚动 */
function windowAddMouseWheel() {
    var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {     //除了火狐的其他浏览器
            e.wheelDelta > 0 ? judge(1) : judge(-1);
        } else if (e.detail) {      //火狐浏览器
            e.detail > 0 ? judge(1) : judge(-1);
        }
    }

    // 给页面绑定滚动事件
    if (document.addEventListener) {        //火狐浏览器使用DOMMouseScroll绑定
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }

    window.onmousewheel = document.onmousewheel = scrollFunc;       //其他浏览器
}

/* 监听键盘事件 */
function windowAddKey() {
    document.onkeydown = function (e) {
        var keyNum = window.event ? e.keyCode : e.which;

        if (keyNum === 38) {    //向上滚动
            judge(1)
        } else if (keyNum === 40) {     //向下滚动
            judge(-1)
        }
    }
}

/* 判断 */
function judge(e) {     //e === 1 up; e === -1 down;
    a ? e === 1 ? doMove(1) : doMove(-1) : false ;
    a = false
}

/* 滚动执行 */
function doMove(e) {
    if (e > 0) {        //向上滚动
        if (cent < 0) {
            down()
        }
    } else {        //向下滚动
        if (cent > -100 * lastpage) {
           up()
       }
    }
    setTimeout(function () {
        a = true;
        clearTimeout();
    }, 900)
}
