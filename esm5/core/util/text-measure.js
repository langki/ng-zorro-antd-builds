/**
 * @fileoverview added by tsickle
 * Generated from: text-measure.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function MeasureResult() { }
if (false) {
    /** @type {?} */
    MeasureResult.prototype.finished;
    /** @type {?} */
    MeasureResult.prototype.node;
}
// We only handle element & text node.
/** @type {?} */
var ELEMENT_NODE = 1;
/** @type {?} */
var TEXT_NODE = 3;
/** @type {?} */
var COMMENT_NODE = 8;
/** @type {?} */
var ellipsisContainer;
/** @type {?} */
var wrapperStyle = {
    padding: '0',
    margin: '0',
    display: 'inline',
    lineHeight: 'inherit'
};
/**
 * @param {?} value
 * @return {?}
 */
export function pxToNumber(value) {
    if (!value) {
        return 0;
    }
    /** @type {?} */
    var match = value.match(/^\d*(\.\d*)?/);
    return match ? Number(match[0]) : 0;
}
/**
 * @param {?} style
 * @return {?}
 */
function styleToString(style) {
    // There are some different behavior between Firefox & Chrome.
    // We have to handle this ourself.
    /** @type {?} */
    var styleNames = Array.prototype.slice.apply(style);
    return styleNames.map((/**
     * @param {?} name
     * @return {?}
     */
    function (name) { return name + ": " + style.getPropertyValue(name) + ";"; })).join('');
}
/**
 * @param {?} children
 * @return {?}
 */
function mergeChildren(children) {
    /** @type {?} */
    var childList = [];
    children.forEach((/**
     * @param {?} child
     * @return {?}
     */
    function (child) {
        /** @type {?} */
        var prevChild = childList[childList.length - 1];
        if (prevChild && child.nodeType === TEXT_NODE && prevChild.nodeType === TEXT_NODE) {
            ((/** @type {?} */ (prevChild))).data += ((/** @type {?} */ (child))).data;
        }
        else {
            childList.push(child);
        }
    }));
    return childList;
}
/**
 * @param {?} originEle
 * @param {?} rows
 * @param {?} contentNodes
 * @param {?} fixedContent
 * @param {?} ellipsisStr
 * @param {?=} suffixStr
 * @return {?}
 */
