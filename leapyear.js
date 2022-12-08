// const year =6545;
// let reminder = year % 4;
// if(reminder==0){
//     console.log("your year is a leapyear");
// }
// else{
//     console.log("your year is not a leap year")
// }
// console.log(reminder == 0);

function isleapyear(year){
    const reminder = year % 4;
    if(reminder == 0){
        return true;
    }
    else{
        return false;
    }
}
const check = isleapyear(2000);
console.log(check);
