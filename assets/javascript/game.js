var yourScore = 0;
var randomNumbo = 0;
var wins= 0;
var losses = 0;
var crystalArray = [];
var cr1 = $("#crystal1");
var cr2 = $("#crystal2");
var cr3 = $("#crystal3");
var cr4 = $("#crystal4");
crystalArray.push(cr1,cr2,cr3,cr4);

$("#your-number").text(yourScore);
$("#random-number").text(randomNumbo);
$("#wins").text(wins);
$("#losses").text(losses);

//function to push unique random numbers into an array (found code and modified-I'm not this smart)
let anArrayOfUniqueNumbers = [];
let numberGenerator = function(arr) {
  if (arr.length >= 4) return;
  var min=1; 
    var max=12;  
    var newNumber = Math.floor(Math.random() * (+max - +min)) + +min; 
   
  if (arr.indexOf(newNumber) < 0) {
    arr.push(newNumber);
  }
  numberGenerator(arr);
};
numberGenerator(anArrayOfUniqueNumbers);
console.log(anArrayOfUniqueNumbers);

//function to generate random target number//
function randomNumber(){
    var min=19; 
    var max=120;  
    var random =Math.floor(Math.random() * (+max - +min)) + +min; 
    randomNumbo = random;
    $("#random-number").text(randomNumbo);
   
}
//function to set random number for each crystal and push to youScore when clicked.
function randomCrystal(){
    
crystalArray.forEach(function(crystal,i){
        var random = anArrayOfUniqueNumbers[i]; 
    console.log(random);
      crystal.attr("data-number", random); 
   crystal.on("click", function(){
    var go = crystal.data("number");
yourScore = yourScore + go;
  $("#your-number").text(yourScore);
  winLose()
});
});
};

//function for win or lose
function winLose() {
var you = yourScore;
var me = randomNumbo;
if (you == me){
 wins++;
 $("#wins").text(wins);
 resetGame()

}
else if(you > me){
    losses ++;
    $("#losses").text(losses);
    resetGame()
}
}

//function to reset game 
function resetGame(){
 yourScore = 0;
 $("#your-number").text(yourScore);
 randomNumber();
 randomCrystal();


}
//Call functions
randomNumber()
randomCrystal()



