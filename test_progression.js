// Comprehensive verification of AchievementManager and BattlePassManager
const fs = require('fs');
const path = require('path');

const mainJsPath = path.join(__dirname, 'main.js');
const indexHtmlPath = path.join(__dirname, 'index.html');
const styleCssPath = path.join(__dirname, 'style.css');

const mainJs = fs.readFileSync(mainJsPath, 'utf8');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
const styleCss = fs.readFileSync(styleCssPath, 'utf8');

console.log('=== TEST 1: STRICT ZERO EMOJI CHECK ===');
const emojiRegex = /[\u{1F000}-\u{1FAFF}\u{20D0}-\u{20FF}\u{2300}-\u{23FF}\u{2B50}\u{2B55}\u{2934}\u{2935}\u{2B05}\u{2B06}\u{2B07}\u{3030}\u{303D}\u{3297}\u{3299}]/u;

if (emojiRegex.test(mainJs)) {
    console.error('FAIL: Found emoji in main.js!');
    process.exit(1);
}
if (emojiRegex.test(indexHtml)) {
    console.error('FAIL: Found emoji in index.html!');
    process.exit(1);
}
if (emojiRegex.test(styleCss)) {
    console.error('FAIL: Found emoji in style.css!');
    process.exit(1);
}
console.log('PASS: Strictly 0 emojis in main.js, index.html, and style.css.');

console.log('\n=== TEST 2: HTML UI ELEMENTS VERIFICATION ===');
const requiredIds = [
    'btn-open-battle-pass',
    'btn-open-achievements',
    'menu-bp-badge',
    'menu-ach-badge',
    'toast-achievement',
    'toast-ach-title',
    'toast-ach-reward',
    'overlay-achievements',
    'ach-completed-count',
    'ach-total-earned',
    'achievements-container',
    'btn-achievements-back',
    'overlay-battle-pass',
    'bp-current-level',
    'bp-xp-text',
    'bp-progress-bar',
    'bp-vip-banner',
    'bp-tiers-container',
    'btn-bp-back',
    'end-xp-banner',
    'end-xp-earned'
];

requiredIds.forEach(id => {
    if (!indexHtml.includes(`id="${id}"`)) {
        console.error(`FAIL: Missing ID in index.html: ${id}`);
        process.exit(1);
    }
});
console.log(`PASS: All ${requiredIds.length} required progression DOM elements present in index.html.`);

console.log('\n=== TEST 3: CSS STYLES VERIFICATION ===');
const requiredCssClasses = [
    '.menu-meta-row',
    '.bp-level-badge',
    '.ach-claimable-badge',
    '.reward-xp-banner',
    '.toast-achievement',
    '.achievements-modal-card',
    '.achievement-card',
    '.ach-icon-box',
    '.ach-progress-bar',
    '.btn-ach-claim',
    '.battle-pass-modal-card',
    '.bp-header-panel',
    '.bp-vip-active-chip',
    '.bp-tier-card',
    '.bp-track-box',
    '.btn-bp-claim'
];

requiredCssClasses.forEach(cls => {
    if (!styleCss.includes(cls)) {
        console.error(`FAIL: Missing CSS class in style.css: ${cls}`);
        process.exit(1);
    }
});
console.log(`PASS: All ${requiredCssClasses.length} required CSS rules present in style.css.`);

console.log('\n=== TEST 4: MOCK RUNTIME EXECUTION & LOGIC TESTS ===');

// Setup mock DOM and Web APIs for node execution
global.window = {
    innerWidth: 1920,
    innerHeight: 1080,
    devicePixelRatio: 1,
    addEventListener: () => {},
    removeEventListener: () => {}
};

