const mp = require('miniprogram-render')

const {
    cache,
    tool,
} = mp.$$adapter

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html
 */
module.exports = {
    properties: [{
        name: 'src',
        get(domNode) {
            const window = cache.getWindow(domNode.$$pageId)
            return domNode.src ? tool.completeURL(domNode.src, window.location.origin, true) : ''
        },
    }],
    handles: {
        onWebviewMessage(evt) {
            this.callSingleEvent('message', evt)
        },

        onWebviewLoad(evt) {
            this.callSingleEvent('load', evt)
        },

        onWebviewError(evt) {
            this.callSingleEvent('error', evt)
        },
    },
}
