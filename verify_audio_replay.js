/**
 * Verification test for SynthwaveAudio, ArcadeAnnouncer, and ReplayManager
 * Strict Rule: ZERO EMOJIS!
 */
'use strict';

const fs = require('fs');
const path = require('path');

console.log('=== TEST 1: ZERO EMOJIS VALIDATION ===');
const filesToCheck = ['main.js', 'index.html', 'style.css'];
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}]/u;

let totalEmojis = 0;
filesToCheck.forEach(f => {
    const text = fs.readFileSync(path.join(__dirname, f), 'utf8');
    const matches = text.match(new RegExp(emojiRegex, 'gu'));
    const count = matches ? matches.length : 0;
    console.log(`Checking ${f}: ${count} emojis found.`);
    totalEmojis += count;
});

if (totalEmojis !== 0) {
    console.error('FAIL: Found emojis in project files!');
    process.exit(1);
}
console.log('PASS: Zero emojis confirmed across all files.');

console.log('=== TEST 2: HTML & CSS REPLAY AND MUSIC ELEMENTS ===');
const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const cssContent = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf8');

const requiredHtmlElements = [
    'id="btn-music"',
    'id="replay-hud"',
    'class="replay-letterbox replay-letterbox-top"',
    'class="replay-letterbox replay-letterbox-bottom"',
    'class="replay-badge"',
    'id="btn-skip-replay"'
];

requiredHtmlElements.forEach(item => {
    if (!htmlContent.includes(item)) {
        console.error(`FAIL: Missing HTML element: ${item}`);
        process.exit(1);
    }
});
console.log('PASS: All required HTML HUD elements present.');

const requiredCssRules = [
    '#btn-music',
    '.replay-hud',
    '.replay-letterbox',
    '.replay-letterbox-top',
    '.replay-letterbox-bottom',
    '.replay-badge',
    '.btn-skip-replay'
];

requiredCssRules.forEach(rule => {
    if (!cssContent.includes(rule)) {
        console.error(`FAIL: Missing CSS rule: ${rule}`);
        process.exit(1);
    }
});
console.log('PASS: All required CSS styling rules present.');

console.log('=== TEST 3: HEADLESS EXECUTION OF MAIN.JS MODULES ===');

