var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');

function onClickAddValue(){
    console.log(parseInt(input1.value) + parseInt(input2.value));
    // document.getElementById('displaySum').innerHTML = parseInt(document.getElementById('input1').value) + parseInt(document.getElementById('input2').value);
}