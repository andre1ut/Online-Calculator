var btn1 = document.getElementById("1");
var btn2 = document.getElementById("2");
var btn3 = document.getElementById("3");
var btn4 = document.getElementById("4");
var btn5 = document.getElementById("5");
var btn6 = document.getElementById("6");
var btn7 = document.getElementById("7");
var btn8 = document.getElementById("8");
var btn9 = document.getElementById("9");
var btn0 = document.getElementById("0");
var btnC = document.getElementById("clear");
var btnBack = document.getElementById("back");
var btnDot = document.getElementById("dot");
var btnSign = document.getElementById("sign");
var btnFrac = document.getElementById("frac");
var btnPow2 = document.getElementById("pow2");
var btnRoot = document.getElementById("root");
var btnPow = document.getElementById("pow");
var btnE = document.getElementById("E");
var btnS = document.getElementById("slash");
var btnM = document.getElementById("mult");
var btnPlus = document.getElementById("plus");
var btnMinus = document.getElementById("minus");
var a, k;

function f() {
    a = input.value;
    input.value = '';
}

btn0.addEventListener('click', () => { input.value += 0 });
btn1.addEventListener('click', () => { input.value += 1 });
btn2.addEventListener('click', () => { input.value += 2 });
btn3.addEventListener('click', () => { input.value += 3 });
btn4.addEventListener('click', () => { input.value += 4 });
btn5.addEventListener('click', () => { input.value += 5 });
btn6.addEventListener('click', () => { input.value += 6 });
btn7.addEventListener('click', () => { input.value += 7 });
btn8.addEventListener('click', () => { input.value += 8 });
btn9.addEventListener('click', () => { input.value += 9 });
btnC.addEventListener('click', () => { input.value ='' });

btnDot.addEventListener('click', () => { 
    let a=0;

    for(let i=input.value.length-1;i>=0;i--){
        if(input.value[i] === '.') a++;
    }

    if(a === 0) input.value +='.';
});
btnBack.addEventListener('click', () => { 
    var arr =[];
    for(let i=0;i<input.value.length;i++){
        arr.push(input.value[i]);
    }
    arr.splice(arr.length-1,1);

    input.value='';

    for(let i=0;i<arr.length;i++){
        input.value+=arr[i];
    }
});
btnSign.addEventListener('click', () => {
    if(Number(input.value)>0){
       input.value = '-' + input.value; 
    }
    else if(Number(input.value)<0){
        var string='';

        for(let i=1;i<input.value.length;i++){
            string +=input.value[i];
        }

        input.value = string;
    }
})
btnFrac.addEventListener('click', () => {
    if(input.value[1] !== "/"){
        a = input.value;
        input.value = '1/' + input.value;
        k = 6;
    }
});
btnPow2.addEventListener('click', () => {
    if(input.value !== '' && input.value !== '.'){
        input.value = Number(input.value)**2;
    }
})
btnRoot.addEventListener('click', () => {
    input.value = Math.sqrt( Number(input.value) );
})
btnPow.addEventListener('click', () => {
    f();
    k = 1;
})
btnS.addEventListener('click', () => {
    f();
    k = 2;
})
btnM.addEventListener('click', () => {
    f();
    k = 3;
})
btnPlus.addEventListener('click', () => {
    f();
    k = 4;
})
btnMinus.addEventListener('click', () => {
    f();
    k = 5;
});

btnE.addEventListener('click', () => {
    switch(k) {
        case 1:
            input.value = a ** input.value;
            break;
        case 2:
            input.value = a / input.value;
            break;
        case 3:
            input.value = a * input.value;
            break;
        case 4:
            input.value = Number(a) + Number(input.value);
            break;
        case 5:
            input.value = Number(a) - Number(input.value);
            break;
        case 6:
            input.value = 1 / a;
            break;
    }
})