/**
 * @param {LitecanvasInstance} engine
 * @param {LitecanvasPluginHelpers} _
 * @param {any} config
 * @returns any
 */
export default function plugin(engine, _, config) {
  const keyDownList = new Map()

  const defaults = {
      preventDefault: true,
      listeners: {
        /** @type {null|(key: string, ev:KeyboardEvent) => void} */
        keydown: globalThis.keydown,
        /** @type {null|(key: string, ev:KeyboardEvent) => void} */
        keyup: globalThis.keyup,
        /** @type {null|(key: string, ev:KeyboardEvent) => void} */
        keypress: globalThis.keypress,
      },
    },
    events = ["keydown", "keyup", "keypress"],
    time = () => performance.now()

  config = Object.assign(defaults, config)

  /**
   * @param {KeyboardEvent} ev
   */
  addEventListener("keydown", (ev) => {
    if (config.preventDefault) ev.preventDefault()
    const key = ev.key.toLowerCase()

    engine.emit("keydown", key, ev)

    keyDownList.set(key, time())
  })

  /**
   * @param {KeyboardEvent} ev
   */
  addEventListener("keyup", (ev) => {
    if (config.preventDefault) ev.preventDefault()
    const key = ev.key.toLowerCase()

    if (_checkPressed(key)) {
      engine.emit("keypress", key, ev)
    }
    engine.emit("keyup", key, ev)

    keyDownList.delete(key)
  })

  for (const eventName of events) {
    if (config.listeners[eventName]) {
      engine.listen(eventName, config.listeners[eventName])
    }
  }

  function _checkPressed(key) {
    return keyDownList.has(key) && time() - keyDownList.get(key) <= 200
  }
}
