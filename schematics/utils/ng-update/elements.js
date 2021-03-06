"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parse5_1 = require("parse5");
const hasClassName = (node, className) => {
    var _a, _b;
    return (_b = (_a = node.attrs) === null || _a === void 0 ? void 0 : _a.find) === null || _b === void 0 ? void 0 : _b.call(_a, attr => attr.name === 'class' && attr.value.indexOf(className) !== -1);
};
function findElementWithTag(html, tagName) {
    const document = parse5_1.parseFragment(html, { sourceCodeLocationInfo: true });
    const elements = [];
    const visitNodes = nodes => {
        nodes.forEach(node => {
            var _a;
            if (node.childNodes) {
                visitNodes(node.childNodes);
            }
            if (((_a = node.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === tagName.toLowerCase()) {
                elements.push(node);
            }
        });
    };
    visitNodes(document.childNodes);
    return elements.map(element => element.sourceCodeLocation.startTag.startOffset);
}
exports.findElementWithTag = findElementWithTag;
function findElementWithClassName(html, className, tagName) {
    const document = parse5_1.parseFragment(html, { sourceCodeLocationInfo: true });
    const elements = [];
    const visitNodes = nodes => {
        nodes.forEach(node => {
            var _a;
            if (node.childNodes) {
                visitNodes(node.childNodes);
            }
            if (hasClassName(node, className) && ((_a = node.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === tagName.toLowerCase()) {
                elements.push(node);
            }
        });
    };
    visitNodes(document.childNodes);
    return elements.map(element => element.sourceCodeLocation.attrs.class.startOffset);
}
exports.findElementWithClassName = findElementWithClassName;
//# sourceMappingURL=elements.js.map