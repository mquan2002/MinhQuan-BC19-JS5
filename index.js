// Bài 1
let S = 1;
let n = 1;
document.getElementById("submit").onclick = function (){
document.getElementById("submit").innerHTML=`Số nguyên dương nhỏ nhất : ${n}`
}
while (S < 10000){
    n++;
    S = S + n;
}
// Bài 2 
document.getElementById("total").onclick = function () {
    let Tong = 0;
    let Tich = 1;
    let type1El = document.getElementById("type1").value;
    let type2El = document.getElementById("type2").value;

    for(let i = 1; i <= type2El; i++){
        Tich = Tich * type1El;
        Tong = Tong + Tich;
    }

    document.getElementById("total").innerHTML=`Kết quả là : ${Tong}`
}
// Bài 3
document.getElementById("final").onclick = function () {
    let type3El = document.getElementById("type3").value;
    let a = 1;
    for (let i = 1; i <= type3El; i++){
        a *= i;
        
    }
    document.getElementById("final").innerHTML= `Giai thừa của ${type3El} là : ${a}`
}
// Bài 4
document.getElementById('btnDiv').onclick = function () {
    for (let index = 1; index <= 10; index++) {
        let div = document.createElement('div');
        div.className = 'alert bg-primary';
        document.getElementById('content').appendChild(div);
        if (index % 2 === 0) {
            div.className = 'alert bg-danger';
        }
    }
}

