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
    case "enter":
      color++
      break
    case "escape":
      alert("Escape pressed")
      break
  }
}
