/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵɵdefineInjectable, ɵɵdefineInjector, } from '../../di/interface/defs';
import { ɵɵinject } from '../../di/injector_compatibility';
import * as r3 from '../index';
import { registerNgModuleType } from '../../linker/ng_module_factory_loader';
import * as sanitization from '../../sanitization/sanitization';
var ɵ0 = function () { return ({
    'ɵɵdefineBase': r3.ɵɵdefineBase,
    'ɵɵdefineComponent': r3.ɵɵdefineComponent,
    'ɵɵdefineDirective': r3.ɵɵdefineDirective,
    'ɵɵdefineInjectable': ɵɵdefineInjectable,
    'ɵɵdefineInjector': ɵɵdefineInjector,
    'ɵɵdefineNgModule': r3.ɵɵdefineNgModule,
    'ɵɵdefinePipe': r3.ɵɵdefinePipe,
    'ɵɵdirectiveInject': r3.ɵɵdirectiveInject,
    'ɵɵgetFactoryOf': r3.ɵɵgetFactoryOf,
    'ɵɵgetInheritedFactory': r3.ɵɵgetInheritedFactory,
    'ɵɵinject': ɵɵinject,
    'ɵɵinjectAttribute': r3.ɵɵinjectAttribute,
    'ɵɵtemplateRefExtractor': r3.ɵɵtemplateRefExtractor,
    'ɵɵNgOnChangesFeature': r3.ɵɵNgOnChangesFeature,
    'ɵɵProvidersFeature': r3.ɵɵProvidersFeature,
    'ɵɵInheritDefinitionFeature': r3.ɵɵInheritDefinitionFeature,
    'ɵɵelementAttribute': r3.ɵɵelementAttribute,
    'ɵɵbind': r3.ɵɵbind,
    'ɵɵcontainer': r3.ɵɵcontainer,
    'ɵɵnextContext': r3.ɵɵnextContext,
    'ɵɵcontainerRefreshStart': r3.ɵɵcontainerRefreshStart,
    'ɵɵcontainerRefreshEnd': r3.ɵɵcontainerRefreshEnd,
    'ɵɵnamespaceHTML': r3.ɵɵnamespaceHTML,
    'ɵɵnamespaceMathML': r3.ɵɵnamespaceMathML,
    'ɵɵnamespaceSVG': r3.ɵɵnamespaceSVG,
    'ɵɵenableBindings': r3.ɵɵenableBindings,
    'ɵɵdisableBindings': r3.ɵɵdisableBindings,
    'ɵɵallocHostVars': r3.ɵɵallocHostVars,
    'ɵɵelementStart': r3.ɵɵelementStart,
    'ɵɵelementEnd': r3.ɵɵelementEnd,
    'ɵɵelement': r3.ɵɵelement,
    'ɵɵelementContainerStart': r3.ɵɵelementContainerStart,
    'ɵɵelementContainerEnd': r3.ɵɵelementContainerEnd,
    'ɵɵpureFunction0': r3.ɵɵpureFunction0,
    'ɵɵpureFunction1': r3.ɵɵpureFunction1,
    'ɵɵpureFunction2': r3.ɵɵpureFunction2,
    'ɵɵpureFunction3': r3.ɵɵpureFunction3,
    'ɵɵpureFunction4': r3.ɵɵpureFunction4,
    'ɵɵpureFunction5': r3.ɵɵpureFunction5,
    'ɵɵpureFunction6': r3.ɵɵpureFunction6,
    'ɵɵpureFunction7': r3.ɵɵpureFunction7,
    'ɵɵpureFunction8': r3.ɵɵpureFunction8,
    'ɵɵpureFunctionV': r3.ɵɵpureFunctionV,
    'ɵɵgetCurrentView': r3.ɵɵgetCurrentView,
    'ɵɵrestoreView': r3.ɵɵrestoreView,
    'ɵɵinterpolation1': r3.ɵɵinterpolation1,
    'ɵɵinterpolation2': r3.ɵɵinterpolation2,
    'ɵɵinterpolation3': r3.ɵɵinterpolation3,
    'ɵɵinterpolation4': r3.ɵɵinterpolation4,
    'ɵɵinterpolation5': r3.ɵɵinterpolation5,
    'ɵɵinterpolation6': r3.ɵɵinterpolation6,
    'ɵɵinterpolation7': r3.ɵɵinterpolation7,
    'ɵɵinterpolation8': r3.ɵɵinterpolation8,
    'ɵɵinterpolationV': r3.ɵɵinterpolationV,
    'ɵɵlistener': r3.ɵɵlistener,
    'ɵɵload': r3.ɵɵload,
    'ɵɵprojection': r3.ɵɵprojection,
    'ɵɵelementProperty': r3.ɵɵelementProperty,
    'ɵɵcomponentHostSyntheticProperty': r3.ɵɵcomponentHostSyntheticProperty,
    'ɵɵcomponentHostSyntheticListener': r3.ɵɵcomponentHostSyntheticListener,
    'ɵɵpipeBind1': r3.ɵɵpipeBind1,
    'ɵɵpipeBind2': r3.ɵɵpipeBind2,
    'ɵɵpipeBind3': r3.ɵɵpipeBind3,
    'ɵɵpipeBind4': r3.ɵɵpipeBind4,
    'ɵɵpipeBindV': r3.ɵɵpipeBindV,
    'ɵɵprojectionDef': r3.ɵɵprojectionDef,
    'ɵɵproperty': r3.ɵɵproperty,
    'ɵɵpropertyInterpolate': r3.ɵɵpropertyInterpolate,
    'ɵɵpropertyInterpolate1': r3.ɵɵpropertyInterpolate1,
    'ɵɵpropertyInterpolate2': r3.ɵɵpropertyInterpolate2,
    'ɵɵpropertyInterpolate3': r3.ɵɵpropertyInterpolate3,
    'ɵɵpropertyInterpolate4': r3.ɵɵpropertyInterpolate4,
    'ɵɵpropertyInterpolate5': r3.ɵɵpropertyInterpolate5,
    'ɵɵpropertyInterpolate6': r3.ɵɵpropertyInterpolate6,
    'ɵɵpropertyInterpolate7': r3.ɵɵpropertyInterpolate7,
    'ɵɵpropertyInterpolate8': r3.ɵɵpropertyInterpolate8,
    'ɵɵpropertyInterpolateV': r3.ɵɵpropertyInterpolateV,
    'ɵɵpipe': r3.ɵɵpipe,
    'ɵɵqueryRefresh': r3.ɵɵqueryRefresh,
    'ɵɵviewQuery': r3.ɵɵviewQuery,
    'ɵɵstaticViewQuery': r3.ɵɵstaticViewQuery,
    'ɵɵstaticContentQuery': r3.ɵɵstaticContentQuery,
    'ɵɵloadViewQuery': r3.ɵɵloadViewQuery,
    'ɵɵcontentQuery': r3.ɵɵcontentQuery,
    'ɵɵloadContentQuery': r3.ɵɵloadContentQuery,
    'ɵɵreference': r3.ɵɵreference,
    'ɵɵelementHostAttrs': r3.ɵɵelementHostAttrs,
    'ɵɵelementStyling': r3.ɵɵelementStyling,
    'ɵɵelementStylingMap': r3.ɵɵelementStylingMap,
    'ɵɵelementStyleProp': r3.ɵɵelementStyleProp,
    'ɵɵelementStylingApply': r3.ɵɵelementStylingApply,
    'ɵɵelementClassProp': r3.ɵɵelementClassProp,
    'ɵɵelementHostStyling': r3.ɵɵelementHostStyling,
    'ɵɵelementHostStylingMap': r3.ɵɵelementHostStylingMap,
    'ɵɵelementHostStyleProp': r3.ɵɵelementHostStyleProp,
    'ɵɵelementHostStylingApply': r3.ɵɵelementHostStylingApply,
    'ɵɵelementHostClassProp': r3.ɵɵelementHostClassProp,
    'ɵɵselect': r3.ɵɵselect,
    'ɵɵtemplate': r3.ɵɵtemplate,
    'ɵɵtext': r3.ɵɵtext,
    'ɵɵtextBinding': r3.ɵɵtextBinding,
    'ɵɵembeddedViewStart': r3.ɵɵembeddedViewStart,
    'ɵɵembeddedViewEnd': r3.ɵɵembeddedViewEnd,
    'ɵɵi18n': r3.ɵɵi18n,
    'ɵɵi18nAttributes': r3.ɵɵi18nAttributes,
    'ɵɵi18nExp': r3.ɵɵi18nExp,
    'ɵɵi18nStart': r3.ɵɵi18nStart,
    'ɵɵi18nEnd': r3.ɵɵi18nEnd,
    'ɵɵi18nApply': r3.ɵɵi18nApply,
    'ɵɵi18nPostprocess': r3.ɵɵi18nPostprocess,
    'ɵɵi18nLocalize': r3.ɵɵi18nLocalize,
    'ɵɵresolveWindow': r3.ɵɵresolveWindow,
    'ɵɵresolveDocument': r3.ɵɵresolveDocument,
    'ɵɵresolveBody': r3.ɵɵresolveBody,
    'ɵɵsetComponentScope': r3.ɵɵsetComponentScope,
    'ɵɵsetNgModuleScope': r3.ɵɵsetNgModuleScope,
    'ɵɵsanitizeHtml': sanitization.ɵɵsanitizeHtml,
    'ɵɵsanitizeStyle': sanitization.ɵɵsanitizeStyle,
    'ɵɵdefaultStyleSanitizer': sanitization.ɵɵdefaultStyleSanitizer,
    'ɵɵsanitizeResourceUrl': sanitization.ɵɵsanitizeResourceUrl,
    'ɵɵsanitizeScript': sanitization.ɵɵsanitizeScript,
    'ɵɵsanitizeUrl': sanitization.ɵɵsanitizeUrl,
    'ɵɵsanitizeUrlOrResourceUrl': sanitization.ɵɵsanitizeUrlOrResourceUrl,
    'ɵregisterNgModuleType': registerNgModuleType,
}); };
/**
 * A mapping of the @angular/core API surface used in generated expressions to the actual symbols.
 *
 * This should be kept up to date with the public exports of @angular/core.
 */
