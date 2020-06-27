document.getElementById('lbsInput').addEventListener('input', function(e) {
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046
    document.getElementById('kgOutput').innerHTML = lbs/2.2046
    document.getElementById('ouncesOutput').innerHTML = lbs*16
});
document.getElementById('kgInput').addEventListener('input', function(e) {
    let kg = e.target.value;
    document.getElementById('lbsOutput').innerHTML = kg*2.2046
    document.getElementById('gramsOutput-2').innerHTML = kg*1000
    document.getElementById('ouncesOutput-2').innerHTML = kg*35.2739
});