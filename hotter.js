const camerafeed = document.getElementById("cameraFeed")

navigator.mediaDevices.getUserMedia((video:true));

.then(stream => {
    cameraFeed.srcObject = stream;
})
.catch(error => {
    console.errorr("error accessing camera",error);
});
