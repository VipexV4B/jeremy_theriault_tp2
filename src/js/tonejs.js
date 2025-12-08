import * as Tone from "tone.js";

const notes = ["C4", "E4", "G4", "B4", "A4", "G4", "E4", "C4"];

const instruments = {
  Synth: new Tone.Synth().toDestination(),
  AMSynth: new Tone.AMSynth().toDestination(),
  FMSynth: new Tone.FMSynth().toDestination(),
  DuoSynth: new Tone.DuoSynth().toDestination(),
  MonoSynth: new Tone.MonoSynth().toDestination(),
  MembraneSynth: new Tone.MembraneSynth().toDestination(),
  MetalSynth: new Tone.MetalSynth().toDestination(),
  PluckSynth: new Tone.PluckSynth().toDestination(),
};

let currentInstrument = instruments.Synth;
const sequence = new Tone.Sequence(
  (time, note) => {
    currentInstrument.triggerAttackRelease(note, "8n", time);
  },
  notes,
  "8n"
);

let isPlaying = false;
const btn = document.querySelector("button");
const select = document.querySelector("#instrument");

btn.addEventListener("click", async () => {
  await Tone.start();
  await Tone.loaded();

  if (!isPlaying) {
    // Petit reset
    Tone.Transport.stop();
    Tone.Transport.position = 0;
    sequence.stop();

    sequence.start(0);
    Tone.Transport.start();
    isPlaying = true;
    btn.innerHTML = `<i class="bi bi-pause-circle"></i> Stop`;
  } else {
    sequence.stop();
    Tone.Transport.stop();
    isPlaying = false;
    btn.innerHTML = `<i class="bi bi-play-circle"></i> Play`;
  }
});

select.addEventListener("change", (e) => {
  const name = e.target.value;
  currentInstrument = instruments[name];
});
