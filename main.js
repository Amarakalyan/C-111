var prediction = "victory"

Webcam.set({
    width: 350,
    height: 300,
    img_format:'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML = '<img id="image_captured" src="'+data_uri+'"/>' 
    });
}
console.log("ml5 Version;", ml5.version);

console.log('https://teachablemachine.withgoogle.com/models/BoFtSb7kv/model.json',modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!");
    speak();
}

function speak() {
    var synth = window.speechSynthesis;
    var speak_data = new SpeechSynthesis(speak_data);
    synth.speak(utterThis);
}