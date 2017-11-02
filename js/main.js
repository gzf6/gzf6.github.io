//汉堡菜单
function burg() {
    let d = document.getElementById("navi");
    if(d.className === "hidden") {
        d.className = "show";
    }else {
        d.className = "hidden";
    }
    return false;
}

//qq、微信、微博图标
function qq() {
    let qq = document.getElementById("qq");
    let weixin = document.getElementById("weixin");
    let weibo = document.getElementById("weibo");

    if(qq.className === "qq") {
        qq.className = "qqs";
    }else {
        qq.className = "qq";
    }

    if(weixin.className === "weixins") {
        weixin.className = "weixin";
    }
    if(weibo.className === "weibos") {
        weibo.className = "weibo";
    }

    return false;
}

function weixin() {
    let qq = document.getElementById("qq");
    let weixin = document.getElementById("weixin");
    let weibo = document.getElementById("weibo");


    if(weixin.className === "weixin") {
        weixin.className = "weixins";
    }else {
        weixin.className = "weixin";
    }

    if(qq.className === "qqs") {
        qq.className = "qq";
    }
    if(weibo.className === "weibos") {
        weibo.className = "weibo";
    }

    return false;
}

function weibo() {
    let qq = document.getElementById("qq");
    let weixin = document.getElementById("weixin");
    let weibo = document.getElementById("weibo");


    if(weibo.className === "weibo") {
        weibo.className = "weibos";
    }else {
        weibo.className = "weibo";
    }

    if(qq.className === "qqs") {
        qq.className = "qq";
    }
    if(weixin.className === "weixins") {
        weixin.className = "weixin";
    }

    return false;
}