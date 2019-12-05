/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Type } from '../interface/type';
import { reflector } from '../reflection/reflection';
import { resolveForwardRef } from './forward_ref';
import { InjectionToken } from './injection_token';
import { Inject, Optional, Self, SkipSelf } from './metadata';
import { invalidProviderError, mixingMultiProvidersWithRegularProvidersError, noAnnotationError } from './reflective_errors';
import { ReflectiveKey } from './reflective_key';
/**
 * `Dependency` is used by the framework to extend DI.
 * This is internal to Angular and should not be used directly.
 */
var ReflectiveDependency = /** @class */ (function () {
    function ReflectiveDependency(key, optional, visibility) {
        this.key = key;
        this.optional = optional;
        this.visibility = visibility;
    }
    ReflectiveDependency.fromKey = function (key) {
        return new ReflectiveDependency(key, false, null);
    };
    return ReflectiveDependency;
}());
export { ReflectiveDependency };
var _EMPTY_LIST = [];
var ResolvedReflectiveProvider_ = /** @class */ (function () {
    function ResolvedReflectiveProvider_(key, resolvedFactories, multiProvider) {
        this.key = key;
        this.resolvedFactories = resolvedFactories;
        this.multiProvider = multiProvider;
        this.resolvedFactory = this.resolvedFactories[0];
    }
    return ResolvedReflectiveProvider_;
}());
export { ResolvedReflectiveProvider_ };
/**
 * An internal resolved representation of a factory function created by resolving `Provider`.
 * @publicApi
 */
var ResolvedReflectiveFactory = /** @class */ (function () {
    function ResolvedReflectiveFactory(
    /**
     * Factory function which can return an instance of an object represented by a key.
     */
    factory, 
    /**
     * Arguments (dependencies) to the `factory` function.
     */
    dependencies) {
        this.factory = factory;
        this.dependencies = dependencies;
    }
    return ResolvedReflectiveFactory;
}());
export { ResolvedReflectiveFactory };
/**
 * Resolve a single provider.
 */
function resolveReflectiveFactory(provider) {
    var factoryFn;
    var resolvedDeps;
    if (provider.useClass) {
        var useClass = resolveForwardRef(provider.useClass);
        factoryFn = reflector.factory(useClass);
        resolvedDeps = _dependenciesFor(useClass);
    }
    else if (provider.useExisting) {
        factoryFn = function (aliasInstance) { return aliasInstance; };
        resolvedDeps = [ReflectiveDependency.fromKey(ReflectiveKey.get(provider.useExisting))];
    }
    else if (provider.useFactory) {
        factoryFn = provider.useFactory;
        resolvedDeps = constructDependencies(provider.useFactory, provider.deps);
    }
    else {
        factoryFn = function () { return provider.useValue; };
        resolvedDeps = _EMPTY_LIST;
    }
    return new ResolvedReflectiveFactory(factoryFn, resolvedDeps);
}
/**
 * Converts the `Provider` into `ResolvedProvider`.
 *
 * `Injector` internally only uses `ResolvedProvider`, `Provider` contains convenience provider
 * syntax.
 */
function resolveReflectiveProvider(provider) {
    return new ResolvedReflectiveProvider_(ReflectiveKey.get(provider.provide), [resolveReflectiveFactory(provider)], provider.multi || false);
}
/**
 * Resolve a list of Providers.
 */
export function resolveReflectiveProviders(providers) {
    var normalized = _normalizeProviders(providers, []);
    var resolved = normalized.map(resolveReflectiveProvider);
    var resolvedProviderMap = mergeResolvedReflectiveProviders(resolved, new Map());
    return Array.from(resolvedProviderMap.values());
}
/**
 * Merges a list of ResolvedProviders into a list where each key is contained exactly once and
 * multi providers have been merged.
 */