const elements = new Map();
global.document = {
    getElementById: (id) => {
        if (elements.has(id)) return elements.get(id);
        const el = {
            id,
            textContent: '',
            innerHTML: '',
            style: {},
            classList: {
                add: () => {},
                remove: () => {},
                toggle: () => {},
                contains: () => false
            },
            listeners: {},
            appendChild: () => {},
            querySelector: () => null,
            querySelectorAll: () => [],
            addEventListener: (ev, fn) => { el.listeners[ev] = fn; }
        };
        elements.set(id, el);
        return el;
    },
    createElement: (tag) => {
        const listeners = {};
        if (tag === 'canvas') {
            return {
                width: 1024,
                height: 2048,
                getContext: () => ({
                    save: () => {},
                    restore: () => {},
                    clearRect: () => {},
                    fillRect: () => {},
                    strokeRect: () => {},
                    beginPath: () => {},
                    arc: () => {},
                    moveTo: () => {},
                    lineTo: () => {},
                    stroke: () => {},
                    fill: () => {},
                    quadraticCurveTo: () => {},
                    createLinearGradient: () => ({ addColorStop: () => {} }),
                    createRadialGradient: () => ({ addColorStop: () => {} }),
                    translate: () => {},
                    rotate: () => {},
                    fillText: () => {}
                })
            };
        }
        return {
            tagName: tag,
            style: {},
            classList: {
                add: () => {},
                remove: () => {},
                toggle: () => {},
                contains: () => false
            },
            innerHTML: '',
            textContent: '',
            children: [],
            appendChild: function(c) { this.children.push(c); },
            querySelector: function(sel) {
                if (sel.includes('btn-ach-claim') || sel.includes('btn-bp-claim')) {
                    return {
                        addEventListener: (evt, cb) => { listeners[evt] = cb; },
                        click: () => { if (listeners['click']) listeners['click'](); },
                        style: {},
                        classList: { add: () => {}, remove: () => {} }
                    };
                }
                return null;
            },
            querySelectorAll: () => [],
            addEventListener: (evt, cb) => { listeners[evt] = cb; }
        };
    },
    addEventListener: () => {},
    removeEventListener: () => {},
    querySelectorAll: () => []
};

const storage = {};
global.localStorage = {
    getItem: (k) => storage[k] || null,
    setItem: (k, v) => { storage[k] = String(v); },
    removeItem: (k) => { delete storage[k]; },
    clear: () => { Object.keys(storage).forEach(k => delete storage[k]); }
};

global.performance = { now: () => Date.now() };
global.requestAnimationFrame = (cb) => setTimeout(cb, 16);
global.AudioContext = class {
    constructor() { this.currentTime = 0; this.destination = {}; }
    createGain() { return { gain: { setValueAtTime: () => {}, linearRampToValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} }, connect: () => {} }; }
    createOscillator() { return { frequency: { setValueAtTime: () => {} }, connect: () => {}, start: () => {}, stop: () => {} }; }
    createBiquadFilter() { return { frequency: { setValueAtTime: () => {} }, Q: { setValueAtTime: () => {} }, connect: () => {} }; }
    createBuffer() { return { getChannelData: () => new Float32Array(100) }; }
    createBufferSource() { return { connect: () => {}, start: () => {} }; }
    resume() {}
};

