const fs = require('fs');
const assert = require('assert');

// 1. Check for any emoji anywhere in source files
const files = ['main.js', 'index.html', 'style.css'];
const emojiRegex = /[\u{1F000}-\u{1FAFF}\u{20D0}-\u{20FF}\u{2300}-\u{23FF}\u{2B50}\u{2B55}\u{2934}\u{2935}\u{2B05}\u{2B06}\u{2B07}\u{3030}\u{303D}\u{3297}\u{3299}]/u;
files.forEach(file => {
    const text = fs.readFileSync(file, 'utf8');
    const lines = text.split('\n');
    lines.forEach((l, i) => {
        assert(!emojiRegex.test(l), `Found emoji in ${file}:${i+1}: ${l}`);
    });
});
console.log('PASS: Zero emojis confirmed across all project files.');

// 2. Load main.js in mocked environment
global.window = {
    innerWidth: 1920,
    innerHeight: 1080,
    devicePixelRatio: 1,
    addEventListener: () => {},
    removeEventListener: () => {}
};
const elements = new Map();
global.document = {
    createElement: (tag) => {
        if (tag === 'canvas') {
            const drawCalls = [];
            return {
                width: 1024,
                height: 2048,
                getContext: () => ({
                    save: () => {},
                    restore: () => {},
                    clearRect: () => {},
                    fillRect: (...args) => drawCalls.push(['fillRect', ...args]),
                    strokeRect: (...args) => drawCalls.push(['strokeRect', ...args]),
                    rect: () => {},
                    beginPath: () => {},
                    arc: (...args) => drawCalls.push(['arc', ...args]),
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
                    fillText: (...args) => drawCalls.push(['fillText', ...args])
                }),
                _drawCalls: drawCalls
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
        if (elements.has(id)) return elements.get(id);
        const el = {
            id,
            textContent: '',
            innerHTML: '',
            classList: { add: () => {}, remove: () => {}, toggle: () => {}, contains: () => false },
            style: {},
            listeners: {},
            addEventListener: (ev, fn) => { el.listeners[ev] = fn; },
            querySelectorAll: (sel) => []
        };
        elements.set(id, el);
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
            this.b += (c.b - this.b) * alpha;
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

const code = fs.readFileSync('main.js', 'utf8');
eval(code + `
global.THEMES = THEMES;
global.ThemeManager = ThemeManager;
global.drawThemeField = drawThemeField;
global.Game = Game;
global.Arena3D = Arena3D;
global.Physics = Physics;
global.VFX3D = VFX3D;
global.SKINS = SKINS;
global.SaveManager = SaveManager;
`);

// 3. Test ThemeManager contract with exact specification names
const scene = new THREE.Scene();
const mockTable = new THREE.Mesh(new THREE.PlaneGeometry(), new THREE.MeshStandardMaterial());
const mockWall = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshStandardMaterial());
const mockDir = new THREE.DirectionalLight(0xffffff, 1);
const mockSpot = new THREE.SpotLight(0xffffff, 1);
const mockAmb = new THREE.AmbientLight(0xffffff, 1);
const pMallet = new THREE.Mesh(new THREE.CylinderGeometry(), new THREE.MeshStandardMaterial());
pMallet.children = [
    new THREE.Mesh(new THREE.CylinderGeometry(), new THREE.MeshStandardMaterial()),
    new THREE.Mesh(new THREE.SphereGeometry(), new THREE.MeshStandardMaterial()),
    new THREE.Mesh(new THREE.CylinderGeometry(), new THREE.MeshStandardMaterial())
];
const puckMesh = new THREE.Mesh(new THREE.CylinderGeometry(), new THREE.MeshStandardMaterial());
puckMesh.children = [new THREE.Mesh(new THREE.CylinderGeometry(), new THREE.MeshStandardMaterial())];
puckMesh.userData = { bodyMesh: puckMesh.children[0] };

ThemeManager.init(scene, {
    ambientLight: mockAmb,
    dirLight: mockDir,
    spotLight: mockSpot,
    tableMesh: mockTable,
    walls: mockWall,
    mallets: [pMallet],
    puck: [puckMesh]
});

// Test applyTheme for Minimal Studio (anodized aluminum)
ThemeManager.applyTheme('minimal_studio', false);
assert.strictEqual(ThemeManager.getCurrentTheme(), 'minimal_studio');
assert(pMallet.children[0].material.metalness >= 0.85, 'Minimal Studio must configure anodized aluminum metalness');
assert(puckMesh.children[0].material.roughness >= 0.4, 'Minimal Studio must configure matte polycarbonate puck');

// Test applyTheme for Synthwave Arcade (mirror chrome)
ThemeManager.applyTheme('synthwave_arcade', false);
assert.strictEqual(ThemeManager.getCurrentTheme(), 'synthwave_arcade');
assert(pMallet.children[0].material.metalness >= 0.95, 'Synthwave Arcade must configure mirror chrome metalness');
assert(pMallet.children[0].material.roughness <= 0.08, 'Synthwave Arcade must configure mirror chrome low roughness');

// Test applyTheme for Royal Velvet (gilded gold)
ThemeManager.applyTheme('royal_velvet', false);
assert.strictEqual(ThemeManager.getCurrentTheme(), 'royal_velvet');
assert(pMallet.children[0].material.metalness >= 0.90, 'Royal Velvet must configure gilded gold metalness');
assert.strictEqual(THEMES.royal_velvet.background, 0x160309, 'Royal Velvet must have burgundy-black background');

// Test applyTheme for Zen Dojo (terracotta)
ThemeManager.applyTheme('zen_dojo', false);
assert.strictEqual(THEMES.zen_dojo.background, 0x1c0c08, 'Zen Dojo must have terracotta background');

console.log('PASS: ThemeManager PBR material and background contract 100% verified.');

// 4. Test procedural canvas features:
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
drawThemeField(canvas, ctx, 'deep_space');
assert(canvas._drawCalls.some(c => c[0] === 'fillRect' && c[1] === 44 && c[2] === 260), 'Deep Space must have ventilation grilles');

drawThemeField(canvas, ctx, 'sunset_coast');
assert(canvas._drawCalls.some(c => c[0] === 'fillRect' && c[1] === 44 && c[2] === 44), 'Sunset Coast must have turquoise sea field');

drawThemeField(canvas, ctx, 'underground_garage');
assert(canvas._drawCalls.some(c => c[0] === 'arc' && c[2] === 56), 'Underground Garage must have metallic rivets');

console.log('PASS: Procedural textures contain required grilles, sea-field, and rivets.');

// 5. Test Wall Collision Sparks
let sparksCreated = false;
VFX3D.init(scene);
VFX3D.setTheme('winter_classic');
const origCreateSparks = VFX3D.createSparks;
VFX3D.createSparks = (...args) => {
    sparksCreated = true;
    origCreateSparks(...args);
};

const testPuck = { x: -5.4, z: 0, vx: -0.2, vz: 0.1 };
Physics.resolveWalls(testPuck, false, false);
assert(sparksCreated, 'Physics.resolveWalls must trigger sparks on wall impact');

console.log('PASS: Wall collisions emit arena particles.');

console.log('\n>>> ALL DEEP VERIFICATION TESTS PASSED SUCCESSFULLY! <<<');
process.exit(0);
