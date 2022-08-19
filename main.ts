input.onButtonPressed(Button.A, function () {
    mouse.movexy(0, 20)
})
input.onGesture(Gesture.TiltLeft, function () {
    mouse.movexy(-20, 0)
})
input.onButtonPressed(Button.AB, function () {
    absmouse.movexy(0, 0)
})
input.onButtonPressed(Button.B, function () {
    mouse.movexy(0, -20)
})
input.onGesture(Gesture.TiltRight, function () {
    mouse.movexy(20, 0)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    mouse.click()
})
absmouse.startAbsoluteMouseService()
mouse.startMouseService()
basic.forever(function () {
	
})
