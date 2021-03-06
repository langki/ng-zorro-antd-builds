"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular/cdk/schematics");
const ts = require("typescript");
class DropdownClassRule extends schematics_1.Migration {
    constructor() {
        super(...arguments);
        this.enabled = this.targetVersion === schematics_1.TargetVersion.V9;
    }
    visitNode(node) {
        if (ts.isIdentifier(node)) {
            this._visitIdentifier(node);
        }
    }
    // tslint:disable-next-line:typedef
    _visitIdentifier(identifier) {
        if (identifier.getText() === 'NzDropdownContextComponent') {
            this.createFailureAtNode(identifier, `Found "NzDropdownContextComponent" which has been removed. Your code need to be updated.`);
        }
        if (identifier.getText() === 'NzDropdownService') {
            this.createFailureAtNode(identifier, `Found usage of "NzDropdownService" which has been removed. Please use "NzContextMenuService" instead.`);
        }
    }
}
exports.DropdownClassRule = DropdownClassRule;
//# sourceMappingURL=dropdown-class-rule.js.map