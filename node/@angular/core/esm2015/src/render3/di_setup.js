/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { resolveForwardRef } from '../di/forward_ref';
import { isClassProvider, isTypeProvider, providerToFactory } from '../di/r3_injector';
import { diPublicInInjector, getNodeInjectable, getOrCreateNodeInjectorForNode } from './di';
import { ɵɵdirectiveInject } from './instructions/all';
import { NodeInjectorFactory } from './interfaces/injector';
import { TVIEW } from './interfaces/view';
import { getLView, getPreviousOrParentTNode } from './state';
import { isComponentDef } from './util/view_utils';
/**
 * Resolves the providers which are defined in the DirectiveDef.
 *
 * When inserting the tokens and the factories in their respective arrays, we can assume that
 * this method is called first for the component (if any), and then for other directives on the same
 * node.
 * As a consequence,the providers are always processed in that order:
 * 1) The view providers of the component
 * 2) The providers of the component
 * 3) The providers of the other directives
 * This matches the structure of the injectables arrays of a view (for each node).
 * So the tokens and the factories can be pushed at the end of the arrays, except
 * in one case for multi providers.
 *
 * @template T
 * @param {?} def the directive definition
 * @param {?} providers
 * @param {?} viewProviders
 * @return {?}
 */
export function providersResolver(def, providers, viewProviders) {
    /** @type {?} */
    const lView = getLView();
    /** @type {?} */
    const tView = lView[TVIEW];
    if (tView.firstTemplatePass) {
        /** @type {?} */
        const isComponent = isComponentDef(def);
        // The list of view providers is processed first, and the flags are updated
        resolveProvider(viewProviders, tView.data, tView.blueprint, isComponent, true);
        // Then, the list of providers is processed, and the flags are updated
        resolveProvider(providers, tView.data, tView.blueprint, isComponent, false);
    }
}
/**
 * Resolves a provider and publishes it to the DI system.
 * @param {?} provider
 * @param {?} tInjectables
 * @param {?} lInjectablesBlueprint
 * @param {?} isComponent
 * @param {?} isViewProvider
 * @return {?}
 */
function resolveProvider(provider, tInjectables, lInjectablesBlueprint, isComponent, isViewProvider) {
    provider = resolveForwardRef(provider);
    if (Array.isArray(provider)) {
        // Recursively call `resolveProvider`
        // Recursion is OK in this case because this code will not be in hot-path once we implement
        // cloning of the initial state.
        for (let i = 0; i < provider.length; i++) {
            resolveProvider(provider[i], tInjectables, lInjectablesBlueprint, isComponent, isViewProvider);
        }
    }
    else {
        /** @type {?} */
        const lView = getLView();
        /** @type {?} */
        let token = isTypeProvider(provider) ? provider : resolveForwardRef(provider.provide);
        /** @type {?} */
        let providerFactory = providerToFactory(provider);
        /** @type {?} */
        const tNode = getPreviousOrParentTNode();
        /** @type {?} */
        const beginIndex = tNode.providerIndexes & 65535 /* ProvidersStartIndexMask */;
        /** @type {?} */
        const endIndex = tNode.directiveStart;
        /** @type {?} */
        const cptViewProvidersCount = tNode.providerIndexes >> 16 /* CptViewProvidersCountShift */;
        if (isClassProvider(provider) || isTypeProvider(provider)) {
            /** @type {?} */
            const prototype = (((/** @type {?} */ (provider))).useClass || provider).prototype;
            /** @type {?} */
            const ngOnDestroy = prototype.ngOnDestroy;
            if (ngOnDestroy) {
                /** @type {?} */
                const tView = lView[TVIEW];
                (tView.destroyHooks || (tView.destroyHooks = [])).push(tInjectables.length, ngOnDestroy);
            }
        }
        if (isTypeProvider(provider) || !provider.multi) {
            // Single provider case: the factory is created and pushed immediately
            /** @type {?} */
            const factory = new NodeInjectorFactory(providerFactory, isViewProvider, ɵɵdirectiveInject);
            /** @type {?} */
            const existingFactoryIndex = indexOf(token, tInjectables, isViewProvider ? beginIndex : beginIndex + cptViewProvidersCount, endIndex);
            if (existingFactoryIndex == -1) {
                diPublicInInjector(getOrCreateNodeInjectorForNode((/** @type {?} */ (tNode)), lView), lView, token);
                tInjectables.push(token);
                tNode.directiveStart++;
                tNode.directiveEnd++;
                if (isViewProvider) {
                    tNode.providerIndexes += 65536 /* CptViewProvidersCountShifter */;
                }
                lInjectablesBlueprint.push(factory);
                lView.push(factory);
            }
            else {
                lInjectablesBlueprint[existingFactoryIndex] = factory;
                lView[existingFactoryIndex] = factory;
            }
        }
        else {
            // Multi provider case:
            // We create a multi factory which is going to aggregate all the values.
            // Since the output of such a factory depends on content or view injection,
            // we create two of them, which are linked together.
            //
            // The first one (for view providers) is always in the first block of the injectables array,
            // and the second one (for providers) is always in the second block.
            // This is important because view providers have higher priority. When a multi token
            // is being looked up, the view providers should be found first.
            // Note that it is not possible to have a multi factory in the third block (directive block).
            //
            // The algorithm to process multi providers is as follows:
            // 1) If the multi provider comes from the `viewProviders` of the component:
            //   a) If the special view providers factory doesn't exist, it is created and pushed.
            //   b) Else, the multi provider is added to the existing multi factory.
            // 2) If the multi provider comes from the `providers` of the component or of another
            // directive:
            //   a) If the multi factory doesn't exist, it is created and provider pushed into it.
            //      It is also linked to the multi factory for view providers, if it exists.
            //   b) Else, the multi provider is added to the existing multi factory.
            /** @type {?} */
            const existingProvidersFactoryIndex = indexOf(token, tInjectables, beginIndex + cptViewProvidersCount, endIndex);
            /** @type {?} */
            const existingViewProvidersFactoryIndex = indexOf(token, tInjectables, beginIndex, beginIndex + cptViewProvidersCount);
            /** @type {?} */
            const doesProvidersFactoryExist = existingProvidersFactoryIndex >= 0 &&
                lInjectablesBlueprint[existingProvidersFactoryIndex];
            /** @type {?} */
            const doesViewProvidersFactoryExist = existingViewProvidersFactoryIndex >= 0 &&
                lInjectablesBlueprint[existingViewProvidersFactoryIndex];
            if (isViewProvider && !doesViewProvidersFactoryExist ||
                !isViewProvider && !doesProvidersFactoryExist) {
                // Cases 1.a and 2.a
                diPublicInInjector(getOrCreateNodeInjectorForNode((/** @type {?} */ (tNode)), lView), lView, token);
                /** @type {?} */
                const factory = multiFactory(isViewProvider ? multiViewProvidersFactoryResolver : multiProvidersFactoryResolver, lInjectablesBlueprint.length, isViewProvider, isComponent, providerFactory);
                if (!isViewProvider && doesViewProvidersFactoryExist) {
                    lInjectablesBlueprint[existingViewProvidersFactoryIndex].providerFactory = factory;
                }
                tInjectables.push(token);
                tNode.directiveStart++;
                tNode.directiveEnd++;
                if (isViewProvider) {
                    tNode.providerIndexes += 65536 /* CptViewProvidersCountShifter */;
                }
                lInjectablesBlueprint.push(factory);
                lView.push(factory);
            }
            else {
                // Cases 1.b and 2.b
                multiFactoryAdd((/** @type {?} */ (lInjectablesBlueprint))[isViewProvider ? existingViewProvidersFactoryIndex : existingProvidersFactoryIndex], providerFactory, !isViewProvider && isComponent);
            }
            if (!isViewProvider && isComponent && doesViewProvidersFactoryExist) {
                (/** @type {?} */ (lInjectablesBlueprint[existingViewProvidersFactoryIndex].componentProviders))++;
            }
        }
    }
}
/**
 * Add a factory in a multi factory.
 * @param {?} multiFactory
 * @param {?} factory
 * @param {?} isComponentProvider
 * @return {?}
 */
