const fs = require('fs');
const assert = require('assert');

// 1. Mock browser & DOM environment for headless Node testing
global.window = {
    innerWidth: 1920,
    innerHeight: 1080,
    devicePixelRatio: 1,
    addEventListener: () => {},
    removeEventListener: () => {}
};
const domElements = new Map();
global.document = {
    createElement: (tag) => {
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
                    rect: () => {},
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
                    clip: () => {},
                    fillText: () => {}
                })
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
    getElementById: (id) => {
        if (domElements.has(id)) return domElements.get(id);
        let innerHTML = '';
        const el = {
            id,
            get innerHTML() { return innerHTML; },
            set innerHTML(val) { innerHTML = val; },
            classList: { add: () => {}, remove: () => {}, toggle: () => {}, contains: () => false },
            style: {},
            addEventListener: () => {},
            querySelectorAll: (sel) => {
                const matches = [];
                const regex = /data-arena-id="([^"]+)"/g;
                let m;
                while ((m = regex.exec(innerHTML)) !== null) {
                    matches.push({
                        dataset: { arenaId: m[1] },
                        addEventListener: () => {}
                    });
                }
                return matches;
            }
        };
        domElements.set(id, el);
        return el;
    },
    addEventListener: () => {},
    removeEventListener: () => {},
    querySelectorAll: () => []
};

const storage = {};
global.localStorage = {
    getItem: (k) => storage[k] || null,
    setItem: (k, v) => { storage[k] = String(v); },
    removeItem: (k) => { delete storage[k]; }
};

// Mock THREE.js
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
    AmbientLight: function(c, i) {
        this.color = new THREE.Color(c);
        this.intensity = i;
    },
    DirectionalLight: function(c, i) {
        this.color = new THREE.Color(c);
        this.intensity = i;
        this.position = new THREE.Vector3();
        this.shadow = { mapSize: {}, camera: {} };
    },
    SpotLight: function(c, i, d, a, p, dec) {
        this.color = new THREE.Color(c);
        this.intensity = i;
        this.position = new THREE.Vector3();
        this.target = { position: new THREE.Vector3() };
    },
    PointLight: function(c, i, d) {
        this.color = new THREE.Color(c);
        this.intensity = i;
        this.position = new THREE.Vector3();
    },
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
            this.b += (c.b - this.b) * alpha;
            return this;
        };
    },
    CanvasTexture: function(c) {
        this.image = c;
        this.needsUpdate = false;
        this.generateMipmaps = true;
        this.minFilter = 1008;
    },
    LinearMipmapLinearFilter: 1008,
    MeshStandardMaterial: function(opt = {}) {
        this.color = new THREE.Color(opt.color || 0xffffff);
        this.roughness = opt.roughness !== undefined ? opt.roughness : 0.5;
        this.metalness = opt.metalness !== undefined ? opt.metalness : 0.5;
        this.map = opt.map || null;
    },
    MeshBasicMaterial: function(opt = {}) {
        this.color = new THREE.Color(opt.color || 0xffffff);
    },
    PlaneGeometry: function() { this.rotateX = () => {}; this.rotateY = () => {}; this.rotateZ = () => {}; },
    BoxGeometry: function() { this.rotateX = () => {}; this.rotateY = () => {}; this.rotateZ = () => {}; },
    CylinderGeometry: function() { this.rotateX = () => {}; this.rotateY = () => {}; this.rotateZ = () => {}; },
    SphereGeometry: function() { this.rotateX = () => {}; this.rotateY = () => {}; this.rotateZ = () => {}; },
    TorusGeometry: function() { this.rotateX = () => {}; this.rotateY = () => {}; this.rotateZ = () => {}; },
    RingGeometry: function() { this.rotateX = () => {}; this.rotateY = () => {}; this.rotateZ = () => {}; },
    CircleGeometry: function() { this.rotateX = () => {}; this.rotateY = () => {}; this.rotateZ = () => {}; },
    BufferGeometry: function() { this.setAttribute = () => {}; },
    BufferAttribute: function() {},
    PointsMaterial: function() {},
    Points: function(g, m) { this.geometry = g; this.material = m; this.visible = false; this.rotation = { y: 0 }; },
    Mesh: function(g, m) { this.geometry = g; this.material = m; this.position = new THREE.Vector3(); this.children = []; this.add = () => {}; },
    Group: function() { this.children = []; this.add = () => {}; this.position = new THREE.Vector3(); this.getObjectByName = () => null; },
    Raycaster: function() { this.setFromCamera = () => {}; this.ray = { intersectPlane: () => false }; },
    Plane: function() {},
    FogExp2: function(c, d) { this.color = new THREE.Color(c); this.density = d; },
    DoubleSide: 2
};

