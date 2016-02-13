/**
 * Created by Mark on 2/11/2016.
*/
text_1 = document.getElementById('text_1').value;
text_2 = document.getElementById('text_2').value;
text_3 = document.getElementById('text_3').value;
text_4 = document.getElementById('text_4').value;
text_5 = document.getElementById('text_5').value;
text_6 = document.getElementById('text_6').value;
text_7 = document.getElementById('text_7').value;
text_8 = document.getElementById('text_8').value;
text_9 = document.getElementById('text_9').value;
text_10 = document.getElementById('text_10').value;
text_11 = document.getElementById('text_11').value;
text_12 = document.getElementById('text_12').value;


var finishedMadlib = 'It was during the battle of ' + text_1 + ' ' +
'when I was running through a ' + text_2 + ' ' +
'when a ' + text_3 + ' ' +
'went off right next to my platoon. Our ' + text_4 + ' ' +
'yelled for us to ' + text_5 + ' ' +
'to the nearest ' + text_6 + ' ' +
'we could find. When we got to the ' + text_6 + ' ' +
'we ' + text_7 + ' ' +
'to start a fire. As we were starting the fire the enemy saw the ' + text_8 + ' ' +
'from the fire and started ' + text_9 + ' ' +
' ' + text_10 + ' ' +
'at us. we all quickly ducked behind the ' + text_11 + ' ' +
'at the ' + text_6 + ' ' +
'and returned fire. we quickly eliminated the enemy and were ' + text_12 + ' ' +
'that we had won the battle.';

var d2 = document.getElementById('div_2');
d2.innerHTML = finishedMadlib;

