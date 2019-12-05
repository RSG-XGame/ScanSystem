/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getClosureSafeProperty } from '../../util/property';
/**
 * Construct an `InjectableDef` which defines how a token will be constructed by the DI system, and
 * in which injectors (if any) it will be available.
 *
 * This should be assigned to a static `ngInjectableDef` field on a type, which will then be an
 * `InjectableType`.
 *
 * Options:
 * * `providedIn` determines which injectors will include the injectable, by either associating it
 *   with an `@NgModule` or other `InjectorType`, or by specifying that this injectable should be
 *   provided in the `'root'` injector, which will be the application-level injector in most apps.
 * * `factory` gives the zero argument function which will create an instance of the injectable.
 *   The factory can call `inject` to access the `Injector` and request injection of dependencies.
 *
 * @codeGenApi
 */
export function ɵɵdefineInjectable(opts) {
    return {
        providedIn: opts.providedIn || null, factory: opts.factory, value: undefined,
    };
}
/**
 * @deprecated in v8, delete after v10. This API should be used only be generated code, and that
 * code should now use ɵɵdefineInjectable instead.
 * @publicApi
 */
export const defineInjectable = ɵɵdefineInjectable;
/**
 * Construct an `InjectorDef` which configures an injector.
 *
 * This should be assigned to a static `ngInjectorDef` field on a type, which will then be an
 * `InjectorType`.
 *
 * Options:
 *
 * * `factory`: an `InjectorType` is an instantiable type, so a zero argument `factory` function to
 *   create the type must be provided. If that factory function needs to inject arguments, it can
 *   use the `inject` function.
 * * `providers`: an optional array of providers to add to the injector. Each provider must
 *   either have a factory or point to a type which has an `ngInjectableDef` static property (the
 *   type must be an `InjectableType`).
 * * `imports`: an optional array of imports of other `InjectorType`s or `InjectorTypeWithModule`s
 *   whose providers will also be added to the injector. Locally provided types will override
 *   providers from imports.
 *
 * @publicApi
 */
export function ɵɵdefineInjector(options) {
    return {
        factory: options.factory, providers: options.providers || [], imports: options.imports || [],
    };
}
/**
 * Read the `ngInjectableDef` type in a way which is immune to accidentally reading inherited value.
 *
 * @param type type which may have `ngInjectableDef`
 */
export function getInjectableDef(type) {
    return type && type.hasOwnProperty(NG_INJECTABLE_DEF) ? type[NG_INJECTABLE_DEF] : null;
}
/**
 * Read the `ngInjectorDef` type in a way which is immune to accidentally reading inherited value.
 *
 * @param type type which may have `ngInjectorDef`
 */
