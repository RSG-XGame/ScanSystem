/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
// Attention:
// This file duplicates types and values from @angular/core
// so that we are able to make @angular/compiler independent of @angular/core.
// This is important to prevent a build cycle, as @angular/core needs to
// be compiled with the compiler.
import { CssSelector } from './selector';
export var createInject = makeMetadataFactory('Inject', function (token) { return ({ token: token }); });
export var createInjectionToken = makeMetadataFactory('InjectionToken', function (desc) { return ({ _desc: desc, ngInjectableDef: undefined }); });
export var createAttribute = makeMetadataFactory('Attribute', function (attributeName) { return ({ attributeName: attributeName }); });
export var createContentChildren = makeMetadataFactory('ContentChildren', function (selector, data) {
    if (data === void 0) { data = {}; }
    return (tslib_1.__assign({ selector: selector, first: false, isViewQuery: false, descendants: false }, data));
});
export var createContentChild = makeMetadataFactory('ContentChild', function (selector, data) {
    if (data === void 0) { data = {}; }
    return (tslib_1.__assign({ selector: selector, first: true, isViewQuery: false, descendants: true }, data));
});
export var createViewChildren = makeMetadataFactory('ViewChildren', function (selector, data) {
    if (data === void 0) { data = {}; }
    return (tslib_1.__assign({ selector: selector, first: false, isViewQuery: true, descendants: true }, data));
});
export var createViewChild = makeMetadataFactory('ViewChild', function (selector, data) {
    return (tslib_1.__assign({ selector: selector, first: true, isViewQuery: true, descendants: true }, data));
});
export var createDirective = makeMetadataFactory('Directive', function (dir) {
    if (dir === void 0) { dir = {}; }
    return dir;
});
export var ViewEncapsulation;
(function (ViewEncapsulation) {
    ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
    ViewEncapsulation[ViewEncapsulation["Native"] = 1] = "Native";
    ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
    ViewEncapsulation[ViewEncapsulation["ShadowDom"] = 3] = "ShadowDom";
})(ViewEncapsulation || (ViewEncapsulation = {}));
export var ChangeDetectionStrategy;
(function (ChangeDetectionStrategy) {
    ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"] = 0] = "OnPush";
    ChangeDetectionStrategy[ChangeDetectionStrategy["Default"] = 1] = "Default";
})(ChangeDetectionStrategy || (ChangeDetectionStrategy = {}));
export var createComponent = makeMetadataFactory('Component', function (c) {
    if (c === void 0) { c = {}; }
    return (tslib_1.__assign({ changeDetection: ChangeDetectionStrategy.Default }, c));
});
export var createPipe = makeMetadataFactory('Pipe', function (p) { return (tslib_1.__assign({ pure: true }, p)); });
export var createInput = makeMetadataFactory('Input', function (bindingPropertyName) { return ({ bindingPropertyName: bindingPropertyName }); });
export var createOutput = makeMetadataFactory('Output', function (bindingPropertyName) { return ({ bindingPropertyName: bindingPropertyName }); });
export var createHostBinding = makeMetadataFactory('HostBinding', function (hostPropertyName) { return ({ hostPropertyName: hostPropertyName }); });
export var createHostListener = makeMetadataFactory('HostListener', function (eventName, args) { return ({ eventName: eventName, args: args }); });
export var createNgModule = makeMetadataFactory('NgModule', function (ngModule) { return ngModule; });
export var createInjectable = makeMetadataFactory('Injectable', function (injectable) {
    if (injectable === void 0) { injectable = {}; }
    return injectable;
});
export var CUSTOM_ELEMENTS_SCHEMA = {
    name: 'custom-elements'
};
export var NO_ERRORS_SCHEMA = {
    name: 'no-errors-schema'
};
export var createOptional = makeMetadataFactory('Optional');
export var createSelf = makeMetadataFactory('Self');
export var createSkipSelf = makeMetadataFactory('SkipSelf');
export var createHost = makeMetadataFactory('Host');
export var Type = Function;
export var SecurityContext;
(function (SecurityContext) {
    SecurityContext[SecurityContext["NONE"] = 0] = "NONE";
    SecurityContext[SecurityContext["HTML"] = 1] = "HTML";
    SecurityContext[SecurityContext["STYLE"] = 2] = "STYLE";
    SecurityContext[SecurityContext["SCRIPT"] = 3] = "SCRIPT";
    SecurityContext[SecurityContext["URL"] = 4] = "URL";
    SecurityContext[SecurityContext["RESOURCE_URL"] = 5] = "RESOURCE_URL";
})(SecurityContext || (SecurityContext = {}));
export var MissingTranslationStrategy;
(function (MissingTranslationStrategy) {
    MissingTranslationStrategy[MissingTranslationStrategy["Error"] = 0] = "Error";
    MissingTranslationStrategy[MissingTranslationStrategy["Warning"] = 1] = "Warning";
    MissingTranslationStrategy[MissingTranslationStrategy["Ignore"] = 2] = "Ignore";
})(MissingTranslationStrategy || (MissingTranslationStrategy = {}));
function makeMetadataFactory(name, props) {
    // This must be declared as a function, not a fat arrow, so that ES2015 devmode produces code
    // that works with the static_reflector.ts in the ViewEngine compiler.
    // In particular, `_registerDecoratorOrConstructor` assumes that the value returned here can be
    // new'ed.
    function factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var values = props ? props.apply(void 0, tslib_1.__spread(args)) : {};
        return tslib_1.__assign({ ngMetadataName: name }, values);
    }
    factory.isTypeOf = function (obj) { return obj && obj.ngMetadataName === name; };
    factory.ngMetadataName = name;
    return factory;
}
function parserSelectorToSimpleSelector(selector) {
    var classes = selector.classNames && selector.classNames.length ? tslib_1.__spread([8 /* CLASS */], selector.classNames) :
        [];
    var elementName = selector.element && selector.element !== '*' ? selector.element : '';
    return tslib_1.__spread([elementName], selector.attrs, classes);
}
function parserSelectorToNegativeSelector(selector) {
    var classes = selector.classNames && selector.classNames.length ? tslib_1.__spread([8 /* CLASS */], selector.classNames) :
        [];
    if (selector.element) {
        return tslib_1.__spread([
            1 /* NOT */ | 4 /* ELEMENT */, selector.element
        ], selector.attrs, classes);
    }
    else if (selector.attrs.length) {
        return tslib_1.__spread([1 /* NOT */ | 2 /* ATTRIBUTE */], selector.attrs, classes);
    }
    else {
        return selector.classNames && selector.classNames.length ? tslib_1.__spread([1 /* NOT */ | 8 /* CLASS */], selector.classNames) :
            [];
    }
}
function parserSelectorToR3Selector(selector) {
    var positive = parserSelectorToSimpleSelector(selector);
    var negative = selector.notSelectors && selector.notSelectors.length ?
        selector.notSelectors.map(function (notSelector) { return parserSelectorToNegativeSelector(notSelector); }) :
        [];
    return positive.concat.apply(positive, tslib_1.__spread(negative));
}
export function parseSelectorToR3Selector(selector) {
    return selector ? CssSelector.parse(selector).map(parserSelectorToR3Selector) : [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9jb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxhQUFhO0FBQ2IsMkRBQTJEO0FBQzNELDhFQUE4RTtBQUM5RSx3RUFBd0U7QUFDeEUsaUNBQWlDO0FBRWpDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFHdkMsTUFBTSxDQUFDLElBQU0sWUFBWSxHQUFHLG1CQUFtQixDQUFTLFFBQVEsRUFBRSxVQUFDLEtBQVUsSUFBSyxPQUFBLENBQUMsRUFBQyxLQUFLLE9BQUEsRUFBQyxDQUFDLEVBQVQsQ0FBUyxDQUFDLENBQUM7QUFDN0YsTUFBTSxDQUFDLElBQU0sb0JBQW9CLEdBQUcsbUJBQW1CLENBQ25ELGdCQUFnQixFQUFFLFVBQUMsSUFBWSxJQUFLLE9BQUEsQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBQyxDQUFDLEVBQTNDLENBQTJDLENBQUMsQ0FBQztBQUdyRixNQUFNLENBQUMsSUFBTSxlQUFlLEdBQ3hCLG1CQUFtQixDQUFZLFdBQVcsRUFBRSxVQUFDLGFBQXNCLElBQUssT0FBQSxDQUFDLEVBQUMsYUFBYSxlQUFBLEVBQUMsQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUM7QUFXL0YsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBQUcsbUJBQW1CLENBQ3BELGlCQUFpQixFQUNqQixVQUFDLFFBQWMsRUFBRSxJQUFjO0lBQWQscUJBQUEsRUFBQSxTQUFjO0lBQzNCLE9BQUEsb0JBQUUsUUFBUSxVQUFBLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxLQUFLLElBQUssSUFBSSxFQUFFO0FBQTNFLENBQTJFLENBQUMsQ0FBQztBQUNyRixNQUFNLENB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Q0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDckYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gQXR0ZW50aW9uOlxuLy8gVGhpcyBmaWxlIGR1cGxpY2F0ZXMgdHlwZXMgYW5kIHZhbHVlcyBmcm9tIEBhbmd1bGFyL2NvcmVcbi8vIHNvIHRoYXQgd2UgYXJlIGFibGUgdG8gbWFrZSBAYW5ndWxhci9jb21waWxlciBpbmRlcGVuZGVudCBvZiBAYW5ndWxhci9jb3JlLlxuLy8gVGhpcyBpcyBpbXBvcnRhbnQgdG8gcHJldmVudCBhIGJ1aWxkIGN5Y2xlLCBhcyBAYW5ndWxhci9jb3JlIG5lZWRzIHRvXG4vLyBiZSBjb21waWxlZCB3aXRoIHRoZSBjb21waWxlci5cblxuaW1wb3J0IHtDc3NTZWxlY3Rvcn0gZnJvbSAnLi9zZWxlY3Rvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5qZWN0IHsgdG9rZW46IGFueTsgfVxuZXhwb3J0IGNvbnN0IGNyZWF0ZUluamVjdCA9IG1ha2VNZXRhZGF0YUZhY3Rvcnk8SW5qZWN0PignSW5qZWN0JywgKHRva2VuOiBhbnkpID0+ICh7dG9rZW59KSk7XG5leHBvcnQgY29uc3QgY3JlYXRlSW5qZWN0aW9uVG9rZW4gPSBtYWtlTWV0YWRhdGFGYWN0b3J5PG9iamVjdD4oXG4gICAgJ0luamVjdGlvblRva2VuJywgKGRlc2M6IHN0cmluZykgPT4gKHtfZGVzYzogZGVzYywgbmdJbmplY3RhYmxlRGVmOiB1bmRlZmluZWR9KSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXR0cmlidXRlIHsgYXR0cmlidXRlTmFtZT86IHN0cmluZzsgfVxuZXhwb3J0IGNvbnN0IGNyZWF0ZUF0dHJpYnV0ZSA9XG4gICAgbWFrZU1ldGFkYXRhRmFjdG9yeTxBdHRyaWJ1dGU+KCdBdHRyaWJ1dGUnLCAoYXR0cmlidXRlTmFtZT86IHN0cmluZykgPT4gKHthdHRyaWJ1dGVOYW1lfSkpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5IHtcbiAgZGVzY2VuZGFudHM6IGJvb2xlYW47XG4gIGZpcnN0OiBib29sZWFuO1xuICByZWFkOiBhbnk7XG4gIGlzVmlld1F1ZXJ5OiBib29sZWFuO1xuICBzZWxlY3RvcjogYW55O1xuICBzdGF0aWM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb250ZW50Q2hpbGRyZW4gPSBtYWtlTWV0YWRhdGFGYWN0b3J5PFF1ZXJ5PihcbiAgICAnQ29udGVudENoaWxkcmVuJyxcbiAgICAoc2VsZWN0b3I/OiBhbnksIGRhdGE6IGFueSA9IHt9KSA9PlxuICAgICAgICAoe3NlbGVjdG9yLCBmaXJzdDogZmFsc2UsIGlzVmlld1F1ZXJ5OiBmYWxzZSwgZGVzY2VuZGFudHM6IGZhbHNlLCAuLi5kYXRhfSkpO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbnRlbnRDaGlsZCA9IG1ha2VNZXRhZGF0YUZhY3Rvcnk8UXVlcnk+KFxuICAgICdDb250ZW50Q2hpbGQnLCAoc2VsZWN0b3I/OiBhbnksIGRhdGE6IGFueSA9IHt9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgKHtzZWxlY3RvciwgZmlyc3Q6IHRydWUsIGlzVmlld1F1ZXJ5OiBmYWxzZSwgZGVzY2VuZGFudHM6IHRydWUsIC4uLmRhdGF9KSk7XG5leHBvcnQgY29uc3QgY3JlYXRlVmlld0NoaWxkcmVuID0gbWFrZU1ldGFkYXRhRmFjdG9yeTxRdWVyeT4oXG4gICAgJ1ZpZXdDaGlsZHJlbicsIChzZWxlY3Rvcj86IGFueSwgZGF0YTogYW55ID0ge30pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAoe3NlbGVjdG9yLCBmaXJzdDogZmFsc2UsIGlzVmlld1F1ZXJ5OiB0cnVlLCBkZXNjZW5kYW50czogdHJ1ZSwgLi4uZGF0YX0pKTtcbmV4cG9ydCBjb25zdCBjcmVhdGVWaWV3Q2hpbGQgPSBtYWtlTWV0YWRhdGFGYWN0b3J5PFF1ZXJ5PihcbiAgICAnVmlld0NoaWxkJywgKHNlbGVjdG9yOiBhbnksIGRhdGE6IGFueSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICh7c2VsZWN0b3IsIGZpcnN0OiB0cnVlLCBpc1ZpZXdRdWVyeTogdHJ1ZSwgZGVzY2VuZGFudHM6IHRydWUsIC4uLmRhdGF9KSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0aXZlIHtcbiAgc2VsZWN0b3I/OiBzdHJpbmc7XG4gIGlucHV0cz86IHN0cmluZ1tdO1xuICBvdXRwdXRzPzogc3RyaW5nW107XG4gIGhvc3Q/OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcbiAgcHJvdmlkZXJzPzogUHJvdmlkZXJbXTtcbiAgZXhwb3J0QXM/OiBzdHJpbmc7XG4gIHF1ZXJpZXM/OiB7W2tleTogc3RyaW5nXTogYW55fTtcbiAgZ3VhcmRzPzoge1trZXk6IHN0cmluZ106IGFueX07XG59XG5leHBvcnQgY29uc3QgY3JlYXRlRGlyZWN0aXZlID1cbiAgICBtYWtlTWV0YWRhdGFGYWN0b3J5PERpcmVjdGl2ZT4oJ0RpcmVjdGl2ZScsIChkaXI6IERpcmVjdGl2ZSA9IHt9KSA9PiBkaXIpO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudCBleHRlbmRzIERpcmVjdGl2ZSB7XG4gIGNoYW5nZURldGVjdGlvbj86IENoYW5nZURldGVjdGlvblN0cmF0ZWd5O1xuICB2aWV3UHJvdmlkZXJzPzogUHJvdmlkZXJbXTtcbiAgbW9kdWxlSWQ/OiBzdHJpbmc7XG4gIHRlbXBsYXRlVXJsPzogc3RyaW5nO1xuICB0ZW1wbGF0ZT86IHN0cmluZztcbiAgc3R5bGVVcmxzPzogc3RyaW5nW107XG4gIHN0eWxlcz86IHN0cmluZ1tdO1xuICBhbmltYXRpb25zPzogYW55W107XG4gIGVuY2Fwc3VsYXRpb24/OiBWaWV3RW5jYXBzdWxhdGlvbjtcbiAgaW50ZXJwb2xhdGlvbj86IFtzdHJpbmcsIHN0cmluZ107XG4gIGVudHJ5Q29tcG9uZW50cz86IEFycmF5PFR5cGV8YW55W10+O1xuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBlbnVtIFZpZXdFbmNhcHN1bGF0aW9uIHtcbiAgRW11bGF0ZWQgPSAwLFxuICBOYXRpdmUgPSAxLFxuICBOb25lID0gMixcbiAgU2hhZG93RG9tID0gM1xufVxuXG5leHBvcnQgZW51bSBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB7XG4gIE9uUHVzaCA9IDAsXG4gIERlZmF1bHQgPSAxXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb21wb25lbnQgPSBtYWtlTWV0YWRhdGFGYWN0b3J5PENvbXBvbmVudD4oXG4gICAgJ0NvbXBvbmVudCcsIChjOiBDb21wb25lbnQgPSB7fSkgPT4gKHtjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsIC4uLmN9KSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGlwZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcHVyZT86IGJvb2xlYW47XG59XG5leHBvcnQgY29uc3QgY3JlYXRlUGlwZSA9IG1ha2VNZXRhZGF0YUZhY3Rvcnk8UGlwZT4oJ1BpcGUnLCAocDogUGlwZSkgPT4gKHtwdXJlOiB0cnVlLCAuLi5wfSkpO1xuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0IHsgYmluZGluZ1Byb3BlcnR5TmFtZT86IHN0cmluZzsgfVxuZXhwb3J0IGNvbnN0IGNyZWF0ZUlucHV0ID1cbiAgICBtYWtlTWV0YWRhdGFGYWN0b3J5PElucHV0PignSW5wdXQnLCAoYmluZGluZ1Byb3BlcnR5TmFtZT86IHN0cmluZykgPT4gKHtiaW5kaW5nUHJvcGVydHlOYW1lfSkpO1xuXG5leHBvcnQgaW50ZXJmYWNlIE91dHB1dCB7IGJpbmRpbmdQcm9wZXJ0eU5hbWU/OiBzdHJpbmc7IH1cbmV4cG9ydCBjb25zdCBjcmVhdGVPdXRwdXQgPSBtYWtlTWV0YWRhdGFGYWN0b3J5PE91dHB1dD4oXG4gICAgJ091dHB1dCcsIChiaW5kaW5nUHJvcGVydHlOYW1lPzogc3RyaW5nKSA9PiAoe2JpbmRpbmdQcm9wZXJ0eU5hbWV9KSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSG9zdEJpbmRpbmcgeyBob3N0UHJvcGVydHlOYW1lPzogc3RyaW5nOyB9XG5leHBvcnQgY29uc3QgY3JlYXRlSG9zdEJpbmRpbmcgPSBtYWtlTWV0YWRhdGFGYWN0b3J5PEhvc3RCaW5kaW5nPihcbiAgICAnSG9zdEJpbmRpbmcnLCAoaG9zdFByb3BlcnR5TmFtZT86IHN0cmluZykgPT4gKHtob3N0UHJvcGVydHlOYW1lfSkpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhvc3RMaXN0ZW5lciB7XG4gIGV2ZW50TmFtZT86IHN0cmluZztcbiAgYXJncz86IHN0cmluZ1tdO1xufVxuZXhwb3J0IGNvbnN0IGNyZWF0ZUhvc3RMaXN0ZW5lciA9IG1ha2VNZXRhZGF0YUZhY3Rvcnk8SG9zdExpc3RlbmVyPihcbiAgICAnSG9zdExpc3RlbmVyJywgKGV2ZW50TmFtZT86IHN0cmluZywgYXJncz86IHN0cmluZ1tdKSA9PiAoe2V2ZW50TmFtZSwgYXJnc30pKTtcblxuZXhwb3J0IGludGVyZmFjZSBOZ01vZHVsZSB7XG4gIHByb3ZpZGVycz86IFByb3ZpZGVyW107XG4gIGRlY2xhcmF0aW9ucz86IEFycmF5PFR5cGV8YW55W10+O1xuICBpbXBvcnRzPzogQXJyYXk8VHlwZXxNb2R1bGVXaXRoUHJvdmlkZXJzfGFueVtdPjtcbiAgZXhwb3J0cz86IEFycmF5PFR5cGV8YW55W10+O1xuICBlbnRyeUNvbXBvbmVudHM/OiBBcnJheTxUeXBlfGFueVtdPjtcbiAgYm9vdHN0cmFwPzogQXJyYXk8VHlwZXxhbnlbXT47XG4gIHNjaGVtYXM/OiBBcnJheTxTY2hlbWFNZXRhZGF0YXxhbnlbXT47XG4gIGlkPzogc3RyaW5nO1xufVxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5nTW9kdWxlID1cbiAgICBtYWtlTWV0YWRhdGFGYWN0b3J5PE5nTW9kdWxlPignTmdNb2R1bGUnLCAobmdNb2R1bGU6IE5nTW9kdWxlKSA9PiBuZ01vZHVsZSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gIG5nTW9kdWxlOiBUeXBlO1xuICBwcm92aWRlcnM/OiBQcm92aWRlcltdO1xufVxuZXhwb3J0IGludGVyZmFjZSBJbmplY3RhYmxlIHtcbiAgcHJvdmlkZWRJbj86IFR5cGV8J3Jvb3QnfGFueTtcbiAgdXNlQ2xhc3M/OiBUeXBlfGFueTtcbiAgdXNlRXhpc3Rpbmc/OiBUeXBlfGFueTtcbiAgdXNlVmFsdWU/OiBhbnk7XG4gIHVzZUZhY3Rvcnk/OiBUeXBlfGFueTtcbiAgZGVwcz86IEFycmF5PFR5cGV8YW55W10+O1xufVxuZXhwb3J0IGNvbnN0IGNyZWF0ZUluamVjdGFibGUgPVxuICAgIG1ha2VNZXRhZGF0YUZhY3RvcnkoJ0luamVjdGFibGUnLCAoaW5qZWN0YWJsZTogSW5qZWN0YWJsZSA9IHt9KSA9PiBpbmplY3RhYmxlKTtcbmV4cG9ydCBpbnRlcmZhY2UgU2NoZW1hTWV0YWRhdGEgeyBuYW1lOiBzdHJpbmc7IH1cblxuZXhwb3J0IGNvbnN0IENVU1RPTV9FTEVNRU5UU19TQ0hFTUE6IFNjaGVtYU1ldGFkYXRhID0ge1xuICBuYW1lOiAnY3VzdG9tLWVsZW1lbnRzJ1xufTtcblxuZXhwb3J0IGNvbnN0IE5PX0VSUk9SU19TQ0hFTUE6IFNjaGVtYU1ldGFkYXRhID0ge1xuICBuYW1lOiAnbm8tZXJyb3JzLXNjaGVtYSdcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVPcHRpb25hbCA9IG1ha2VNZXRhZGF0YUZhY3RvcnkoJ09wdGlvbmFsJyk7XG5leHBvcnQgY29uc3QgY3JlYXRlU2VsZiA9IG1ha2VNZXRhZGF0YUZhY3RvcnkoJ1NlbGYnKTtcbmV4cG9ydCBjb25zdCBjcmVhdGVTa2lwU2VsZiA9IG1ha2VNZXRhZGF0YUZhY3RvcnkoJ1NraXBTZWxmJyk7XG5leHBvcnQgY29uc3QgY3JlYXRlSG9zdCA9IG1ha2VNZXRhZGF0YUZhY3RvcnkoJ0hvc3QnKTtcblxuZXhwb3J0IGludGVyZmFjZSBUeXBlIGV4dGVuZHMgRnVuY3Rpb24geyBuZXcgKC4uLmFyZ3M6IGFueVtdKTogYW55OyB9XG5leHBvcnQgY29uc3QgVHlwZSA9IEZ1bmN0aW9uO1xuXG5leHBvcnQgZW51bSBTZWN1cml0eUNvbnRleHQge1xuICBOT05FID0gMCxcbiAgSFRNTCA9IDEsXG4gIFNUWUxFID0gMixcbiAgU0NSSVBUID0gMyxcbiAgVVJMID0gNCxcbiAgUkVTT1VSQ0VfVVJMID0gNSxcbn1cblxuZXhwb3J0IHR5cGUgUHJvdmlkZXIgPSBhbnk7XG5cbmV4cG9ydCBjb25zdCBlbnVtIE5vZGVGbGFncyB7XG4gIE5vbmUgPSAwLFxuICBUeXBlRWxlbWVudCA9IDEgPDwgMCxcbiAgVHlwZVRleHQgPSAxIDw8IDEsXG4gIFByb2plY3RlZFRlbXBsYXRlID0gMSA8PCAyLFxuICBDYXRSZW5kZXJOb2RlID0gVHlwZUVsZW1lbnQgfCBUeXBlVGV4dCxcbiAgVHlwZU5nQ29udGVudCA9IDEgPDwgMyxcbiAgVHlwZVBpcGUgPSAxIDw8IDQsXG4gIFR5cGVQdXJlQXJyYXkgPSAxIDw8IDUsXG4gIFR5cGVQdXJlT2JqZWN0ID0gMSA8PCA2LFxuICBUeXBlUHVyZVBpcGUgPSAxIDw8IDcsXG4gIENhdFB1cmVFeHByZXNzaW9uID0gVHlwZVB1cmVBcnJheSB8IFR5cGVQdXJlT2JqZWN0IHwgVHlwZVB1cmVQaXBlLFxuICBUeXBlVmFsdWVQcm92aWRlciA9IDEgPDwgOCxcbiAgVHlwZUNsYXNzUHJvdmlkZXIgPSAxIDw8IDksXG4gIFR5cGVGYWN0b3J5UHJvdmlkZXIgPSAxIDw8IDEwLFxuICBUeXBlVXNlRXhpc3RpbmdQcm92aWRlciA9IDEgPDwgMTEsXG4gIExhenlQcm92aWRlciA9IDEgPDwgMTIsXG4gIFByaXZhdGVQcm92aWRlciA9IDEgPDwgMTMsXG4gIFR5cGVEaXJlY3RpdmUgPSAxIDw8IDE0LFxuICBDb21wb25lbnQgPSAxIDw8IDE1LFxuICBDYXRQcm92aWRlck5vRGlyZWN0aXZlID1cbiAgICAgIFR5cGVWYWx1ZVByb3ZpZGVyIHwgVHlwZUNsYXNzUHJvdmlkZXIgfCBUeXBlRmFjdG9yeVByb3ZpZGVyIHwgVHlwZVVzZUV4aXN0aW5nUHJvdmlkZXIsXG4gIENhdFByb3ZpZGVyID0gQ2F0UHJvdmlkZXJOb0RpcmVjdGl2ZSB8IFR5cGVEaXJlY3RpdmUsXG4gIE9uSW5pdCA9IDEgPDwgMTYsXG4gIE9uRGVzdHJveSA9IDEgPDwgMTcsXG4gIERvQ2hlY2sgPSAxIDw8IDE4LFxuICBPbkNoYW5nZXMgPSAxIDw8IDE5LFxuICBBZnRlckNvbnRlbnRJbml0ID0gMSA8PCAyMCxcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCA9IDEgPDwgMjEsXG4gIEFmdGVyVmlld0luaXQgPSAxIDw8IDIyLFxuICBBZnRlclZpZXdDaGVja2VkID0gMSA8PCAyMyxcbiAgRW1iZWRkZWRWaWV3cyA9IDEgPDwgMjQsXG4gIENvbXBvbmVudFZpZXcgPSAxIDw8IDI1LFxuICBUeXBlQ29udGVudFF1ZXJ5ID0gMSA8PCAyNixcbiAgVHlwZVZpZXdRdWVyeSA9IDEgPDwgMjcsXG4gIFN0YXRpY1F1ZXJ5ID0gMSA8PCAyOCxcbiAgRHluYW1pY1F1ZXJ5ID0gMSA8PCAyOSxcbiAgVHlwZU1vZHVsZVByb3ZpZGVyID0gMSA8PCAzMCxcbiAgQ2F0UXVlcnkgPSBUeXBlQ29udGVudFF1ZXJ5IHwgVHlwZVZpZXdRdWVyeSxcblxuICAvLyBtdXR1YWxseSBleGNsdXNpdmUgdmFsdWVzLi4uXG4gIFR5cGVzID0gQ2F0UmVuZGVyTm9kZSB8IFR5cGVOZ0NvbnRlbnQgfCBUeXBlUGlwZSB8IENhdFB1cmVFeHByZXNzaW9uIHwgQ2F0UHJvdmlkZXIgfCBDYXRRdWVyeVxufVxuXG5leHBvcnQgY29uc3QgZW51bSBEZXBGbGFncyB7XG4gIE5vbmUgPSAwLFxuICBTa2lwU2VsZiA9IDEgPDwgMCxcbiAgT3B0aW9uYWwgPSAxIDw8IDEsXG4gIFNlbGYgPSAxIDw8IDIsXG4gIFZhbHVlID0gMSA8PCAzLFxufVxuXG4vKipcbiAqIEluamVjdGlvbiBmbGFncyBmb3IgREkuXG4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIEluamVjdEZsYWdzIHtcbiAgRGVmYXVsdCA9IDAsXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGF0IGFuIGluamVjdG9yIHNob3VsZCByZXRyaWV2ZSBhIGRlcGVuZGVuY3kgZnJvbSBhbnkgaW5qZWN0b3IgdW50aWwgcmVhY2hpbmcgdGhlXG4gICAqIGhvc3QgZWxlbWVudCBvZiB0aGUgY3VycmVudCBjb21wb25lbnQuIChPbmx5IHVzZWQgd2l0aCBFbGVtZW50IEluamVjdG9yKVxuICAgKi9cbiAgSG9zdCA9IDEgPDwgMCxcbiAgLyoqIERvbid0IGRlc2NlbmQgaW50byBhbmNlc3RvcnMgb2YgdGhlIG5vZGUgcmVxdWVzdGluZyBpbmplY3Rpb24uICovXG4gIFNlbGYgPSAxIDw8IDEsXG4gIC8qKiBTa2lwIHRoZSBub2RlIHRoYXQgaXMgcmVxdWVzdGluZyBpbmplY3Rpb24uICovXG4gIFNraXBTZWxmID0gMSA8PCAyLFxuICAvKiogSW5qZWN0IGBkZWZhdWx0VmFsdWVgIGluc3RlYWQgaWYgdG9rZW4gbm90IGZvdW5kLiAqL1xuICBPcHRpb25hbCA9IDEgPDwgMyxcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gQXJndW1lbnRUeXBlIHtJbmxpbmUgPSAwLCBEeW5hbWljID0gMX1cblxuZXhwb3J0IGNvbnN0IGVudW0gQmluZGluZ0ZsYWdzIHtcbiAgVHlwZUVsZW1lbnRBdHRyaWJ1dGUgPSAxIDw8IDAsXG4gIFR5cGVFbGVtZW50Q2xhc3MgPSAxIDw8IDEsXG4gIFR5cGVFbGVtZW50U3R5bGUgPSAxIDw8IDIsXG4gIFR5cGVQcm9wZXJ0eSA9IDEgPDwgMyxcbiAgU3ludGhldGljUHJvcGVydHkgPSAxIDw8IDQsXG4gIFN5bnRoZXRpY0hvc3RQcm9wZXJ0eSA9IDEgPDwgNSxcbiAgQ2F0U3ludGhldGljUHJvcGVydHkgPSBTeW50aGV0aWNQcm9wZXJ0eSB8IFN5bnRoZXRpY0hvc3RQcm9wZXJ0eSxcblxuICAvLyBtdXR1YWxseSBleGNsdXNpdmUgdmFsdWVzLi4uXG4gIFR5cGVzID0gVHlwZUVsZW1lbnRBdHRyaWJ1dGUgfCBUeXBlRWxlbWVudENsYXNzIHwgVHlwZUVsZW1lbnRTdHlsZSB8IFR5cGVQcm9wZXJ0eVxufVxuXG5leHBvcnQgY29uc3QgZW51bSBRdWVyeUJpbmRpbmdUeXBlIHtGaXJzdCA9IDAsIEFsbCA9IDF9XG5cbmV4cG9ydCBjb25zdCBlbnVtIFF1ZXJ5VmFsdWVUeXBlIHtcbiAgRWxlbWVudFJlZiA9IDAsXG4gIFJlbmRlckVsZW1lbnQgPSAxLFxuICBUZW1wbGF0ZVJlZiA9IDIsXG4gIFZpZXdDb250YWluZXJSZWYgPSAzLFxuICBQcm92aWRlciA9IDRcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gVmlld0ZsYWdzIHtcbiAgTm9uZSA9IDAsXG4gIE9uUHVzaCA9IDEgPDwgMSxcbn1cblxuZXhwb3J0IGVudW0gTWlzc2luZ1RyYW5zbGF0aW9uU3RyYXRlZ3kge1xuICBFcnJvciA9IDAsXG4gIFdhcm5pbmcgPSAxLFxuICBJZ25vcmUgPSAyLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhRmFjdG9yeTxUPiB7XG4gICguLi5hcmdzOiBhbnlbXSk6IFQ7XG4gIGlzVHlwZU9mKG9iajogYW55KTogb2JqIGlzIFQ7XG4gIG5nTWV0YWRhdGFOYW1lOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG1ha2VNZXRhZGF0YUZhY3Rvcnk8VD4obmFtZTogc3RyaW5nLCBwcm9wcz86ICguLi5hcmdzOiBhbnlbXSkgPT4gVCk6IE1ldGFkYXRhRmFjdG9yeTxUPiB7XG4gIC8vIFRoaXMgbXVzdCBiZSBkZWNsYXJlZCBhcyBhIGZ1bmN0aW9uLCBub3QgYSBmYXQgYXJyb3csIHNvIHRoYXQgRVMyMDE1IGRldm1vZGUgcHJvZHVjZXMgY29kZVxuICAvLyB0aGF0IHdvcmtzIHdpdGggdGhlIHN0YXRpY19yZWZsZWN0b3IudHMgaW4gdGhlIFZpZXdFbmdpbmUgY29tcGlsZXIuXG4gIC8vIEluIHBhcnRpY3VsYXIsIGBfcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yYCBhc3N1bWVzIHRoYXQgdGhlIHZhbHVlIHJldHVybmVkIGhlcmUgY2FuIGJlXG4gIC8vIG5ldydlZC5cbiAgZnVuY3Rpb24gZmFjdG9yeSguLi5hcmdzOiBhbnlbXSkge1xuICAgIGNvbnN0IHZhbHVlcyA9IHByb3BzID8gcHJvcHMoLi4uYXJncykgOiB7fTtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNZXRhZGF0YU5hbWU6IG5hbWUsXG4gICAgICAuLi52YWx1ZXMsXG4gICAgfTtcbiAgfVxuICAoZmFjdG9yeSBhcyBhbnkpLmlzVHlwZU9mID0gKG9iajogYW55KSA9PiBvYmogJiYgb2JqLm5nTWV0YWRhdGFOYW1lID09PSBuYW1lO1xuICAoZmFjdG9yeSBhcyBhbnkpLm5nTWV0YWRhdGFOYW1lID0gbmFtZTtcbiAgcmV0dXJuIGZhY3RvcnkgYXMgYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlIHtcbiAgY2hpbGRyZW4/OiBSb3V0ZVtdO1xuICBsb2FkQ2hpbGRyZW4/OiBzdHJpbmd8VHlwZXxhbnk7XG59XG5cbi8qKlxuICogRmxhZ3MgdXNlZCB0byBnZW5lcmF0ZSBSMy1zdHlsZSBDU1MgU2VsZWN0b3JzLiBUaGV5IGFyZSBwYXN0ZWQgZnJvbVxuICogY29yZS9zcmMvcmVuZGVyMy9wcm9qZWN0aW9uLnRzIGJlY2F1c2UgdGhleSBjYW5ub3QgYmUgcmVmZXJlbmNlZCBkaXJlY3RseS5cbiAqL1xuZXhwb3J0IGNvbnN0IGVudW0gU2VsZWN0b3JGbGFncyB7XG4gIC8qKiBJbmRpY2F0ZXMgdGhpcyBpcyB0aGUgYmVnaW5uaW5nIG9mIGEgbmV3IG5lZ2F0aXZlIHNlbGVjdG9yICovXG4gIE5PVCA9IDBiMDAwMSxcblxuICAvKiogTW9kZSBmb3IgbWF0Y2hpbmcgYXR0cmlidXRlcyAqL1xuICBBVFRSSUJVVEUgPSAwYjAwMTAsXG5cbiAgLyoqIE1vZGUgZm9yIG1hdGNoaW5nIHRhZyBuYW1lcyAqL1xuICBFTEVNRU5UID0gMGIwMTAwLFxuXG4gIC8qKiBNb2RlIGZvciBtYXRjaGluZyBjbGFzcyBuYW1lcyAqL1xuICBDTEFTUyA9IDBiMTAwMCxcbn1cblxuLy8gVGhlc2UgYXJlIGEgY29weSB0aGUgQ1NTIHR5cGVzIGZyb20gY29yZS9zcmMvcmVuZGVyMy9pbnRlcmZhY2VzL3Byb2plY3Rpb24udHNcbi8vIFRoZXkgYXJlIGR1cGxpY2F0ZWQgaGVyZSBhcyB0aGV5IGNhbm5vdCBiZSBkaXJlY3RseSByZWZlcmVuY2VkIGZyb20gY29yZS5cbmV4cG9ydCB0eXBlIFIzQ3NzU2VsZWN0b3IgPSAoc3RyaW5nIHwgU2VsZWN0b3JGbGFncylbXTtcbmV4cG9ydCB0eXBlIFIzQ3NzU2VsZWN0b3JMaXN0ID0gUjNDc3NTZWxlY3RvcltdO1xuXG5mdW5jdGlvbiBwYXJzZXJTZWxlY3RvclRvU2ltcGxlU2VsZWN0b3Ioc2VsZWN0b3I6IENzc1NlbGVjdG9yKTogUjNDc3NTZWxlY3RvciB7XG4gIGNvbnN0IGNsYXNzZXMgPSBzZWxlY3Rvci5jbGFzc05hbWVzICYmIHNlbGVjdG9yLmNsYXNzTmFtZXMubGVuZ3RoID9cbiAgICAgIFtTZWxlY3RvckZsYWdzLkNMQVNTLCAuLi5zZWxlY3Rvci5jbGFzc05hbWVzXSA6XG4gICAgICBbXTtcbiAgY29uc3QgZWxlbWVudE5hbWUgPSBzZWxlY3Rvci5lbGVtZW50ICYmIHNlbGVjdG9yLmVsZW1lbnQgIT09ICcqJyA/IHNlbGVjdG9yLmVsZW1lbnQgOiAnJztcbiAgcmV0dXJuIFtlbGVtZW50TmFtZSwgLi4uc2VsZWN0b3IuYXR0cnMsIC4uLmNsYXNzZXNdO1xufVxuXG5mdW5jdGlvbiBwYXJzZXJTZWxlY3RvclRvTmVnYXRpdmVTZWxlY3RvcihzZWxlY3RvcjogQ3NzU2VsZWN0b3IpOiBSM0Nzc1NlbGVjdG9yIHtcbiAgY29uc3QgY2xhc3NlcyA9IHNlbGVjdG9yLmNsYXNzTmFtZXMgJiYgc2VsZWN0b3IuY2xhc3NOYW1lcy5sZW5ndGggP1xuICAgICAgW1NlbGVjdG9yRmxhZ3MuQ0xBU1MsIC4uLnNlbGVjdG9yLmNsYXNzTmFtZXNdIDpcbiAgICAgIFtdO1xuXG4gIGlmIChzZWxlY3Rvci5lbGVtZW50KSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIFNlbGVjdG9yRmxhZ3MuTk9UIHwgU2VsZWN0b3JGbGFncy5FTEVNRU5ULCBzZWxlY3Rvci5lbGVtZW50LCAuLi5zZWxlY3Rvci5hdHRycywgLi4uY2xhc3Nlc1xuICAgIF07XG4gIH0gZWxzZSBpZiAoc2VsZWN0b3IuYXR0cnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtTZWxlY3RvckZsYWdzLk5PVCB8IFNlbGVjdG9yRmxhZ3MuQVRUUklCVVRFLCAuLi5zZWxlY3Rvci5hdHRycywgLi4uY2xhc3Nlc107XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yLmNsYXNzTmFtZXMgJiYgc2VsZWN0b3IuY2xhc3NOYW1lcy5sZW5ndGggP1xuICAgICAgICBbU2VsZWN0b3JGbGFncy5OT1QgfCBTZWxlY3RvckZsYWdzLkNMQVNTLCAuLi5zZWxlY3Rvci5jbGFzc05hbWVzXSA6XG4gICAgICAgIFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlclNlbGVjdG9yVG9SM1NlbGVjdG9yKHNlbGVjdG9yOiBDc3NTZWxlY3Rvcik6IFIzQ3NzU2VsZWN0b3Ige1xuICBjb25zdCBwb3NpdGl2ZSA9IHBhcnNlclNlbGVjdG9yVG9TaW1wbGVTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgY29uc3QgbmVnYXRpdmU6IFIzQ3NzU2VsZWN0b3JMaXN0ID0gc2VsZWN0b3Iubm90U2VsZWN0b3JzICYmIHNlbGVjdG9yLm5vdFNlbGVjdG9ycy5sZW5ndGggP1xuICAgICAgc2VsZWN0b3Iubm90U2VsZWN0b3JzLm1hcChub3RTZWxlY3RvciA9PiBwYXJzZXJTZWxlY3RvclRvTmVnYXRpdmVTZWxlY3Rvcihub3RTZWxlY3RvcikpIDpcbiAgICAgIFtdO1xuXG4gIHJldHVybiBwb3NpdGl2ZS5jb25jYXQoLi4ubmVnYXRpdmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTZWxlY3RvclRvUjNTZWxlY3RvcihzZWxlY3Rvcjogc3RyaW5nIHwgbnVsbCk6IFIzQ3NzU2VsZWN0b3JMaXN0IHtcbiAgcmV0dXJuIHNlbGVjdG9yID8gQ3NzU2VsZWN0b3IucGFyc2Uoc2VsZWN0b3IpLm1hcChwYXJzZXJTZWxlY3RvclRvUjNTZWxlY3RvcikgOiBbXTtcbn1cblxuLy8gUGFzdGVkIGZyb20gcmVuZGVyMy9pbnRlcmZhY2VzL2RlZmluaXRpb24gc2luY2UgaXQgY2Fubm90IGJlIHJlZmVyZW5jZWQgZGlyZWN0bHlcbi8qKlxuICogRmxhZ3MgcGFzc2VkIGludG8gdGVtcGxhdGUgZnVuY3Rpb25zIHRvIGRldGVybWluZSB3aGljaCBibG9ja3MgKGkuZS4gY3JlYXRpb24sIHVwZGF0ZSlcbiAqIHNob3VsZCBiZSBleGVjdXRlZC5cbiAqXG4gKiBUeXBpY2FsbHksIGEgdGVtcGxhdGUgcnVucyBib3RoIHRoZSBjcmVhdGlvbiBibG9jayBhbmQgdGhlIHVwZGF0ZSBibG9jayBvbiBpbml0aWFsaXphdGlvbiBhbmRcbiAqIHN1YnNlcXVlbnQgcnVucyBvbmx5IGV4ZWN1dGUgdGhlIHVwZGF0ZSBibG9jay4gSG93ZXZlciwgZHluYW1pY2FsbHkgY3JlYXRlZCB2aWV3cyByZXF1aXJlIHRoYXRcbiAqIHRoZSBjcmVhdGlvbiBibG9jayBiZSBleGVjdXRlZCBzZXBhcmF0ZWx5IGZyb20gdGhlIHVwZGF0ZSBibG9jayAoZm9yIGJhY2t3YXJkcyBjb21wYXQpLlxuICovXG5leHBvcnQgY29uc3QgZW51bSBSZW5kZXJGbGFncyB7XG4gIC8qIFdoZXRoZXIgdG8gcnVuIHRoZSBjcmVhdGlvbiBibG9jayAoZS5nLiBjcmVhdGUgZWxlbWVudHMgYW5kIGRpcmVjdGl2ZXMpICovXG4gIENyZWF0ZSA9IDBiMDEsXG5cbiAgLyogV2hldGhlciB0byBydW4gdGhlIHVwZGF0ZSBibG9jayAoZS5nLiByZWZyZXNoIGJpbmRpbmdzKSAqL1xuICBVcGRhdGUgPSAwYjEwXG59XG5cbi8vIFBhc3RlZCBmcm9tIHJlbmRlcjMvaW50ZXJmYWNlcy9ub2RlLnRzXG4vKipcbiAqIEEgc2V0IG9mIG1hcmtlciB2YWx1ZXMgdG8gYmUgdXNlZCBpbiB0aGUgYXR0cmlidXRlcyBhcnJheXMuIFRoZXNlIG1hcmtlcnMgaW5kaWNhdGUgdGhhdCBzb21lXG4gKiBpdGVtcyBhcmUgbm90IHJlZ3VsYXIgYXR0cmlidXRlcyBhbmQgdGhlIHByb2Nlc3Npbmcgc2hvdWxkIGJlIGFkYXB0ZWQgYWNjb3JkaW5nbHkuXG4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIEF0dHJpYnV0ZU1hcmtlciB7XG4gIC8qKlxuICAgKiBNYXJrZXIgaW5kaWNhdGVzIHRoYXQgdGhlIGZvbGxvd2luZyAzIHZhbHVlcyBpbiB0aGUgYXR0cmlidXRlcyBhcnJheSBhcmU6XG4gICAqIG5hbWVzcGFjZVVyaSwgYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWVcbiAgICogaW4gdGhhdCBvcmRlci5cbiAgICovXG4gIE5hbWVzcGFjZVVSSSA9IDAsXG5cbiAgLyoqXG4gICAqIFNpZ25hbHMgY2xhc3MgZGVjbGFyYXRpb24uXG4gICAqXG4gICAqIEVhY2ggdmFsdWUgZm9sbG93aW5nIGBDbGFzc2VzYCBkZXNpZ25hdGVzIGEgY2xhc3MgbmFtZSB0byBpbmNsdWRlIG9uIHRoZSBlbGVtZW50LlxuICAgKiAjIyBFeGFtcGxlOlxuICAgKlxuICAgKiBHaXZlbjpcbiAgICogYGBgXG4gICAqIDxkaXYgY2xhc3M9XCJmb28gYmFyIGJhelwiPi4uLjxkL3ZpPlxuICAgKiBgYGBcbiAgICpcbiAgICogdGhlIGdlbmVyYXRlZCBjb2RlIGlzOlxuICAgKiBgYGBcbiAgICogdmFyIF9jMSA9IFtBdHRyaWJ1dGVNYXJrZXIuQ2xhc3NlcywgJ2ZvbycsICdiYXInLCAnYmF6J107XG4gICAqIGBgYFxuICAgKi9cbiAgQ2xhc3NlcyA9IDEsXG5cbiAgLyoqXG4gICAqIFNpZ25hbHMgc3R5bGUgZGVjbGFyYXRpb24uXG4gICAqXG4gICAqIEVhY2ggcGFpciBvZiB2YWx1ZXMgZm9sbG93aW5nIGBTdHlsZXNgIGRlc2lnbmF0ZXMgYSBzdHlsZSBuYW1lIGFuZCB2YWx1ZSB0byBpbmNsdWRlIG9uIHRoZVxuICAgKiBlbGVtZW50LlxuICAgKiAjIyBFeGFtcGxlOlxuICAgKlxuICAgKiBHaXZlbjpcbiAgICogYGBgXG4gICAqIDxkaXYgc3R5bGU9XCJ3aWR0aDoxMDBweDsgaGVpZ2h0OjIwMHB4OyBjb2xvcjpyZWRcIj4uLi48L2Rpdj5cbiAgICogYGBgXG4gICAqXG4gICAqIHRoZSBnZW5lcmF0ZWQgY29kZSBpczpcbiAgICogYGBgXG4gICAqIHZhciBfYzEgPSBbQXR0cmlidXRlTWFya2VyLlN0eWxlcywgJ3dpZHRoJywgJzEwMHB4JywgJ2hlaWdodCcuICcyMDBweCcsICdjb2xvcicsICdyZWQnXTtcbiAgICogYGBgXG4gICAqL1xuICBTdHlsZXMgPSAyLFxuXG4gIC8qKlxuICAgKiBTaWduYWxzIHRoYXQgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGUgbmFtZXMgd2VyZSBleHRyYWN0ZWQgZnJvbSBpbnB1dCBvciBvdXRwdXQgYmluZGluZ3MuXG4gICAqXG4gICAqIEZvciBleGFtcGxlLCBnaXZlbiB0aGUgZm9sbG93aW5nIEhUTUw6XG4gICAqXG4gICAqIGBgYFxuICAgKiA8ZGl2IG1vbz1cImNhclwiIFtmb29dPVwiZXhwXCIgKGJhcik9XCJkb1N0aCgpXCI+XG4gICAqIGBgYFxuICAgKlxuICAgKiB0aGUgZ2VuZXJhdGVkIGNvZGUgaXM6XG4gICAqXG4gICAqIGBgYFxuICAgKiB2YXIgX2MxID0gWydtb28nLCAnY2FyJywgQXR0cmlidXRlTWFya2VyLkJpbmRpbmdzLCAnZm9vJywgJ2JhciddO1xuICAgKiBgYGBcbiAgICovXG4gIEJpbmRpbmdzID0gMyxcblxuICAvKipcbiAgICogU2lnbmFscyB0aGF0IHRoZSBmb2xsb3dpbmcgYXR0cmlidXRlIG5hbWVzIHdlcmUgaG9pc3RlZCBmcm9tIGFuIGlubGluZS10ZW1wbGF0ZSBkZWNsYXJhdGlvbi5cbiAgICpcbiAgICogRm9yIGV4YW1wbGUsIGdpdmVuIHRoZSBmb2xsb3dpbmcgSFRNTDpcbiAgICpcbiAgICogYGBgXG4gICAqIDxkaXYgKm5nRm9yPVwibGV0IHZhbHVlIG9mIHZhbHVlczsgdHJhY2tCeTp0cmFja0J5XCIgZGlyQSBbZGlyQl09XCJ2YWx1ZVwiPlxuICAgKiBgYGBcbiAgICpcbiAgICogdGhlIGdlbmVyYXRlZCBjb2RlIGZvciB0aGUgYHRlbXBsYXRlKClgIGluc3RydWN0aW9uIHdvdWxkIGluY2x1ZGU6XG4gICAqXG4gICAqIGBgYFxuICAgKiBbJ2RpckEnLCAnJywgQXR0cmlidXRlTWFya2VyLkJpbmRpbmdzLCAnZGlyQicsIEF0dHJpYnV0ZU1hcmtlci5UZW1wbGF0ZSwgJ25nRm9yJywgJ25nRm9yT2YnLFxuICAgKiAnbmdGb3JUcmFja0J5JywgJ2xldC12YWx1ZSddXG4gICAqIGBgYFxuICAgKlxuICAgKiB3aGlsZSB0aGUgZ2VuZXJhdGVkIGNvZGUgZm9yIHRoZSBgZWxlbWVudCgpYCBpbnN0cnVjdGlvbiBpbnNpZGUgdGhlIHRlbXBsYXRlIGZ1bmN0aW9uIHdvdWxkXG4gICAqIGluY2x1ZGU6XG4gICAqXG4gICAqIGBgYFxuICAgKiBbJ2RpckEnLCAnJywgQXR0cmlidXRlTWFya2VyLkJpbmRpbmdzLCAnZGlyQiddXG4gICAqIGBgYFxuICAgKi9cbiAgVGVtcGxhdGUgPSA0LFxuXG4gIC8qKlxuICAgKiBTaWduYWxzIHRoYXQgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGUgaXMgYG5nUHJvamVjdEFzYCBhbmQgaXRzIHZhbHVlIGlzIGEgcGFyc2VkIGBDc3NTZWxlY3RvcmAuXG4gICAqXG4gICAqIEZvciBleGFtcGxlLCBnaXZlbiB0aGUgZm9sbG93aW5nIEhUTUw6XG4gICAqXG4gICAqIGBgYFxuICAgKiA8aDEgYXR0cj1cInZhbHVlXCIgbmdQcm9qZWN0QXM9XCJbdGl0bGVdXCI+XG4gICAqIGBgYFxuICAgKlxuICAgKiB0aGUgZ2VuZXJhdGVkIGNvZGUgZm9yIHRoZSBgZWxlbWVudCgpYCBpbnN0cnVjdGlvbiB3b3VsZCBpbmNsdWRlOlxuICAgKlxuICAgKiBgYGBcbiAgICogWydhdHRyJywgJ3ZhbHVlJywgQXR0cmlidXRlTWFya2VyLlByb2plY3RBcywgWycnLCAndGl0bGUnLCAnJ11dXG4gICAqIGBgYFxuICAgKi9cbiAgUHJvamVjdEFzID0gNVxufVxuIl19