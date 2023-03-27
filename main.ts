let sensor_pin = DigitalPin.P13
let slow = 30
let mid = 60
let fast = 90
let turns = [0, 0, 0]
input.onButtonPressed(Button.A, function Test() {
    Block(slow, 500, 500, 0)
    Block(mid, 500, 500, 1)
    Block(fast, 500, 500, 2)
    Score(turns)
})
function Block(speed: number, pause: number, time_ms: number, index: number) {
    Speed(speed)
    basic.pause(pause)
    turns[index] = TurnsCount(time_ms)
}

function Speed(speed: number) {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, speed)
}

function TurnsCount(x: number): number {
    let turns_count = 0
    for (let i = 0; i < x; i++) {
        if (sensor_pin == 1) {
            turns_count += 1
            basic.pause(10)
        }
        
    }
    return turns_count
}

function Score(info: number[]) {
    let COUNT = 0
    let SUM = 0
    let AVG = 0
    for (let i of info) {
        SUM += info[i]
        COUNT = i
    }
    AVG = SUM / COUNT
    Grade(AVG)
}

function Grade(AVG: number) {
    let hodnota = 0
    let grade = 0
    if (AVG >= hodnota) {
        grade = 10
    } else if (AVG >= hodnota) {
        grade = 9
    } else if (AVG >= hodnota) {
        grade = 8
    } else if (AVG >= hodnota) {
        grade = 7
    } else if (AVG >= hodnota) {
        grade = 6
    } else if (AVG >= hodnota) {
        grade = 5
    } else if (AVG >= hodnota) {
        grade = 4
    } else if (AVG >= hodnota) {
        grade = 3
    } else if (AVG >= hodnota) {
        grade = 2
    } else {
        grade = 1
    }
    
    console.log(grade)
    basic.showNumber(grade)
}

