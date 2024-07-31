# Keyboard plugin for litecanvas

Plugin to handle keyboard events in [litecanvas](https://github.com/litecanvas/engine) games.

## Install

**NPM**: `npm i @litecanvas/plugin-keyboard`

**CDN**: `https://unpkg.com/@litecanvas/plugin-keyboard/dist/dist.js`

## Usage

```js
import litecanvas from "litecanvas"
import pluginKeyboard from "@litecanvas/plugin-keyboard"

let color, holding

litecanvas({
  loop: { init, draw },
})

// load the plugin
use(pluginKeyboard, {
  listeners: { keyup, keydown, keypress },
})

function init() {
  color = 0
  holding = false
}

function draw() {
  cls(color)
  text(10, 10, "HOLDING: " + (holding ? "YES" : "NO"), color + 3)
}

function keydown(key) {
  if ("space" === key) {
    holding = true
  }
}

function keyup(key) {
  if ("space" === key) {
    holding = false
  }
}

function keypress(key) {
  switch (key) {
    // press enter to change the background color
    case "enter":
      color++
      break

    // press ESC to display a message
    case "escape":
      alert("Escape pressed")
      break
  }
}
```
