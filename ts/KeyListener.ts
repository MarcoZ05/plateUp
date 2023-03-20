class KeyListener {
  keyState: { [key: string]: boolean } = {};
  keyCallback: { [key: string]: (state: boolean) => void } = {};
  keyMap: { [key: string]: () => void } = {};
  constructor() {
    window.addEventListener("keydown", (e) => {
      this.keyState[e.key.toLowerCase()] = true;
    });
    window.addEventListener("keyup", (e) => {
      this.keyState[e.key.toLowerCase()] = false;
    });
  }

  addKey(
    key: string,
    func: () => void,
    callback: ((state: boolean) => void) | undefined = undefined
  ) {
    this.keyMap[key] = func;
    if (callback !== undefined) this.keyCallback[key] = callback;
  }

  update() {
    Object.keys(this.keyMap).forEach((key) => {
      if (this.keyState[key]) {
        this.keyMap[key]();

        if (this.keyCallback[key] !== undefined)
          Object.keys(this.keyCallback).forEach((key2) => {
            if (this.keyState[key2] !== undefined)
              this.keyCallback[key2](this.keyState[key2]);
          });
      }
    });
  }
}

export default KeyListener;
