a=""
b=""
c=""
b1=""
c1=""
// bayad bara rafe bug dakhele a khli bishtar cod zd
function keyz(x){
for(let i=0;    i<document.getElementsByClassName("keyz").length;   i++){
    if(i==x){
        a=a+i
    }
    else{}
}
document.getElementById("display").innerHTML=b+c1+b1+c+a
}
function mathzinb1(m,j,n){
    m=parseInt(m)
    n=parseInt(n)
    let ans=0
if(j=="+"){
ans=m+n
}
if(j=="-"){
ans=m-n   
}
if(j=="*"){
ans=m*n    
}
if(j=="/"){
ans=m/n    
}
b1=ans
}
function mathzinb(m,j,n){
    m=parseInt(m)
    n=parseInt(n)
    let ans=0
if(j=="+"){
ans=m+n
}
if(j=="-"){
ans=m-n   
}
if(j=="*"){
ans=m*n    
}
if(j=="/"){
ans=m/n    
}
b=ans
}
function bindingc(t){
    if(t==1){
        c="+"
    }
    if(t==2){
        c="-"
    }
    if(t==3){
        c="/"
    }
    if(t==4){
        c="*"
    }
}

function alamatz(x){
    if(a&&b&&b1){
        b1=parseInt(b1);
        a=parseInt(a);
        b=parseInt(b);
         // b+c+a--> b+c1+b1+c+a
mathzinb1(b1,c,a);
a=""

if(x==1|| x==2){
    mathzinb(b,c1,b1);
    b1=""
    c1=""    
}
bindingc(x)
}
if(!a){
bindingc(x)
    }


if(a&&!b){
bindingc(x);
    b=a;
    a=""
  
}



if(b&&a){
    // b+c+a--> b+c1+b1+c+a
if(c=="/" || c=="*"){
    mathzinb(b,c,a)
    a=""
    bindingc(x)
}
else{
if(x==3){
c1=c;
b1=a;
c="/"
a=""
}
if(x==4){
c1=c;
b1=a;
c="*"
a=""
}

if(x==1){

    b=parseInt(b);
    a=parseInt(a);
    mathzinb(b,c,a);
a=""
c="+"}
if(x==2){
    b=parseInt(b);
    a=parseInt(a);
    mathzinb(b,c,a);
a=""
c="-"}
}}

document.getElementById("display").innerHTML=b+c1+b1+c+a
}


function equalz(){
    if(b1&&a){
mathzinb1(b1,c,a);
mathzinb(b,c1,b1);

}
if(b1&&!a){
    mathzinb(b,c1,b1)
}
if(!b1&&b&&a){
mathzinb(b,c,a)
}
if(!b1&&!b&&a){
    b=a
}
document.getElementById("display").innerHTML=b
if(!b&&!a){
    document.getElementById("display").innerHTML=error
}
c1=""
b1=""
c=""
a=""
}
function removz(){
    b=""
    c1=""
    b1=""
    c=""
    a=""
    document.getElementById("display").innerHTML="dobare bezan koni"
}






console.log(c)
// }
// if(b&&a&&b1){
//     b1= parseInt(b1)
//      b=parseInt(b)
//      a=parseInt(a)
//      if(x==1){
//          if(c=="/"){
//              b1=b1/a;
//              a=""
//              if(c1=="+"){
//                  b=b+b1
//              }
//              if(c1=="-"){
//                  b=b-b1
//              }
//              if(c1=="/"){
//                  b=b/b1
//              }
//              if(c1=="+"){
//                  b=b*b1
//              }
//          }
//          if(c=="*"){
 
//              b1=b1*a;
//              a=""
//              if(c1=="+"){
//                  b=b+b1
//              }
//              if(c1=="-"){
//                  b=b-b1
//              }
//              if(c1=="/"){
//                  b=b/b1
//              }
//              if(c1=="+"){
//                  b=b*b1
//              }
//          }
//          c="+"
//      }
//      if(x==2){
//          if(c=="/"){
//              b1=b1/a;
//              a=""
//              if(c1=="+"){
//                  b=b+b1
//              }
//              if(c1=="-"){
//                  b=b-b1
//              }
//              if(c1=="/"){
//                  b=b/b1
//              }
//              if(c1=="*"){
//                  b=b*b1
//              }
//          }
//          if(c=="*"){
 
//              b1=b1*a;
//              a=""
//              if(c1=="+"){
//                  b=b+b1
//              }
//              if(c1=="-"){
//                  b=b-b1
//              }
//              if(c1=="/"){
//                  b=b/b1
//              }
//              if(c1=="+"){
//                  b=b*b1
//              }
//          }
//          c="+"
//      }
//      if(x==3){
//          c="/"
//      }
//      if(x==4){
//          c="*"
//      }
//  }