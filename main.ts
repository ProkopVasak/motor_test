let run1 = 0
let run2 = 0
let run3 = 0
input.onButtonPressed(Button.A, function Test() {
    console.log("test func")
    let slow = 100
    let mid = 120
    let fast = 140
    PCAmotor.MotorRun(PCAmotor.Motors.M2, 200)
    basic.pause(5000)
    Block(fast, 1000, 1000, 0)
    Block(mid, 1000, 1000, 1)
    Block(slow, 1000, 1000, 2)
    PCAmotor.MotorRun(PCAmotor.Motors.M2, 0)
})
input.onButtonPressed(Button.B, function Stop() {
    PCAmotor.MotorRun(PCAmotor.Motors.M2, 0)
})
function Block(speed: number, pause: number, number: number, index: number) {
    console.log("block func")
    Speed(speed)
    basic.pause(pause)
    TurnsCount(number, index)
}

function Speed(speed: number) {
    console.log("speed func")
    PCAmotor.MotorRun(PCAmotor.Motors.M3, speed)
}

function TurnsCount(x: number, index: number) {
    
    console.log("turnscount func")
    let turnscount = 0
    let y = 0
    while (x != y) {
        if (pins.analogReadPin(AnalogPin.P0) > 100) {
            turnscount += 1
        }
        
        basic.pause(1)
        y += 1
    }
    if (index == 0) {
        run1 = turnscount
    } else if (index == 1) {
        run2 = turnscount
    } else {
        run3 = turnscount
    }
    
}

input.onButtonPressed(Button.B, function Grade() {
    
    console.log("grade func")
    console.log(run1)
    console.log(run2)
    console.log(run3)
    let AVG = (run1 + run2 + run3) / 3
    let grade = 0
    if (AVG > 450) {
        grade = 10
    } else if (AVG >= 440) {
        grade = 9
    } else if (AVG >= 430) {
        grade = 8
    } else if (AVG >= 420) {
        grade = 7
    } else if (AVG >= 410) {
        grade = 6
    } else if (AVG >= 400) {
        grade = 5
    } else if (AVG >= 390) {
        grade = 4
    } else if (AVG >= 380) {
        grade = 3
    } else if (AVG >= 370) {
        grade = 2
    } else {
        grade = 1
    }
    
    console.log(grade)
    basic.showNumber(grade)
})
