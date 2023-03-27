sensor_pin = DigitalPin.P13
slow = 30
mid = 60
fast = 90
turns = [0, 0, 0]

def Test():
    Block(slow, 500, 500, 0 )
    Block(mid, 500, 500, 1 )
    Block(fast, 500, 500, 2 )
    Score(turns)
input.on_button_pressed(Button.A, Test)

def Block(speed, pause, time_ms, index):
    Speed(speed)
    basic.pause(pause)
    turns[index] = TurnsCount(time_ms)

def Speed(speed):
    PCAmotor.motor_run(PCAmotor.Motors.M1, speed)

def TurnsCount(x):
    turns_count = 0
    for i in range(x):
        if sensor_pin == 1:
            turns_count += 1
            basic.pause(10)
    return turns_count

def Score(info):
    COUNT = 0
    SUM = 0
    AVG = 0
    for i in info:
        SUM += info[i]
        COUNT = i
    AVG = SUM/COUNT
    Grade(AVG)

def Grade(AVG):
    hodnota = 0
    grade = 0
    if AVG >= hodnota:
        grade = 10
    elif AVG >= hodnota:
        grade = 9
    elif AVG >= hodnota:
        grade = 8
    elif AVG >= hodnota:
        grade = 7
    elif AVG >= hodnota:
        grade = 6
    elif AVG >= hodnota:
        grade = 5
    elif AVG >= hodnota:
        grade = 4
    elif AVG >= hodnota:
        grade = 3
    elif AVG >= hodnota:
        grade = 2
    else:
        grade = 1
    print(grade)
    basic.show_number(grade)