export function measure(originEle, rows, contentNodes, fixedContent, ellipsisStr, suffixStr) {
    if (suffixStr === void 0) { suffixStr = ''; }
    if (!ellipsisContainer) {
        ellipsisContainer = document.createElement('div');
        ellipsisContainer.setAttribute('aria-hidden', 'true');
        document.body.appendChild(ellipsisContainer);
    }
    // Get origin style
    /** @type {?} */
    var originStyle = window.getComputedStyle(originEle);
    /** @type {?} */
    var originCSS = styleToString(originStyle);
    /** @type {?} */
    var lineHeight = pxToNumber(originStyle.lineHeight);
    /** @type {?} */
    var maxHeight = Math.round(lineHeight * (rows + 1) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom));
    // Set shadow
    ellipsisContainer.setAttribute('style', originCSS);
    ellipsisContainer.style.position = 'fixed';
    ellipsisContainer.style.left = '0';
    ellipsisContainer.style.height = 'auto';
    ellipsisContainer.style.minHeight = 'auto';
    ellipsisContainer.style.maxHeight = 'auto';
    ellipsisContainer.style.top = '-999999px';
    ellipsisContainer.style.zIndex = '-1000';
    // clean up css overflow
    ellipsisContainer.style.textOverflow = 'clip';
    ellipsisContainer.style.whiteSpace = 'normal';
    ((/** @type {?} */ (ellipsisContainer.style))).webkitLineClamp = 'none';
    /** @type {?} */
    var contentList = mergeChildren(contentNodes);
    /** @type {?} */
    var container = document.createElement('div');
    /** @type {?} */
    var contentContainer = document.createElement('span');
    /** @type {?} */
    var suffixContainer = document.createTextNode(suffixStr);
    /** @type {?} */
    var fixedContainer = document.createElement('span');
    // Add styles in container
    Object.assign(container.style, wrapperStyle);
    Object.assign(contentContainer.style, wrapperStyle);
    Object.assign(fixedContainer.style, wrapperStyle);
    contentList.forEach((/**
     * @param {?} n
     * @return {?}
     */
    function (n) {
        contentContainer.appendChild(n);
    }));
    contentContainer.appendChild(suffixContainer);
    fixedContent.forEach((/**
     * @param {?} node
     * @return {?}
     */
    function (node) {
        fixedContainer.appendChild(node.cloneNode(true));
    }));
    container.appendChild(contentContainer);
    container.appendChild(fixedContainer);
    // Render in the fake container
    ellipsisContainer.appendChild(container);
    // Check if ellipsis in measure div is height enough for content
    /**
     * @return {?}
     */
    function inRange() {
        return ellipsisContainer.offsetHeight < maxHeight;
    }
    if (inRange()) {
        /** @type {?} */
        var text = ellipsisContainer.innerHTML;
        ellipsisContainer.removeChild(container);
        return { contentNodes: contentNodes, text: text, ellipsis: false };
    }
    // We should clone the childNode since they're controlled by React and we can't reuse it without warning
    /** @type {?} */
    var childNodes = Array.prototype.slice
        .apply(ellipsisContainer.childNodes[0].childNodes[0].cloneNode(true).childNodes)
        .filter((/**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var nodeType = _a.nodeType;
        return nodeType !== COMMENT_NODE;
    }));
    /** @type {?} */
    var fixedNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[1].cloneNode(true).childNodes);
    ellipsisContainer.removeChild(container);
    // ========================= Find match ellipsis content =========================
    ellipsisContainer.innerHTML = '';
    // Create origin content holder
    /** @type {?} */
    var ellipsisContentHolder = document.createElement('span');
    ellipsisContainer.appendChild(ellipsisContentHolder);
    /** @type {?} */
    var ellipsisTextNode = document.createTextNode(ellipsisStr + suffixStr);
    ellipsisContentHolder.appendChild(ellipsisTextNode);
    fixedNodes.forEach((/**
     * @param {?} childNode
     * @return {?}
     */
    function (childNode) {
        ellipsisContainer.appendChild(childNode);
    }));
    // Append before fixed nodes
    /**
     * @param {?} node
     * @return {?}
     */
    function appendChildNode(node) {
        ellipsisContentHolder.insertBefore(node, ellipsisTextNode);
    }
    // Get maximum text
    /**
     * @param {?} textNode
     * @param {?} fullText
     * @param {?=} startLoc
     * @param {?=} endLoc
     * @param {?=} lastSuccessLoc
     * @return {?}
     */
    function measureText(textNode, fullText, startLoc, endLoc, lastSuccessLoc) {
        if (startLoc === void 0) { startLoc = 0; }
        if (endLoc === void 0) { endLoc = fullText.length; }
        if (lastSuccessLoc === void 0) { lastSuccessLoc = 0; }
        /** @type {?} */
        var midLoc = Math.floor((startLoc + endLoc) / 2);
        textNode.textContent = fullText.slice(0, midLoc);
        if (startLoc >= endLoc - 1) {
            // Loop when step is small
            for (var step = endLoc; step >= startLoc; step -= 1) {
                /** @type {?} */
                var currentStepText = fullText.slice(0, step);
                textNode.textContent = currentStepText;
                if (inRange() || !currentStepText) {
                    return step === fullText.length
                        ? {
                            finished: false,
                            node: document.createTextNode(fullText)
                        }
                        : {
                            finished: true,
                            node: document.createTextNode(currentStepText)
                        };
                }
            }
        }
        if (inRange()) {
            return measureText(textNode, fullText, midLoc, endLoc, midLoc);
        }
        else {
            return measureText(textNode, fullText, startLoc, midLoc, lastSuccessLoc);
        }
    }
    /**
     * @param {?} childNode
     * @param {?} index
     * @return {?}
     */
    function measureNode(childNode, index) {
        /** @type {?} */
        var type = childNode.nodeType;
        if (type === ELEMENT_NODE) {
            // We don't split element, it will keep if whole element can be displayed.
            // appendChildNode(childNode);
            if (inRange()) {
                return {
                    finished: false,
                    node: contentList[index]
                };
            }
            // Clean up if can not pull in
            ellipsisContentHolder.removeChild(childNode);
            return {
                finished: true,
                node: null
            };
        }
        else if (type === TEXT_NODE) {
            /** @type {?} */
            var fullText = childNode.textContent || '';
            /** @type {?} */
            var textNode = document.createTextNode(fullText);
            appendChildNode(textNode);
            return measureText(textNode, fullText);
        }
        // Not handle other type of content
        // PS: This code should not be attached after react 16
        return {
            finished: false,
            node: null
        };
    }
    /** @type {?} */
    var ellipsisNodes = [];
    childNodes.some((/**
     * @param {?} childNode
     * @param {?} index
     * @return {?}
     */
    function (childNode, index) {
        var _a = measureNode(childNode, index), finished = _a.finished, node = _a.node;
        if (node) {
            ellipsisNodes.push(node);
        }
        return finished;
    }));
    /** @type {?} */
    var result = {
        contentNodes: ellipsisNodes,
        text: ellipsisContainer.innerHTML,
        ellipsis: true
    };
    while (ellipsisContainer.firstChild) {
        ellipsisContainer.removeChild(ellipsisContainer.firstChild);
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1tZWFzdXJlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlL3V0aWwvIiwic291cmNlcyI6WyJ0ZXh0LW1lYXN1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFNQSxtQ0FHQzs7O0lBRkMsaUNBQWtCOztJQUNsQiw2QkFBa0I7Ozs7SUFJZCxZQUFZLEdBQUcsQ0FBQzs7SUFDaEIsU0FBUyxHQUFHLENBQUM7O0lBQ2IsWUFBWSxHQUFHLENBQUM7O0lBRWxCLGlCQUF1Qzs7SUFFckMsWUFBWSxHQUFHO0lBQ25CLE9BQU8sRUFBRSxHQUFHO0lBQ1osTUFBTSxFQUFFLEdBQUc7SUFDWCxPQUFPLEVBQUUsUUFBUTtJQUNqQixVQUFVLEVBQUUsU0FBUztDQUN0Qjs7Ozs7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLEtBQW9CO0lBQzdDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLENBQUMsQ0FBQztLQUNWOztRQUVLLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztJQUV6QyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQzs7Ozs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxLQUEwQjs7OztRQUd6QyxVQUFVLEdBQWEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMvRCxPQUFPLFVBQVUsQ0FBQyxHQUFHOzs7O0lBQUMsVUFBQSxJQUFJLElBQUksT0FBRyxJQUFJLFVBQUssS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFHLEVBQTNDLENBQTJDLEVBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEYsQ0FBQzs7Ozs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxRQUFnQjs7UUFDL0IsU0FB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RCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDLEVBQUMsQ0FBQzs7UUFDRyxNQUFNLEdBQUc7UUFDYixZQUFZLEVBQUUsYUFBYTtRQUMzQixJQUFJLEVBQUUsaUJBQWlCLENBQUMsU0FBUztRQUNqQyxRQUFRLEVBQUUsSUFBSTtLQUNmO0lBQ0QsT0FBTyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUU7UUFDbkMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzdEO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lYXN1cmVSZXN1bHQge1xuICBmaW5pc2hlZDogYm9vbGVhbjtcbiAgbm9kZTogTm9kZSB8IG51bGw7XG59XG5cbi8vIFdlIG9ubHkgaGFuZGxlIGVsZW1lbnQgJiB0ZXh0IG5vZGUuXG5jb25zdCBFTEVNRU5UX05PREUgPSAxO1xuY29uc3QgVEVYVF9OT0RFID0gMztcbmNvbnN0IENPTU1FTlRfTk9ERSA9IDg7XG5cbmxldCBlbGxpcHNpc0NvbnRhaW5lcjogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XG5cbmNvbnN0IHdyYXBwZXJTdHlsZSA9IHtcbiAgcGFkZGluZzogJzAnLFxuICBtYXJnaW46ICcwJyxcbiAgZGlzcGxheTogJ2lubGluZScsXG4gIGxpbmVIZWlnaHQ6ICdpbmhlcml0J1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHB4VG9OdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bGwpOiBudW1iZXIge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBjb25zdCBtYXRjaCA9IHZhbHVlLm1hdGNoKC9eXFxkKihcXC5cXGQqKT8vKTtcblxuICByZXR1cm4gbWF0Y2ggPyBOdW1iZXIobWF0Y2hbMF0pIDogMDtcbn1cblxuZnVuY3Rpb24gc3R5bGVUb1N0cmluZyhzdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbik6IHN0cmluZyB7XG4gIC8vIFRoZXJlIGFyZSBzb21lIGRpZmZlcmVudCBiZWhhdmlvciBiZXR3ZWVuIEZpcmVmb3ggJiBDaHJvbWUuXG4gIC8vIFdlIGhhdmUgdG8gaGFuZGxlIHRoaXMgb3Vyc2VsZi5cbiAgY29uc3Qgc3R5bGVOYW1lczogc3RyaW5nW10gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoc3R5bGUpO1xuICByZXR1cm4gc3R5bGVOYW1lcy5tYXAobmFtZSA9PiBgJHtuYW1lfTogJHtzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpfTtgKS5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VDaGlsZHJlbihjaGlsZHJlbjogTm9kZVtdKTogTm9kZVtdIHtcbiAgY29uc3QgY2hpbGRMaXN0OiBOb2RlW10gPSBbXTtcblxuICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogTm9kZSkgPT4ge1xuICAgIGNvbnN0IHByZXZDaGlsZCA9IGNoaWxkTGlzdFtjaGlsZExpc3QubGVuZ3RoIC0gMV07XG4gICAgaWYgKHByZXZDaGlsZCAmJiBjaGlsZC5ub2RlVHlwZSA9PT0gVEVYVF9OT0RFICYmIHByZXZDaGlsZC5ub2RlVHlwZSA9PT0gVEVYVF9OT0RFKSB7XG4gICAgICAocHJldkNoaWxkIGFzIFRleHQpLmRhdGEgKz0gKGNoaWxkIGFzIFRleHQpLmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkTGlzdC5wdXNoKGNoaWxkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZExpc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWFzdXJlKFxuICBvcmlnaW5FbGU6IEhUTUxFbGVtZW50LFxuICByb3dzOiBudW1iZXIsXG4gIGNvbnRlbnROb2RlczogTm9kZVtdLFxuICBmaXhlZENvbnRlbnQ6IEhUTUxFbGVtZW50W10sXG4gIGVsbGlwc2lzU3RyOiBzdHJpbmcsXG4gIHN1ZmZpeFN0cjogc3RyaW5nID0gJydcbik6IHsgY29udGVudE5vZGVzOiBOb2RlW107IHRleHQ6IHN0cmluZzsgZWxsaXBzaXM6IGJvb2xlYW4gfSB7XG4gIGlmICghZWxsaXBzaXNDb250YWluZXIpIHtcbiAgICBlbGxpcHNpc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsbGlwc2lzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxsaXBzaXNDb250YWluZXIpO1xuICB9XG5cbiAgLy8gR2V0IG9yaWdpbiBzdHlsZVxuICBjb25zdCBvcmlnaW5TdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG9yaWdpbkVsZSk7XG4gIGNvbnN0IG9yaWdpbkNTUyA9IHN0eWxlVG9TdHJpbmcob3JpZ2luU3R5bGUpO1xuICBjb25zdCBsaW5lSGVpZ2h0ID0gcHhUb051bWJlcihvcmlnaW5TdHlsZS5saW5lSGVpZ2h0KTtcbiAgY29uc3QgbWF4SGVpZ2h0ID0gTWF0aC5yb3VuZChsaW5lSGVpZ2h0ICogKHJvd3MgKyAxKSArIHB4VG9OdW1iZXIob3JpZ2luU3R5bGUucGFkZGluZ1RvcCkgKyBweFRvTnVtYmVyKG9yaWdpblN0eWxlLnBhZGRpbmdCb3R0b20pKTtcbiAgLy8gU2V0IHNoYWRvd1xuICBlbGxpcHNpc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgb3JpZ2luQ1NTKTtcbiAgZWxsaXBzaXNDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJzAnO1xuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gIGVsbGlwc2lzQ29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9ICdhdXRvJztcbiAgZWxsaXBzaXNDb250YWluZXIuc3R5bGUubWF4SGVpZ2h0ID0gJ2F1dG8nO1xuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS50b3AgPSAnLTk5OTk5OXB4JztcbiAgZWxsaXBzaXNDb250YWluZXIuc3R5bGUuekluZGV4ID0gJy0xMDAwJztcblxuICAvLyBjbGVhbiB1cCBjc3Mgb3ZlcmZsb3dcbiAgZWxsaXBzaXNDb250YWluZXIuc3R5bGUudGV4dE92ZXJmbG93ID0gJ2NsaXAnO1xuICBlbGxpcHNpc0NvbnRhaW5lci5zdHlsZS53aGl0ZVNwYWNlID0gJ25vcm1hbCc7XG4gIChlbGxpcHNpc0NvbnRhaW5lci5zdHlsZSBhcyBOelNhZmVBbnkpLndlYmtpdExpbmVDbGFtcCA9ICdub25lJztcblxuICBjb25zdCBjb250ZW50TGlzdCA9IG1lcmdlQ2hpbGRyZW4oY29udGVudE5vZGVzKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHN1ZmZpeENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN1ZmZpeFN0cik7XG4gIGNvbnN0IGZpeGVkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gIC8vIEFkZCBzdHlsZXMgaW4gY29udGFpbmVyXG4gIE9iamVjdC5hc3NpZ24oY29udGFpbmVyLnN0eWxlLCB3cmFwcGVyU3R5bGUpO1xuICBPYmplY3QuYXNzaWduKGNvbnRlbnRDb250YWluZXIuc3R5bGUsIHdyYXBwZXJTdHlsZSk7XG4gIE9iamVjdC5hc3NpZ24oZml4ZWRDb250YWluZXIuc3R5bGUsIHdyYXBwZXJTdHlsZSk7XG5cbiAgY29udGVudExpc3QuZm9yRWFjaChuID0+IHtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG4pO1xuICB9KTtcblxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1ZmZpeENvbnRhaW5lcik7XG5cbiAgZml4ZWRDb250ZW50LmZvckVhY2gobm9kZSA9PiB7XG4gICAgZml4ZWRDb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZS5jbG9uZU5vZGUodHJ1ZSkpO1xuICB9KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZml4ZWRDb250YWluZXIpO1xuXG4gIC8vIFJlbmRlciBpbiB0aGUgZmFrZSBjb250YWluZXJcbiAgZWxsaXBzaXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAvLyBDaGVjayBpZiBlbGxpcHNpcyBpbiBtZWFzdXJlIGRpdiBpcyBoZWlnaHQgZW5vdWdoIGZvciBjb250ZW50XG4gIGZ1bmN0aW9uIGluUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGVsbGlwc2lzQ29udGFpbmVyLm9mZnNldEhlaWdodCA8IG1heEhlaWdodDtcbiAgfVxuXG4gIGlmIChpblJhbmdlKCkpIHtcbiAgICBjb25zdCB0ZXh0ID0gZWxsaXBzaXNDb250YWluZXIuaW5uZXJIVE1MO1xuICAgIGVsbGlwc2lzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgcmV0dXJuIHsgY29udGVudE5vZGVzLCB0ZXh0LCBlbGxpcHNpczogZmFsc2UgfTtcbiAgfVxuXG4gIC8vIFdlIHNob3VsZCBjbG9uZSB0aGUgY2hpbGROb2RlIHNpbmNlIHRoZXkncmUgY29udHJvbGxlZCBieSBSZWFjdCBhbmQgd2UgY2FuJ3QgcmV1c2UgaXQgd2l0aG91dCB3YXJuaW5nXG4gIGNvbnN0IGNoaWxkTm9kZXM6IENoaWxkTm9kZVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgLmFwcGx5KGVsbGlwc2lzQ29udGFpbmVyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jbG9uZU5vZGUodHJ1ZSkuY2hpbGROb2RlcylcbiAgICAuZmlsdGVyKCh7IG5vZGVUeXBlIH06IENoaWxkTm9kZSkgPT4gbm9kZVR5cGUgIT09IENPTU1FTlRfTk9ERSk7XG4gIGNvbnN0IGZpeGVkTm9kZXM6IENoaWxkTm9kZVtdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVsbGlwc2lzQ29udGFpbmVyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS5jbG9uZU5vZGUodHJ1ZSkuY2hpbGROb2Rlcyk7XG4gIGVsbGlwc2lzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PSBGaW5kIG1hdGNoIGVsbGlwc2lzIGNvbnRlbnQgPT09PT09PT09PT09PT09PT09PT09PT09PVxuICBlbGxpcHNpc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAvLyBDcmVhdGUgb3JpZ2luIGNvbnRlbnQgaG9sZGVyXG4gIGNvbnN0IGVsbGlwc2lzQ29udGVudEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZWxsaXBzaXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxsaXBzaXNDb250ZW50SG9sZGVyKTtcbiAgY29uc3QgZWxsaXBzaXNUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVsbGlwc2lzU3RyICsgc3VmZml4U3RyKTtcbiAgZWxsaXBzaXNDb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKGVsbGlwc2lzVGV4dE5vZGUpO1xuXG4gIGZpeGVkTm9kZXMuZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xuICAgIGVsbGlwc2lzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gIH0pO1xuXG4gIC8vIEFwcGVuZCBiZWZvcmUgZml4ZWQgbm9kZXNcbiAgZnVuY3Rpb24gYXBwZW5kQ2hpbGROb2RlKG5vZGU6IENoaWxkTm9kZSk6IHZvaWQge1xuICAgIGVsbGlwc2lzQ29udGVudEhvbGRlci5pbnNlcnRCZWZvcmUobm9kZSwgZWxsaXBzaXNUZXh0Tm9kZSk7XG4gIH1cblxuICAvLyBHZXQgbWF4aW11bSB0ZXh0XG4gIGZ1bmN0aW9uIG1lYXN1cmVUZXh0KFxuICAgIHRleHROb2RlOiBUZXh0LFxuICAgIGZ1bGxUZXh0OiBzdHJpbmcsXG4gICAgc3RhcnRMb2M6IG51bWJlciA9IDAsXG4gICAgZW5kTG9jOiBudW1iZXIgPSBmdWxsVGV4dC5sZW5ndGgsXG4gICAgbGFzdFN1Y2Nlc3NMb2M6IG51bWJlciA9IDBcbiAgKTogTWVhc3VyZVJlc3VsdCB7XG4gICAgY29uc3QgbWlkTG9jID0gTWF0aC5mbG9vcigoc3RhcnRMb2MgKyBlbmRMb2MpIC8gMik7XG4gICAgdGV4dE5vZGUudGV4dENvbnRlbnQgPSBmdWxsVGV4dC5zbGljZSgwLCBtaWRMb2MpO1xuXG4gICAgaWYgKHN0YXJ0TG9jID49IGVuZExvYyAtIDEpIHtcbiAgICAgIC8vIExvb3Agd2hlbiBzdGVwIGlzIHNtYWxsXG4gICAgICBmb3IgKGxldCBzdGVwID0gZW5kTG9jOyBzdGVwID49IHN0YXJ0TG9jOyBzdGVwIC09IDEpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFN0ZXBUZXh0ID0gZnVsbFRleHQuc2xpY2UoMCwgc3RlcCk7XG4gICAgICAgIHRleHROb2RlLnRleHRDb250ZW50ID0gY3VycmVudFN0ZXBUZXh0O1xuXG4gICAgICAgIGlmIChpblJhbmdlKCkgfHwgIWN1cnJlbnRTdGVwVGV4dCkge1xuICAgICAgICAgIHJldHVybiBzdGVwID09PSBmdWxsVGV4dC5sZW5ndGhcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIGZpbmlzaGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBub2RlOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShmdWxsVGV4dClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgZmluaXNoZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbm9kZTogZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3VycmVudFN0ZXBUZXh0KVxuICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpblJhbmdlKCkpIHtcbiAgICAgIHJldHVybiBtZWFzdXJlVGV4dCh0ZXh0Tm9kZSwgZnVsbFRleHQsIG1pZExvYywgZW5kTG9jLCBtaWRMb2MpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWVhc3VyZVRleHQodGV4dE5vZGUsIGZ1bGxUZXh0LCBzdGFydExvYywgbWlkTG9jLCBsYXN0U3VjY2Vzc0xvYyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWVhc3VyZU5vZGUoY2hpbGROb2RlOiBDaGlsZE5vZGUsIGluZGV4OiBudW1iZXIpOiBNZWFzdXJlUmVzdWx0IHtcbiAgICBjb25zdCB0eXBlID0gY2hpbGROb2RlLm5vZGVUeXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IEVMRU1FTlRfTk9ERSkge1xuICAgICAgLy8gV2UgZG9uJ3Qgc3BsaXQgZWxlbWVudCwgaXQgd2lsbCBrZWVwIGlmIHdob2xlIGVsZW1lbnQgY2FuIGJlIGRpc3BsYXllZC5cbiAgICAgIC8vIGFwcGVuZENoaWxkTm9kZShjaGlsZE5vZGUpO1xuICAgICAgaWYgKGluUmFuZ2UoKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGZpbmlzaGVkOiBmYWxzZSxcbiAgICAgICAgICBub2RlOiBjb250ZW50TGlzdFtpbmRleF1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYW4gdXAgaWYgY2FuIG5vdCBwdWxsIGluXG4gICAgICBlbGxpcHNpc0NvbnRlbnRIb2xkZXIucmVtb3ZlQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpbmlzaGVkOiB0cnVlLFxuICAgICAgICBub2RlOiBudWxsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gVEVYVF9OT0RFKSB7XG4gICAgICBjb25zdCBmdWxsVGV4dCA9IGNoaWxkTm9kZS50ZXh0Q29udGVudCB8fCAnJztcbiAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZnVsbFRleHQpO1xuICAgICAgYXBwZW5kQ2hpbGROb2RlKHRleHROb2RlKTtcbiAgICAgIHJldHVybiBtZWFzdXJlVGV4dCh0ZXh0Tm9kZSwgZnVsbFRleHQpO1xuICAgIH1cblxuICAgIC8vIE5vdCBoYW5kbGUgb3RoZXIgdHlwZSBvZiBjb250ZW50XG4gICAgLy8gUFM6IFRoaXMgY29kZSBzaG91bGQgbm90IGJlIGF0dGFjaGVkIGFmdGVyIHJlYWN0IDE2XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpbmlzaGVkOiBmYWxzZSxcbiAgICAgIG5vZGU6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgZWxsaXBzaXNOb2RlczogTm9kZVtdID0gW107XG4gIGNoaWxkTm9kZXMuc29tZSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHsgZmluaXNoZWQsIG5vZGUgfSA9IG1lYXN1cmVOb2RlKGNoaWxkTm9kZSwgaW5kZXgpO1xuICAgIGlmIChub2RlKSB7XG4gICAgICBlbGxpcHNpc05vZGVzLnB1c2gobm9kZSk7XG4gICAgfVxuICAgIHJldHVybiBmaW5pc2hlZDtcbiAgfSk7XG4gIGNvbnN0IHJlc3VsdCA9IHtcbiAgICBjb250ZW50Tm9kZXM6IGVsbGlwc2lzTm9kZXMsXG4gICAgdGV4dDogZWxsaXBzaXNDb250YWluZXIuaW5uZXJIVE1MLFxuICAgIGVsbGlwc2lzOiB0cnVlXG4gIH07XG4gIHdoaWxlIChlbGxpcHNpc0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgZWxsaXBzaXNDb250YWluZXIucmVtb3ZlQ2hpbGQoZWxsaXBzaXNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==