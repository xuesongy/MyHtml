var today = new Date();
var b = today.getHours();
var c;

if(b < 5 || b > 18){
    c = "Good Evening ";
}else if(b > 12){
    c = "Good Afternoon";
}else if(b > 0){
    c = "Good Morning";
}else{
    c = "Hello";
}

document.write("<h4>" + c + "</h4>" + "");
document.write("<h4>" + "Welcome!!!" + "</h4>");
// https://hifi218.com/

