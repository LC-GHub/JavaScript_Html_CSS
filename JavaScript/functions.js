// DEFINE YOUR FUNCTION BELOW:

const week = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
};

function returnDay(num){
    console.log(typeof num);
    if (num >=1 && num <= 7){
        
        return week[num];
    }else{
        return null
    }
}