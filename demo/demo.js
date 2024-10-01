let color, holding, x

litecanvas({
  loop: { init, draw },
})

// load the plugin
use(pluginKeyboard, {
  preventDefault: false,
  // listeners: { keyup, keydown, keypress },
})

function init() {
  color = 0
  holding = false
  x = 0
}

function draw() {
  cls(color)
  text(10, 10, "HOLDING: " + (holding ? "YES" : "NO"), color + 3)
  circfill(x, CENTERY, 30, 3)
}

function keydown(key) {
  // if key == space
  if (" " === key) {
    holding = true
  }
}

function keyup(key) {
  // if key == space
  if (" " === key) {
    holding = false
  }
}

function keypress(key) {
  switch (key) {
    case "enter":
      color++
      break
    case "escape":
      alert("Escape pressed")
      break
  }
}
