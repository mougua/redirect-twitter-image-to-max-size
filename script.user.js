// ==UserScript==
// @name        redirect twitter image to max size
// @namespace   https://github.com/mougua
// @version     0.0.1
// @description 将推特的图片以最大分辨率重新打开
// @author      mougua
// @license     MIT
// @supportURL  https://github.com/mougua/redirect-twitter-image-to-max-size/issues
// @include     *://pbs.twimg.com/media/*
// @exclude     *://pbs.twimg.com/media/*format=png&name=4096x4096
// @run-at      document-start
// @grant       none
// ==/UserScript==

window.location.replace((window.document.location + "").split('?')[0] + '?format=png&name=4096x4096');