global.window = {
    innerWidth: 1920,
    innerHeight: 1080,
    devicePixelRatio: 1,
    addEventListener: () => {},
    removeEventListener: () => {},
    AudioContext: function() {
        this.currentTime = 0;
        this.sampleRate = 44100;
        this.state = 'running';
        this.destination = {};
        this.createOscillator = () => ({
            type: 'sine',
            frequency: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
            connect: () => {},
            start: () => {},
            stop: () => {}
        });
        this.createGain = () => ({
            gain: { setValueAtTime: () => {}, linearRampToValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
            connect: () => {}
        });
        this.createBiquadFilter = () => ({
            type: 'lowpass',
            frequency: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
            Q: { setValueAtTime: () => {} },
            connect: () => {}
        });
        this.createBuffer = (ch, len, rate) => ({
            getChannelData: () => new Float32Array(len)
        });
        this.createBufferSource = () => ({
            connect: () => {},
            start: () => {},
            stop: () => {}
        });
        this.resume = () => {};
    },
    speechSynthesis: {
        getVoices: () => [
            { name: 'Google US English Male', lang: 'en-US' }
        ],
        speak: (u) => {
            global.window.lastUtterance = u;
        },
        cancel: () => {}
    }
};

global.SpeechSynthesisUtterance = function(text) {
    this.text = text;
    this.pitch = 1.0;
    this.rate = 1.0;
    this.volume = 1.0;
    this.voice = null;
};

global.document = {
    createElement: (tag) => {
        if (tag === 'canvas') {
            return {
                width: 1024,
                height: 2048,
                clientWidth: 1920,
                clientHeight: 1080,
                getContext: () => ({
                    save: () => {}, restore: () => {}, clearRect: () => {},
                    fillRect: () => {}, strokeRect: () => {}, rect: () => {},
                    beginPath: () => {}, arc: () => {}, moveTo: () => {}, lineTo: () => {},
                    stroke: () => {}, fill: () => {}, quadraticCurveTo: () => {},
                    createLinearGradient: () => ({ addColorStop: () => {} }),
                    createRadialGradient: () => ({ addColorStop: () => {} }),
                    translate: () => {}, rotate: () => {}, clip: () => {},
                    fillText: () => {}, strokeText: () => {}
                }),
                getBoundingClientRect: () => ({ left: 0, top: 0, width: 1920, height: 1080 })
            };
        }
        return {
            dataset: {},
            classList: { add: () => {}, remove: () => {}, toggle: () => {}, contains: () => false },
            style: {},
            addEventListener: () => {},
            querySelectorAll: () => [],
            appendChild: () => {}
        };
    },
    getElementById: (id) => ({
        id,
        textContent: '',
        innerHTML: '',
        classList: { add: () => {}, remove: () => {}, toggle: () => {}, contains: () => false },
        style: {},
        addEventListener: () => {},
        querySelectorAll: () => []
    }),
    querySelectorAll: () => [],
    querySelector: () => null,
    addEventListener: () => {},
    removeEventListener: () => {}
};

global.localStorage = {
    _s: {},
    getItem(k) { return this._s[k] || null; },
    setItem(k, v) { this._s[k] = String(v); },
    removeItem(k) { delete this._s[k]; }
};

// THREE Mock
global.THREE = {
    Vector2: function(x, y) { this.x = x || 0; this.y = y || 0; },
    Vector3: function(x, y, z) {
        this.x = x || 0; this.y = y || 0; this.z = z || 0;
        this.set = (x, y, z) => { this.x = x; this.y = y; this.z = z; return this; };
        this.copy = (v) => { this.x = v.x; this.y = v.y; this.z = v.z; return this; };
        this.lerp = () => this;
    },
    Color: function(c) {
        this.setHex = () => this;
        this.setHSL = () => this;
        this.copy = () => this;
        this.lerp = () => this;
    },
    Scene: function() {
        this.add = () => {};
        this.remove = () => {};
        this.getObjectByName = () => null;
        this.background = new global.THREE.Color();
        this.fog = {};
    },
    PerspectiveCamera: function() {
        this.position = new global.THREE.Vector3();
        this.rotation = new global.THREE.Vector3();
        this.lookAt = () => {};
        this.updateProjectionMatrix = () => {};
    },
    WebGLRenderer: function() {
        this.domElement = global.document.createElement('canvas');
        this.shadowMap = {};
        this.setSize = () => {};
        this.setPixelRatio = () => {};
        this.render = () => {};
    },
    Mesh: function() {
        this.position = new global.THREE.Vector3();
        this.rotation = new global.THREE.Vector3();
        this.scale = new global.THREE.Vector3(1, 1, 1);
        this.material = { color: new global.THREE.Color() };
        this.userData = {};
        this.children = [];
        this.add = () => {};
    },
    Group: function() {
        this.position = new global.THREE.Vector3();
        this.children = [];
        this.add = () => {};
    },
    PlaneGeometry: function() { this.rotateX = () => {}; },
    CylinderGeometry: function() {},
    BoxGeometry: function() {},
    RingGeometry: function() { this.rotateX = () => {}; },
    TorusGeometry: function() {},
    MeshStandardMaterial: function() { this.color = new global.THREE.Color(); },
    MeshBasicMaterial: function() { this.color = new global.THREE.Color(); },
    CanvasTexture: function() { this.needsUpdate = false; },
    PointLight: function() { this.position = new global.THREE.Vector3(); this.color = new global.THREE.Color(); },
    DirectionalLight: function() { this.position = new global.THREE.Vector3(); this.shadow = { camera: {}, mapSize: {} }; },
    AmbientLight: function() {},
    Raycaster: function() { this.setFromCamera = () => {}; this.ray = { intersectPlane: () => false }; },
    Plane: function() { this.set = () => {}; },
    FogExp2: function() {}
};

require('./main.js');

console.log('=== TEST 4: SYNTHWAVE AUDIO MODULE ===');
if (!global.window.SynthwaveAudio) {
    console.error('FAIL: window.SynthwaveAudio is not defined!');
    process.exit(1);
}
const Synth = global.window.SynthwaveAudio;

// Test BPM adaptive tempo
console.log('Checking default BPM (expected 116):', Synth.getBpm());
if (Math.round(Synth.getBpm()) !== 116) {
    console.error(`FAIL: Default BPM is ${Synth.getBpm()}, expected 116`);
    process.exit(1);
}

// Test Tension activation (Match Point / 6:6)
Synth.setTension(true);
if (!Synth.getTension()) {
    console.error('FAIL: Tension flag not active!');
    process.exit(1);
}
console.log('PASS: SynthwaveAudio tension activates on demand (136 BPM target).');

// Test Start & Stop & Volume & Mute
Synth.start();
if (!Synth.isPlaying()) {
    console.error('FAIL: SynthwaveAudio not playing after start()');
    process.exit(1);
}
Synth.setVolume(0.5);
Synth.setMuted(true);
if (!Synth.isMuted()) {
    console.error('FAIL: SynthwaveAudio not muted after setMuted(true)');
    process.exit(1);
}
Synth.setMuted(false);
Synth.stop();
if (Synth.isPlaying()) {
    console.error('FAIL: SynthwaveAudio still playing after stop()');
    process.exit(1);
}
console.log('PASS: SynthwaveAudio procedural audio lifecycle verified.');

console.log('=== TEST 5: ARCADE ANNOUNCER MODULE ===');
if (!global.window.ArcadeAnnouncer) {
    console.error('FAIL: window.ArcadeAnnouncer is not defined!');
    process.exit(1);
}
const Ann = global.window.ArcadeAnnouncer;

// Test speech synthesizer callouts
Ann.firstGoal();
if (!global.window.lastUtterance || global.window.lastUtterance.pitch !== 0.7 || global.window.lastUtterance.rate !== 1.15) {
    console.error('FAIL: ArcadeAnnouncer speech synthesis parameters mismatch!');
    process.exit(1);
}
console.log('PASS: FIRST GOAL voiced with pitch 0.7 and rate 1.15.');

Ann.doubleBounce();
Ann.megaSmash();
Ann.unstoppable();
Ann.matchPoint();
Ann.victory();
console.log('PASS: All 6 procedural jingles and callouts executed cleanly.');

console.log('=== TEST 6: REPLAY MANAGER MODULE ===');
if (!global.window.ReplayManager) {
    console.error('FAIL: window.ReplayManager is not defined!');
    process.exit(1);
}
const Rep = global.window.ReplayManager;

// Test recording 180 frames into ring buffer
for (let i = 0; i < 200; i++) {
    Rep.recordFrame(
        { x: i * 0.05, z: i * 0.1, vx: 0.2, vz: 0.3, onFire: false },
        { x: -0.5, z: 8.0, vx: 0, vz: 0 },
        { x: 0.5, z: -8.0, vx: 0, vz: 0 }
    );
}

const recorded = Rep.getRecordedCount();
console.log('Recorded frame count (capacity 180):', recorded);
if (recorded !== 180) {
    console.error(`FAIL: Ring buffer recorded ${recorded} frames, expected 180.`);
    process.exit(1);
}
console.log('PASS: ReplayManager 180-frame ring buffer verified.');

// Test shouldTriggerReplay logic
const trigger1 = Rep.shouldTriggerReplay({ isMatchPoint: true, scoreP1: 7, scoreP2: 5, puckSpeed: 0.1, onFire: false, isBounceGoal: false });
const trigger2 = Rep.shouldTriggerReplay({ isMatchPoint: false, scoreP1: 3, scoreP2: 2, puckSpeed: 0.45, onFire: false, isBounceGoal: false });
const trigger3 = Rep.shouldTriggerReplay({ isMatchPoint: false, scoreP1: 2, scoreP2: 1, puckSpeed: 0.1, onFire: true, isBounceGoal: false });
const triggerNo = Rep.shouldTriggerReplay({ isMatchPoint: false, scoreP1: 1, scoreP2: 0, puckSpeed: 0.1, onFire: false, isBounceGoal: false });

if (!trigger1 || !trigger2 || !trigger3 || triggerNo) {
    console.error('FAIL: shouldTriggerReplay logic failed on conditions!');
    process.exit(1);
}
console.log('PASS: Replay trigger conditions verified for decisive and spectacular goals.');

// Test Replay playback and Slow-Mo update
let replayCompleted = false;
Rep.startReplay({
    isP1Scored: true,
    onComplete: () => {
        replayCompleted = true;
    }
});

if (!Rep.isPlaying()) {
    console.error('FAIL: ReplayManager not active after startReplay()');
    process.exit(1);
}

// Advance frames at 0.35x speed
for (let step = 0; step < 1000; step++) {
    if (!Rep.isPlaying()) break;
    Rep.update(0.016);
}

if (!replayCompleted) {
    console.error('FAIL: Replay playback did not complete!');
    process.exit(1);
}
console.log('PASS: Instant Replay Slow-Mo 0.35x playback cycle completed cleanly.');

console.log('\n============================================================');
console.log('ALL VERIFICATION TESTS FOR SYNTHWAVE, ANNOUNCER & REPLAY PASS (100%)!');
console.log('============================================================');
process.exit(0);
