// ==UserScript==
// @name         黑龙江中医药大学跳过教务系统alert
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  强制跳转alert到指定地址
// @author       You
// @match        http://jwc.hljucm.net/jsxsd/xspj/xspj_save.do
// @run-at       document-start
// @grant        none
// @license      GPL3
// ==/UserScript==

(function() {
    'use strict';
     let scriptContent = document.head.innerHTML
     document.head.innerHTML = document.head.innerHTML.replace("");
    const urlMatch = scriptContent.match(/parent\.location\.href='([^']+)'/);
    if (urlMatch && urlMatch[1]) {
        const domain = window.location.origin;
        const redirectUrl = urlMatch[1];

        const fullUrl = domain + urlMatch[1];
        console.log('提取到完整跳转URL:', fullUrl);

        // 直接跳转（不显示alert）
        window.location.href = fullUrl;

        // 或者使用parent跳转（如果是在iframe中）
        parent.location.href = redirectUrl;
}
})();