console.log('--- Loading main.js ---');
const mainCode = fs.readFileSync('main.js', 'utf8');

// Evaluate main.js and export symbols to global
eval(mainCode + `
global.THEMES = THEMES;
global.THEME_ICONS = THEME_ICONS;
global.ThemeManager = ThemeManager;
global.drawThemeField = drawThemeField;
global.SKINS = SKINS;
global.I18n = I18n;
global.SaveManager = SaveManager;
global.Arena3D = Arena3D;
`);

console.log('--- TEST 1: Catalog of 10 Arenas in THEMES ---');
const expectedArenas = [
    'classic_pub',
    'winter_classic',
    'minimal_studio',
    'deep_space',
    'inferno_core',
    'sunset_coast',
    'zen_dojo',
    'synthwave_arcade',
    'underground_garage',
    'royal_velvet'
];

assert(typeof THEMES === 'object', 'THEMES must be defined as an object');
const themeKeys = Object.keys(THEMES);
assert.strictEqual(themeKeys.length, 10, `Expected 10 themes in THEMES, found ${themeKeys.length}`);

expectedArenas.forEach(id => {
    assert(THEMES[id], `Missing theme config for: ${id}`);
    const cfg = THEMES[id];
    assert.strictEqual(cfg.id, id, `Theme ID mismatch for: ${id}`);
    assert(cfg.lights, `Theme ${id} missing lights config`);
    assert(cfg.lights.ambient, `Theme ${id} missing lights.ambient`);
    assert(cfg.lights.stadium, `Theme ${id} missing lights.stadium`);
    assert(cfg.lights.centerSpot, `Theme ${id} missing lights.centerSpot`);
    assert(cfg.lights.underGlow, `Theme ${id} missing lights.underGlow`);
    assert(cfg.materials, `Theme ${id} missing materials config`);
    assert(cfg.materials.ice, `Theme ${id} missing materials.ice`);
    assert(cfg.materials.railBody, `Theme ${id} missing materials.railBody`);
    assert(cfg.materials.neonStrip, `Theme ${id} missing materials.neonStrip`);
    assert(cfg.materials.goalBox, `Theme ${id} missing materials.goalBox`);
    assert(cfg.materials.stadiumFloor, `Theme ${id} missing materials.stadiumFloor`);
    assert(cfg.materials.stadiumTower, `Theme ${id} missing materials.stadiumTower`);
    assert(cfg.materials.stadiumLamp, `Theme ${id} missing materials.stadiumLamp`);
    assert(cfg.materials.stadiumNeon, `Theme ${id} missing materials.stadiumNeon`);
    assert(cfg.materials.mallet, `Theme ${id} missing materials.mallet`);
    assert(typeof cfg.materials.mallet.roughness === 'number', `Theme ${id} mallet roughness invalid`);
    assert(typeof cfg.materials.mallet.metalness === 'number', `Theme ${id} mallet metalness invalid`);
    assert(cfg.materials.puck, `Theme ${id} missing materials.puck`);
    assert(typeof cfg.materials.puck.roughness === 'number', `Theme ${id} puck roughness invalid`);
    assert(typeof cfg.materials.puck.metalness === 'number', `Theme ${id} puck metalness invalid`);
    assert(typeof cfg.background === 'number', `Theme ${id} background must be number hex`);
    assert(cfg.fog && typeof cfg.fog.color === 'number', `Theme ${id} fog config invalid`);
    assert(typeof cfg.particleType === 'string', `Theme ${id} particleType missing`);
});

