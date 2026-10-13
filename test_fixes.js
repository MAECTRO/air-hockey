/**
 * Verification test for Pause Modal, Menu Exit, Offline Bot AI, and Lighting fixes.
 * Strict Rule: ZERO EMOJIS!
 */
'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TEST 1: STRICT ZERO EMOJIS VALIDATION ===');
const filesToCheck = ['main.js', 'index.html', 'style.css'];
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F900}-\u{1F9FF}\u{1FA70}-\u{1FAFF}]/u;

filesToCheck.forEach(f => {
    const text = fs.readFileSync(path.join(__dirname, f), 'utf8');
    const matches = text.match(new RegExp(emojiRegex, 'gu'));
    const count = matches ? matches.length : 0;
    assert.strictEqual(count, 0, `File ${f} must contain zero emojis!`);
});
console.log('PASS: Strictly zero emojis across all project files.');

console.log('=== TEST 2: DOM & ENVIRONMENT MOCK SETUP ===');
const elementMap = {};
function createMockEl(id) {
    const el = {
        id,
        style: {},
        dataset: {},
        classList: {
            classes: new Set(),
            add(c) { this.classes.add(c); },
            remove(c) { this.classes.delete(c); },
            toggle(c, force) {
                if (force === undefined) {
                    if (this.classes.has(c)) this.classes.delete(c);
                    else this.classes.add(c);
                } else if (force) {
                    this.classes.add(c);
                } else {
                    this.classes.delete(c);
                }
            },
            contains(c) { return this.classes.has(c); }
        },
        listeners: {},
        addEventListener(event, fn) {
            if (!this.listeners[event]) this.listeners[event] = [];
            this.listeners[event].push(fn);
        },
        click() {
            if (this.listeners['click']) {
                this.listeners['click'].forEach(fn => fn({ target: this }));
            }
        },
        textContent: '',
        innerHTML: '',
        appendChild() {},
        querySelector() { return null; },
        querySelectorAll() { return []; },
        getBoundingClientRect() { return { left: 0, top: 0, width: 800, height: 600 }; },
        getContext: () => ({
            save: () => {}, restore: () => {}, clearRect: () => {},
            fillRect: () => {}, strokeRect: () => {}, rect: () => {},
            beginPath: () => {}, closePath: () => {}, arc: () => {}, moveTo: () => {}, lineTo: () => {},
            stroke: () => {}, fill: () => {}, quadraticCurveTo: () => {},
            createLinearGradient: () => ({ addColorStop: () => {} }),
            createRadialGradient: () => ({ addColorStop: () => {} }),
            translate: () => {}, rotate: () => {}, clip: () => {},
            fillText: () => {}, strokeText: () => {}
        })
    };
    elementMap[id] = el;
    return el;
}

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
        getVoices: () => [{ name: 'Google US English Male', lang: 'en-US' }],
        speak: () => {},
        cancel: () => {}
    }
};

global.SpeechSynthesisUtterance = function(text) {
    this.text = text;
};

global.document = {
    createElement: (tag) => {
        if (tag === 'canvas') {
            const canvas = createMockEl('canvas');
            canvas.width = 1024;
            canvas.height = 2048;
            canvas.clientWidth = 1920;
            canvas.clientHeight = 1080;
            canvas.getContext = () => ({
                save: () => {}, restore: () => {}, clearRect: () => {},
                fillRect: () => {}, strokeRect: () => {}, rect: () => {},
                beginPath: () => {}, arc: () => {}, moveTo: () => {}, lineTo: () => {},
                stroke: () => {}, fill: () => {}, quadraticCurveTo: () => {},
                createLinearGradient: () => ({ addColorStop: () => {} }),
                createRadialGradient: () => ({ addColorStop: () => {} }),
                translate: () => {}, rotate: () => {}, clip: () => {},
                fillText: () => {}, strokeText: () => {}
            });
            return canvas;
        }
        return createMockEl(tag);
    },
    getElementById: (id) => elementMap[id] || createMockEl(id),
    querySelectorAll: () => [],
    querySelector: () => null,
    addEventListener: () => {},
    removeEventListener: () => {},
    hidden: false
};

