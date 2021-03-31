// xem bên dưới
console.log("Em yêu");
// xuất hiện cho user coi 
// alert("cybersoft");
// biến số 
// học javascript es5 thuần 
var name = "cybersoft";
var fullName = "Lê Trung Nghị";
console.log(fullName);

var number = 12;
console.log(number);
var status = true;
var lop = "fe52";
console.log(lop);

var address;
console.log(address);
//hoisting mặc định đưa lên đầu undifined
// var numberStudent;
console.log("numberStudent:", numberStudent)
var numberStudent = 1800;

// hang so 
const PI = 3.14;
console.log(PI);

//câu điều kiện
// 3 dấu bằng sosanh luon kiểu dữ liệu 
var dk = 1;
if (dk == 1) {
    console.log("dung");
} else {
    console.log("sai");
}

// dk ? "dung" : "Sai"
dk === "1" ? console.log("Dúng") : console.log("sai");
switch (3) {
    case 0:
        console.log("Số không");
        break;
    case 1:
        console.log("Số một");
        break;
    case 2:
        console.log("Số hai");
        break;

    default:
        console.log("default");
        break;
}

var A = true;
var B = false;
var kq = A && B;
console.log(kq);

// phủ định của null là true , phủ định của undifined là true luôn 
var E = null;
console.log(!E);


// array 
var listFriend = ["Nguyen","Nghị","vip"];

for(var i = 0 ; i<listFriend.length;i++){
    console.log(listFriend[i]);
}
listFriend.forEach(function(item,index) {
    console.log(index,item);
})

var num1 = 1;
var num2 = 2;
var num3 = 3;
var num4 = 4;
function tinhTong(a,b) {
    var sumab = a + b;
    console.log("sumab:",sumab);
    return sumab;
}
var a = tinhTong(num3,num4);
var b = tinhTong(num1,num2);
tinhTong(a,b);

function tinhDTB(a,b,c) {
    var diemTB = (a+b+c)/3;
    return diemTB;
}
function xepLoai(diemTB){
    if(diemTB>=8){
        console.log("Loại giỏi")
    }else if(diemTB>=5){
        console.log("Loại khá")
    }else{
        console.log("Loại yếu")
    }
}
var dtb = tinhDTB(7.9,7.9,7.9);
xepLoai(dtb);
var firstName = "buoi";
function demoHam(){
    var firstName = "nghị";
}
demoHam();


// DOM document object model 
var iptUserName = document.getElementById("txtUserName").value;
console.log("iptUserName",iptUserName);

var eleUserName = document.getElementById("txtUserName");
console.log("iptUserName",eleUserName);