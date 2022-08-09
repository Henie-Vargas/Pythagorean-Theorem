function pythagC(){
    let a= document.getElementById("a").value;
    let b= document.getElementById("b").value;
    return document.getElementById("getC").innerHTML="Side C: "+ 
            Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
     
}
function pythagAB(){
        let c= document.getElementById("c").value;
        let aOrb= document.getElementById("BorA").value;
        if(c<=aOrb){
                window.alert('C must be bigger than A or B')
        }else{
        return document.getElementById("third").innerHTML="Third Side: "+ 
             Math.sqrt(Math.pow(c,2)-Math.pow(aOrb,2))
        }
}

    