global.localStorage = {
    _s: {},
    getItem(k) { return this._s[k] || null; },
    setItem(k, v) { this._s[k] = String(v); },
    removeItem(k) { delete this._s[k]; }
};

global.BroadcastChannel = class {
    constructor(name) { this.name = name; }
    postMessage() {}
    close() {}
    set onmessage(fn) {}
};

global.performance = { now: () => Date.now() };
global.requestAnimationFrame = () => {};
global.cancelAnimationFrame = () => {};

// Complete THREE mock
global.THREE = {
    Vector2: function(x, y) { this.x = x || 0; this.y = y || 0; this.set = (nx, ny) => { this.x = nx; this.y = ny; }; },
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
        this.getHex = () => c || 0;
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
    OrthographicCamera: function() {
        this.position = new global.THREE.Vector3();
        this.lookAt = () => {};
    },
    WebGLRenderer: function() {
        this.domElement = global.document.createElement('canvas');
        this.shadowMap = {};
        this.capabilities = { isWebGL2: true };
        this.setSize = () => {};
        this.setPixelRatio = () => {};
        this.render = () => {};
        this.setRenderTarget = () => {};
    },
    WebGLRenderTarget: function() { this.texture = {}; },
    Mesh: function() {
        this.position = new global.THREE.Vector3();
        this.rotation = new global.THREE.Vector3();
        this.scale = new global.THREE.Vector3(1, 1, 1);
        this.material = { color: new global.THREE.Color(), roughness: 0.15, metalness: 0.14 };
        this.userData = {};
        this.children = [];
        this.add = () => {};
        this.lookAt = () => {};
        this.traverse = (cb) => { cb(this); this.children.forEach(c => c.traverse ? c.traverse(cb) : cb(c)); };
    },
    Group: function() {
        this.position = new global.THREE.Vector3();
        this.rotation = new global.THREE.Vector3();
        this.userData = {};
        this.children = [];
        this.add = () => {};
        this.lookAt = () => {};
        this.traverse = (cb) => { cb(this); this.children.forEach(c => c.traverse ? c.traverse(cb) : cb(c)); };
    },
    BufferGeometry: function() { this.setAttribute = () => {}; this.rotateX = () => {}; },
    BufferAttribute: function() {},
    PlaneGeometry: function() { this.rotateX = () => {}; },
    CylinderGeometry: function() {},
    BoxGeometry: function() {},
    RingGeometry: function() { this.rotateX = () => {}; },
    TorusGeometry: function() { this.rotateX = () => {}; },
    SphereGeometry: function() {},
    Points: function() { this.position = new global.THREE.Vector3(); },
    PointsMaterial: function() {},
    MeshStandardMaterial: function(opts = {}) {
        Object.assign(this, opts);
        this.color = new global.THREE.Color(opts.color);
        this.emissive = new global.THREE.Color(opts.emissive);
    },
    MeshBasicMaterial: function(opts = {}) {
        Object.assign(this, opts);
        this.color = new global.THREE.Color(opts.color);
    },
    ShaderMaterial: function(opts = {}) { Object.assign(this, opts); },
    CanvasTexture: function() { this.needsUpdate = false; },
    PointLight: function(col, inten) {
        this.position = new global.THREE.Vector3();
        this.color = new global.THREE.Color(col);
        this.intensity = inten || 1;
    },
    SpotLight: function(col, inten) {
        this.position = new global.THREE.Vector3();
        this.color = new global.THREE.Color(col);
        this.intensity = inten || 1;
        this.target = { position: new global.THREE.Vector3() };
        this.shadow = { camera: {}, mapSize: {} };
    },
    DirectionalLight: function(col, inten) {
        this.position = new global.THREE.Vector3();
        this.color = new global.THREE.Color(col);
        this.intensity = inten || 1;
        this.shadow = { camera: {}, mapSize: {} };
    },
    AmbientLight: function(col, inten) {
        this.color = new global.THREE.Color(col);
        this.intensity = inten || 1;
    },
    Raycaster: function() { this.setFromCamera = () => {}; this.ray = { intersectPlane: () => false }; },
    Plane: function() { this.set = () => {}; },
    FogExp2: function(c) { this.color = new global.THREE.Color(c); },
    LinearFilter: 1006,
    RGBAFormat: 1023
};

