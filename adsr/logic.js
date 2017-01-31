var scene = document.querySelector('a-scene');
var synth = new Tone.Synth().toMaster();
var loop = new Tone.Sequence(function(time, index){
      //iterate over things here
      //synth.triggerAttackRelease("C4", "16n", time="+8n");
		}, [0, 1, 2, 3], "4n");
Tone.Transport.start();
