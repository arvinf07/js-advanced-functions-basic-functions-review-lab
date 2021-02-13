// Your code here

function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(string="*"){
  return function(thing='special'){
    return `You are ${string}${thing}${string}!`
  }
}

let Calculator = {
  add: () => 1 + 3 , 
  subtract: () => 1 - 3,
  multiply: () => 1 * 3,
  divide: () => 10/5
}

function actionApplyer(start, array){
  
  if (!array) {
    return start
  }else{
    return array.reduce(function(total, element){ return total = element(total)}, start)
  }

}