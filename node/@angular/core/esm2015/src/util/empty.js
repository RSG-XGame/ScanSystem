/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
import './ng_dev_mode';
/**
 * This file contains reuseable "empty" symbols that can be used as default return values
 * in different parts of the rendering code. Because the same symbols are returned, this
 * allows for identity checks against these values to be consistently used by the framework
 * code.
 */
export const EMPTY_OBJ = {};
export const EMPTY_ARRAY = [];
// freezing the values prevents any code from accidentally inserting new values in
if (typeof ngDevMode !== 'undefined' && ngDevMode) {
    // These property accesses can be ignored because ngDevMode will be set to false
    // when optimizing code and the whole if statement will be dropped.
    // tslint:disable-next-line:no-toplevel-property-access
    Object.freeze(EMPTY_OBJ);
    // tslint:disable-next-line:no-toplevel-property-access
    Object.freeze(EMPTY_ARRAY);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy91dGlsL2VtcHR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFNRTtBQUNGLE9BQU8sZUFBZSxDQUFDO0FBRXZCOzs7OztHQUtHO0FBRUgsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFPLEVBQUUsQ0FBQztBQUNoQyxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQVUsRUFBRSxDQUFDO0FBRXJDLGtGQUFrRjtBQUNsRixJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLEVBQUU7SUFDakQsZ0ZBQWdGO0lBQ2hGLG1FQUFtRTtJQUNuRSx1REFBdUQ7SUFDdkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6Qix1REFBdUQ7SUFDdkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztDQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKiBAbGljZW5zZVxuKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbipcbiogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuKi9cbmltcG9ydCAnLi9uZ19kZXZfbW9kZSc7XG5cbi8qKlxuICogVGhpcyBmaWxlIGNvbnRhaW5zIHJldXNlYWJsZSBcImVtcHR5XCIgc3ltYm9scyB0aGF0IGNhbiBiZSB1c2VkIGFzIGRlZmF1bHQgcmV0dXJuIHZhbHVlc1xuICogaW4gZGlmZmVyZW50IHBhcnRzIG9mIHRoZSByZW5kZXJpbmcgY29kZS4gQmVjYXVzZSB0aGUgc2FtZSBzeW1ib2xzIGFyZSByZXR1cm5lZCwgdGhpc1xuICogYWxsb3dzIGZvciBpZGVudGl0eSBjaGVja3MgYWdhaW5zdCB0aGVzZSB2YWx1ZXMgdG8gYmUgY29uc2lzdGVudGx5IHVzZWQgYnkgdGhlIGZyYW1ld29ya1xuICogY29kZS5cbiAqL1xuXG5leHBvcnQgY29uc3QgRU1QVFlfT0JKOiB7fSA9IHt9O1xuZXhwb3J0IGNvbnN0IEVNUFRZX0FSUkFZOiBhbnlbXSA9IFtdO1xuXG4vLyBmcmVlemluZyB0aGUgdmFsdWVzIHByZXZlbnRzIGFueSBjb2RlIGZyb20gYWNjaWRlbnRhbGx5IGluc2VydGluZyBuZXcgdmFsdWVzIGluXG5pZiAodHlwZW9mIG5nRGV2TW9kZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbmdEZXZNb2RlKSB7XG4gIC8vIFRoZXNlIHByb3BlcnR5IGFjY2Vzc2VzIGNhbiBiZSBpZ25vcmVkIGJlY2F1c2UgbmdEZXZNb2RlIHdpbGwgYmUgc2V0IHRvIGZhbHNlXG4gIC8vIHdoZW4gb3B0aW1pemluZyBjb2RlIGFuZCB0aGUgd2hvbGUgaWYgc3RhdGVtZW50IHdpbGwgYmUgZHJvcHBlZC5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXRvcGxldmVsLXByb3BlcnR5LWFjY2Vzc1xuICBPYmplY3QuZnJlZXplKEVNUFRZX09CSik7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby10b3BsZXZlbC1wcm9wZXJ0eS1hY2Nlc3NcbiAgT2JqZWN0LmZyZWV6ZShFTVBUWV9BUlJBWSk7XG59XG4iXX0=