/*! Keyboard plugin for litecanvas v0.1.1 by Luiz Bills | MIT Licensed */
window.pluginKeyboard = plugin

/**
 * @param {LitecanvasInstance} engine
 * @param {LitecanvasPluginHelpers} _
 * @param {any} config
 * @returns any
 */
export default function plugin(engine, _, config) {
  const keyDownList = new Map()

  const defaults = {
      listeners: {
        /** @type {null|(key: string, ev:KeyboardEvent) => void} */
        keydown: window.keydown,
        /** @type {null|(key: string, ev:KeyboardEvent) => void} */
        keyup: window.keyup,
        /** @type {null|(key: string, ev:KeyboardEvent) => void} */
        keypress: window.keypress,
      },
    },
    events = ["keydown", "keyup", "keypress"],
    time = () => performance.now()

  config = Object.assign(defaults, config)

  /**
   * @param {KeyboardEvent} ev
   */
  addEventListener("keydown", (ev) => {
    ev.preventDefault()
    const key = _formatKey(ev.key)

    engine.emit("keydown", key, ev)

    keyDownList.set(key, time())
  })

  /**
   * @param {KeyboardEvent} ev
   */
  addEventListener("keyup", (ev) => {
    ev.preventDefault()
    const key = _formatKey(ev.key)

    if (_checkPressed(key)) {
      engine.emit("keypress", key, ev)
    }
    engine.emit("keyup", key, ev)

    keyDownList.delete(key)
  })

  for (const eventName of events) {
    if ("function" === typeof config.listeners[eventName]) {
      engine.listen(eventName, config.listeners[eventName], true)
    }
    console.log(window)
  }

  /**
   * @param {string} key
   * @returns {string}
   */
  function _formatKey(key) {
    key = key.toLowerCase()

    if (key.startsWith("arrow")) {
      key = key.replace("arrow", "")
    } else if (" " === key) {
      key = "space"
    }

    return key
  }

  function _checkPressed(key) {
    return keyDownList.has(key) && time() - keyDownList.get(key) <= 200
  }
}