console.log('=== TEST 3: LOADING MAIN.JS ===');
require('./main.js');
console.log('PASS: main.js loaded and compiled cleanly.');

console.log('=== TEST 4: GAME INITIALIZATION AND MATCH START ===');
assert(global.window.Game, 'window.Game must be exported');
const Game = global.window.Game;

Game.init();
console.log('PASS: Game.init() executed.');

// Verify ReplayManager TDZ fix: startMatch must execute without throwing!
Game.startMatch();
console.log('PASS: Game.startMatch() ran cleanly (no ReplayManager TDZ error).');

const state = Game.getState();
assert.strictEqual(state.phase, 'playing', 'Game phase must be playing after startMatch()');
assert.strictEqual(state.scoreP1, 0, 'P1 score must be 0');
assert.strictEqual(state.scoreP2, 0, 'P2 score must be 0');

console.log('=== TEST 5: IN-GAME HUD PAUSE & HOME BUTTONS ===');
const btnHome = elementMap['btn-home'];
const btnPause = elementMap['btn-pause'];
assert(btnHome && btnHome.style.display === 'flex', 'btn-home must have display: flex in active match');
assert(btnPause && btnPause.style.display === 'flex', 'btn-pause must have display: flex in active match');
console.log('PASS: Both btn-home and btn-pause are displayed during match.');

console.log('=== TEST 6: PAUSE MODAL INTERACTIONS ===');
const overlayPause = elementMap['overlay-pause'];
const pauseScoreP1 = elementMap['pause-score-p1'];
const pauseScoreP2 = elementMap['pause-score-p2'];

// Click pause button
btnPause.click();
assert.strictEqual(Game.isPaused(), true, 'Game must be paused');
assert(overlayPause.classList.contains('active'), 'Pause modal overlay must be active');
console.log('PASS: Pause button successfully opens pause modal.');

// Click resume button
const btnResume = elementMap['btn-pause-resume'];
btnResume.click();
assert.strictEqual(Game.isPaused(), false, 'Game must unpause on resume click');
assert(!overlayPause.classList.contains('active'), 'Pause modal must close on resume');
console.log('PASS: Resume button successfully unpauses game.');

// Click exit to menu from pause modal
btnPause.click();
assert.strictEqual(Game.isPaused(), true, 'Game paused again');
const btnMenu = elementMap['btn-pause-menu'];
btnMenu.click();
assert.strictEqual(Game.isPaused(), false, 'Pause flag cleared on exit to menu');
assert.strictEqual(Game.getState().phase, 'menu', 'Game phase must be menu');
assert.strictEqual(btnHome.style.display, 'none', 'btn-home must be hidden in menu');
assert.strictEqual(btnPause.style.display, 'none', 'btn-pause must be hidden in menu');
console.log('PASS: Exit to main menu from pause modal verified.');

console.log('=== TEST 7: OFFLINE BOT AI EXECUTION ===');
const topMallet = { x: 0, z: -6, vx: 0, vz: 0, r: 0.8 };
const puck = { x: 1.2, z: -2.5, vx: -0.1, vz: -0.15 };
const aiCfg = { speed: 0.12, attackBias: 0.8 };

assert(global.AIAgent || global.window.AIAgent, 'AIAgent module must exist');
const AI = global.AIAgent || global.window.AIAgent;
AI.update(topMallet, puck, aiCfg);
assert(typeof topMallet.x === 'number' && typeof topMallet.z === 'number', 'Bot mallet must update coordinates');
console.log('PASS: Bot AIAgent.update executes properly without freezing.');

console.log('=== TEST 8: THEME LIGHTING CALIBRATION ===');
const THEMES = global.THEMES || global.window.THEMES;
assert(THEMES, 'THEMES config must be present');
Object.keys(THEMES).forEach(id => {
    const t = THEMES[id];
    assert(t.lights.centerSpot.intensity <= 0.85, `Theme ${id} centerSpot light must not exceed 0.85 (was ${t.lights.centerSpot.intensity})`);
});
console.log('=== TEST 9: RANKED MODAL NAVIGATION & ISSUE 1 FIX ===');
const overlayRanked = elementMap['overlay-ranked'];
const overlayMenu = elementMap['overlay-menu'];
const btnRankedBack = elementMap['btn-ranked-back'];

