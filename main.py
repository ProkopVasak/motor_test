run1 = 0
run2 = 0
run3 = 0



def Test():
    print("test func")
    
    slow = 100
    mid = 120
    fast = 140

    PCAmotor.motor_run(PCAmotor.Motors.M2, 200)
    basic.pause(5000)
    Block(fast, 1000, 1000, 0 )
    Block(mid, 1000, 1000, 1 )
    Block(slow, 1000, 1000, 2 )
    PCAmotor.motor_run(PCAmotor.Motors.M2, 0)
    
    
input.on_button_pressed(Button.A, Test)

def Stop():
    PCAmotor.motor_run(PCAmotor.Motors.M2, 0)
input.on_button_pressed(Button.B, Stop)

def Block(speed, pause, number, index):
    print("block func")
    
    Speed(speed)
    basic.pause(pause)
    TurnsCount(number , index)

def Speed(speed):
    print("speed func")
    PCAmotor.motor_run(PCAmotor.Motors.M3, speed)

def TurnsCount(x, index):
    global run1, run2, run3
    
    print("turnscount func")
    turnscount = 0
    y = 0
    while (x != y):
        if  pins.analog_read_pin(AnalogPin.P0) > 100:
            turnscount += 1 
        basic.pause(1)
        y +=1
    if index == 0: run1 = turnscount
    elif index == 1: run2 =turnscount
    else: run3 = turnscount
    



    

def Grade():
    global run1, run2, run3
    print("grade func")
    print(run1)
    print(run2)
    print(run3)
    AVG = (run1+run2+run3)/3
    grade = 0
    if AVG > 450:
        grade = 10
    elif AVG >= 440:
        grade = 9
    elif AVG >= 430:
        grade = 8
    elif AVG >= 420:
        grade = 7
    elif AVG >= 410:
        grade = 6
    elif AVG >= 400:
        grade = 5
    elif AVG >= 390:
        grade = 4
    elif AVG >= 380:
        grade = 3
    elif AVG >= 370:
        grade = 2
    else:
        grade = 1
    print(grade)
    basic.show_number(grade)
input.on_button_pressed(Button.B, Grade)
