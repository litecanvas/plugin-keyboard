/*! Keyboard plugin for litecanvas by Luiz Bills | MIT Licensed */
import plugin from "./index"
import * as keys from "./keys"

globalThis.pluginKeyboard = plugin
Object.assign(globalThis, keys)