function multiFactoryAdd(multiFactory, factory, isComponentProvider) {
    (/** @type {?} */ (multiFactory.multi)).push(factory);
    if (isComponentProvider) {
        (/** @type {?} */ (multiFactory.componentProviders))++;
    }
}
/**
 * Returns the index of item in the array, but only in the begin to end range.
 * @param {?} item
 * @param {?} arr
 * @param {?} begin
 * @param {?} end
 * @return {?}
 */
function indexOf(item, arr, begin, end) {
    for (let i = begin; i < end; i++) {
        if (arr[i] === item)
            return i;
    }
    return -1;
}
/**
 * Use this with `multi` `providers`.
 * @this {?}
 * @param {?} _
 * @param {?} tData
 * @param {?} lData
 * @param {?} tNode
 * @return {?}
 */
function multiProvidersFactoryResolver(_, tData, lData, tNode) {
    return multiResolve((/** @type {?} */ (this.multi)), []);
}
/**
 * Use this with `multi` `viewProviders`.
 *
 * This factory knows how to concatenate itself with the existing `multi` `providers`.
 * @this {?}
 * @param {?} _
 * @param {?} tData
 * @param {?} lData
 * @param {?} tNode
 * @return {?}
 */
function multiViewProvidersFactoryResolver(_, tData, lData, tNode) {
    /** @type {?} */
    const factories = (/** @type {?} */ (this.multi));
    /** @type {?} */
    let result;
    if (this.providerFactory) {
        /** @type {?} */
        const componentCount = (/** @type {?} */ (this.providerFactory.componentProviders));
        /** @type {?} */
        const multiProviders = getNodeInjectable(tData, lData, (/** @type {?} */ ((/** @type {?} */ (this.providerFactory)).index)), tNode);
        // Copy the section of the array which contains `multi` `providers` from the component
        result = multiProviders.slice(0, componentCount);
        // Insert the `viewProvider` instances.
        multiResolve(factories, result);
        // Copy the section of the array which contains `multi` `providers` from other directives
        for (let i = componentCount; i < multiProviders.length; i++) {
            result.push(multiProviders[i]);
        }
    }
    else {
        result = [];
        // Insert the `viewProvider` instances.
        multiResolve(factories, result);
    }
    return result;
}
/**
 * Maps an array of factories into an array of values.
 * @param {?} factories
 * @param {?} result
 * @return {?}
 */
function multiResolve(factories, result) {
    for (let i = 0; i < factories.length; i++) {
        /** @type {?} */
        const factory = (/** @type {?} */ ((/** @type {?} */ (factories[i]))));
        result.push(factory());
    }
    return result;
}
/**
 * Creates a multi factory.
 * @param {?} factoryFn
 * @param {?} index
 * @param {?} isViewProvider
 * @param {?} isComponent
 * @param {?} f
 * @return {?}
 */