export function getInjectorDef(type) {
    return type && type.hasOwnProperty(NG_INJECTOR_DEF) ? type[NG_INJECTOR_DEF] : null;
}
export const NG_INJECTABLE_DEF = getClosureSafeProperty({ ngInjectableDef: getClosureSafeProperty });
export const NG_INJECTOR_DEF = getClosureSafeProperty({ ngInjectorDef: getClosureSafeProperty });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2RpL2ludGVyZmFjZS9kZWZzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUdILE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBNEczRDs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQUksSUFHckM7SUFDQyxPQUFRO1FBQ04sVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFpQixJQUFJLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUztLQUNwRCxDQUFDO0FBQ3BDLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7QUFFbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsT0FBaUU7SUFFaEcsT0FBUTtRQUNOLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFO0tBQzdELENBQUM7QUFDcEMsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQUksSUFBUztJQUMzQyxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFFLElBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDbEcsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsY0FBYyxDQUFJLElBQVM7SUFDekMsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUUsSUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDOUYsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLHNCQUFzQixDQUFDLEVBQUMsZUFBZSxFQUFFLHNCQUFzQixFQUFDLENBQUMsQ0FBQztBQUNuRyxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsc0JBQXNCLENBQUMsRUFBQyxhQUFhLEVBQUUsc0JBQXNCLEVBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1R5cGV9IGZyb20gJy4uLy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7Z2V0Q2xvc3VyZVNhZmVQcm9wZXJ0eX0gZnJvbSAnLi4vLi4vdXRpbC9wcm9wZXJ0eSc7XG5pbXBvcnQge0NsYXNzUHJvdmlkZXIsIENvbnN0cnVjdG9yUHJvdmlkZXIsIEV4aXN0aW5nUHJvdmlkZXIsIEZhY3RvcnlQcm92aWRlciwgU3RhdGljQ2xhc3NQcm92aWRlciwgVmFsdWVQcm92aWRlcn0gZnJvbSAnLi9wcm92aWRlcic7XG5cblxuXG4vKipcbiAqIEluZm9ybWF0aW9uIGFib3V0IGhvdyBhIHR5cGUgb3IgYEluamVjdGlvblRva2VuYCBpbnRlcmZhY2VzIHdpdGggdGhlIERJIHN5c3RlbS5cbiAqXG4gKiBBdCBhIG1pbmltdW0sIHRoaXMgaW5jbHVkZXMgYSBgZmFjdG9yeWAgd2hpY2ggZGVmaW5lcyBob3cgdG8gY3JlYXRlIHRoZSBnaXZlbiB0eXBlIGBUYCwgcG9zc2libHlcbiAqIHJlcXVlc3RpbmcgaW5qZWN0aW9uIG9mIG90aGVyIHR5cGVzIGlmIG5lY2Vzc2FyeS5cbiAqXG4gKiBPcHRpb25hbGx5LCBhIGBwcm92aWRlZEluYCBwYXJhbWV0ZXIgc3BlY2lmaWVzIHRoYXQgdGhlIGdpdmVuIHR5cGUgYmVsb25ncyB0byBhIHBhcnRpY3VsYXJcbiAqIGBJbmplY3RvckRlZmAsIGBOZ01vZHVsZWAsIG9yIGEgc3BlY2lhbCBzY29wZSAoZS5nLiBgJ3Jvb3QnYCkuIEEgdmFsdWUgb2YgYG51bGxgIGluZGljYXRlc1xuICogdGhhdCB0aGUgaW5qZWN0YWJsZSBkb2VzIG5vdCBiZWxvbmcgdG8gYW55IHNjb3BlLlxuICpcbiAqIE5PVEU6IFRoaXMgaXMgYSBwcml2YXRlIHR5cGUgYW5kIHNob3VsZCBub3QgYmUgZXhwb3J0ZWRcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgybXJtUluamVjdGFibGVEZWY8VD4ge1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoYXQgdGhlIGdpdmVuIHR5cGUgYmVsb25ncyB0byBhIHBhcnRpY3VsYXIgaW5qZWN0b3I6XG4gICAqIC0gYEluamVjdG9yVHlwZWAgc3VjaCBhcyBgTmdNb2R1bGVgLFxuICAgKiAtIGAncm9vdCdgIHRoZSByb290IGluamVjdG9yXG4gICAqIC0gYCdhbnknYCBhbGwgaW5qZWN0b3JzLlxuICAgKiAtIGBudWxsYCwgZG9lcyBub3QgYmVsb25nIHRvIGFueSBpbmplY3Rvci4gTXVzdCBiZSBleHBsaWNpdGx5IGxpc3RlZCBpbiB0aGUgaW5qZWN0b3JcbiAgICogICBgcHJvdmlkZXJzYC5cbiAgICovXG4gIHByb3ZpZGVkSW46IEluamVjdG9yVHlwZTxhbnk+fCdyb290J3wnYW55J3xudWxsO1xuXG4gIC8qKlxuICAgKiBGYWN0b3J5IG1ldGhvZCB0byBleGVjdXRlIHRvIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgaW5qZWN0YWJsZS5cbiAgICovXG4gIGZhY3Rvcnk6ICgpID0+IFQ7XG5cbiAgLyoqXG4gICAqIEluIGEgY2FzZSBvZiBubyBleHBsaWNpdCBpbmplY3RvciwgYSBsb2NhdGlvbiB3aGVyZSB0aGUgaW5zdGFuY2Ugb2YgdGhlIGluamVjdGFibGUgaXMgc3RvcmVkLlxuICAgKi9cbiAgdmFsdWU6IFR8dW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEluZm9ybWF0aW9uIGFib3V0IHRoZSBwcm92aWRlcnMgdG8gYmUgaW5jbHVkZWQgaW4gYW4gYEluamVjdG9yYCBhcyB3ZWxsIGFzIGhvdyB0aGUgZ2l2ZW4gdHlwZVxuICogd2hpY2ggY2FycmllcyB0aGUgaW5mb3JtYXRpb24gc2hvdWxkIGJlIGNyZWF0ZWQgYnkgdGhlIERJIHN5c3RlbS5cbiAqXG4gKiBBbiBgSW5qZWN0b3JEZWZgIGNhbiBpbXBvcnQgb3RoZXIgdHlwZXMgd2hpY2ggaGF2ZSBgSW5qZWN0b3JEZWZzYCwgZm9ybWluZyBhIGRlZXAgbmVzdGVkXG4gKiBzdHJ1Y3R1cmUgb2YgcHJvdmlkZXJzIHdpdGggYSBkZWZpbmVkIHByaW9yaXR5IChpZGVudGljYWxseSB0byBob3cgYE5nTW9kdWxlYHMgYWxzbyBoYXZlXG4gKiBhbiBpbXBvcnQvZGVwZW5kZW5jeSBzdHJ1Y3R1cmUpLlxuICpcbiAqIE5PVEU6IFRoaXMgaXMgYSBwcml2YXRlIHR5cGUgYW5kIHNob3VsZCBub3QgYmUgZXhwb3J0ZWRcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgybXJtUluamVjdG9yRGVmPFQ+IHtcbiAgZmFjdG9yeTogKCkgPT4gVDtcblxuICAvLyBUT0RPKGFseGh1Yik6IE5hcnJvdyBkb3duIHRoZSB0eXBlIGhlcmUgb25jZSBkZWNvcmF0b3JzIHByb3Blcmx5IGNoYW5nZSB0aGUgcmV0dXJuIHR5cGUgb2YgdGhlXG4gIC8vIGNsYXNzIHRoZXkgYXJlIGRlY29yYXRpbmcgKHRvIGFkZCB0aGUgbmdJbmplY3RhYmxlRGVmIHByb3BlcnR5IGZvciBleGFtcGxlKS5cbiAgcHJvdmlkZXJzOiAoVHlwZTxhbnk+fFZhbHVlUHJvdmlkZXJ8RXhpc3RpbmdQcm92aWRlcnxGYWN0b3J5UHJvdmlkZXJ8Q29uc3RydWN0b3JQcm92aWRlcnxcbiAgICAgICAgICAgICAgU3RhdGljQ2xhc3NQcm92aWRlcnxDbGFzc1Byb3ZpZGVyfGFueVtdKVtdO1xuXG4gIGltcG9ydHM6IChJbmplY3RvclR5cGU8YW55PnxJbmplY3RvclR5cGVXaXRoUHJvdmlkZXJzPGFueT4pW107XG59XG5cbi8qKlxuICogQSBgVHlwZWAgd2hpY2ggaGFzIGFuIGBJbmplY3RhYmxlRGVmYCBzdGF0aWMgZmllbGQuXG4gKlxuICogYEluamVjdGFibGVEZWZUeXBlYHMgY29udGFpbiB0aGVpciBvd24gRGVwZW5kZW5jeSBJbmplY3Rpb24gbWV0YWRhdGEgYW5kIGFyZSB1c2FibGUgaW4gYW5cbiAqIGBJbmplY3RvckRlZmAtYmFzZWQgYFN0YXRpY0luamVjdG9yLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbmplY3RhYmxlVHlwZTxUPiBleHRlbmRzIFR5cGU8VD4ge1xuICAvKipcbiAgICogT3BhcXVlIHR5cGUgd2hvc2Ugc3RydWN0dXJlIGlzIGhpZ2hseSB2ZXJzaW9uIGRlcGVuZGVudC4gRG8gbm90IHJlbHkgb24gYW55IHByb3BlcnRpZXMuXG4gICAqL1xuICBuZ0luamVjdGFibGVEZWY6IG5ldmVyO1xufVxuXG4vKipcbiAqIEEgdHlwZSB3aGljaCBoYXMgYW4gYEluamVjdG9yRGVmYCBzdGF0aWMgZmllbGQuXG4gKlxuICogYEluamVjdG9yRGVmVHlwZXNgIGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSBhIGBTdGF0aWNJbmplY3RvcmAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluamVjdG9yVHlwZTxUPiBleHRlbmRzIFR5cGU8VD4ge1xuICAvKipcbiAgICogT3BhcXVlIHR5cGUgd2hvc2Ugc3RydWN0dXJlIGlzIGhpZ2hseSB2ZXJzaW9uIGRlcGVuZGVudC4gRG8gbm90IHJlbHkgb24gYW55IHByb3BlcnRpZXMuXG4gICAqL1xuICBuZ0luamVjdG9yRGVmOiBuZXZlcjtcbn1cblxuLyoqXG4gKiBEZXNjcmliZXMgdGhlIGBJbmplY3RvckRlZmAgZXF1aXZhbGVudCBvZiBhIGBNb2R1bGVXaXRoUHJvdmlkZXJzYCwgYW4gYEluamVjdG9yRGVmVHlwZWAgd2l0aCBhblxuICogYXNzb2NpYXRlZCBhcnJheSBvZiBwcm92aWRlcnMuXG4gKlxuICogT2JqZWN0cyBvZiB0aGlzIHR5cGUgY2FuIGJlIGxpc3RlZCBpbiB0aGUgaW1wb3J0cyBzZWN0aW9uIG9mIGFuIGBJbmplY3RvckRlZmAuXG4gKlxuICogTk9URTogVGhpcyBpcyBhIHByaXZhdGUgdHlwZSBhbmQgc2hvdWxkIG5vdCBiZSBleHBvcnRlZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluamVjdG9yVHlwZVdpdGhQcm92aWRlcnM8VD4ge1xuICBuZ01vZHVsZTogSW5qZWN0b3JUeXBlPFQ+O1xuICBwcm92aWRlcnM/OiAoVHlwZTxhbnk+fFZhbHVlUHJvdmlkZXJ8RXhpc3RpbmdQcm92aWRlcnxGYWN0b3J5UHJvdmlkZXJ8Q29uc3RydWN0b3JQcm92aWRlcnxcbiAgICAgICAgICAgICAgIFN0YXRpY0NsYXNzUHJvdmlkZXJ8Q2xhc3NQcm92aWRlcnxhbnlbXSlbXTtcbn1cblxuXG4vKipcbiAqIENvbnN0cnVjdCBhbiBgSW5qZWN0YWJsZURlZmAgd2hpY2ggZGVmaW5lcyBob3cgYSB0b2tlbiB3aWxsIGJlIGNvbnN0cnVjdGVkIGJ5IHRoZSBESSBzeXN0ZW0sIGFuZFxuICogaW4gd2hpY2ggaW5qZWN0b3JzIChpZiBhbnkpIGl0IHdpbGwgYmUgYXZhaWxhYmxlLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIGFzc2lnbmVkIHRvIGEgc3RhdGljIGBuZ0luamVjdGFibGVEZWZgIGZpZWxkIG9uIGEgdHlwZSwgd2hpY2ggd2lsbCB0aGVuIGJlIGFuXG4gKiBgSW5qZWN0YWJsZVR5cGVgLlxuICpcbiAqIE9wdGlvbnM6XG4gKiAqIGBwcm92aWRlZEluYCBkZXRlcm1pbmVzIHdoaWNoIGluamVjdG9ycyB3aWxsIGluY2x1ZGUgdGhlIGluamVjdGFibGUsIGJ5IGVpdGhlciBhc3NvY2lhdGluZyBpdFxuICogICB3aXRoIGFuIGBATmdNb2R1bGVgIG9yIG90aGVyIGBJbmplY3RvclR5cGVgLCBvciBieSBzcGVjaWZ5aW5nIHRoYXQgdGhpcyBpbmplY3RhYmxlIHNob3VsZCBiZVxuICogICBwcm92aWRlZCBpbiB0aGUgYCdyb290J2AgaW5qZWN0b3IsIHdoaWNoIHdpbGwgYmUgdGhlIGFwcGxpY2F0aW9uLWxldmVsIGluamVjdG9yIGluIG1vc3QgYXBwcy5cbiAqICogYGZhY3RvcnlgIGdpdmVzIHRoZSB6ZXJvIGFyZ3VtZW50IGZ1bmN0aW9uIHdoaWNoIHdpbGwgY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBpbmplY3RhYmxlLlxuICogICBUaGUgZmFjdG9yeSBjYW4gY2FsbCBgaW5qZWN0YCB0byBhY2Nlc3MgdGhlIGBJbmplY3RvcmAgYW5kIHJlcXVlc3QgaW5qZWN0aW9uIG9mIGRlcGVuZGVuY2llcy5cbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtWRlZmluZUluamVjdGFibGU8VD4ob3B0czoge1xuICBwcm92aWRlZEluPzogVHlwZTxhbnk+fCAncm9vdCcgfCAnYW55JyB8IG51bGwsXG4gIGZhY3Rvcnk6ICgpID0+IFQsXG59KTogbmV2ZXIge1xuICByZXR1cm4gKHtcbiAgICBwcm92aWRlZEluOiBvcHRzLnByb3ZpZGVkSW4gYXMgYW55IHx8IG51bGwsIGZhY3Rvcnk6IG9wdHMuZmFjdG9yeSwgdmFsdWU6IHVuZGVmaW5lZCxcbiAgfSBhcyDJtcm1SW5qZWN0YWJsZURlZjxUPikgYXMgbmV2ZXI7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgaW4gdjgsIGRlbGV0ZSBhZnRlciB2MTAuIFRoaXMgQVBJIHNob3VsZCBiZSB1c2VkIG9ubHkgYmUgZ2VuZXJhdGVkIGNvZGUsIGFuZCB0aGF0XG4gKiBjb2RlIHNob3VsZCBub3cgdXNlIMm1ybVkZWZpbmVJbmplY3RhYmxlIGluc3RlYWQuXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBkZWZpbmVJbmplY3RhYmxlID0gybXJtWRlZmluZUluamVjdGFibGU7XG5cbi8qKlxuICogQ29uc3RydWN0IGFuIGBJbmplY3RvckRlZmAgd2hpY2ggY29uZmlndXJlcyBhbiBpbmplY3Rvci5cbiAqXG4gKiBUaGlzIHNob3VsZCBiZSBhc3NpZ25lZCB0byBhIHN0YXRpYyBgbmdJbmplY3RvckRlZmAgZmllbGQgb24gYSB0eXBlLCB3aGljaCB3aWxsIHRoZW4gYmUgYW5cbiAqIGBJbmplY3RvclR5cGVgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogKiBgZmFjdG9yeWA6IGFuIGBJbmplY3RvclR5cGVgIGlzIGFuIGluc3RhbnRpYWJsZSB0eXBlLCBzbyBhIHplcm8gYXJndW1lbnQgYGZhY3RvcnlgIGZ1bmN0aW9uIHRvXG4gKiAgIGNyZWF0ZSB0aGUgdHlwZSBtdXN0IGJlIHByb3ZpZGVkLiBJZiB0aGF0IGZhY3RvcnkgZnVuY3Rpb24gbmVlZHMgdG8gaW5qZWN0IGFyZ3VtZW50cywgaXQgY2FuXG4gKiAgIHVzZSB0aGUgYGluamVjdGAgZnVuY3Rpb24uXG4gKiAqIGBwcm92aWRlcnNgOiBhbiBvcHRpb25hbCBhcnJheSBvZiBwcm92aWRlcnMgdG8gYWRkIHRvIHRoZSBpbmplY3Rvci4gRWFjaCBwcm92aWRlciBtdXN0XG4gKiAgIGVpdGhlciBoYXZlIGEgZmFjdG9yeSBvciBwb2ludCB0byBhIHR5cGUgd2hpY2ggaGFzIGFuIGBuZ0luamVjdGFibGVEZWZgIHN0YXRpYyBwcm9wZXJ0eSAodGhlXG4gKiAgIHR5cGUgbXVzdCBiZSBhbiBgSW5qZWN0YWJsZVR5cGVgKS5cbiAqICogYGltcG9ydHNgOiBhbiBvcHRpb25hbCBhcnJheSBvZiBpbXBvcnRzIG9mIG90aGVyIGBJbmplY3RvclR5cGVgcyBvciBgSW5qZWN0b3JUeXBlV2l0aE1vZHVsZWBzXG4gKiAgIHdob3NlIHByb3ZpZGVycyB3aWxsIGFsc28gYmUgYWRkZWQgdG8gdGhlIGluamVjdG9yLiBMb2NhbGx5IHByb3ZpZGVkIHR5cGVzIHdpbGwgb3ZlcnJpZGVcbiAqICAgcHJvdmlkZXJzIGZyb20gaW1wb3J0cy5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiDJtcm1ZGVmaW5lSW5qZWN0b3Iob3B0aW9uczoge2ZhY3Rvcnk6ICgpID0+IGFueSwgcHJvdmlkZXJzPzogYW55W10sIGltcG9ydHM/OiBhbnlbXX0pOlxuICAgIG5ldmVyIHtcbiAgcmV0dXJuICh7XG4gICAgZmFjdG9yeTogb3B0aW9ucy5mYWN0b3J5LCBwcm92aWRlcnM6IG9wdGlvbnMucHJvdmlkZXJzIHx8IFtdLCBpbXBvcnRzOiBvcHRpb25zLmltcG9ydHMgfHwgW10sXG4gIH0gYXMgybXJtUluamVjdG9yRGVmPGFueT4pIGFzIG5ldmVyO1xufVxuXG4vKipcbiAqIFJlYWQgdGhlIGBuZ0luamVjdGFibGVEZWZgIHR5cGUgaW4gYSB3YXkgd2hpY2ggaXMgaW1tdW5lIHRvIGFjY2lkZW50YWxseSByZWFkaW5nIGluaGVyaXRlZCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gdHlwZSB0eXBlIHdoaWNoIG1heSBoYXZlIGBuZ0luamVjdGFibGVEZWZgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmplY3RhYmxlRGVmPFQ+KHR5cGU6IGFueSk6IMm1ybVJbmplY3RhYmxlRGVmPFQ+fG51bGwge1xuICByZXR1cm4gdHlwZSAmJiB0eXBlLmhhc093blByb3BlcnR5KE5HX0lOSkVDVEFCTEVfREVGKSA/ICh0eXBlIGFzIGFueSlbTkdfSU5KRUNUQUJMRV9ERUZdIDogbnVsbDtcbn1cblxuLyoqXG4gKiBSZWFkIHRoZSBgbmdJbmplY3RvckRlZmAgdHlwZSBpbiBhIHdheSB3aGljaCBpcyBpbW11bmUgdG8gYWNjaWRlbnRhbGx5IHJlYWRpbmcgaW5oZXJpdGVkIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB0eXBlIHR5cGUgd2hpY2ggbWF5IGhhdmUgYG5nSW5qZWN0b3JEZWZgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmplY3RvckRlZjxUPih0eXBlOiBhbnkpOiDJtcm1SW5qZWN0b3JEZWY8VD58bnVsbCB7XG4gIHJldHVybiB0eXBlICYmIHR5cGUuaGFzT3duUHJvcGVydHkoTkdfSU5KRUNUT1JfREVGKSA/ICh0eXBlIGFzIGFueSlbTkdfSU5KRUNUT1JfREVGXSA6IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBOR19JTkpFQ1RBQkxFX0RFRiA9IGdldENsb3N1cmVTYWZlUHJvcGVydHkoe25nSW5qZWN0YWJsZURlZjogZ2V0Q2xvc3VyZVNhZmVQcm9wZXJ0eX0pO1xuZXhwb3J0IGNvbnN0IE5HX0lOSkVDVE9SX0RFRiA9IGdldENsb3N1cmVTYWZlUHJvcGVydHkoe25nSW5qZWN0b3JEZWY6IGdldENsb3N1cmVTYWZlUHJvcGVydHl9KTtcbiJdfQ==