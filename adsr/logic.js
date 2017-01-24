var scene = document.querySelector('a-scene');
var synth = new Tone.Synth().toMaster();
var loop = new Tone.Sequence(function(time, index){
      //iterate over things here
		}, [0, 1, 2, 3, 4, 5, 6, 7], "8n");
Tone.Transport.start();
loop.start();
