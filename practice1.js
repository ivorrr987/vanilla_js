const dayOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
console.log(dayOfWeek);
console.log(dayOfWeek[2]);

const abc_Info = {
  name: "abc",
  age : 13,
  gender : "Male",
  favFruit:["apple", "orange"],
  favFood : [{name: 'galbiJjim', score: 4}, {name: 'kimchi', score: 3}, {name: "sushi", score: 4.5}]
}

console.log(abc_Info.gender)

//abc_Info.gender = "Female"
//console.log(abc_Info.gender)
console.log(abc_Info.favFruit)
console.log(abc_Info.favFruit[1])
console.log(abc_Info.favFood)
console.log(abc_Info.favFood[1])

const calculator={
  plus : function(a,b){
    return a+b;
  },
  minus : function(a,b){
    return a-b;
  }
}