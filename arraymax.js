var marks = [45,25,84,35,58,77,73,85,74,37,91,80,64,48,47];
var max = marks[0];
for(var i=0; i<marks.length; i++){
    var element = marks[i];
    if(element>max){
        max=element;
    }
}
console.log("Highest value is:", max); 