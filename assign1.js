document.write('test line');
/*
Make an object that has three properties:

    A property that accepts the number of letters to be engraved.
    A property that accepts the cost per letter as a decimal (5 cents is 0.05)
    A function (method, in this case): it figures out the length of the word or name you assigned to the previous properties, and returns the cost of putting the name on the plaque.

Get the letter count and cost per letter from the form.
Add these values to your object.
Use the method you defined in your object get the cost of the word
Display the cost.
*/
/*
var trophy = new Object();
trophy.message = prompt('Enter the text you want on the trophy ?');
trophy.pricing = prompt('Enter the cost per letter >');
trophy.cost = function() { this.message.length * this.pricing ;}
// function cost(trophy.message, trophy.pricing) {
*/
var trophy = {
message: prompt('Enter the text you want on the trophy ?');
pricing: prompt('Enter the cost per letter');
cost: function() {
		return this.message.length * this.pricing;
}
Alert('The cost of the trophy will be' + ' ' + trophy.cost);

