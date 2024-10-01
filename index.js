// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(flair = "*") {
    return function(Adjective = "a dedicated programmer"){
    return `You are ${flair}${Adjective}${flair}!`;
    }
} 
console.log(flair)(Adjective)(flair);