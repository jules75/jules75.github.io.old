
function dataGetRowsSample() {
    // newest first
    return [
        ['i', 1576692969, 167],
        ['i', 1576647503, 2900],
        ['i', 1576647503, 1300],
        ['i', 1576647503, 750],
        ['i', 1576642500, 170],
        ['i', 1576635300, 370],
        ['r', 1576634400, 7000]
    ];
}

function dataGetRows() {
    return JSON.parse(localStorage.getItem("data"));
}

function dataSaveRows(rows) {
    const json = JSON.stringify(rows);
    localStorage.setItem("data", json);
}

function dataAddVal(kJ) {
    let rows = dataGetRows();
    let row = ['i', now(), parseInt(kJ)];
    rows.unshift(row);  // prepend
    dataSaveRows(rows);
}

function dataDropNewestRow() {
    let rows = dataGetRows();
    rows.shift();
    dataSaveRows(rows);
}

function now() {
    const d = + new Date();
    return Math.floor(d / 1000);
}

function isInput(row) {
    return row[0] == 'i';
}

function isReset(row) {
    return row[0] == 'r';
}

function amount(row) {
    return row[2];
}

function timestamp(row) {
    return row[1];
}

function calcState() {

    let inputSinceReset = 0;
    let resetAmount = 0;
    let resetTimestamp = 0;

    // process inputs until we hit a reset
    for (let row of dataGetRows()) {

        if (isInput(row)) {
            inputSinceReset += amount(row);
        }

        if (isReset(row)) {
            resetAmount = amount(row);
            resetTimestamp = timestamp(row);
            break;
        }
    }

    let secondsSinceReset = now() - resetTimestamp;
    let perSecondBudget = resetAmount / (24 * 60 * 60);
    let burnedSinceReset = secondsSinceReset * perSecondBudget;
    let kJtoBurn = inputSinceReset - burnedSinceReset;

    return {
        'kJtoBurn': kJtoBurn,
        'secondsToZero': kJtoBurn / perSecondBudget
    };
}