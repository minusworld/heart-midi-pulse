function resetPulsate() {
    var heart = document.querySelector(".heart");
    var parent = heart.parentElement;
    parent.appendChild(heart);
}

var midi;

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess({
        sysex: false
    }).then(onMIDISuccess, onMIDIFailure);
} else {
    alert("Your browser does not support the Web MIDI API.");
}

function onMIDISuccess(midiAccess) {
    midi = midiAccess;
}

function onMIDIFailure(error) {
    alert("No MIDI devices are accessible; your browser may not support the Web MIDI API.");
}