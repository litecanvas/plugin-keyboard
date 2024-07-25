# Keyboard plugin for litecanvas

Plugin to handle keyboard events in [litecanvas](https://github.com/litecanvas/engine) games.

## Install

**NPM**: `npm i @litecanvas/plugin-keyboard`

**CDN**: `https://unpkg.com/@litecanvas/plugin-keyboard/dist/dist.js`

## Usage

```js
import litecanvas from "litecanvas"
import pluginKeyboard from "@litecanvas/plugin-keyboard"

litecanvas({
  loop: { init, update, draw },
})

use(pluginKeyboard)

function init() {
  color = 0
  holding = false
}

function update(dt) {
  // press ENTER to change the background color
  if (KEYBOARD.iskeypressed("enter")) {
    color++
  }

  // hold SPACE to change the message
  holding = KEYBOARD.iskeydown("space")

  // also, you can use the namespace KB instead of KEYBOARD
  if (KB.iskeypressed("esc")) {
    alert("Escape pressed")
  }

  // bonus: call these functions without arguments to check for the pressing of any key
  if (KB.iskeypressed() || KB.iskeydown()) {
    // changes the page title
    document.querySelector("title").innerHTML = ELAPSED
  }
}

function draw() {
  cls(color)
  text(10, 10, "HOLDING: " + (holding ? "YES" : "NO"))
}
```
