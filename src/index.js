/*! Keyboard plugin for litecanvas v0.0.1 by Luiz Bills | MIT Licensed */
window.pluginKeyboard = plugin

/**
 * @param {LitecanvasInstance} engine
 * @param {LitecanvasPluginHelpers}
 * @param {any} config
 * @returns any
 */
export default function plugin(engine, { colors, sounds, settings }, config) {
  const keyDownList = new Map()
  const keyPressList = new Map()

  addEventListener("keydown", _listenKeydownEvent)
  addEventListener("keyup", _listenKeyupEvent)

  function _formatKey(key) {
    key = key.toLowerCase().replace("arrow", "")
    key = key === " " ? "space" : key // fix space bar
    return key
  }

  function _listenKeydownEvent(evt) {
    let key = _formatKey(evt.key)
    if (!keyDownList.has(key)) {
      keyDownList.set(key, performance.now())
    }
  }

  function _listenKeyupEvent(evt) {
    let key = _formatKey(evt.key)
    let time = performance.now() - keyDownList.get(key)

    if (time <= 200) {
      keyPressList.set(key, true)
    }

    keyDownList.delete(key)
  }

  engine.listen("update", () => {
    keyPressList.clear()
  })

  addEventListener("blur", () => {
    keyDownList.clear()
    keyPressList.clear()
  })

  function iskeydown(key) {
    return null == key ? keyDownList.size > 0 : keyDownList.has(key)
  }

  function iskeypressed(key) {
    return null == key ? keyPressList.size > 0 : keyPressList.has(key)
  }

  const KB = {
    iskeydown,
    iskeypressed,
  }

  return {
    KB,
    KEYBOARD: KB,
  }
}