// Specific theme requirements validation:
assert.strictEqual(THEMES.royal_velvet.background, 0x160309, 'Royal Velvet background must be burgundy-black (0x160309)');
assert.strictEqual(THEMES.zen_dojo.background, 0x1c0c08, 'Zen Dojo background must be dark terracotta (0x1c0c08)');
assert(THEMES.minimal_studio.materials.mallet.metalness >= 0.85, 'Minimal Studio mallet must be anodized aluminum (high metalness)');
assert(THEMES.synthwave_arcade.materials.mallet.metalness >= 0.95 && THEMES.synthwave_arcade.materials.mallet.roughness <= 0.08, 'Synthwave mallet must be mirror chrome');
assert(THEMES.royal_velvet.materials.mallet.metalness >= 0.90 && THEMES.royal_velvet.materials.mallet.roughness <= 0.15, 'Royal Velvet mallet must be gilded gold');
console.log('✓ All 10 themes in THEMES are structurally complete and validated!');

console.log('--- TEST 2: Strict ZERO EMOJI Rule Check ---');
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;

expectedArenas.forEach(id => {
    assert(THEME_ICONS[id], `Missing SVG icon for ${id}`);
    const svg = THEME_ICONS[id];
    assert(svg.includes('<svg') && svg.includes('</svg>'), `Icon for ${id} is not valid inline SVG`);
    assert(!emojiRegex.test(svg), `EMOJI FOUND in SVG icon for ${id}!`);
});

// Check I18n strings for all 3 languages
['ru', 'en', 'tr'].forEach(lang => {
    I18n.setLang(lang);
    expectedArenas.forEach(id => {
        const name = I18n.t('theme_' + id + '_name');
        const desc = I18n.t('theme_' + id + '_desc');
        assert(name, `Missing I18n name for ${id} in ${lang}`);
        assert(desc, `Missing I18n desc for ${id} in ${lang}`);
        assert(!emojiRegex.test(name), `EMOJI FOUND in theme name ${id} (${lang}): ${name}`);
        assert(!emojiRegex.test(desc), `EMOJI FOUND in theme desc ${id} (${lang}): ${desc}`);
    });
    assert(I18n.t('theme_btn_to_game'), `Missing theme_btn_to_game in ${lang}`);
    assert(!emojiRegex.test(I18n.t('theme_btn_to_game')), `EMOJI in theme_btn_to_game (${lang})`);
});
console.log('✓ ZERO EMOJIS verified across all 10 theme configs, SVG icons, and 3 languages!');

console.log('--- TEST 3: Procedural Canvas Texture Generation (drawThemeField) ---');
const dummyCanvas = document.createElement('canvas');
expectedArenas.forEach(id => {
    const ctx = dummyCanvas.getContext('2d');
    assert.doesNotThrow(() => {
        drawThemeField(dummyCanvas, ctx, id);
    }, `drawThemeField threw an error on theme: ${id}`);
});
console.log('✓ drawThemeField executes cleanly for all 10 themes!');

console.log('--- TEST 4: ThemeManager Functionality & Mallet/Puck Lerp ---');
const dummyScene = new THREE.Scene();

function createMockMallet() {
    const g = new THREE.Group();
    g.children = [
        new THREE.Mesh(new THREE.CylinderGeometry(), new THREE.MeshStandardMaterial({ roughness: 0.5, metalness: 0.5 })),
        new THREE.Mesh(new THREE.SphereGeometry(), new THREE.MeshStandardMaterial({ roughness: 0.5, metalness: 0.5 })),
        new THREE.Mesh(new THREE.CylinderGeometry(), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0.5 }))
    ];
    return g;
}

function createMockPuck() {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(), new THREE.MeshStandardMaterial({ color: 0x142844, roughness: 0.5, metalness: 0.5 }));
    g.children = [body];
    g.userData = { bodyMesh: body };
    return g;
}

const mockPlayerMallet = createMockMallet();
const mockTopMallet = createMockMallet();
const mockPuck = createMockPuck();

// Test ThemeManager.init with both standard specification aliases (tableMesh, dirLight, spotLight, mallets, puck, walls)
const mockRefs = {
    ambientLight: new THREE.AmbientLight(0x000000, 1),
    dirLight: new THREE.DirectionalLight(0x000000, 1),
    spotLight: new THREE.SpotLight(0x000000, 1),
    underGlowLight: new THREE.PointLight(0x000000, 1),
    tableMesh: new THREE.Mesh(new THREE.PlaneGeometry(), new THREE.MeshStandardMaterial()),
    mallets: [mockPlayerMallet, mockTopMallet],
    puck: [mockPuck],
    materials: {
        table: new THREE.MeshStandardMaterial(),
        walls: new THREE.MeshStandardMaterial(),
        neonStrip: new THREE.MeshBasicMaterial(),
        goalBox: new THREE.MeshStandardMaterial(),
        stadiumFloor: new THREE.MeshStandardMaterial(),
        stadiumTower: new THREE.MeshStandardMaterial(),
        stadiumLamp: new THREE.MeshBasicMaterial(),
        stadiumNeon: new THREE.MeshBasicMaterial()
    },
    starfieldMesh: new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial())
};

