$(document).ready(function() {

    $('.fade-in').css("display", "flex")
    .hide()
    .fadeIn();

$('#display').html(0)
$('.number').click(function() {
    if ($('#display').html() == 0 && !$('#display').html().includes(".")) {
        $('#display').html('')
    }
    let currentText = $('#display').text()
    $('#display').html(currentText + Number($(this).html()))
})

$('#clear').click(function() {
   let equation = Number(0);
    $('#display').html(equation)
    
})

$('.operator').click(function() {
    let currentText = $('#display').text()
    let splitText = currentText.split(" ")
    let filtered = splitText.filter(function(item) {
        return item !== "";
    })
    if (filtered[filtered.length - 1].match(/\*|\/|\+|\-/) && filtered[filtered.length - 1].length === 1) {
        filtered.pop();
    }
   filtered = filtered.join(" ")
        $('#display').html(filtered + $(this).text())
})

$('#equals').click(function() {
    let equation = $('#display').text()
    let split = equation.split(" ")
    let filtered = split.filter(function(item) {
        return item !== "";
    })
    filtered = filtered.join("")
    let answer = eval(filtered)
    $('#display').html(answer)  
})

$('#decimal').click(function() {
    let currentText = $('#display').text();
    let split = currentText.split(' ');
    if (split[split.length - 1].includes(".")) {
        return;
    } else {
        $('#display').html(currentText + $(this).text())
    }

})

$('#backspace').click(function() {
    let currentText = $('#display').text();
    let split = currentText.split(' ');
    console.log(split.length)
    if (split.length === 1) {
        $('#display').html(0)
    } else {
         split.pop();
        split = split.join(" ")
        $('#display').html(split);
    }   
})


$('#percent').click(function() {
    let currentText = $('#display').text();
    let split = currentText.split(' ');
    split[split.length - 1] /= 100;
    split = split.join(" ")
    $("#display").html(split)
})

})