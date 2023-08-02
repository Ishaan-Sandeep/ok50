function preload() {
 
}
function setup() {
    canvas = createCanvas(640,480)
    canvas.position(110,250)
    video = createCapture(VIDEO)
    video.hide()
}
function draw() {
    image(video,0,0,640,480)
    fill(0,128,0)
    circle(590,50,70)
    circle(590,420,70)
    circle(60,420,70)
    circle(60,68,70)
    rect(55,90,10,300)
    rect(585,85,10,300)
}
function take_snapshot() {
    save("birthday.png")
}