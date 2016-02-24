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
var r_excl, r_adv, r_noun, r_adj;

function everything() {
    $('form').on('submit', function(e){
        e.preventDefault();
        getValues();
        populated ();
    })
    $('#madlib').on('click', function(e) {
        $('#madlib').fadeOut(700);
        $('#responses').delay(800).fadeIn(700);
    })
}

function getValues() {
    r_excl = $('#r_excl').val();
    r_adv = $('#r_adv').val();
    r_noun = $('#r_noun').val();
    r_adj = $('#r_adj').val();
}

function populated () {
    if ( r_excl == '' || r_adv == '' || r_noun == '' || r_adj == '' ) {
        $('#madlib').after('<img id="fail" src="http://www.reactiongifs.com/r/yt.gif" alt="fail" />');
    } else {
        $('img').remove();
        insert();
        //$('#madlib').removeClass('invisible');
        $('#responses').fadeOut(700);
        $('#madlib').delay(800).fadeIn(700);
    }
}

function insert() {
    $('#item_0').text('').text(r_excl);
    $('#item_1').text('').text(r_adv);
    $('#item_2').text('').text(r_noun);
    $('#item_3').text('').text(r_adj);
};


//$(everything()).ready
$(document ).ready(everything );