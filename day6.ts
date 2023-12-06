
const gameRaceInput = [
    'Time:        44     70     70     80',
    'Distance:   283   1134   1134   1491',
];

const gameRaceInput2 = [
    'Time:        44707080',
    'Distance:   283113411341491',
]

function transformGameRaceInput(input: string[]): { time: number, distance: number }[] {
    const timeLine = input[0].split(/\s+/).slice(1).map(Number);
    const distanceLine = input[1].split(/\s+/).slice(1).map(Number);
    const result = [];

    for (let i = 0; i < timeLine.length; i++) {
        result.push({ time: timeLine[i], distance: distanceLine[i] });
    }
    return result;
}

// PART 1
const races = transformGameRaceInput(gameRaceInput);

const racesWon = races.map((race) => {
    let winningDistances = 0
    for (let i = 0; i < race.time; i++) {
        const timeLeft = race.time - i
        const distanceAchieved = timeLeft * i
        if (distanceAchieved > race.distance) {
            winningDistances++;
        }
    }
    return winningDistances
})

console.log(racesWon.reduce((a, b) => a * b, 1))


// PART 2
const races2 = transformGameRaceInput(gameRaceInput2);
const racesWon2 = races2.map((race) => {
    let winningDistances = 0
    for (let i = 0; i < race.time; i++) {
        const timeLeft = race.time - i
        const distanceAchieved = timeLeft * i
        if (distanceAchieved > race.distance) {
            winningDistances++;
        }
    }
    return winningDistances
})

console.log(racesWon2.reduce((a, b) => a * b, 1))