var res=0;
var temp;
var op;
var i;
function calci(a){
    if(a==0 && res==0){
        res = 0;
        printRes();
    }
    if(document.getElementById("result").innerText == 0){
        res+=a;
        printRes();
    }
    else if(!isNaN(a)){
        res+= a.toString();
        printRes();
    }
    else if(a!='='){
        if(a == '.'){
            res+=a.toString();
            printRes();
        }
        else{
            op = a;
            temp = res;
            res = 0;
            printRes();
        }
    }
    else{
        res = parseFloat(res);
        temp = parseFloat(temp);
        switch(op){
            case '+':
                res = temp+res;
                printRes();
                break;
            case '-':
                res = temp-res;
                printRes();
                break;
            case '*':
                res = temp*res;
                printRes();
                break;
            case '/':
                res = temp/res;
                printRes();
                break;
        }
    }
}
function printRes(){
    document.getElementById("result").innerText = res;
}
function clearRes(){
    res=0;
    temp=0;
    printRes();
}