class KeyListener {
    constructor() {
        this.keyState = {};
        this.keyCallback = {};
        this.keyMap = {};
        window.addEventListener("keydown", (e) => {
            this.keyState[e.key] = true;
        });
        window.addEventListener("keyup", (e) => {
            this.keyState[e.key] = false;
        });
    }
    addKeys(keys, func, callback) {
        keys.forEach((key) => {
            this.keyMap[key] = func;
            this.keyCallback[key] = callback;
        });
    }
    update() {
        Object.keys(this.keyMap).forEach((key) => {
            if (this.keyState[key]) {
                this.keyMap[key]();
                Object.keys(this.keyCallback).forEach((key2) => {
                    if (this.keyState[key2] !== undefined)
                        this.keyCallback[key2](this.keyState[key2]);
                });
            }
        });
    }
}
export default KeyListener;
