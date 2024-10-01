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

_See in [playground](https://litecanvas.js.org?c=eJyVkk2P0zAQhu%2F%2BFSNf1lZDvYhbUfgQRIBYbQ%2FlwtF1polJ1rZsh7Ja9b9jO2HbIi5Eip35esZvPELANwsRQ6zAeQwBdk4qrKAJCqRpoTER%2FZqQUUdU0vyUgT0RgNFat4En0EanytbLI5wqcuKEHCajoramhBiHOVu2O%2BW1iyxZADd9jC5shJiMG7q1sg%2Fi3bmBcOPUafNiwMe9lb4VrQ6xLOsf4aYqBGYHDvWbQs%2BPPsyuKSCby78u1TyHS9YprZwUQ9nReqjhNn33dmy16ZJ1kGNAcrrQkIUtGnKHu%2B37j1%2FuP3HwGCdvXmfSGFihZXLEX5G9vK0gv%2FTz9i5nb4DCCtifNm%2BBfm92FJL7fkt5tZxlBa%2F4VeukvrVHw9J%2BPgAN%2BXYo1HUNz4FLCdFPSLLUv1CT%2B0%2FQ%2FC%2F%2BQSpTcoaFo46qB3YBEWIZJcyzA9GC6qXpEGKPsJdq6Lyd0mgV4aVCyYBASzrdLDdaoqvVYu09yoFc45vdhwxPg%2BFG%2BQgSHpJXdniJDEo6fGbKEX1ktCnemYIt5Vc9Zsm%2FAbH96nY%3D)_.

## Configuration

```ts
use(pluginKeyboard, {
  // If `true` automatically calls the Event#preventDefault
  // see: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  preventDefault: boolean, // default: `true`

  // The keyboard event listeners
  listeners: {
    keyup: (key: string, ev: KeyboardEvent): void, // default: window.keyup (if exists)
    keydown: (key: string, ev: KeyboardEvent): void,  // default: window.keydown (if exists)
    keypress: (key: string, ev: KeyboardEvent): void,  // default: window.keypress (if exists)
  }
})
```
