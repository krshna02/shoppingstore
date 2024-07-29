let a=0;
let x=document.querySelector(".norm").addEventListener("click",()=>{
 
    // alert('password changed');
    let y=document.querySelector(".new").value;
    let z=document.querySelector(".con").value;
    console.log(y);
    console.log(z);
    if(a==1){
        alert('password cant change again');
    }
    else if(y===""){
       
        console.log("not valid");
    }
    else if(y==z){
        a=1;
        window.location.href="index.html";
        alert('password changed');
        
    }
    else{
        alert("password not match");
    }
});


