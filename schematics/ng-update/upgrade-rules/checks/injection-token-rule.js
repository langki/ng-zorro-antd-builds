"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular/cdk/schematics");
const ts = require("typescript");
const module_specifiers_1 = require("../../../utils/ng-update/module-specifiers");
class InjectionTokenRule extends schematics_1.Migration {
    constructor() {
        super(...arguments);
        this.enabled = this.targetVersion === schematics_1.TargetVersion.V9;
    }
    visitNode(node) {
        if (ts.isImportDeclaration(node)) {
            this._visitImportDeclaration(node);
        }
    }
    _visitImportDeclaration(node) {
        if (!module_specifiers_1.isNgZorroImportDeclaration(node) || !node.importClause ||
            !node.importClause.namedBindings) {
            return;
        }
        const namedBindings = node.importClause.namedBindings;
        if (ts.isNamedImports(namedBindings)) {
            this._checkInjectionToken(namedBindings);
        }
    }
    _checkInjectionToken(namedImports) {
        namedImports.elements.filter(element => ts.isIdentifier(element.name)).forEach(element => {
            const importName = element.name.text;
            const deprecatedTokens = ['NZ_MESSAGE_CONFIG', 'NZ_NOTIFICATION_CONFIG', 'NZ_DEFAULT_EMPTY_CONTENT', 'NZ_ICON_DEFAULT_TWOTONE_COLOR'];
            if (deprecatedTokens.indexOf(importName) !== -1) {
                this.createFailureAtNode(element, `Found deprecated symbol "${importName}" which has been removed. Use global config to instead please.`);
            }
        });
    }
}
exports.InjectionTokenRule = InjectionTokenRule;
//# sourceMappingURL=injection-token-rule.js.map