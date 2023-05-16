//შექმენით ერთ განზომილებიანი 
//მსაივი საიდანაც for ციკლის მეშვებოთ 
//დაბეჭდავთ მასივში არსებულ ყველა ელემენტს

let people = ["Giorgi","Tatia","Vazha","Irakli"];
for (let x = 0; x < people.length; x++) {
    document.write(people[x] + "<br>")
}

// შექმენით ფუნქცია სადაც ერთ ფუნქციას 
// გამოიყენებთ მოერე ფუნქციის პარამეტრად და if
// else მეშვეობით დაბეჭდეთ რამე ინფორმაცია 
// (მაგ: თუ რამე ნივთის ფასი
// მაღაზიაში არის 50 ლარზე მეტი ესეიგი 
// ძვირია თუ 20-50 დიაპაზონშია მოქცეული
// საშუალო თუ ნაკლები იაფი)

	
function display(x, secondFunc) {
    let message = secondFunc(x);
    document.write(message + "<br>");
  }
  
  function shefasebisFunc(price) {
    if (price > 50) return "ძვირია";
    else if (price > 20 && price < 50) return "საშუალო";
    else return "იაფია";
  }
  
  display(30, shefasebisFunc);
  

// მოცემული მასივიდან [ 15,53,22,198,10,28,16,70,33,951 ] 
// დაბეჭდეთ მხოლოდ კენტი რიცხვები

const numbers = [15, 53, 22, 198, 10, 28, 16, 70, 33, 951];
for (let x = 0; x < numbers.length; x++) {
  if (numbers[x] % 2 != 0) {
    document.write(numbers[x] + "<br>");
  }
}