export function mergeResolvedReflectiveProviders(providers, normalizedProvidersMap) {
    for (var i = 0; i < providers.length; i++) {
        var provider = providers[i];
        var existing = normalizedProvidersMap.get(provider.key.id);
        if (existing) {
            if (provider.multiProvider !== existing.multiProvider) {
                throw mixingMultiProvidersWithRegularProvidersError(existing, provider);
            }
            if (provider.multiProvider) {
                for (var j = 0; j < provider.resolvedFactories.length; j++) {
                    existing.resolvedFactories.push(provider.resolvedFactories[j]);
                }
            }
            else {
                normalizedProvidersMap.set(provider.key.id, provider);
            }
        }
        else {
            var resolvedProvider = void 0;
            if (provider.multiProvider) {
                resolvedProvider = new ResolvedReflectiveProvider_(provider.key, provider.resolvedFactories.slice(), provider.multiProvider);
            }
            else {
                resolvedProvider = provider;
            }
            normalizedProvidersMap.set(provider.key.id, resolvedProvider);
        }
    }
    return normalizedProvidersMap;
}
function _normalizeProviders(providers, res) {
    providers.forEach(function (b) {
        if (b instanceof Type) {
            res.push({ provide: b, useClass: b });
        }
        else if (b && typeof b == 'object' && b.provide !== undefined) {
            res.push(b);
        }
        else if (b instanceof Array) {
            _normalizeProviders(b, res);
        }
        else {
            throw invalidProviderError(b);
        }
    });
    return res;
}
export function constructDependencies(typeOrFunc, dependencies) {
    if (!dependencies) {
        return _dependenciesFor(typeOrFunc);
    }
    else {
        var params_1 = dependencies.map(function (t) { return [t]; });
        return dependencies.map(function (t) { return _extractToken(typeOrFunc, t, params_1); });
    }
}
function _dependenciesFor(typeOrFunc) {
    var params = reflector.parameters(typeOrFunc);
    if (!params)
        return [];
    if (params.some(function (p) { return p == null; })) {
        throw noAnnotationError(typeOrFunc, params);
    }
    return params.map(function (p) { return _extractToken(typeOrFunc, p, params); });
}
function _extractToken(typeOrFunc, metadata, params) {
    var token = null;
    var optional = false;
    if (!Array.isArray(metadata)) {
        if (metadata instanceof Inject) {
            return _createDependency(metadata.token, optional, null);
        }
        else {
            return _createDependency(metadata, optional, null);
        }
    }
    var visibility = null;
    for (var i = 0; i < metadata.length; ++i) {
        var paramMetadata = metadata[i];
        if (paramMetadata instanceof Type) {
            token = paramMetadata;
        }
        else if (paramMetadata instanceof Inject) {
            token = paramMetadata.token;
        }
        else if (paramMetadata instanceof Optional) {
            optional = true;
        }
        else if (paramMetadata instanceof Self || paramMetadata instanceof SkipSelf) {
            visibility = paramMetadata;
        }
        else if (paramMetadata instanceof InjectionToken) {
            token = paramMetadata;
        }
    }
    token = resolveForwardRef(token);
    if (token != null) {
        return _createDependency(token, optional, visibility);
    }
    else {
        throw noAnnotationError(typeOrFunc, params);
    }
}
function _createDependency(token, optional, visibility) {
    return new ReflectiveDependency(ReflectiveKey.get(token), optional, visibility);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmbGVjdGl2ZV9wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2RpL3JlZmxlY3RpdmVfcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUVuRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE9BQU8sRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDNUQsT0FBTyxFQUFDLG9CQUFvQixFQUFFLDZDQUE2QyxFQUFFLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDM0gsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBTS9DOzs7R0FHRztBQUNIO0lBQ0UsOEJBQ1csR0FBa0IsRUFBUyxRQUFpQixFQUFTLFVBQThCO1FBQW5GLFFBQUcsR0FBSCxHQUFHLENBQWU7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7SUFBRyxDQUFDO0lBRTNGLDRCQUFPLEdBQWQsVUFBZSxHQUFrQjtRQUMvQixPQUFPLElBQUksb0JBQW9CLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQzs7QUFFRCxJQUFNLFdBQVcsR0FBVSxFQUFFLENBQUM7QUFzQzlCO0lBR0UscUNBQ1csR0FBa0IsRUFBUyxpQkFBOEMsRUFDekUsYUFBc0I7UUFE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LEtBQUssQ0FBQztTQUU3QjthQUFNLElBQUksYUFBYSxZQUFZLFFBQVEsRUFBRTtZQUM1QyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBRWpCO2FBQU0sSUFBSSxhQUFhLFlBQVksSUFBSSxJQUFJLGFBQWEsWUFBWSxRQUFRLEVBQUU7WUFDN0UsVUFBVSxHQUFHLGFBQWEsQ0FBQztTQUM1QjthQUFNLElBQUksYUFBYSxZQUFZLGNBQWMsRUFBRTtZQUNsRCxLQUFLLEdBQUcsYUFBYSxDQUFDO1NBQ3ZCO0tBQ0Y7SUFFRCxLQUFLLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1FBQ2pCLE9BQU8saUJBQWlCLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUN2RDtTQUFNO1FBQ0wsTUFBTSxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDN0M7QUFDSCxDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FDdEIsS0FBVSxFQUFFLFFBQWlCLEVBQUUsVUFBa0M7SUFDbkUsT0FBTyxJQUFJLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2xGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vaW50ZXJmYWNlL3R5cGUnO1xuaW1wb3J0IHtyZWZsZWN0b3J9IGZyb20gJy4uL3JlZmxlY3Rpb24vcmVmbGVjdGlvbic7XG5cbmltcG9ydCB7cmVzb2x2ZUZvcndhcmRSZWZ9IGZyb20gJy4vZm9yd2FyZF9yZWYnO1xuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbn0gZnJvbSAnLi9pbmplY3Rpb25fdG9rZW4nO1xuaW1wb3J0IHtDbGFzc1Byb3ZpZGVyLCBFeGlzdGluZ1Byb3ZpZGVyLCBGYWN0b3J5UHJvdmlkZXIsIFByb3ZpZGVyLCBUeXBlUHJvdmlkZXIsIFZhbHVlUHJvdmlkZXJ9IGZyb20gJy4vaW50ZXJmYWNlL3Byb3ZpZGVyJztcbmltcG9ydCB7SW5qZWN0LCBPcHRpb25hbCwgU2VsZiwgU2tpcFNlbGZ9IGZyb20gJy4vbWV0YWRhdGEnO1xuaW1wb3J0IHtpbnZhbGlkUHJvdmlkZXJFcnJvciwgbWl4aW5nTXVsdGlQcm92aWRlcnNXaXRoUmVndWxhclByb3ZpZGVyc0Vycm9yLCBub0Fubm90YXRpb25FcnJvcn0gZnJvbSAnLi9yZWZsZWN0aXZlX2Vycm9ycyc7XG5pbXBvcnQge1JlZmxlY3RpdmVLZXl9IGZyb20gJy4vcmVmbGVjdGl2ZV9rZXknO1xuXG5cbmludGVyZmFjZSBOb3JtYWxpemVkUHJvdmlkZXIgZXh0ZW5kcyBUeXBlUHJvdmlkZXIsIFZhbHVlUHJvdmlkZXIsIENsYXNzUHJvdmlkZXIsIEV4aXN0aW5nUHJvdmlkZXIsXG4gICAgRmFjdG9yeVByb3ZpZGVyIHt9XG5cbi8qKlxuICogYERlcGVuZGVuY3lgIGlzIHVzZWQgYnkgdGhlIGZyYW1ld29yayB0byBleHRlbmQgREkuXG4gKiBUaGlzIGlzIGludGVybmFsIHRvIEFuZ3VsYXIgYW5kIHNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlZmxlY3RpdmVEZXBlbmRlbmN5IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMga2V5OiBSZWZsZWN0aXZlS2V5LCBwdWJsaWMgb3B0aW9uYWw6IGJvb2xlYW4sIHB1YmxpYyB2aXNpYmlsaXR5OiBTZWxmfFNraXBTZWxmfG51bGwpIHt9XG5cbiAgc3RhdGljIGZyb21LZXkoa2V5OiBSZWZsZWN0aXZlS2V5KTogUmVmbGVjdGl2ZURlcGVuZGVuY3kge1xuICAgIHJldHVybiBuZXcgUmVmbGVjdGl2ZURlcGVuZGVuY3koa2V5LCBmYWxzZSwgbnVsbCk7XG4gIH1cbn1cblxuY29uc3QgX0VNUFRZX0xJU1Q6IGFueVtdID0gW107XG5cbi8qKlxuICogQW4gaW50ZXJuYWwgcmVzb2x2ZWQgcmVwcmVzZW50YXRpb24gb2YgYSBgUHJvdmlkZXJgIHVzZWQgYnkgdGhlIGBJbmplY3RvcmAuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqIFRoaXMgaXMgdXN1YWxseSBjcmVhdGVkIGF1dG9tYXRpY2FsbHkgYnkgYEluamVjdG9yLnJlc29sdmVBbmRDcmVhdGVgLlxuICpcbiAqIEl0IGNhbiBiZSBjcmVhdGVkIG1hbnVhbGx5LCBhcyBmb2xsb3dzOlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogdmFyIHJlc29sdmVkUHJvdmlkZXJzID0gSW5qZWN0b3IucmVzb2x2ZShbeyBwcm92aWRlOiAnbWVzc2FnZScsIHVzZVZhbHVlOiAnSGVsbG8nIH1dKTtcbiAqIHZhciBpbmplY3RvciA9IEluamVjdG9yLmZyb21SZXNvbHZlZFByb3ZpZGVycyhyZXNvbHZlZFByb3ZpZGVycyk7XG4gKlxuICogZXhwZWN0KGluamVjdG9yLmdldCgnbWVzc2FnZScpKS50b0VxdWFsKCdIZWxsbycpO1xuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyIHtcbiAgLyoqXG4gICAqIEEga2V5LCB1c3VhbGx5IGEgYFR5cGU8YW55PmAuXG4gICAqL1xuICBrZXk6IFJlZmxlY3RpdmVLZXk7XG5cbiAgLyoqXG4gICAqIEZhY3RvcnkgZnVuY3Rpb24gd2hpY2ggY2FuIHJldHVybiBhbiBpbnN0YW5jZSBvZiBhbiBvYmplY3QgcmVwcmVzZW50ZWQgYnkgYSBrZXkuXG4gICAqL1xuICByZXNvbHZlZEZhY3RvcmllczogUmVzb2x2ZWRSZWZsZWN0aXZlRmFjdG9yeVtdO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHByb3ZpZGVyIGlzIGEgbXVsdGktcHJvdmlkZXIgb3IgYSByZWd1bGFyIHByb3ZpZGVyLlxuICAgKi9cbiAgbXVsdGlQcm92aWRlcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyXyBpbXBsZW1lbnRzIFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyIHtcbiAgcmVhZG9ubHkgcmVzb2x2ZWRGYWN0b3J5OiBSZXNvbHZlZFJlZmxlY3RpdmVGYWN0b3J5O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGtleTogUmVmbGVjdGl2ZUtleSwgcHVibGljIHJlc29sdmVkRmFjdG9yaWVzOiBSZXNvbHZlZFJlZmxlY3RpdmVGYWN0b3J5W10sXG4gICAgICBwdWJsaWMgbXVsdGlQcm92aWRlcjogYm9vbGVhbikge1xuICAgIHRoaXMucmVzb2x2ZWRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlZEZhY3Rvcmllc1swXTtcbiAgfVxufVxuXG4vKipcbiAqIEFuIGludGVybmFsIHJlc29sdmVkIHJlcHJlc2VudGF0aW9uIG9mIGEgZmFjdG9yeSBmdW5jdGlvbiBjcmVhdGVkIGJ5IHJlc29sdmluZyBgUHJvdmlkZXJgLlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY2xhc3MgUmVzb2x2ZWRSZWZsZWN0aXZlRmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqXG4gICAgICAgKiBGYWN0b3J5IGZ1bmN0aW9uIHdoaWNoIGNhbiByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgYW4gb2JqZWN0IHJlcHJlc2VudGVkIGJ5IGEga2V5LlxuICAgICAgICovXG4gICAgICBwdWJsaWMgZmFjdG9yeTogRnVuY3Rpb24sXG5cbiAgICAgIC8qKlxuICAgICAgICogQXJndW1lbnRzIChkZXBlbmRlbmNpZXMpIHRvIHRoZSBgZmFjdG9yeWAgZnVuY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIHB1YmxpYyBkZXBlbmRlbmNpZXM6IFJlZmxlY3RpdmVEZXBlbmRlbmN5W10pIHt9XG59XG5cblxuLyoqXG4gKiBSZXNvbHZlIGEgc2luZ2xlIHByb3ZpZGVyLlxuICovXG5mdW5jdGlvbiByZXNvbHZlUmVmbGVjdGl2ZUZhY3RvcnkocHJvdmlkZXI6IE5vcm1hbGl6ZWRQcm92aWRlcik6IFJlc29sdmVkUmVmbGVjdGl2ZUZhY3Rvcnkge1xuICBsZXQgZmFjdG9yeUZuOiBGdW5jdGlvbjtcbiAgbGV0IHJlc29sdmVkRGVwczogUmVmbGVjdGl2ZURlcGVuZGVuY3lbXTtcbiAgaWYgKHByb3ZpZGVyLnVzZUNsYXNzKSB7XG4gICAgY29uc3QgdXNlQ2xhc3MgPSByZXNvbHZlRm9yd2FyZFJlZihwcm92aWRlci51c2VDbGFzcyk7XG4gICAgZmFjdG9yeUZuID0gcmVmbGVjdG9yLmZhY3RvcnkodXNlQ2xhc3MpO1xuICAgIHJlc29sdmVkRGVwcyA9IF9kZXBlbmRlbmNpZXNGb3IodXNlQ2xhc3MpO1xuICB9IGVsc2UgaWYgKHByb3ZpZGVyLnVzZUV4aXN0aW5nKSB7XG4gICAgZmFjdG9yeUZuID0gKGFsaWFzSW5zdGFuY2U6IGFueSkgPT4gYWxpYXNJbnN0YW5jZTtcbiAgICByZXNvbHZlZERlcHMgPSBbUmVmbGVjdGl2ZURlcGVuZGVuY3kuZnJvbUtleShSZWZsZWN0aXZlS2V5LmdldChwcm92aWRlci51c2VFeGlzdGluZykpXTtcbiAgfSBlbHNlIGlmIChwcm92aWRlci51c2VGYWN0b3J5KSB7XG4gICAgZmFjdG9yeUZuID0gcHJvdmlkZXIudXNlRmFjdG9yeTtcbiAgICByZXNvbHZlZERlcHMgPSBjb25zdHJ1Y3REZXBlbmRlbmNpZXMocHJvdmlkZXIudXNlRmFjdG9yeSwgcHJvdmlkZXIuZGVwcyk7XG4gIH0gZWxzZSB7XG4gICAgZmFjdG9yeUZuID0gKCkgPT4gcHJvdmlkZXIudXNlVmFsdWU7XG4gICAgcmVzb2x2ZWREZXBzID0gX0VNUFRZX0xJU1Q7XG4gIH1cbiAgcmV0dXJuIG5ldyBSZXNvbHZlZFJlZmxlY3RpdmVGYWN0b3J5KGZhY3RvcnlGbiwgcmVzb2x2ZWREZXBzKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgYFByb3ZpZGVyYCBpbnRvIGBSZXNvbHZlZFByb3ZpZGVyYC5cbiAqXG4gKiBgSW5qZWN0b3JgIGludGVybmFsbHkgb25seSB1c2VzIGBSZXNvbHZlZFByb3ZpZGVyYCwgYFByb3ZpZGVyYCBjb250YWlucyBjb252ZW5pZW5jZSBwcm92aWRlclxuICogc3ludGF4LlxuICovXG5mdW5jdGlvbiByZXNvbHZlUmVmbGVjdGl2ZVByb3ZpZGVyKHByb3ZpZGVyOiBOb3JtYWxpemVkUHJvdmlkZXIpOiBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlciB7XG4gIHJldHVybiBuZXcgUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXJfKFxuICAgICAgUmVmbGVjdGl2ZUtleS5nZXQocHJvdmlkZXIucHJvdmlkZSksIFtyZXNvbHZlUmVmbGVjdGl2ZUZhY3RvcnkocHJvdmlkZXIpXSxcbiAgICAgIHByb3ZpZGVyLm11bHRpIHx8IGZhbHNlKTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGEgbGlzdCBvZiBQcm92aWRlcnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUmVmbGVjdGl2ZVByb3ZpZGVycyhwcm92aWRlcnM6IFByb3ZpZGVyW10pOiBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcltdIHtcbiAgY29uc3Qgbm9ybWFsaXplZCA9IF9ub3JtYWxpemVQcm92aWRlcnMocHJvdmlkZXJzLCBbXSk7XG4gIGNvbnN0IHJlc29sdmVkID0gbm9ybWFsaXplZC5tYXAocmVzb2x2ZVJlZmxlY3RpdmVQcm92aWRlcik7XG4gIGNvbnN0IHJlc29sdmVkUHJvdmlkZXJNYXAgPSBtZXJnZVJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVycyhyZXNvbHZlZCwgbmV3IE1hcCgpKTtcbiAgcmV0dXJuIEFycmF5LmZyb20ocmVzb2x2ZWRQcm92aWRlck1hcC52YWx1ZXMoKSk7XG59XG5cbi8qKlxuICogTWVyZ2VzIGEgbGlzdCBvZiBSZXNvbHZlZFByb3ZpZGVycyBpbnRvIGEgbGlzdCB3aGVyZSBlYWNoIGtleSBpcyBjb250YWluZWQgZXhhY3RseSBvbmNlIGFuZFxuICogbXVsdGkgcHJvdmlkZXJzIGhhdmUgYmVlbiBtZXJnZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVycyhcbiAgICBwcm92aWRlcnM6IFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyW10sXG4gICAgbm9ybWFsaXplZFByb3ZpZGVyc01hcDogTWFwPG51bWJlciwgUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXI+KTpcbiAgICBNYXA8bnVtYmVyLCBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcj4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3ZpZGVycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gcHJvdmlkZXJzW2ldO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gbm9ybWFsaXplZFByb3ZpZGVyc01hcC5nZXQocHJvdmlkZXIua2V5LmlkKTtcbiAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgIGlmIChwcm92aWRlci5tdWx0aVByb3ZpZGVyICE9PSBleGlzdGluZy5tdWx0aVByb3ZpZGVyKSB7XG4gICAgICAgIHRocm93IG1peGluZ011bHRpUHJvdmlkZXJzV2l0aFJlZ3VsYXJQcm92aWRlcnNFcnJvcihleGlzdGluZywgcHJvdmlkZXIpO1xuICAgICAgfVxuICAgICAgaWYgKHByb3ZpZGVyLm11bHRpUHJvdmlkZXIpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm92aWRlci5yZXNvbHZlZEZhY3Rvcmllcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGV4aXN0aW5nLnJlc29sdmVkRmFjdG9yaWVzLnB1c2gocHJvdmlkZXIucmVzb2x2ZWRGYWN0b3JpZXNbal0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3JtYWxpemVkUHJvdmlkZXJzTWFwLnNldChwcm92aWRlci5rZXkuaWQsIHByb3ZpZGVyKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHJlc29sdmVkUHJvdmlkZXI6IFJlc29sdmVkUmVmbGVjdGl2ZVByb3ZpZGVyO1xuICAgICAgaWYgKHByb3ZpZGVyLm11bHRpUHJvdmlkZXIpIHtcbiAgICAgICAgcmVzb2x2ZWRQcm92aWRlciA9IG5ldyBSZXNvbHZlZFJlZmxlY3RpdmVQcm92aWRlcl8oXG4gICAgICAgICAgICBwcm92aWRlci5rZXksIHByb3ZpZGVyLnJlc29sdmVkRmFjdG9yaWVzLnNsaWNlKCksIHByb3ZpZGVyLm11bHRpUHJvdmlkZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZWRQcm92aWRlciA9IHByb3ZpZGVyO1xuICAgICAgfVxuICAgICAgbm9ybWFsaXplZFByb3ZpZGVyc01hcC5zZXQocHJvdmlkZXIua2V5LmlkLCByZXNvbHZlZFByb3ZpZGVyKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5vcm1hbGl6ZWRQcm92aWRlcnNNYXA7XG59XG5cbmZ1bmN0aW9uIF9ub3JtYWxpemVQcm92aWRlcnMocHJvdmlkZXJzOiBQcm92aWRlcltdLCByZXM6IFByb3ZpZGVyW10pOiBQcm92aWRlcltdIHtcbiAgcHJvdmlkZXJzLmZvckVhY2goYiA9PiB7XG4gICAgaWYgKGIgaW5zdGFuY2VvZiBUeXBlKSB7XG4gICAgICByZXMucHVzaCh7cHJvdmlkZTogYiwgdXNlQ2xhc3M6IGJ9KTtcblxuICAgIH0gZWxzZSBpZiAoYiAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0JyAmJiAoYiBhcyBhbnkpLnByb3ZpZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzLnB1c2goYiBhcyBOb3JtYWxpemVkUHJvdmlkZXIpO1xuXG4gICAgfSBlbHNlIGlmIChiIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIF9ub3JtYWxpemVQcm92aWRlcnMoYiwgcmVzKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBpbnZhbGlkUHJvdmlkZXJFcnJvcihiKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3REZXBlbmRlbmNpZXMoXG4gICAgdHlwZU9yRnVuYzogYW55LCBkZXBlbmRlbmNpZXM/OiBhbnlbXSk6IFJlZmxlY3RpdmVEZXBlbmRlbmN5W10ge1xuICBpZiAoIWRlcGVuZGVuY2llcykge1xuICAgIHJldHVybiBfZGVwZW5kZW5jaWVzRm9yKHR5cGVPckZ1bmMpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBhcmFtczogYW55W11bXSA9IGRlcGVuZGVuY2llcy5tYXAodCA9PiBbdF0pO1xuICAgIHJldHVybiBkZXBlbmRlbmNpZXMubWFwKHQgPT4gX2V4dHJhY3RUb2tlbih0eXBlT3JGdW5jLCB0LCBwYXJhbXMpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVwZW5kZW5jaWVzRm9yKHR5cGVPckZ1bmM6IGFueSk6IFJlZmxlY3RpdmVEZXBlbmRlbmN5W10ge1xuICBjb25zdCBwYXJhbXMgPSByZWZsZWN0b3IucGFyYW1ldGVycyh0eXBlT3JGdW5jKTtcblxuICBpZiAoIXBhcmFtcykgcmV0dXJuIFtdO1xuICBpZiAocGFyYW1zLnNvbWUocCA9PiBwID09IG51bGwpKSB7XG4gICAgdGhyb3cgbm9Bbm5vdGF0aW9uRXJyb3IodHlwZU9yRnVuYywgcGFyYW1zKTtcbiAgfVxuICByZXR1cm4gcGFyYW1zLm1hcChwID0+IF9leHRyYWN0VG9rZW4odHlwZU9yRnVuYywgcCwgcGFyYW1zKSk7XG59XG5cbmZ1bmN0aW9uIF9leHRyYWN0VG9rZW4oXG4gICAgdHlwZU9yRnVuYzogYW55LCBtZXRhZGF0YTogYW55W10gfCBhbnksIHBhcmFtczogYW55W11bXSk6IFJlZmxlY3RpdmVEZXBlbmRlbmN5IHtcbiAgbGV0IHRva2VuOiBhbnkgPSBudWxsO1xuICBsZXQgb3B0aW9uYWwgPSBmYWxzZTtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkobWV0YWRhdGEpKSB7XG4gICAgaWYgKG1ldGFkYXRhIGluc3RhbmNlb2YgSW5qZWN0KSB7XG4gICAgICByZXR1cm4gX2NyZWF0ZURlcGVuZGVuY3kobWV0YWRhdGEudG9rZW4sIG9wdGlvbmFsLCBudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF9jcmVhdGVEZXBlbmRlbmN5KG1ldGFkYXRhLCBvcHRpb25hbCwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgbGV0IHZpc2liaWxpdHk6IFNlbGZ8U2tpcFNlbGZ8bnVsbCA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZXRhZGF0YS5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IHBhcmFtTWV0YWRhdGEgPSBtZXRhZGF0YVtpXTtcblxuICAgIGlmIChwYXJhbU1ldGFkYXRhIGluc3RhbmNlb2YgVHlwZSkge1xuICAgICAgdG9rZW4gPSBwYXJhbU1ldGFkYXRhO1xuXG4gICAgfSBlbHNlIGlmIChwYXJhbU1ldGFkYXRhIGluc3RhbmNlb2YgSW5qZWN0KSB7XG4gICAgICB0b2tlbiA9IHBhcmFtTWV0YWRhdGEudG9rZW47XG5cbiAgICB9IGVsc2UgaWYgKHBhcmFtTWV0YWRhdGEgaW5zdGFuY2VvZiBPcHRpb25hbCkge1xuICAgICAgb3B0aW9uYWwgPSB0cnVlO1xuXG4gICAgfSBlbHNlIGlmIChwYXJhbU1ldGFkYXRhIGluc3RhbmNlb2YgU2VsZiB8fCBwYXJhbU1ldGFkYXRhIGluc3RhbmNlb2YgU2tpcFNlbGYpIHtcbiAgICAgIHZpc2liaWxpdHkgPSBwYXJhbU1ldGFkYXRhO1xuICAgIH0gZWxzZSBpZiAocGFyYW1NZXRhZGF0YSBpbnN0YW5jZW9mIEluamVjdGlvblRva2VuKSB7XG4gICAgICB0b2tlbiA9IHBhcmFtTWV0YWRhdGE7XG4gICAgfVxuICB9XG5cbiAgdG9rZW4gPSByZXNvbHZlRm9yd2FyZFJlZih0b2tlbik7XG5cbiAgaWYgKHRva2VuICE9IG51bGwpIHtcbiAgICByZXR1cm4gX2NyZWF0ZURlcGVuZGVuY3kodG9rZW4sIG9wdGlvbmFsLCB2aXNpYmlsaXR5KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBub0Fubm90YXRpb25FcnJvcih0eXBlT3JGdW5jLCBwYXJhbXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVEZXBlbmRlbmN5KFxuICAgIHRva2VuOiBhbnksIG9wdGlvbmFsOiBib29sZWFuLCB2aXNpYmlsaXR5OiBTZWxmIHwgU2tpcFNlbGYgfCBudWxsKTogUmVmbGVjdGl2ZURlcGVuZGVuY3kge1xuICByZXR1cm4gbmV3IFJlZmxlY3RpdmVEZXBlbmRlbmN5KFJlZmxlY3RpdmVLZXkuZ2V0KHRva2VuKSwgb3B0aW9uYWwsIHZpc2liaWxpdHkpO1xufVxuIl19