function multiFactory(factoryFn, index, isViewProvider, isComponent, f) {
    /** @type {?} */
    const factory = new NodeInjectorFactory(factoryFn, isViewProvider, ɵɵdirectiveInject);
    factory.multi = [];
    factory.index = index;
    factory.componentProviders = 0;
    multiFactoryAdd(factory, f, isComponent && !isViewProvider);
    return factory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlfc2V0dXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2RpX3NldHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFcEQsT0FBTyxFQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUVyRixPQUFPLEVBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsOEJBQThCLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDM0YsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFckQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQsT0FBTyxFQUFlLEtBQUssRUFBUSxNQUFNLG1CQUFtQixDQUFDO0FBQzdELE9BQU8sRUFBQyxRQUFRLEVBQUUsd0JBQXdCLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDM0QsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQmpELE1BQU0sVUFBVSxpQkFBaUIsQ0FDN0IsR0FBb0IsRUFBRSxTQUFxQixFQUFFLGFBQXlCOztVQUNsRSxLQUFLLEdBQUcsUUFBUSxFQUFFOztVQUNsQixLQUFLLEdBQVUsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNqQyxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTs7Y0FDckIsV0FBVyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUM7UUFFdkMsMkVBQTJFO1FBQzNFLGVBQWUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUvRSxzRUFBc0U7UUFDdEUsZUFB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LENBQUM7S0FDakM7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7O0FBS0QsU0FBUyxZQUFZLENBQUMsU0FBMkIsRUFBRSxNQUFhO0lBQzlELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztjQUNuQyxPQUFPLEdBQUcsbUJBQUEsbUJBQUEsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQVk7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ3hCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7Ozs7OztBQUtELFNBQVMsWUFBWSxDQUNqQixTQUMrRixFQUMvRixLQUFhLEVBQUUsY0FBdUIsRUFBRSxXQUFvQixFQUM1RCxDQUFZOztVQUNSLE9BQU8sR0FBRyxJQUFJLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLENBQUM7SUFDckYsT0FBTyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbkIsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdEIsT0FBTyxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztJQUMvQixlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxXQUFXLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1RCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7cmVzb2x2ZUZvcndhcmRSZWZ9IGZyb20gJy4uL2RpL2ZvcndhcmRfcmVmJztcbmltcG9ydCB7Q2xhc3NQcm92aWRlciwgUHJvdmlkZXJ9IGZyb20gJy4uL2RpL2ludGVyZmFjZS9wcm92aWRlcic7XG5pbXBvcnQge2lzQ2xhc3NQcm92aWRlciwgaXNUeXBlUHJvdmlkZXIsIHByb3ZpZGVyVG9GYWN0b3J5fSBmcm9tICcuLi9kaS9yM19pbmplY3Rvcic7XG5cbmltcG9ydCB7ZGlQdWJsaWNJbkluamVjdG9yLCBnZXROb2RlSW5qZWN0YWJsZSwgZ2V0T3JDcmVhdGVOb2RlSW5qZWN0b3JGb3JOb2RlfSBmcm9tICcuL2RpJztcbmltcG9ydCB7ybXJtWRpcmVjdGl2ZUluamVjdH0gZnJvbSAnLi9pbnN0cnVjdGlvbnMvYWxsJztcbmltcG9ydCB7RGlyZWN0aXZlRGVmfSBmcm9tICcuL2ludGVyZmFjZXMvZGVmaW5pdGlvbic7XG5pbXBvcnQge05vZGVJbmplY3RvckZhY3Rvcnl9IGZyb20gJy4vaW50ZXJmYWNlcy9pbmplY3Rvcic7XG5pbXBvcnQge1RDb250YWluZXJOb2RlLCBURWxlbWVudENvbnRhaW5lck5vZGUsIFRFbGVtZW50Tm9kZSwgVE5vZGVQcm92aWRlckluZGV4ZXN9IGZyb20gJy4vaW50ZXJmYWNlcy9ub2RlJztcbmltcG9ydCB7TFZpZXcsIFREYXRhLCBUVklFVywgVFZpZXd9IGZyb20gJy4vaW50ZXJmYWNlcy92aWV3JztcbmltcG9ydCB7Z2V0TFZpZXcsIGdldFByZXZpb3VzT3JQYXJlbnRUTm9kZX0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQge2lzQ29tcG9uZW50RGVmfSBmcm9tICcuL3V0aWwvdmlld191dGlscyc7XG5cblxuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBwcm92aWRlcnMgd2hpY2ggYXJlIGRlZmluZWQgaW4gdGhlIERpcmVjdGl2ZURlZi5cbiAqXG4gKiBXaGVuIGluc2VydGluZyB0aGUgdG9rZW5zIGFuZCB0aGUgZmFjdG9yaWVzIGluIHRoZWlyIHJlc3BlY3RpdmUgYXJyYXlzLCB3ZSBjYW4gYXNzdW1lIHRoYXRcbiAqIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCBmaXJzdCBmb3IgdGhlIGNvbXBvbmVudCAoaWYgYW55KSwgYW5kIHRoZW4gZm9yIG90aGVyIGRpcmVjdGl2ZXMgb24gdGhlIHNhbWVcbiAqIG5vZGUuXG4gKiBBcyBhIGNvbnNlcXVlbmNlLHRoZSBwcm92aWRlcnMgYXJlIGFsd2F5cyBwcm9jZXNzZWQgaW4gdGhhdCBvcmRlcjpcbiAqIDEpIFRoZSB2aWV3IHByb3ZpZGVycyBvZiB0aGUgY29tcG9uZW50XG4gKiAyKSBUaGUgcHJvdmlkZXJzIG9mIHRoZSBjb21wb25lbnRcbiAqIDMpIFRoZSBwcm92aWRlcnMgb2YgdGhlIG90aGVyIGRpcmVjdGl2ZXNcbiAqIFRoaXMgbWF0Y2hlcyB0aGUgc3RydWN0dXJlIG9mIHRoZSBpbmplY3RhYmxlcyBhcnJheXMgb2YgYSB2aWV3IChmb3IgZWFjaCBub2RlKS5cbiAqIFNvIHRoZSB0b2tlbnMgYW5kIHRoZSBmYWN0b3JpZXMgY2FuIGJlIHB1c2hlZCBhdCB0aGUgZW5kIG9mIHRoZSBhcnJheXMsIGV4Y2VwdFxuICogaW4gb25lIGNhc2UgZm9yIG11bHRpIHByb3ZpZGVycy5cbiAqXG4gKiBAcGFyYW0gZGVmIHRoZSBkaXJlY3RpdmUgZGVmaW5pdGlvblxuICogQHBhcmFtIHByb3ZpZGVyczogQXJyYXkgb2YgYHByb3ZpZGVyc2AuXG4gKiBAcGFyYW0gdmlld1Byb3ZpZGVyczogQXJyYXkgb2YgYHZpZXdQcm92aWRlcnNgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZXJzUmVzb2x2ZXI8VD4oXG4gICAgZGVmOiBEaXJlY3RpdmVEZWY8VD4sIHByb3ZpZGVyczogUHJvdmlkZXJbXSwgdmlld1Byb3ZpZGVyczogUHJvdmlkZXJbXSk6IHZvaWQge1xuICBjb25zdCBsVmlldyA9IGdldExWaWV3KCk7XG4gIGNvbnN0IHRWaWV3OiBUVmlldyA9IGxWaWV3W1RWSUVXXTtcbiAgaWYgKHRWaWV3LmZpcnN0VGVtcGxhdGVQYXNzKSB7XG4gICAgY29uc3QgaXNDb21wb25lbnQgPSBpc0NvbXBvbmVudERlZihkZWYpO1xuXG4gICAgLy8gVGhlIGxpc3Qgb2YgdmlldyBwcm92aWRlcnMgaXMgcHJvY2Vzc2VkIGZpcnN0LCBhbmQgdGhlIGZsYWdzIGFyZSB1cGRhdGVkXG4gICAgcmVzb2x2ZVByb3ZpZGVyKHZpZXdQcm92aWRlcnMsIHRWaWV3LmRhdGEsIHRWaWV3LmJsdWVwcmludCwgaXNDb21wb25lbnQsIHRydWUpO1xuXG4gICAgLy8gVGhlbiwgdGhlIGxpc3Qgb2YgcHJvdmlkZXJzIGlzIHByb2Nlc3NlZCwgYW5kIHRoZSBmbGFncyBhcmUgdXBkYXRlZFxuICAgIHJlc29sdmVQcm92aWRlcihwcm92aWRlcnMsIHRWaWV3LmRhdGEsIHRWaWV3LmJsdWVwcmludCwgaXNDb21wb25lbnQsIGZhbHNlKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgcHJvdmlkZXIgYW5kIHB1Ymxpc2hlcyBpdCB0byB0aGUgREkgc3lzdGVtLlxuICovXG5mdW5jdGlvbiByZXNvbHZlUHJvdmlkZXIoXG4gICAgcHJvdmlkZXI6IFByb3ZpZGVyLCB0SW5qZWN0YWJsZXM6IFREYXRhLCBsSW5qZWN0YWJsZXNCbHVlcHJpbnQ6IE5vZGVJbmplY3RvckZhY3RvcnlbXSxcbiAgICBpc0NvbXBvbmVudDogYm9vbGVhbiwgaXNWaWV3UHJvdmlkZXI6IGJvb2xlYW4pOiB2b2lkIHtcbiAgcHJvdmlkZXIgPSByZXNvbHZlRm9yd2FyZFJlZihwcm92aWRlcik7XG4gIGlmIChBcnJheS5pc0FycmF5KHByb3ZpZGVyKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNhbGwgYHJlc29sdmVQcm92aWRlcmBcbiAgICAvLyBSZWN1cnNpb24gaXMgT0sgaW4gdGhpcyBjYXNlIGJlY2F1c2UgdGhpcyBjb2RlIHdpbGwgbm90IGJlIGluIGhvdC1wYXRoIG9uY2Ugd2UgaW1wbGVtZW50XG4gICAgLy8gY2xvbmluZyBvZiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3ZpZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXNvbHZlUHJvdmlkZXIoXG4gICAgICAgICAgcHJvdmlkZXJbaV0sIHRJbmplY3RhYmxlcywgbEluamVjdGFibGVzQmx1ZXByaW50LCBpc0NvbXBvbmVudCwgaXNWaWV3UHJvdmlkZXIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBsVmlldyA9IGdldExWaWV3KCk7XG4gICAgbGV0IHRva2VuOiBhbnkgPSBpc1R5cGVQcm92aWRlcihwcm92aWRlcikgPyBwcm92aWRlciA6IHJlc29sdmVGb3J3YXJkUmVmKHByb3ZpZGVyLnByb3ZpZGUpO1xuICAgIGxldCBwcm92aWRlckZhY3Rvcnk6ICgpID0+IGFueSA9IHByb3ZpZGVyVG9GYWN0b3J5KHByb3ZpZGVyKTtcblxuICAgIGNvbnN0IHROb2RlID0gZ2V0UHJldmlvdXNPclBhcmVudFROb2RlKCk7XG4gICAgY29uc3QgYmVnaW5JbmRleCA9IHROb2RlLnByb3ZpZGVySW5kZXhlcyAmIFROb2RlUHJvdmlkZXJJbmRleGVzLlByb3ZpZGVyc1N0YXJ0SW5kZXhNYXNrO1xuICAgIGNvbnN0IGVuZEluZGV4ID0gdE5vZGUuZGlyZWN0aXZlU3RhcnQ7XG4gICAgY29uc3QgY3B0Vmlld1Byb3ZpZGVyc0NvdW50ID1cbiAgICAgICAgdE5vZGUucHJvdmlkZXJJbmRleGVzID4+IFROb2RlUHJvdmlkZXJJbmRleGVzLkNwdFZpZXdQcm92aWRlcnNDb3VudFNoaWZ0O1xuXG4gICAgaWYgKGlzQ2xhc3NQcm92aWRlcihwcm92aWRlcikgfHwgaXNUeXBlUHJvdmlkZXIocHJvdmlkZXIpKSB7XG4gICAgICBjb25zdCBwcm90b3R5cGUgPSAoKHByb3ZpZGVyIGFzIENsYXNzUHJvdmlkZXIpLnVzZUNsYXNzIHx8IHByb3ZpZGVyKS5wcm90b3R5cGU7XG4gICAgICBjb25zdCBuZ09uRGVzdHJveSA9IHByb3RvdHlwZS5uZ09uRGVzdHJveTtcblxuICAgICAgaWYgKG5nT25EZXN0cm95KSB7XG4gICAgICAgIGNvbnN0IHRWaWV3ID0gbFZpZXdbVFZJRVddO1xuICAgICAgICAodFZpZXcuZGVzdHJveUhvb2tzIHx8ICh0Vmlldy5kZXN0cm95SG9va3MgPSBbXSkpLnB1c2godEluamVjdGFibGVzLmxlbmd0aCwgbmdPbkRlc3Ryb3kpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1R5cGVQcm92aWRlcihwcm92aWRlcikgfHwgIXByb3ZpZGVyLm11bHRpKSB7XG4gICAgICAvLyBTaW5nbGUgcHJvdmlkZXIgY2FzZTogdGhlIGZhY3RvcnkgaXMgY3JlYXRlZCBhbmQgcHVzaGVkIGltbWVkaWF0ZWx5XG4gICAgICBjb25zdCBmYWN0b3J5ID0gbmV3IE5vZGVJbmplY3RvckZhY3RvcnkocHJvdmlkZXJGYWN0b3J5LCBpc1ZpZXdQcm92aWRlciwgybXJtWRpcmVjdGl2ZUluamVjdCk7XG4gICAgICBjb25zdCBleGlzdGluZ0ZhY3RvcnlJbmRleCA9IGluZGV4T2YoXG4gICAgICAgICAgdG9rZW4sIHRJbmplY3RhYmxlcywgaXNWaWV3UHJvdmlkZXIgPyBiZWdpbkluZGV4IDogYmVnaW5JbmRleCArIGNwdFZpZXdQcm92aWRlcnNDb3VudCxcbiAgICAgICAgICBlbmRJbmRleCk7XG4gICAgICBpZiAoZXhpc3RpbmdGYWN0b3J5SW5kZXggPT0gLTEpIHtcbiAgICAgICAgZGlQdWJsaWNJbkluamVjdG9yKFxuICAgICAgICAgICAgZ2V0T3JDcmVhdGVOb2RlSW5qZWN0b3JGb3JOb2RlKFxuICAgICAgICAgICAgICAgIHROb2RlIGFzIFRFbGVtZW50Tm9kZSB8IFRDb250YWluZXJOb2RlIHwgVEVsZW1lbnRDb250YWluZXJOb2RlLCBsVmlldyksXG4gICAgICAgICAgICBsVmlldywgdG9rZW4pO1xuICAgICAgICB0SW5qZWN0YWJsZXMucHVzaCh0b2tlbik7XG4gICAgICAgIHROb2RlLmRpcmVjdGl2ZVN0YXJ0Kys7XG4gICAgICAgIHROb2RlLmRpcmVjdGl2ZUVuZCsrO1xuICAgICAgICBpZiAoaXNWaWV3UHJvdmlkZXIpIHtcbiAgICAgICAgICB0Tm9kZS5wcm92aWRlckluZGV4ZXMgKz0gVE5vZGVQcm92aWRlckluZGV4ZXMuQ3B0Vmlld1Byb3ZpZGVyc0NvdW50U2hpZnRlcjtcbiAgICAgICAgfVxuICAgICAgICBsSW5qZWN0YWJsZXNCbHVlcHJpbnQucHVzaChmYWN0b3J5KTtcbiAgICAgICAgbFZpZXcucHVzaChmYWN0b3J5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxJbmplY3RhYmxlc0JsdWVwcmludFtleGlzdGluZ0ZhY3RvcnlJbmRleF0gPSBmYWN0b3J5O1xuICAgICAgICBsVmlld1tleGlzdGluZ0ZhY3RvcnlJbmRleF0gPSBmYWN0b3J5O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNdWx0aSBwcm92aWRlciBjYXNlOlxuICAgICAgLy8gV2UgY3JlYXRlIGEgbXVsdGkgZmFjdG9yeSB3aGljaCBpcyBnb2luZyB0byBhZ2dyZWdhdGUgYWxsIHRoZSB2YWx1ZXMuXG4gICAgICAvLyBTaW5jZSB0aGUgb3V0cHV0IG9mIHN1Y2ggYSBmYWN0b3J5IGRlcGVuZHMgb24gY29udGVudCBvciB2aWV3IGluamVjdGlvbixcbiAgICAgIC8vIHdlIGNyZWF0ZSB0d28gb2YgdGhlbSwgd2hpY2ggYXJlIGxpbmtlZCB0b2dldGhlci5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgZmlyc3Qgb25lIChmb3IgdmlldyBwcm92aWRlcnMpIGlzIGFsd2F5cyBpbiB0aGUgZmlyc3QgYmxvY2sgb2YgdGhlIGluamVjdGFibGVzIGFycmF5LFxuICAgICAgLy8gYW5kIHRoZSBzZWNvbmQgb25lIChmb3IgcHJvdmlkZXJzKSBpcyBhbHdheXMgaW4gdGhlIHNlY29uZCBibG9jay5cbiAgICAgIC8vIFRoaXMgaXMgaW1wb3J0YW50IGJlY2F1c2UgdmlldyBwcm92aWRlcnMgaGF2ZSBoaWdoZXIgcHJpb3JpdHkuIFdoZW4gYSBtdWx0aSB0b2tlblxuICAgICAgLy8gaXMgYmVpbmcgbG9va2VkIHVwLCB0aGUgdmlldyBwcm92aWRlcnMgc2hvdWxkIGJlIGZvdW5kIGZpcnN0LlxuICAgICAgLy8gTm90ZSB0aGF0IGl0IGlzIG5vdCBwb3NzaWJsZSB0byBoYXZlIGEgbXVsdGkgZmFjdG9yeSBpbiB0aGUgdGhpcmQgYmxvY2sgKGRpcmVjdGl2ZSBibG9jaykuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIGFsZ29yaXRobSB0byBwcm9jZXNzIG11bHRpIHByb3ZpZGVycyBpcyBhcyBmb2xsb3dzOlxuICAgICAgLy8gMSkgSWYgdGhlIG11bHRpIHByb3ZpZGVyIGNvbWVzIGZyb20gdGhlIGB2aWV3UHJvdmlkZXJzYCBvZiB0aGUgY29tcG9uZW50OlxuICAgICAgLy8gICBhKSBJZiB0aGUgc3BlY2lhbCB2aWV3IHByb3ZpZGVycyBmYWN0b3J5IGRvZXNuJ3QgZXhpc3QsIGl0IGlzIGNyZWF0ZWQgYW5kIHB1c2hlZC5cbiAgICAgIC8vICAgYikgRWxzZSwgdGhlIG11bHRpIHByb3ZpZGVyIGlzIGFkZGVkIHRvIHRoZSBleGlzdGluZyBtdWx0aSBmYWN0b3J5LlxuICAgICAgLy8gMikgSWYgdGhlIG11bHRpIHByb3ZpZGVyIGNvbWVzIGZyb20gdGhlIGBwcm92aWRlcnNgIG9mIHRoZSBjb21wb25lbnQgb3Igb2YgYW5vdGhlclxuICAgICAgLy8gZGlyZWN0aXZlOlxuICAgICAgLy8gICBhKSBJZiB0aGUgbXVsdGkgZmFjdG9yeSBkb2Vzbid0IGV4aXN0LCBpdCBpcyBjcmVhdGVkIGFuZCBwcm92aWRlciBwdXNoZWQgaW50byBpdC5cbiAgICAgIC8vICAgICAgSXQgaXMgYWxzbyBsaW5rZWQgdG8gdGhlIG11bHRpIGZhY3RvcnkgZm9yIHZpZXcgcHJvdmlkZXJzLCBpZiBpdCBleGlzdHMuXG4gICAgICAvLyAgIGIpIEVsc2UsIHRoZSBtdWx0aSBwcm92aWRlciBpcyBhZGRlZCB0byB0aGUgZXhpc3RpbmcgbXVsdGkgZmFjdG9yeS5cblxuICAgICAgY29uc3QgZXhpc3RpbmdQcm92aWRlcnNGYWN0b3J5SW5kZXggPVxuICAgICAgICAgIGluZGV4T2YodG9rZW4sIHRJbmplY3RhYmxlcywgYmVnaW5JbmRleCArIGNwdFZpZXdQcm92aWRlcnNDb3VudCwgZW5kSW5kZXgpO1xuICAgICAgY29uc3QgZXhpc3RpbmdWaWV3UHJvdmlkZXJzRmFjdG9yeUluZGV4ID1cbiAgICAgICAgICBpbmRleE9mKHRva2VuLCB0SW5qZWN0YWJsZXMsIGJlZ2luSW5kZXgsIGJlZ2luSW5kZXggKyBjcHRWaWV3UHJvdmlkZXJzQ291bnQpO1xuICAgICAgY29uc3QgZG9lc1Byb3ZpZGVyc0ZhY3RvcnlFeGlzdCA9IGV4aXN0aW5nUHJvdmlkZXJzRmFjdG9yeUluZGV4ID49IDAgJiZcbiAgICAgICAgICBsSW5qZWN0YWJsZXNCbHVlcHJpbnRbZXhpc3RpbmdQcm92aWRlcnNGYWN0b3J5SW5kZXhdO1xuICAgICAgY29uc3QgZG9lc1ZpZXdQcm92aWRlcnNGYWN0b3J5RXhpc3QgPSBleGlzdGluZ1ZpZXdQcm92aWRlcnNGYWN0b3J5SW5kZXggPj0gMCAmJlxuICAgICAgICAgIGxJbmplY3RhYmxlc0JsdWVwcmludFtleGlzdGluZ1ZpZXdQcm92aWRlcnNGYWN0b3J5SW5kZXhdO1xuXG4gICAgICBpZiAoaXNWaWV3UHJvdmlkZXIgJiYgIWRvZXNWaWV3UHJvdmlkZXJzRmFjdG9yeUV4aXN0IHx8XG4gICAgICAgICAgIWlzVmlld1Byb3ZpZGVyICYmICFkb2VzUHJvdmlkZXJzRmFjdG9yeUV4aXN0KSB7XG4gICAgICAgIC8vIENhc2VzIDEuYSBhbmQgMi5hXG4gICAgICAgIGRpUHVibGljSW5JbmplY3RvcihcbiAgICAgICAgICAgIGdldE9yQ3JlYXRlTm9kZUluamVjdG9yRm9yTm9kZShcbiAgICAgICAgICAgICAgICB0Tm9kZSBhcyBURWxlbWVudE5vZGUgfCBUQ29udGFpbmVyTm9kZSB8IFRFbGVtZW50Q29udGFpbmVyTm9kZSwgbFZpZXcpLFxuICAgICAgICAgICAgbFZpZXcsIHRva2VuKTtcbiAgICAgICAgY29uc3QgZmFjdG9yeSA9IG11bHRpRmFjdG9yeShcbiAgICAgICAgICAgIGlzVmlld1Byb3ZpZGVyID8gbXVsdGlWaWV3UHJvdmlkZXJzRmFjdG9yeVJlc29sdmVyIDogbXVsdGlQcm92aWRlcnNGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICBsSW5qZWN0YWJsZXNCbHVlcHJpbnQubGVuZ3RoLCBpc1ZpZXdQcm92aWRlciwgaXNDb21wb25lbnQsIHByb3ZpZGVyRmFjdG9yeSk7XG4gICAgICAgIGlmICghaXNWaWV3UHJvdmlkZXIgJiYgZG9lc1ZpZXdQcm92aWRlcnNGYWN0b3J5RXhpc3QpIHtcbiAgICAgICAgICBsSW5qZWN0YWJsZXNCbHVlcHJpbnRbZXhpc3RpbmdWaWV3UHJvdmlkZXJzRmFjdG9yeUluZGV4XS5wcm92aWRlckZhY3RvcnkgPSBmYWN0b3J5O1xuICAgICAgICB9XG4gICAgICAgIHRJbmplY3RhYmxlcy5wdXNoKHRva2VuKTtcbiAgICAgICAgdE5vZGUuZGlyZWN0aXZlU3RhcnQrKztcbiAgICAgICAgdE5vZGUuZGlyZWN0aXZlRW5kKys7XG4gICAgICAgIGlmIChpc1ZpZXdQcm92aWRlcikge1xuICAgICAgICAgIHROb2RlLnByb3ZpZGVySW5kZXhlcyArPSBUTm9kZVByb3ZpZGVySW5kZXhlcy5DcHRWaWV3UHJvdmlkZXJzQ291bnRTaGlmdGVyO1xuICAgICAgICB9XG4gICAgICAgIGxJbmplY3RhYmxlc0JsdWVwcmludC5wdXNoKGZhY3RvcnkpO1xuICAgICAgICBsVmlldy5wdXNoKGZhY3RvcnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2FzZXMgMS5iIGFuZCAyLmJcbiAgICAgICAgbXVsdGlGYWN0b3J5QWRkKFxuICAgICAgICAgICAgbEluamVjdGFibGVzQmx1ZXByaW50ICFbaXNWaWV3UHJvdmlkZXIgPyBleGlzdGluZ1ZpZXdQcm92aWRlcnNGYWN0b3J5SW5kZXggOiBleGlzdGluZ1Byb3ZpZGVyc0ZhY3RvcnlJbmRleF0sXG4gICAgICAgICAgICBwcm92aWRlckZhY3RvcnksICFpc1ZpZXdQcm92aWRlciAmJiBpc0NvbXBvbmVudCk7XG4gICAgICB9XG4gICAgICBpZiAoIWlzVmlld1Byb3ZpZGVyICYmIGlzQ29tcG9uZW50ICYmIGRvZXNWaWV3UHJvdmlkZXJzRmFjdG9yeUV4aXN0KSB7XG4gICAgICAgIGxJbmplY3RhYmxlc0JsdWVwcmludFtleGlzdGluZ1ZpZXdQcm92aWRlcnNGYWN0b3J5SW5kZXhdLmNvbXBvbmVudFByb3ZpZGVycyAhKys7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWRkIGEgZmFjdG9yeSBpbiBhIG11bHRpIGZhY3RvcnkuXG4gKi9cbmZ1bmN0aW9uIG11bHRpRmFjdG9yeUFkZChcbiAgICBtdWx0aUZhY3Rvcnk6IE5vZGVJbmplY3RvckZhY3RvcnksIGZhY3Rvcnk6ICgpID0+IGFueSwgaXNDb21wb25lbnRQcm92aWRlcjogYm9vbGVhbik6IHZvaWQge1xuICBtdWx0aUZhY3RvcnkubXVsdGkgIS5wdXNoKGZhY3RvcnkpO1xuICBpZiAoaXNDb21wb25lbnRQcm92aWRlcikge1xuICAgIG11bHRpRmFjdG9yeS5jb21wb25lbnRQcm92aWRlcnMgISsrO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW5kZXggb2YgaXRlbSBpbiB0aGUgYXJyYXksIGJ1dCBvbmx5IGluIHRoZSBiZWdpbiB0byBlbmQgcmFuZ2UuXG4gKi9cbmZ1bmN0aW9uIGluZGV4T2YoaXRlbTogYW55LCBhcnI6IGFueVtdLCBiZWdpbjogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICBmb3IgKGxldCBpID0gYmVnaW47IGkgPCBlbmQ7IGkrKykge1xuICAgIGlmIChhcnJbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBVc2UgdGhpcyB3aXRoIGBtdWx0aWAgYHByb3ZpZGVyc2AuXG4gKi9cbmZ1bmN0aW9uIG11bHRpUHJvdmlkZXJzRmFjdG9yeVJlc29sdmVyKFxuICAgIHRoaXM6IE5vZGVJbmplY3RvckZhY3RvcnksIF86IG51bGwsIHREYXRhOiBURGF0YSwgbERhdGE6IExWaWV3LCB0Tm9kZTogVEVsZW1lbnROb2RlKTogYW55W10ge1xuICByZXR1cm4gbXVsdGlSZXNvbHZlKHRoaXMubXVsdGkgISwgW10pO1xufVxuXG4vKipcbiAqIFVzZSB0aGlzIHdpdGggYG11bHRpYCBgdmlld1Byb3ZpZGVyc2AuXG4gKlxuICogVGhpcyBmYWN0b3J5IGtub3dzIGhvdyB0byBjb25jYXRlbmF0ZSBpdHNlbGYgd2l0aCB0aGUgZXhpc3RpbmcgYG11bHRpYCBgcHJvdmlkZXJzYC5cbiAqL1xuZnVuY3Rpb24gbXVsdGlWaWV3UHJvdmlkZXJzRmFjdG9yeVJlc29sdmVyKFxuICAgIHRoaXM6IE5vZGVJbmplY3RvckZhY3RvcnksIF86IG51bGwsIHREYXRhOiBURGF0YSwgbERhdGE6IExWaWV3LCB0Tm9kZTogVEVsZW1lbnROb2RlKTogYW55W10ge1xuICBjb25zdCBmYWN0b3JpZXMgPSB0aGlzLm11bHRpICE7XG4gIGxldCByZXN1bHQ6IGFueVtdO1xuICBpZiAodGhpcy5wcm92aWRlckZhY3RvcnkpIHtcbiAgICBjb25zdCBjb21wb25lbnRDb3VudCA9IHRoaXMucHJvdmlkZXJGYWN0b3J5LmNvbXBvbmVudFByb3ZpZGVycyAhO1xuICAgIGNvbnN0IG11bHRpUHJvdmlkZXJzID0gZ2V0Tm9kZUluamVjdGFibGUodERhdGEsIGxEYXRhLCB0aGlzLnByb3ZpZGVyRmFjdG9yeSAhLmluZGV4ICEsIHROb2RlKTtcbiAgICAvLyBDb3B5IHRoZSBzZWN0aW9uIG9mIHRoZSBhcnJheSB3aGljaCBjb250YWlucyBgbXVsdGlgIGBwcm92aWRlcnNgIGZyb20gdGhlIGNvbXBvbmVudFxuICAgIHJlc3VsdCA9IG11bHRpUHJvdmlkZXJzLnNsaWNlKDAsIGNvbXBvbmVudENvdW50KTtcbiAgICAvLyBJbnNlcnQgdGhlIGB2aWV3UHJvdmlkZXJgIGluc3RhbmNlcy5cbiAgICBtdWx0aVJlc29sdmUoZmFjdG9yaWVzLCByZXN1bHQpO1xuICAgIC8vIENvcHkgdGhlIHNlY3Rpb24gb2YgdGhlIGFycmF5IHdoaWNoIGNvbnRhaW5zIGBtdWx0aWAgYHByb3ZpZGVyc2AgZnJvbSBvdGhlciBkaXJlY3RpdmVzXG4gICAgZm9yIChsZXQgaSA9IGNvbXBvbmVudENvdW50OyBpIDwgbXVsdGlQcm92aWRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKG11bHRpUHJvdmlkZXJzW2ldKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gW107XG4gICAgLy8gSW5zZXJ0IHRoZSBgdmlld1Byb3ZpZGVyYCBpbnN0YW5jZXMuXG4gICAgbXVsdGlSZXNvbHZlKGZhY3RvcmllcywgcmVzdWx0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIE1hcHMgYW4gYXJyYXkgb2YgZmFjdG9yaWVzIGludG8gYW4gYXJyYXkgb2YgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBtdWx0aVJlc29sdmUoZmFjdG9yaWVzOiBBcnJheTwoKSA9PiBhbnk+LCByZXN1bHQ6IGFueVtdKTogYW55W10ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZhY3Rvcmllcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBmYWN0b3JpZXNbaV0gIWFzKCkgPT4gbnVsbDtcbiAgICByZXN1bHQucHVzaChmYWN0b3J5KCkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG11bHRpIGZhY3RvcnkuXG4gKi9cbmZ1bmN0aW9uIG11bHRpRmFjdG9yeShcbiAgICBmYWN0b3J5Rm46IChcbiAgICAgICAgdGhpczogTm9kZUluamVjdG9yRmFjdG9yeSwgXzogbnVsbCwgdERhdGE6IFREYXRhLCBsRGF0YTogTFZpZXcsIHROb2RlOiBURWxlbWVudE5vZGUpID0+IGFueSxcbiAgICBpbmRleDogbnVtYmVyLCBpc1ZpZXdQcm92aWRlcjogYm9vbGVhbiwgaXNDb21wb25lbnQ6IGJvb2xlYW4sXG4gICAgZjogKCkgPT4gYW55KTogTm9kZUluamVjdG9yRmFjdG9yeSB7XG4gIGNvbnN0IGZhY3RvcnkgPSBuZXcgTm9kZUluamVjdG9yRmFjdG9yeShmYWN0b3J5Rm4sIGlzVmlld1Byb3ZpZGVyLCDJtcm1ZGlyZWN0aXZlSW5qZWN0KTtcbiAgZmFjdG9yeS5tdWx0aSA9IFtdO1xuICBmYWN0b3J5LmluZGV4ID0gaW5kZXg7XG4gIGZhY3RvcnkuY29tcG9uZW50UHJvdmlkZXJzID0gMDtcbiAgbXVsdGlGYWN0b3J5QWRkKGZhY3RvcnksIGYsIGlzQ29tcG9uZW50ICYmICFpc1ZpZXdQcm92aWRlcik7XG4gIHJldHVybiBmYWN0b3J5O1xufVxuIl19