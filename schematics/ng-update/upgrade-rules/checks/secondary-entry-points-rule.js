"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular/cdk/schematics");
const ts = require("typescript");
class SecondaryEntryPointsRule extends schematics_1.Migration {
    constructor() {
        super(...arguments);
        this.enabled = this.targetVersion === schematics_1.TargetVersion.V9;
    }
    visitNode(declaration) {
        if (!ts.isImportDeclaration(declaration) ||
            !ts.isStringLiteralLike(declaration.moduleSpecifier)) {
            return;
        }
        const importLocation = declaration.moduleSpecifier.text;
        if (importLocation !== 'ng-zorro-antd/core') {
            return;
        }
        this.createFailureAtNode(declaration, `The entry-point "ng-zorro-antd/core" is remove.
Instead import from the entry-point "ng-zorro-antd/core/**".`);
        return;
    }
}
exports.SecondaryEntryPointsRule = SecondaryEntryPointsRule;
//# sourceMappingURL=secondary-entry-points-rule.js.map