var namee = [3,7,3,8,8,77,52,5,48,77,45,65];
var uniquename =[];

for(var i = 0; i < namee.length; i++){
    var element = namee[i];
    var index = uniquename.indexOf(element);
    if(index==-1){
        uniquename.push(element);
    }
}
console.log(uniquename);