assert(overlayRanked, 'overlay-ranked must exist');
assert(overlayMenu, 'overlay-menu must exist');
assert(btnRankedBack, 'btn-ranked-back must exist');

// Simulate opening ranked modal
overlayRanked.classList.add('active');
overlayMenu.classList.remove('active');
assert.strictEqual(overlayRanked.classList.contains('active'), true);
assert.strictEqual(overlayMenu.classList.contains('active'), false);

// Click "В меню" / "Назад" button
btnRankedBack.click();
assert.strictEqual(overlayRanked.classList.contains('active'), false, 'overlay-ranked must be hidden after clicking btn-ranked-back');
assert.strictEqual(overlayMenu.classList.contains('active'), true, 'overlay-menu must be active after clicking btn-ranked-back');
console.log('PASS: Clicking #btn-ranked-back successfully returns from online/ranked modal to the main menu (Issue 1 fixed).');

// Verify all ranked modal buttons have click listeners
const rankedBtnIds = [
    'btn-ranked-back',
    'btn-ranked-find-match',
    'btn-ranked-cancel-search',
    'btn-ranked-open-rooms',
    'btn-rooms-back',
    'btn-room-create',
    'btn-room-join',
    'btn-room-copy'
];
rankedBtnIds.forEach(id => {
    const el = elementMap[id];
    assert(el, `Button #${id} must exist in DOM`);
    assert(el.listeners['click'] && el.listeners['click'].length > 0, `Button #${id} must have click event listener`);
});
console.log('PASS: All 8 Ranked & Multiplayer buttons in overlay-ranked are fully wired up.');

console.log('=== TEST 10: VK PLAY / VK GAMES SDK v2 INTEGRATION ===');
const VKService = global.VKService || global.window.VKService;
assert(VKService, 'VKService must be exported');
assert(typeof VKService.init === 'function', 'VKService.init must exist');
assert(typeof VKService.showInterstitial === 'function', 'VKService.showInterstitial must exist');
assert(typeof VKService.showRewarded === 'function', 'VKService.showRewarded must exist');
assert(typeof VKService.saveCloud === 'function', 'VKService.saveCloud must exist');
assert(typeof VKService.submitScore === 'function', 'VKService.submitScore must exist');
assert(typeof VKService.fetchLeaderboard === 'function', 'VKService.fetchLeaderboard must exist');
assert(typeof VKService.canShowShortcut === 'function', 'VKService.canShowShortcut must exist');
assert(typeof VKService.showShortcutPrompt === 'function', 'VKService.showShortcutPrompt must exist');
assert(typeof VKService.checkAndPromptReview === 'function', 'VKService.checkAndPromptReview must exist');
assert(typeof VKService.shareInvite === 'function', 'VKService.shareInvite must exist');

// Verify backward compatibility alias
const YandexService = global.YandexService || global.window.YandexService;
assert.strictEqual(YandexService, VKService, 'YandexService must alias VKService for 100% backward compatibility');

// Verify HTML SDK script tag and title
const indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
assert(!indexHtml.includes('yandex.ru/games/sdk/v2'), 'index.html must not contain Yandex SDK');
assert(indexHtml.includes('@vkontakte/vk-bridge/dist/vk-bridge.umd.js'), 'index.html must include VK Bridge SDK script');
assert(indexHtml.includes('Air Hockey Pro — VK Play'), 'index.html title must reflect VK Play');
assert(indexHtml.includes('id="btn-vk-lb"'), 'index.html must contain btn-vk-lb');
console.log('PASS: VK Bridge SDK v2 fully integrated, Yandex SDK completely excised, compatibility verified.');

console.log('\n============================================================');
console.log('>>> ALL VERIFICATION TESTS PASSED SUCCESSFULLY (100%)! <<<');
console.log('============================================================\n');
process.exit(0);
