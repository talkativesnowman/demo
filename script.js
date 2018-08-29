window.addEventListener('keydown', function(e){
	let audio = document.querySelector('audio[data-key="'+e.keyCode+'"]');
	let elem = document.querySelector('div[data-key="'+e.keyCode+'"]');
	if(!audio) return;
	elem.classList.add('glow');
	setTimeout(function(){
		elem.classList.remove('glow');
	}, 100)
	audio.currentTime = 0;
	audio.play();
});