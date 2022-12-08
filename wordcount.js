var speech = "I am a good person. I don't do this. My sister can quarrel with me";
var count = 0;
for (var i = 0; i<speech.length; i++){
    var char = speech[i];
    if (char ==" " && speech[i-1] != " "){
        count++;
    }
}

console.log(count);