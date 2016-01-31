/**
 * Created by mark on 1/26/2016.
 */
// document.write("this is something else");

function trophyValue() {                                                //function deceleration
    var trophy = {};                                                    //declare the variable
    // textPrice = document.getElementById('cost');                     //Original that I tried to use, didn't pass the value
    // t_text = document.getElementById('inputText');
    trophy.pricing = document.getElementById('cost').value;             //don't forget the value next time
    trophy.message = document.getElementById('inputText').value;        //passes the values from the form
    // trophy.message=t_text;                                           //one of my original attempts
    // trophy.pricing=textPrice;
    trophy.cost = function () {                                         //making the function method
            return (this.message.length * this.pricing).toFixed(2);    //generates the cost and rounds the decimal to two places
    };                                                                  //the end
    alert('The cost of the trophy will be $' + trophy.cost());          //Doing the alert of the info
    document.getElementById(t_pricing).appendChild("The cost of the trophy will be " + trophy.cost);
    document.getElementById(t_pricing).innerHTML = "The cost of the trophy will be " + trophy.cost;
    //document.write('The original text' + trophy.message);                                   //prints the original message
    //document.writeln('The cost of the trophy will be $' + trophy.cost());//writes the info into the page
}

document.getElementById('form').addEventListener("submit", trophyValue ,false);  //calls the function
// document.getElementById('form').addEventListener("submit",document.write("Hello"));
