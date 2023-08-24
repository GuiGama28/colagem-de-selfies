var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

function start()
{
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    if(Content == "tire selfies"){
        speak();
    }
}
function speak(){
    var synth = window.speechSynthesis;

    Webcam.attach(camera);
    setTimeout(function(){
        img_id ="selfie1"
    speakData = "tirando uma selfie em 3 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    takeSelfie();
    }, 3000)
    setTimeout(function(){
        img_id ="selfie2"
    speakData = "tirando segunda selfie em 3 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    takeSelfie();
    }, 6000)
    setTimeout(function(){
        img_id ="selfie3"
    speakData = "tirando uma selfie em 3 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    takeSelfie();
    }, 9000)
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function takeSelfie()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id=="selfie1"){
            document.getElementById("foto1").src = data_uri
        }
        if(img_id=="selfie2"){
            document.getElementById("foto2").src = data_uri
        }
        if(img_id=="selfie3"){
            document.getElementById("foto3").src = data_uri
        }
    });
}