global.THREE = {
    Scene: function() {
        this.add = () => {};
        this.remove = () => {};
        this.background = new THREE.Color(0x000000);
        this.fog = { color: new THREE.Color(0x000000), density: 0.02 };
    },
    PerspectiveCamera: function() {
        this.position = new THREE.Vector3();
        this.lookAt = () => {};
        this.updateProjectionMatrix = () => {};
    },
    WebGLRenderer: function() {
        this.setPixelRatio = () => {};
        this.setSize = () => {};
        this.shadowMap = {};
        this.render = () => {};
    },
    PCFSoftShadowMap: 2,
    AmbientLight: function(c, i) { this.color = new THREE.Color(c); this.intensity = i; },
    DirectionalLight: function(c, i) { this.color = new THREE.Color(c); this.intensity = i; this.position = new THREE.Vector3(); this.shadow = { mapSize: {}, camera: {} }; },
    SpotLight: function(c, i) { this.color = new THREE.Color(c); this.intensity = i; this.position = new THREE.Vector3(); this.target = { position: new THREE.Vector3() }; },
    PointLight: function(c, i) { this.color = new THREE.Color(c); this.intensity = i; this.position = new THREE.Vector3(); },
    Vector3: function(x = 0, y = 0, z = 0) {
        this.x = x; this.y = y; this.z = z;
        this.set = (nx, ny, nz) => { this.x = nx; this.y = ny; this.z = nz; return this; };
        this.copy = (v) => { this.x = v.x; this.y = v.y; this.z = v.z; return this; };
        this.lerp = (v, alpha) => {
            this.x += (v.x - this.x) * alpha;
            this.y += (v.y - this.y) * alpha;
            this.z += (v.z - this.z) * alpha;
            return this;
        };
    },
    Color: function(hex = 0xffffff) {
        this.r = 1; this.g = 1; this.b = 1;
        this.setHex = (h) => {
            this.r = ((h >> 16) & 255) / 255;
            this.g = ((h >> 8) & 255) / 255;
            this.b = (h & 255) / 255;
            return this;
        };
        if (typeof hex === 'number') this.setHex(hex);
        this.copy = (c) => { this.r = c.r; this.g = c.g; this.b = c.b; return this; };
        this.lerp = (c, alpha) => {
            this.r += (c.r - this.r) * alpha;
            this.g += (c.g - this.g) * alpha;
            this.b += (c.b - this.g) * alpha;
            return this;
        };
    },
    CanvasTexture: function(c) { this.image = c; this.needsUpdate = false; this.generateMipmaps = true; },
    LinearMipmapLinearFilter: 1008,
    MeshStandardMaterial: function(opt = {}) {
        this.color = new THREE.Color(opt.color || 0xffffff);
        this.roughness = opt.roughness !== undefined ? opt.roughness : 0.5;
        this.metalness = opt.metalness !== undefined ? opt.metalness : 0.5;
        this.map = opt.map || null;
    },
    MeshBasicMaterial: function(opt = {}) { this.color = new THREE.Color(opt.color || 0xffffff); },
    PlaneGeometry: function() { this.rotateX = () => {}; },
    BoxGeometry: function() {},
    CylinderGeometry: function() {},
    SphereGeometry: function() {},
    TorusGeometry: function() { this.rotateX = () => {}; this.rotateY = () => {}; },
    RingGeometry: function() { this.rotateX = () => {}; },
    CircleGeometry: function() { this.rotateY = () => {}; },
    BufferGeometry: function() { this.setAttribute = () => {}; },
    BufferAttribute: function() {},
    PointsMaterial: function() {},
    Points: function(g, m) { this.geometry = g; this.material = m; this.visible = false; this.rotation = { y: 0 }; },
    Mesh: function(g, m) { this.geometry = g; this.material = m; this.position = new THREE.Vector3(); this.rotation = new THREE.Vector3(); this.scale = new THREE.Vector3(1, 1, 1); this.children = []; this.add = () => {}; },
    Group: function() { this.children = []; this.add = () => {}; this.position = new THREE.Vector3(); },
    Raycaster: function() {},
    Plane: function() {},
    FogExp2: function(c, d) { this.color = new THREE.Color(c); this.density = d; },
    DoubleSide: 2
};

// Evaluate main.js in sandbox
try {
    eval(mainJs + `
global.AchievementManager = AchievementManager;
global.BattlePassManager = BattlePassManager;
global.SaveManager = SaveManager;
`);
} catch (e) {
    console.error('FAIL: Error evaluating main.js:', e);
    process.exit(1);
}

// 4.1 AchievementManager check
const achievements = AchievementManager.getData();
console.log(`Checking AchievementManager: ${achievements.length} achievements loaded.`);
if (achievements.length !== 20) {
    console.error(`FAIL: Expected 20 achievements, found ${achievements.length}`);
    process.exit(1);
}

const expectedAchIds = [
    'first_goal', 'ricochet_sniper', 'clean_sheet', 'supersonic',
    'epic_comeback', 'tourney_champ', 'boss_slayer', 'win_streak_5',
    'win_streak_10', 'goals_25', 'goals_50', 'goals_100',
    'ultimate_master', 'trickshot_novice', 'trickshot_master',
    'collector_skins', 'speed_demon', 'wall_bouncer', 'lucky_spinner',
    'league_champion'
];

expectedAchIds.forEach(id => {
    const found = achievements.find(a => a.id === id);
    if (!found) {
        console.error(`FAIL: Achievement not found: ${id}`);
        process.exit(1);
    }
    if (!found.reward || found.reward <= 0) {
        console.error(`FAIL: Achievement ${id} has invalid reward!`);
        process.exit(1);
    }
});
console.log('PASS: All 20 expected achievement IDs and rewards validated.');

// Test achievement unlock & claim flow
localStorage.clear();
SaveManager.load();
const initialCoins = SaveManager.get().coins;
AchievementManager.unlock('first_goal');
const dAfterUnlock = SaveManager.get();
if (!dAfterUnlock.achievements || !dAfterUnlock.achievements.first_goal || !dAfterUnlock.achievements.first_goal.unlocked) {
    console.error('FAIL: first_goal was not marked unlocked in SaveManager!');
    process.exit(1);
}

