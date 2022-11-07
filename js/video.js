
var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("autoplay is set to " + video.autoplay)
	console.log("autoplay is set to " + video.loop)
})

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%'
	video.play()
})

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
})

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down")
	video.playbackRate *= 0.9
	console.log("playback rate is set to " + video.playbackRate)
})

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up")
	video.playbackRate /= 0.9
	console.log("playback rate is set to " + video.playbackRate)
})

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip ahead ")
	video.currentTime += 10
	if (video.currentTime >= video.duration){
		video.currentTime = 0
	}
	console.log("Current video time skipped to " + video.currentTime)
})

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		console.log("unmute")
		video.muted = false;
		this.innerHTML = "Mute"
	}
	else{
		console.log("muted")
		video.muted = true;
		this.innerHTML = "Unmute"
	}
})

document.querySelector("#slider").addEventListener("change", function() {
	console.log("slider")
	var sliderval = document.querySelector("#slider").value;
	video.volume = sliderval/100;
	document.querySelector('#volume').innerHTML = video.volume*100+'%';
	console.log(sliderval);
})

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("vintage")
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function() {
	console.log("original")
	video.classList.remove("oldSchool")
})



