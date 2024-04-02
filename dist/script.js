// Sets password length
document.querySelector("#copy").style.color="aqua";

    var sliderValue=document.querySelector("#slider");
    document.querySelector("#pass-length").value=sliderValue.value;
    sliderValue.addEventListener('input',function(){
        document.querySelector("#finally").value= "";
        document.querySelector("#finally").placeholder= "PASSWORD";
        document.querySelector("#str").style.backgroundColor="white";   
        document.querySelector("#str").style.boxShadow="none";
    document.querySelector("#pass-length").value=sliderValue.value;
    });


    
 function rand(n){
    // [0,n)
    return Math.floor( Math.random() * n);
 }

    let butt=document.querySelector("#button");

    butt.addEventListener('click',function(){
        
        let upper=[];
    // 65-90
    let ch='A'
    for(let i=65;i<91;i++){
        upper[i-65]=String.fromCharCode(i);
    }
    // console.log(upper);
    let lower=[];
    // 97 to 122
    for(let i=97;i<123;i++){
        lower[i-97]=String.fromCharCode(i);
    }
    // console.log(lower);
    let num=[];
    for(let i=0;i<=9;i++){
        num[i]=i;
    }
    let sym=[]
    // 32–47 / 58–64 / 91–96 / 123–126
    for(let i=32;i<=47;i++){
        sym[i-32]=String.fromCharCode(i);
    }
    for(let i=58;i<=64;i++){
        sym.push(String.fromCharCode(i));
    }
    for(let i=91;i<=96;i++){
        sym.push(String.fromCharCode(i));
    }
    for(let i=123;i<=126;i++){
        sym.push(String.fromCharCode(i));
    }
        let chkUpper=document.querySelector("#upper").checked;
        let chkLower=document.querySelector("#lower").checked;
        let chkNum=document.querySelector("#number").checked;
        let chkSymbol=document.querySelector("#symbol").checked;
        
        let ans="";
        let arrOfChk=[];
        if(chkUpper==true) arrOfChk.push(upper);
        if(chkLower==true) arrOfChk.push(lower);
        if(chkNum==true) arrOfChk.push(num);
        if(chkSymbol==true) arrOfChk.push(sym);

        if(arrOfChk.length==0) alert('No parameters are selected');
        else{
            while(ans.length!=sliderValue.value){
                let ran1=rand(arrOfChk.length);
                let ran2arr=arrOfChk[ran1];
                let ran2=rand(ran2arr.length);
                ans=ans+ran2arr[ran2];

            }
            document.querySelector("#finally").value=ans;
            // strength
            let l=arrOfChk.length;
            // box-shadow: 0px 0px 10px 30px blue;
            if(l==4 && sliderValue.value>=8){
                let green="rgb(0,255,0)";
                let ss="0px 0px 15px 1px "+green;
                document.querySelector("#str").style.backgroundColor=green;
                document.querySelector("#str").style.boxShadow=ss;

            }
            else if( (l<=2 && sliderValue.value<8) || (l==1) || sliderValue.value<=6 ){
                let red="rgb(255,0,0)";
                let ss="0px 0px 15px 1px "+red;

                document.querySelector("#str").style.backgroundColor=red;  
                document.querySelector("#str").style.boxShadow=ss;

            }
            else{
                let yel="rgb(234 179 8)";
                let ss="0px 0px 15px 1px "+yel;

                document.querySelector("#str").style.backgroundColor=yel;
                document.querySelector("#str").style.boxShadow=ss;


            }
        }




    })
    //handle copy button
    document.querySelector("#copy").addEventListener('click',function(){
        navigator.clipboard.writeText(document.querySelector("#finally").value);
        document.querySelector("#copied").classList.toggle("hidden");
        setTimeout(function(){
        document.querySelector("#copied").classList.toggle("hidden");

        },1000)
    })