const firstGoalAch = achievements.find(a => a.id === 'first_goal');
AchievementManager.claim(firstGoalAch);
const dAfterClaim = SaveManager.get();
if (!dAfterClaim.achievements.first_goal.claimed) {
    console.error('FAIL: first_goal was not marked claimed!');
    process.exit(1);
}
if (dAfterClaim.coins !== initialCoins + firstGoalAch.reward) {
    console.error(`FAIL: Coins did not increase properly: got ${dAfterClaim.coins}, expected ${initialCoins + firstGoalAch.reward}`);
    process.exit(1);
}
console.log('PASS: Achievement unlock and claim flow verified.');

// 4.2 BattlePassManager check
const tiers = BattlePassManager.getData();
console.log(`Checking BattlePassManager: ${tiers.length} tiers loaded.`);
if (tiers.length !== 15) {
    console.error(`FAIL: Expected 15 tiers, found ${tiers.length}`);
    process.exit(1);
}

tiers.forEach((t, i) => {
    if (t.tier !== i + 1) {
        console.error(`FAIL: Tier index mismatch at ${i}`);
        process.exit(1);
    }
    if (!t.free || !t.vip) {
        console.error(`FAIL: Tier ${t.tier} missing free or vip track!`);
        process.exit(1);
    }
});
console.log('PASS: All 15 Battle Pass tiers validated with Free and VIP tracks.');

// Test XP and Tier Progression
localStorage.clear();
SaveManager.load();
if (BattlePassManager.getLevel() !== 1) {
    console.error('FAIL: Initial Battle Pass level should be 1');
    process.exit(1);
}

// Add 250 XP -> Level 2
BattlePassManager.addXP(250, 'test');
if (BattlePassManager.getLevel() !== 2) {
    console.error(`FAIL: Battle Pass level should be 2 after 250 XP, got ${BattlePassManager.getLevel()}`);
    process.exit(1);
}
const prog = BattlePassManager.getTierProgress();
if (prog.current !== 50 || prog.max !== 200 || prog.pct !== 25) {
    console.error(`FAIL: Tier progress calculation wrong: ${JSON.stringify(prog)}`);
    process.exit(1);
}
console.log('PASS: Battle Pass XP addition and tier level progression verified.');

// Test Free Claiming
const coinsBeforeFreeClaim = SaveManager.get().coins;
const tier1Cfg = tiers.find(t => t.tier === 1);
BattlePassManager.claim(1, false);
if (!SaveManager.get().battlePass.claimedFree[1]) {
    console.error('FAIL: Tier 1 free track was not marked claimed!');
    process.exit(1);
}
if (SaveManager.get().coins !== coinsBeforeFreeClaim + tier1Cfg.free.val) {
    console.error('FAIL: Free track reward coins not credited!');
    process.exit(1);
}
console.log('PASS: Battle Pass Free track reward claimed and credited.');

// Test VIP lock before purchase
BattlePassManager.claim(1, true);
if (SaveManager.get().battlePass.claimedVip && SaveManager.get().battlePass.claimedVip[1]) {
    console.error('FAIL: Claimed VIP without VIP purchased!');
    process.exit(1);
}

// Purchase VIP with coins
SaveManager.addCoins(500);
const coinsBeforeVIP = SaveManager.get().coins;
const buySuccess = BattlePassManager.buyVIPWithCoins();
if (!buySuccess || !BattlePassManager.isVIP()) {
    console.error('FAIL: buyVIPWithCoins failed or VIP not active!');
    process.exit(1);
}
if (SaveManager.get().coins !== coinsBeforeVIP - 400) {
    console.error('FAIL: VIP 400 coin deduction mismatch!');
    process.exit(1);
}

// Claim VIP now
const coinsBeforeVipClaim = SaveManager.get().coins;
BattlePassManager.claim(1, true);
if (!SaveManager.get().battlePass.claimedVip[1]) {
    console.error('FAIL: Tier 1 VIP reward not claimed after buying VIP!');
    process.exit(1);
}
if (SaveManager.get().coins !== coinsBeforeVipClaim + tier1Cfg.vip.val) {
    console.error('FAIL: VIP reward coins not credited!');
    process.exit(1);
}
console.log('PASS: Battle Pass VIP purchase and claiming verified.');

console.log('\n============================================================');
console.log('>>> ALL PROGRESSION & RETENTION TESTS PASSED (100%)! <<<');
console.log('============================================================\n');
process.exit(0);
