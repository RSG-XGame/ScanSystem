/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ɵɵinject } from '../injector_compatibility';
import { getInjectableDef, getInjectorDef, ɵɵdefineInjectable, ɵɵdefineInjector } from '../interface/defs';
/**
 * A mapping of the @angular/core API surface used in generated expressions to the actual symbols.
 *
 * This should be kept up to date with the public exports of @angular/core.
 */
export var angularCoreDiEnv = {
    'ɵɵdefineInjectable': ɵɵdefineInjectable,
    'ɵɵdefineInjector': ɵɵdefineInjector,
    'ɵɵinject': ɵɵinject,
    'ɵɵgetFactoryOf': getFactoryOf,
};
function getFactoryOf(type) {
    var typeAny = type;
    var def = getInjectableDef(typeAny) || getInjectorDef(typeAny);
    if (!def || def.factory === undefined) {
        return null;
    }
    return def.factory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9kaS9qaXQvZW52aXJvbm1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBR0gsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUl6Rzs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQStCO0lBQzFELG9CQUFvQixFQUFFLGtCQUFrQjtJQUN4QyxrQkFBa0IsRUFBRSxnQkFBZ0I7SUFDcEMsVUFBVSxFQUFFLFFBQVE7SUFDcEIsZ0JBQWdCLEVBQUUsWUFBWTtDQUMvQixDQUFDO0FBRUYsU0FBUyxZQUFZLENBQUksSUFBZTtJQUN0QyxJQUFNLE9BQU8sR0FBRyxJQUFXLENBQUM7SUFDNUIsSUFBTSxHQUFHLEdBQUcsZ0JBQWdCLENBQUksT0FBTyxDQUFDLElBQUksY0FBYyxDQUFJLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZFLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7UUFDckMsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1R5cGV9IGZyb20gJy4uLy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7ybXJtWluamVjdH0gZnJvbSAnLi4vaW5qZWN0b3JfY29tcGF0aWJpbGl0eSc7XG5pbXBvcnQge2dldEluamVjdGFibGVEZWYsIGdldEluamVjdG9yRGVmLCDJtcm1ZGVmaW5lSW5qZWN0YWJsZSwgybXJtWRlZmluZUluamVjdG9yfSBmcm9tICcuLi9pbnRlcmZhY2UvZGVmcyc7XG5cblxuXG4vKipcbiAqIEEgbWFwcGluZyBvZiB0aGUgQGFuZ3VsYXIvY29yZSBBUEkgc3VyZmFjZSB1c2VkIGluIGdlbmVyYXRlZCBleHByZXNzaW9ucyB0byB0aGUgYWN0dWFsIHN5bWJvbHMuXG4gKlxuICogVGhpcyBzaG91bGQgYmUga2VwdCB1cCB0byBkYXRlIHdpdGggdGhlIHB1YmxpYyBleHBvcnRzIG9mIEBhbmd1bGFyL2NvcmUuXG4gKi9cbmV4cG9ydCBjb25zdCBhbmd1bGFyQ29yZURpRW52OiB7W25hbWU6IHN0cmluZ106IEZ1bmN0aW9ufSA9IHtcbiAgJ8m1ybVkZWZpbmVJbmplY3RhYmxlJzogybXJtWRlZmluZUluamVjdGFibGUsXG4gICfJtcm1ZGVmaW5lSW5qZWN0b3InOiDJtcm1ZGVmaW5lSW5qZWN0b3IsXG4gICfJtcm1aW5qZWN0JzogybXJtWluamVjdCxcbiAgJ8m1ybVnZXRGYWN0b3J5T2YnOiBnZXRGYWN0b3J5T2YsXG59O1xuXG5mdW5jdGlvbiBnZXRGYWN0b3J5T2Y8VD4odHlwZTogVHlwZTxhbnk+KTogKCh0eXBlOiBUeXBlPFQ+fCBudWxsKSA9PiBUKXxudWxsIHtcbiAgY29uc3QgdHlwZUFueSA9IHR5cGUgYXMgYW55O1xuICBjb25zdCBkZWYgPSBnZXRJbmplY3RhYmxlRGVmPFQ+KHR5cGVBbnkpIHx8IGdldEluamVjdG9yRGVmPFQ+KHR5cGVBbnkpO1xuICBpZiAoIWRlZiB8fCBkZWYuZmFjdG9yeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIGRlZi5mYWN0b3J5O1xufVxuIl19