
function friendlyTime(seconds) {

    let minutes = Math.floor(seconds / 60 % 60);
    let hours = Math.floor(seconds / 3600);

    return `${hours}h ${minutes}m`;
}

function tick() {
    
    let state = calcState();
    let countdown = Math.floor(state.secondsToZero);
    document.getElementById('countdown').innerHTML = (countdown > 0) ? friendlyTime(countdown) : 0;

    let score = Math.floor(state.kJtoBurn);
    let budget = Math.floor(state.resetAmount);
    document.getElementById('score').innerHTML = score + ' / ' + budget + ' kJ';
}

function onAddClick(e) {
    e.preventDefault();
    let ans = prompt('Enter kJ');
    if (ans !== null) {
        dataAddVal(parseInt(ans));
    }
}

function onResetClick(e) {
    e.preventDefault();
    let ans = prompt('Reset progress? Enter daily kilojoule budget, e.g. 8000');
    if (ans !== null) {
        dataReset(parseInt(ans));
    }
}

function main() {
    
    // init with 9000kJ if empty
    if(dataGetRows() == null) {
        dataReset(9000);
    }

    setInterval(tick, 1000);
    document.getElementById('add').addEventListener('click', onAddClick);
    document.getElementById('reset').addEventListener('click', onResetClick);
}

