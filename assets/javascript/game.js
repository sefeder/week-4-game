// define global variables

var currentValue = 0
var goalValue = 0
var wins = 0
var losses = 0
var blueValue = 0
var greenValue = 0
var redValue = 0
var yellowValue = 0

// have computer randomly generate a goalValue
function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
goalValue = randomInt(19,120);
console.log(goalValue);
    
    //display goalValue in proper spot
    var goalValueText = $('#goalValue');goalValueText.text(goalValue);
    //display current value in proper spot
    var currentValueText = $('#currentValue');currentValueText.text(currentValue);
    //display current wins in proper spot
    var winsText = $('#wins');
    winsText.text(wins);
    //display current losses in proper spot
    var lossesText = $('#losses');
    lossesText.text(losses);
    


// have function that randomly generates values for crystal buttons
function assignPoints() {
    blueValue = randomInt(1,12);
    redValue = randomInt(1,12);
    yellowValue = randomInt(1,12);
    greenValue = randomInt(1,12);
    console.log(blueValue, redValue, yellowValue, greenValue)

} ;
 
// call said function
assignPoints();


// assign randomly generated values to each respective button as a new attribute (value) in the button element
    $('#blue').data('value', blueValue);
    $('#red').data('value', redValue);
    $('#yellow').data('value', yellowValue);
    $('#green').data('value', greenValue);


// on click event for each crystal button that adds the given value to currentValue
$(document).ready(function(){

$('.btn').on('click', function () {
    currentValue += $(this).data('value');
    currentValueText.text(currentValue);
    console.log(this);
    $('#blue').click(e => rollSound.play());

// create reset function for after a win or loss
    function reset() {
        
        currentValue = 0;
        currentValueText.text(currentValue);
        goalValue = randomInt(19,120);
        goalValueText.text(goalValue);
        currentValueText.text(currentValue);
        assignPoints();
        $('#blue').attr('value', blueValue);
        $('#red').attr('value', redValue);
        $('#yellow').attr('value', yellowValue);
        $('#green').attr('value', greenValue);
        
    }


    // if currentValue goes above goalValue increase losses by 1

    if (currentValue > goalValue) {
        currentValueText.text(currentValue);
        lossesText.text(losses+=1);
        setTimeout(function() {
            alert('Oops, you overshot ' + goalValue + '! Try again!');
            reset();
       }, 100);
       

// if currentValue equals goalValue increase wins by 1
      } else if (currentValue === goalValue) {
        currentValueText.text(currentValue);
        winsText.text(wins+=1);
         setTimeout(function() {
             alert('Way to go! You matched ' + goalValue + '!');
             reset();
        }, 100);
        
      }

}); 
});