ThemeManager.init(dummyScene, mockRefs);

// Test texture caching
const tex1 = ThemeManager.getTexture('classic_pub');
const tex2 = ThemeManager.getTexture('classic_pub');
assert.strictEqual(tex1, tex2, 'Texture caching failed: second getTexture must return identical instance');

// Test applyTheme snap (animate = false) on Synthwave Arcade (chrome mallets)
ThemeManager.applyTheme('synthwave_arcade', false);
assert.strictEqual(ThemeManager.getCurrentTheme(), 'synthwave_arcade');
assert.strictEqual(SaveManager.get().equippedArena, 'synthwave_arcade');
assert.strictEqual(localStorage.getItem('airhockey_selected_theme'), 'synthwave_arcade');
assert.strictEqual(mockPlayerMallet.children[0].material.metalness, THEMES.synthwave_arcade.materials.mallet.metalness, 'Mallet metalness should match chrome config');
assert.strictEqual(mockPlayerMallet.children[0].material.roughness, THEMES.synthwave_arcade.materials.mallet.roughness, 'Mallet roughness should match chrome config');
assert.strictEqual(mockPuck.children[0].material.metalness, THEMES.synthwave_arcade.materials.puck.metalness, 'Puck metalness should match synthwave config');

// Test applyTheme animated on Royal Velvet (gilded gold mallets)
ThemeManager.applyTheme('royal_velvet', true);
assert.strictEqual(ThemeManager.getCurrentTheme(), 'royal_velvet');
assert.strictEqual(SaveManager.get().equippedArena, 'royal_velvet');
assert.strictEqual(localStorage.getItem('airhockey_selected_theme'), 'royal_velvet');

// Step through animation update
ThemeManager.update(0.1);
ThemeManager.update(0.3);
ThemeManager.update(0.3); // Completes transition
assert.strictEqual(mockPlayerMallet.children[0].material.metalness, THEMES.royal_velvet.materials.mallet.metalness, 'Mallet metalness should transition to gold');
assert.strictEqual(mockPlayerMallet.children[0].material.roughness, THEMES.royal_velvet.materials.mallet.roughness, 'Mallet roughness should transition to gold');
assert.strictEqual(mockPuck.children[0].material.metalness, THEMES.royal_velvet.materials.puck.metalness, 'Puck metalness should transition to royal velvet');

// Test underground_garage flicker and inferno_core lava pulse
ThemeManager.applyTheme('underground_garage', false);
assert.doesNotThrow(() => {
    for (let i = 0; i < 200; i++) {
        ThemeManager.update(0.016);
    }
});

// Test UI generation
ThemeManager.renderUI();
const container = document.getElementById('arenas-grid-container');
assert(container.innerHTML.length > 500, 'renderUI must populate arenas-grid-container');
assert(container.innerHTML.includes('selected'), 'renderUI must have an active selected card');
expectedArenas.forEach(id => {
    assert(container.innerHTML.includes(`data-arena-id="${id}"`), `renderUI output missing card for ${id}`);
});
console.log('✓ ThemeManager methods, texture caching, mallet/puck lerping, and UI generation verified!');

console.log('--- TEST 5: Arena3D and SKINS Alignment ---');
assert(Arena3D.ThemeManager, 'Arena3D must expose ThemeManager');
assert.strictEqual(SKINS.arenas.length, 10, `SKINS.arenas must have 10 arenas, found ${SKINS.arenas.length}`);
expectedArenas.forEach(id => {
    const s = SKINS.arenas.find(a => a.id === id);
    assert(s, `SKINS.arenas missing entry for ${id}`);
});
console.log('✓ Arena3D and SKINS.arenas 10-theme alignment verified!');

console.log('\n========================================');
console.log('ALL VERIFICATION TESTS PASSED (100%)!');
console.log('========================================');
process.exit(0);
