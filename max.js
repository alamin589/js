var bussiness = 450;
var minister = 350;
sochib = 650;
if(bussiness>minister){
    if(bussiness>sochib){
        console.log("Bussiness is bigger");

    }
    else{
        console.log("sochib is bigger");
    }
    
}
else{
    if(minister>sochib){
        console.log("minister is bigger");
    }
    else{
        console.log("Sochib is bigger");
    }   
}

var max = Math.max(bussiness, minister, sochib);
console.log(max);