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

_See in [playground](https://litecanvas.js.org?c=eJyVk02P0zAQhu%2F5FYMv66ilWeitKHwIql2g2h56QBxdZ5qYJLbxR0u16n9f28luW8SFSHEynpln5nUmRQE%2FsOOqR3AKOuGQM7lnFnTHjrVRXlavsqKAFTIjoVcmxDGthaxBSXANwm%2BP1olg9My0wLZqj7OY8U0JCcobqITlylQQivReCndcRHfjnLaLohi9s%2BAthNyHBgrzls%2FNnd3fz7NzQ%2FQxA%2BiU0gt4BBEwU6gMO8Bpmp3yLNt5yVMX0UVzGKJZteFGaEeDBXDzXNNL3dap4sdzgUJ3vhbydYvHrWKmip25tMx%2B2ZtpIlDV5lC%2BT%2FR4id2w5S3SIf37mJ1Hd4o6hTXPksFVpwyUcBveG9VV8RRL2LHOYna60BCFjRpihdX605evD3c5GHTeyHeR1FmaaJHs8I%2Bjb26nEG9yv17F6AUQmAB9LvMByM%2FlhkDYfliTfDr2MoF5flU6qK%2FUQdLwPDdArGYcCZRlCS%2BOSwnOeMyi1L9QXv8naDiLf5C0QWvPMHsQjjdALyBhplIQoHRo4jTzhska05BuGW%2BHaR6EpwzOLAJJ4WQxftHknUxGa2uQtdk1frn5HOFhMOIvAgz6sMtqvERazjS%2BMFmHxlGyTLsDBSuSX9UYJD8BJlYVKQ%3D%3D)_.
