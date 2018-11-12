$(document).ready(function() {


$('#display').html(0)
$('.number').click(function() {
    if ($('#display').html() == 0) {
        $('#display').html('')
    }
    let currentText = $('#display').text()
    $('#display').html(currentText + $(this).text())
})

$('#clear').click(function() {
    equation = Number(0);
    $('#display').html(equation)
    
})

$('.operator').click(function() {
    let currentText = $('#display').text()
        $('#display').html(currentText + $(this).text())
    
})

$('#equals').click(function() {
    let equation = $('#display').text()
    let answer = eval(equation)
    $('#display').html(answer)  
    console.log(answer)
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









})