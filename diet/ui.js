
function friendlyTime(seconds) {

    let minutes = Math.floor(seconds / 60 % 60);
    let hours = Math.floor(seconds / 3600);

    return `${hours}h ${minutes}m`;
}

function render(score, countdown) {
    document.getElementById('score').innerHTML = score;
    document.getElementById('countdown').innerHTML = (countdown > 0) ? friendlyTime(countdown) : 0;
}

function tick() {
    let state = calcState();
    render(Math.floor(state.kJtoBurn), Math.floor(state.secondsToZero));
}

function onAddClick(e) {
    e.preventDefault();
    let el = document.getElementById('kJinput');
    let kJ = parseInt(el.value);
    dataAddVal(kJ);
    el.value = '';  // clear input    
}

function main() {
    setInterval(tick, 1000);
    document.getElementById('add').addEventListener('click', onAddClick);
}

