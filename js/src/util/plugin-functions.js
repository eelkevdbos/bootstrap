import EventHandler from '../dom/event-handler'
import { getElementFromSelector, isDisabled } from './index'

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.0.1): util/plugin-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const enableDismissTrigger = (callback, Plugin) => {
  const clickEvent = `click.dismiss${Plugin.EVENT_KEY}`

  EventHandler.on(document, clickEvent, `[data-bs-dismiss="${Plugin.NAME}"]`, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault()
    }

    if (isDisabled(this)) {
      return
    }

    const target = getElementFromSelector(this) || this.closest(`.${Plugin.NAME}`)
    const component = Plugin.getOrCreateInstance(target)

    callback(component, event)
  })
}

export {
  enableDismissTrigger
}