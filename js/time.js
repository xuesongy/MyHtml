var day = new Date().getDay();
var x;
switch(day){
    case 0: x = "星期日"; break;
    case 1: x = "星期一"; break;
    case 2: x = "星期二"; break;
    case 3: x = "星期三"; break;
    case 4: x = "星期四"; break;
    case 5: x = "星期五"; break;
    case 6: x = "星期六"; break;
}
document.write("<h4>" + new Date().toLocaleDateString() + " " + x + "</h4>");