export var angularCoreEnv = (ɵ0)();
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2ppdC9lbnZpcm9ubWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsZ0JBQWdCLEdBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDekQsT0FBTyxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDL0IsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDM0UsT0FBTyxLQUFLLFlBQVksTUFBTSxpQ0FBaUMsQ0FBQztTQVMzRCxjQUFNLE9BQUEsQ0FBQztJQUNMLGNBQWMsRUFBRSxFQUFFLENBQUMsWUFBWTtJQUMvQixtQkFBbUIsRUFBRSxFQUFFLENBQUMsaUJBQWlCO0lBQ3pDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxpQkFBaUI7SUFDekMsb0JBQW9CLEVBQUUsa0JBQWtCO0lBQ3hDLGtCQUFrQixFQUFFLGdCQUFnQjtJQUNwQyxrQkFBa0IsRUFBRSxFQUFFLENBQUMsZ0JBQWdCO0lBQ3ZDLGNBQWMsRUFBRSxFQUFFLENBQUMsWUFBWTtJQUMvQixtQkFBbUIsRUFBRSxFQUFFLENBQUMsaUJBQWlCO0lBQ3pDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxjQUFjO0lBQ25DLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxxQkFBcUI7SUFDakQsVUFBVSxFQUFFLFFBQVE7SUFDcEIsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLGlCQUFpQjtJQUN6Qyx3QkFBd0IsRUFBRSxFQUFFLENBQUMsc0JBQXNCO0lBQ25ELHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxvQkFBb0I7SUFDL0Msb0JBQW9CLEVBQUUsRUFBRSxDQUFDLGtCQUFr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RUFBRSxZQUFZLENBQUMsMEJBQTBCO0lBRXJFLHVCQUF1QixFQUFFLG9CQUFvQjtDQUM5QyxDQUFDLEVBL0hJLENBK0hKO0FBcklQOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsSUFBTSxjQUFjLEdBQ3ZCLElBK0hJLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHvJtcm1ZGVmaW5lSW5qZWN0YWJsZSwgybXJtWRlZmluZUluamVjdG9yLH0gZnJvbSAnLi4vLi4vZGkvaW50ZXJmYWNlL2RlZnMnO1xuaW1wb3J0IHvJtcm1aW5qZWN0fSBmcm9tICcuLi8uLi9kaS9pbmplY3Rvcl9jb21wYXRpYmlsaXR5JztcbmltcG9ydCAqIGFzIHIzIGZyb20gJy4uL2luZGV4JztcbmltcG9ydCB7cmVnaXN0ZXJOZ01vZHVsZVR5cGV9IGZyb20gJy4uLy4uL2xpbmtlci9uZ19tb2R1bGVfZmFjdG9yeV9sb2FkZXInO1xuaW1wb3J0ICogYXMgc2FuaXRpemF0aW9uIGZyb20gJy4uLy4uL3Nhbml0aXphdGlvbi9zYW5pdGl6YXRpb24nO1xuXG5cbi8qKlxuICogQSBtYXBwaW5nIG9mIHRoZSBAYW5ndWxhci9jb3JlIEFQSSBzdXJmYWNlIHVzZWQgaW4gZ2VuZXJhdGVkIGV4cHJlc3Npb25zIHRvIHRoZSBhY3R1YWwgc3ltYm9scy5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSBrZXB0IHVwIHRvIGRhdGUgd2l0aCB0aGUgcHVibGljIGV4cG9ydHMgb2YgQGFuZ3VsYXIvY29yZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGFuZ3VsYXJDb3JlRW52OiB7W25hbWU6IHN0cmluZ106IEZ1bmN0aW9ufSA9XG4gICAgKCgpID0+ICh7XG4gICAgICAgJ8m1ybVkZWZpbmVCYXNlJzogcjMuybXJtWRlZmluZUJhc2UsXG4gICAgICAgJ8m1ybVkZWZpbmVDb21wb25lbnQnOiByMy7Jtcm1ZGVmaW5lQ29tcG9uZW50LFxuICAgICAgICfJtcm1ZGVmaW5lRGlyZWN0aXZlJzogcjMuybXJtWRlZmluZURpcmVjdGl2ZSxcbiAgICAgICAnybXJtWRlZmluZUluamVjdGFibGUnOiDJtcm1ZGVmaW5lSW5qZWN0YWJsZSxcbiAgICAgICAnybXJtWRlZmluZUluamVjdG9yJzogybXJtWRlZmluZUluamVjdG9yLFxuICAgICAgICfJtcm1ZGVmaW5lTmdNb2R1bGUnOiByMy7Jtcm1ZGVmaW5lTmdNb2R1bGUsXG4gICAgICAgJ8m1ybVkZWZpbmVQaXBlJzogcjMuybXJtWRlZmluZVBpcGUsXG4gICAgICAgJ8m1ybVkaXJlY3RpdmVJbmplY3QnOiByMy7Jtcm1ZGlyZWN0aXZlSW5qZWN0LFxuICAgICAgICfJtcm1Z2V0RmFjdG9yeU9mJzogcjMuybXJtWdldEZhY3RvcnlPZixcbiAgICAgICAnybXJtWdldEluaGVyaXRlZEZhY3RvcnknOiByMy7Jtcm1Z2V0SW5oZXJpdGVkRmFjdG9yeSxcbiAgICAgICAnybXJtWluamVjdCc6IMm1ybVpbmplY3QsXG4gICAgICAgJ8m1ybVpbmplY3RBdHRyaWJ1dGUnOiByMy7Jtcm1aW5qZWN0QXR0cmlidXRlLFxuICAgICAgICfJtcm1dGVtcGxhdGVSZWZFeHRyYWN0b3InOiByMy7Jtcm1dGVtcGxhdGVSZWZFeHRyYWN0b3IsXG4gICAgICAgJ8m1ybVOZ09uQ2hhbmdlc0ZlYXR1cmUnOiByMy7Jtcm1TmdPbkNoYW5nZXNGZWF0dXJlLFxuICAgICAgICfJtcm1UHJvdmlkZXJzRmVhdHVyZSc6IHIzLsm1ybVQcm92aWRlcnNGZWF0dXJlLFxuICAgICAgICfJtcm1SW5oZXJpdERlZmluaXRpb25GZWF0dXJlJzogcjMuybXJtUluaGVyaXREZWZpbml0aW9uRmVhdHVyZSxcbiAgICAgICAnybXJtWVsZW1lbnRBdHRyaWJ1dGUnOiByMy7Jtcm1ZWxlbWVudEF0dHJpYnV0ZSxcbiAgICAgICAnybXJtWJpbmQnOiByMy7Jtcm1YmluZCxcbiAgICAgICAnybXJtWNvbnRhaW5lcic6IHIzLsm1ybVjb250YWluZXIsXG4gICAgICAgJ8m1ybVuZXh0Q29udGV4dCc6IHIzLsm1ybVuZXh0Q29udGV4dCxcbiAgICAgICAnybXJtWNvbnRhaW5lclJlZnJlc2hTdGFydCc6IHIzLsm1ybVjb250YWluZXJSZWZyZXNoU3RhcnQsXG4gICAgICAgJ8m1ybVjb250YWluZXJSZWZyZXNoRW5kJzogcjMuybXJtWNvbnRhaW5lclJlZnJlc2hFbmQsXG4gICAgICAgJ8m1ybVuYW1lc3BhY2VIVE1MJzogcjMuybXJtW5hbWVzcGFjZUhUTUwsXG4gICAgICAgJ8m1ybVuYW1lc3BhY2VNYXRoTUwnOiByMy7Jtcm1bmFtZXNwYWNlTWF0aE1MLFxuICAgICAgICfJtcm1bmFtZXNwYWNlU1ZHJzogcjMuybXJtW5hbWVzcGFjZVNWRyxcbiAgICAgICAnybXJtWVuYWJsZUJpbmRpbmdzJzogcjMuybXJtWVuYWJsZUJpbmRpbmdzLFxuICAgICAgICfJtcm1ZGlzYWJsZUJpbmRpbmdzJzogcjMuybXJtWRpc2FibGVCaW5kaW5ncyxcbiAgICAgICAnybXJtWFsbG9jSG9zdFZhcnMnOiByMy7Jtcm1YWxsb2NIb3N0VmFycyxcbiAgICAgICAnybXJtWVsZW1lbnRTdGFydCc6IHIzLsm1ybVlbGVtZW50U3RhcnQsXG4gICAgICAgJ8m1ybVlbGVtZW50RW5kJzogcjMuybXJtWVsZW1lbnRFbmQsXG4gICAgICAgJ8m1ybVlbGVtZW50JzogcjMuybXJtWVsZW1lbnQsXG4gICAgICAgJ8m1ybVlbGVtZW50Q29udGFpbmVyU3RhcnQnOiByMy7Jtcm1ZWxlbWVudENvbnRhaW5lclN0YXJ0LFxuICAgICAgICfJtcm1ZWxlbWVudENvbnRhaW5lckVuZCc6IHIzLsm1ybVlbGVtZW50Q29udGFpbmVyRW5kLFxuICAgICAgICfJtcm1cHVyZUZ1bmN0aW9uMCc6IHIzLsm1ybVwdXJlRnVuY3Rpb24wLFxuICAgICAgICfJtcm1cHVyZUZ1bmN0aW9uMSc6IHIzLsm1ybVwdXJlRnVuY3Rpb24xLFxuICAgICAgICfJtcm1cHVyZUZ1bmN0aW9uMic6IHIzLsm1ybVwdXJlRnVuY3Rpb24yLFxuICAgICAgICfJtcm1cHVyZUZ1bmN0aW9uMyc6IHIzLsm1ybVwdXJlRnVuY3Rpb24zLFxuICAgICAgICfJtcm1cHVyZUZ1bmN0aW9uNCc6IHIzLsm1ybVwdXJlRnVuY3Rpb240LFxuICAgICAgICfJtcm1cHVyZUZ1bmN0aW9uNSc6IHIzLsm1ybVwdXJlRnVuY3Rpb241LFxuICAgICAgICfJtcm1cHVyZUZ1bmN0aW9uNic6IHIzLsm1ybVwdXJlRnVuY3Rpb242LFxuICAgICAgICfJtcm1cHVyZUZ1bmN0aW9uNyc6IHIzLsm1ybVwdXJlRnVuY3Rpb243LFxuICAgICAgICfJtcm1cHVyZUZ1bmN0aW9uOCc6IHIzLsm1ybVwdXJlRnVuY3Rpb244LFxuICAgICAgICfJtcm1cHVyZUZ1bmN0aW9uVic6IHIzLsm1ybVwdXJlRnVuY3Rpb25WLFxuICAgICAgICfJtcm1Z2V0Q3VycmVudFZpZXcnOiByMy7Jtcm1Z2V0Q3VycmVudFZpZXcsXG4gICAgICAgJ8m1ybVyZXN0b3JlVmlldyc6IHIzLsm1ybVyZXN0b3JlVmlldyxcbiAgICAgICAnybXJtWludGVycG9sYXRpb24xJzogcjMuybXJtWludGVycG9sYXRpb24xLFxuICAgICAgICfJtcm1aW50ZXJwb2xhdGlvbjInOiByMy7Jtcm1aW50ZXJwb2xhdGlvbjIsXG4gICAgICAgJ8m1ybVpbnRlcnBvbGF0aW9uMyc6IHIzLsm1ybVpbnRlcnBvbGF0aW9uMyxcbiAgICAgICAnybXJtWludGVycG9sYXRpb240JzogcjMuybXJtWludGVycG9sYXRpb240LFxuICAgICAgICfJtcm1aW50ZXJwb2xhdGlvbjUnOiByMy7Jtcm1aW50ZXJwb2xhdGlvbjUsXG4gICAgICAgJ8m1ybVpbnRlcnBvbGF0aW9uNic6IHIzLsm1ybVpbnRlcnBvbGF0aW9uNixcbiAgICAgICAnybXJtWludGVycG9sYXRpb243JzogcjMuybXJtWludGVycG9sYXRpb243LFxuICAgICAgICfJtcm1aW50ZXJwb2xhdGlvbjgnOiByMy7Jtcm1aW50ZXJwb2xhdGlvbjgsXG4gICAgICAgJ8m1ybVpbnRlcnBvbGF0aW9uVic6IHIzLsm1ybVpbnRlcnBvbGF0aW9uVixcbiAgICAgICAnybXJtWxpc3RlbmVyJzogcjMuybXJtWxpc3RlbmVyLFxuICAgICAgICfJtcm1bG9hZCc6IHIzLsm1ybVsb2FkLFxuICAgICAgICfJtcm1cHJvamVjdGlvbic6IHIzLsm1ybVwcm9qZWN0aW9uLFxuICAgICAgICfJtcm1ZWxlbWVudFByb3BlcnR5JzogcjMuybXJtWVsZW1lbnRQcm9wZXJ0eSxcbiAgICAgICAnybXJtWNvbXBvbmVudEhvc3RTeW50aGV0aWNQcm9wZXJ0eSc6IHIzLsm1ybVjb21wb25lbnRIb3N0U3ludGhldGljUHJvcGVydHksXG4gICAgICAgJ8m1ybVjb21wb25lbnRIb3N0U3ludGhldGljTGlzdGVuZXInOiByMy7Jtcm1Y29tcG9uZW50SG9zdFN5bnRoZXRpY0xpc3RlbmVyLFxuICAgICAgICfJtcm1cGlwZUJpbmQxJzogcjMuybXJtXBpcGVCaW5kMSxcbiAgICAgICAnybXJtXBpcGVCaW5kMic6IHIzLsm1ybVwaXBlQmluZDIsXG4gICAgICAgJ8m1ybVwaXBlQmluZDMnOiByMy7Jtcm1cGlwZUJpbmQzLFxuICAgICAgICfJtcm1cGlwZUJpbmQ0JzogcjMuybXJtXBpcGVCaW5kNCxcbiAgICAgICAnybXJtXBpcGVCaW5kVic6IHIzLsm1ybVwaXBlQmluZFYsXG4gICAgICAgJ8m1ybVwcm9qZWN0aW9uRGVmJzogcjMuybXJtXByb2plY3Rpb25EZWYsXG4gICAgICAgJ8m1ybVwcm9wZXJ0eSc6IHIzLsm1ybVwcm9wZXJ0eSxcbiAgICAgICAnybXJtXByb3BlcnR5SW50ZXJwb2xhdGUnOiByMy7Jtcm1cHJvcGVydHlJbnRlcnBvbGF0ZSxcbiAgICAgICAnybXJtXByb3BlcnR5SW50ZXJwb2xhdGUxJzogcjMuybXJtXByb3BlcnR5SW50ZXJwb2xhdGUxLFxuICAgICAgICfJtcm1cHJvcGVydHlJbnRlcnBvbGF0ZTInOiByMy7Jtcm1cHJvcGVydHlJbnRlcnBvbGF0ZTIsXG4gICAgICAgJ8m1ybVwcm9wZXJ0eUludGVycG9sYXRlMyc6IHIzLsm1ybVwcm9wZXJ0eUludGVycG9sYXRlMyxcbiAgICAgICAnybXJtXByb3BlcnR5SW50ZXJwb2xhdGU0JzogcjMuybXJtXByb3BlcnR5SW50ZXJwb2xhdGU0LFxuICAgICAgICfJtcm1cHJvcGVydHlJbnRlcnBvbGF0ZTUnOiByMy7Jtcm1cHJvcGVydHlJbnRlcnBvbGF0ZTUsXG4gICAgICAgJ8m1ybVwcm9wZXJ0eUludGVycG9sYXRlNic6IHIzLsm1ybVwcm9wZXJ0eUludGVycG9sYXRlNixcbiAgICAgICAnybXJtXByb3BlcnR5SW50ZXJwb2xhdGU3JzogcjMuybXJtXByb3BlcnR5SW50ZXJwb2xhdGU3LFxuICAgICAgICfJtcm1cHJvcGVydHlJbnRlcnBvbGF0ZTgnOiByMy7Jtcm1cHJvcGVydHlJbnRlcnBvbGF0ZTgsXG4gICAgICAgJ8m1ybVwcm9wZXJ0eUludGVycG9sYXRlVic6IHIzLsm1ybVwcm9wZXJ0eUludGVycG9sYXRlVixcbiAgICAgICAnybXJtXBpcGUnOiByMy7Jtcm1cGlwZSxcbiAgICAgICAnybXJtXF1ZXJ5UmVmcmVzaCc6IHIzLsm1ybVxdWVyeVJlZnJlc2gsXG4gICAgICAgJ8m1ybV2aWV3UXVlcnknOiByMy7Jtcm1dmlld1F1ZXJ5LFxuICAgICAgICfJtcm1c3RhdGljVmlld1F1ZXJ5JzogcjMuybXJtXN0YXRpY1ZpZXdRdWVyeSxcbiAgICAgICAnybXJtXN0YXRpY0NvbnRlbnRRdWVyeSc6IHIzLsm1ybVzdGF0aWNDb250ZW50UXVlcnksXG4gICAgICAgJ8m1ybVsb2FkVmlld1F1ZXJ5JzogcjMuybXJtWxvYWRWaWV3UXVlcnksXG4gICAgICAgJ8m1ybVjb250ZW50UXVlcnknOiByMy7Jtcm1Y29udGVudFF1ZXJ5LFxuICAgICAgICfJtcm1bG9hZENvbnRlbnRRdWVyeSc6IHIzLsm1ybVsb2FkQ29udGVudFF1ZXJ5LFxuICAgICAgICfJtcm1cmVmZXJlbmNlJzogcjMuybXJtXJlZmVyZW5jZSxcbiAgICAgICAnybXJtWVsZW1lbnRIb3N0QXR0cnMnOiByMy7Jtcm1ZWxlbWVudEhvc3RBdHRycyxcbiAgICAgICAnybXJtWVsZW1lbnRTdHlsaW5nJzogcjMuybXJtWVsZW1lbnRTdHlsaW5nLFxuICAgICAgICfJtcm1ZWxlbWVudFN0eWxpbmdNYXAnOiByMy7Jtcm1ZWxlbWVudFN0eWxpbmdNYXAsXG4gICAgICAgJ8m1ybVlbGVtZW50U3R5bGVQcm9wJzogcjMuybXJtWVsZW1lbnRTdHlsZVByb3AsXG4gICAgICAgJ8m1ybVlbGVtZW50U3R5bGluZ0FwcGx5JzogcjMuybXJtWVsZW1lbnRTdHlsaW5nQXBwbHksXG4gICAgICAgJ8m1ybVlbGVtZW50Q2xhc3NQcm9wJzogcjMuybXJtWVsZW1lbnRDbGFzc1Byb3AsXG4gICAgICAgJ8m1ybVlbGVtZW50SG9zdFN0eWxpbmcnOiByMy7Jtcm1ZWxlbWVudEhvc3RTdHlsaW5nLFxuICAgICAgICfJtcm1ZWxlbWVudEhvc3RTdHlsaW5nTWFwJzogcjMuybXJtWVsZW1lbnRIb3N0U3R5bGluZ01hcCxcbiAgICAgICAnybXJtWVsZW1lbnRIb3N0U3R5bGVQcm9wJzogcjMuybXJtWVsZW1lbnRIb3N0U3R5bGVQcm9wLFxuICAgICAgICfJtcm1ZWxlbWVudEhvc3RTdHlsaW5nQXBwbHknOiByMy7Jtcm1ZWxlbWVudEhvc3RTdHlsaW5nQXBwbHksXG4gICAgICAgJ8m1ybVlbGVtZW50SG9zdENsYXNzUHJvcCc6IHIzLsm1ybVlbGVtZW50SG9zdENsYXNzUHJvcCxcbiAgICAgICAnybXJtXNlbGVjdCc6IHIzLsm1ybVzZWxlY3QsXG4gICAgICAgJ8m1ybV0ZW1wbGF0ZSc6IHIzLsm1ybV0ZW1wbGF0ZSxcbiAgICAgICAnybXJtXRleHQnOiByMy7Jtcm1dGV4dCxcbiAgICAgICAnybXJtXRleHRCaW5kaW5nJzogcjMuybXJtXRleHRCaW5kaW5nLFxuICAgICAgICfJtcm1ZW1iZWRkZWRWaWV3U3RhcnQnOiByMy7Jtcm1ZW1iZWRkZWRWaWV3U3RhcnQsXG4gICAgICAgJ8m1ybVlbWJlZGRlZFZpZXdFbmQnOiByMy7Jtcm1ZW1iZWRkZWRWaWV3RW5kLFxuICAgICAgICfJtcm1aTE4bic6IHIzLsm1ybVpMThuLFxuICAgICAgICfJtcm1aTE4bkF0dHJpYnV0ZXMnOiByMy7Jtcm1aTE4bkF0dHJpYnV0ZXMsXG4gICAgICAgJ8m1ybVpMThuRXhwJzogcjMuybXJtWkxOG5FeHAsXG4gICAgICAgJ8m1ybVpMThuU3RhcnQnOiByMy7Jtcm1aTE4blN0YXJ0LFxuICAgICAgICfJtcm1aTE4bkVuZCc6IHIzLsm1ybVpMThuRW5kLFxuICAgICAgICfJtcm1aTE4bkFwcGx5JzogcjMuybXJtWkxOG5BcHBseSxcbiAgICAgICAnybXJtWkxOG5Qb3N0cHJvY2Vzcyc6IHIzLsm1ybVpMThuUG9zdHByb2Nlc3MsXG4gICAgICAgJ8m1ybVpMThuTG9jYWxpemUnOiByMy7Jtcm1aTE4bkxvY2FsaXplLFxuICAgICAgICfJtcm1cmVzb2x2ZVdpbmRvdyc6IHIzLsm1ybVyZXNvbHZlV2luZG93LFxuICAgICAgICfJtcm1cmVzb2x2ZURvY3VtZW50JzogcjMuybXJtXJlc29sdmVEb2N1bWVudCxcbiAgICAgICAnybXJtXJlc29sdmVCb2R5JzogcjMuybXJtXJlc29sdmVCb2R5LFxuICAgICAgICfJtcm1c2V0Q29tcG9uZW50U2NvcGUnOiByMy7Jtcm1c2V0Q29tcG9uZW50U2NvcGUsXG4gICAgICAgJ8m1ybVzZXROZ01vZHVsZVNjb3BlJzogcjMuybXJtXNldE5nTW9kdWxlU2NvcGUsXG5cbiAgICAgICAnybXJtXNhbml0aXplSHRtbCc6IHNhbml0aXphdGlvbi7Jtcm1c2FuaXRpemVIdG1sLFxuICAgICAgICfJtcm1c2FuaXRpemVTdHlsZSc6IHNhbml0aXphdGlvbi7Jtcm1c2FuaXRpemVTdHlsZSxcbiAgICAgICAnybXJtWRlZmF1bHRTdHlsZVNhbml0aXplcic6IHNhbml0aXphdGlvbi7Jtcm1ZGVmYXVsdFN0eWxlU2FuaXRpemVyLFxuICAgICAgICfJtcm1c2FuaXRpemVSZXNvdXJjZVVybCc6IHNhbml0aXphdGlvbi7Jtcm1c2FuaXRpemVSZXNvdXJjZVVybCxcbiAgICAgICAnybXJtXNhbml0aXplU2NyaXB0Jzogc2FuaXRpemF0aW9uLsm1ybVzYW5pdGl6ZVNjcmlwdCxcbiAgICAgICAnybXJtXNhbml0aXplVXJsJzogc2FuaXRpemF0aW9uLsm1ybVzYW5pdGl6ZVVybCxcbiAgICAgICAnybXJtXNhbml0aXplVXJsT3JSZXNvdXJjZVVybCc6IHNhbml0aXphdGlvbi7Jtcm1c2FuaXRpemVVcmxPclJlc291cmNlVXJsLFxuXG4gICAgICAgJ8m1cmVnaXN0ZXJOZ01vZHVsZVR5cGUnOiByZWdpc3Rlck5nTW9kdWxlVHlwZSxcbiAgICAgfSkpKCk7XG4iXX0=