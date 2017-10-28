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