let color, holding, x

litecanvas({
  loop: { init, update, draw },
})

// load the plugin
use(pluginKeyboard, {
  listeners: { keyup, keydown, keypress },
})

function init() {
  color = 0
  holding = false
  x = 0
}

function update(dt) {
  if (iskeydown("right")) {
    x += 100 * dt
  }
  if (iskeydown("left")) {
    x -= 100 * dt
  }
}

function draw() {
  cls(color)
  text(10, 10, "HOLDING: " + (holding ? "YES" : "NO"), color + 3)

  circfill(x, CENTERY, 30, 3)
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
