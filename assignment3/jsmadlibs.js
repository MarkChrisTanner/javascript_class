/*
var getmad = function() {
    console.log("Hello there old chap"); // just to make sure stuff's happenin'
    var responses = document.getElementsByTagName('input');
    for (var i = 0; i < responses.length; i++) {
    if (responses[i].type === "text") {
       var iname = "item_" + i;
       console.log(iname);
       var m = document.getElementById(iname);
       var nt = document.createTextNode(responses[i].value);
       m.appendChild(nt);
    }
}

document.getElementById('madlib').setAttribute('class', 'visible'); };
    var sb = document.getElementById('submit');
    sb.addEventListener('click', function(ob) {
    ob.preventDefault();
    getmad()
}, false);
*/

function everything() {
    $('form').on('submit', function(e){
        e.preventDefault();

    })
}


//$(everything()).ready
$(document ).ready(everything );