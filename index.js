// ==UserScript==
// @name           Unlock RightMouse
// @name:en        Unlock RightMouse
// @namespace      https://github.com/S-MpAI/UnlockRightClick-Tampermonkey
// @version        1.0
// @description    Unlocks the basic functionality of the right mouse button
// @author         S-MpAI
// @icon           https://github.githubassets.com/favicons/favicon-dark.svg
// @match          *://*/*
// @grant          none
// @run-at         document-start
// @downloadURL    https://raw.githubusercontent.com/S-MpAI/UnlockRightClick-Tampermonkey/refs/heads/main/index.js
// @updateURL      https://raw.githubusercontent.com/S-MpAI/UnlockRightClick-Tampermonkey/refs/heads/main/index.js
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('contextmenu', event => event.stopPropagation(), true);
    document.addEventListener('mousedown', event => event.stopPropagation(), true);
    document.addEventListener('mouseup', event => event.stopPropagation(), true);
    document.addEventListener('selectstart', event => event.stopPropagation(), true);
    const override = (object, method, newFunc) => {
        if (object[method]) {
            object[method] = newFunc;
        }
    };

    override(document, 'oncontextmenu', null);
    override(document, 'onselectstart', null);
    override(document, 'onmousedown', null);
    override(document, 'onmouseup', null);

    window.addEventListener('load', () => {
        document.querySelectorAll('*').forEach(el => {
            el.oncontextmenu = null;
            el.onselectstart = null;
            el.onmousedown = null;
            el.onmouseup = null;
        });
    });
})();
