"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "mtch",
              			"path": "mtch/mtch.js",
              			"file": "mtch.js",
              			"module": "mtch",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/mtch.git",
              			"test": "mtch-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Shorter string matching.
              
              		If index is given it will always return the matching index string
              			or empty string otherwise.
              
              		If no index is given it will return the result of the match procedure
              			or empty array otherwise.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"raze": "raze",
              			"stringe": "stringe",
              			"truly": "truly",
              			"wichevr": "wichevr"
              		}
              	@end-include
              */

var falzy = require("falzy");
var raze = require("raze");
var stringe = require("stringe");
var truly = require("truly");
var wichevr = require("wichevr");

var mtch = function mtch(text, pattern, index) {
	/*;
                                                	@meta-configuration:
                                                		{
                                                			"text:required": "string",
                                                			"pattern:required": [
                                                				"string",
                                                				RegExp
                                                			],
                                                			"index": "number"
                                                		}
                                                	@end-meta-configuration
                                                */

	if (typeof pattern == "string") {
		pattern = new RegExp(pattern);
	}

	//: @note: Cannot use clazof here.
	if (!(pattern instanceof RegExp)) {
		throw new Error("invalid pattern");
	}

	if (truly(index) && typeof index != "number") {
		throw new Error("invalid index");
	}

	text = stringe(text);

	if (falzy(text)) {
		if (falzy(index)) {
			return "";
		}

		return [];
	}

	var result = raze(text.match(pattern));

	if (truly(index)) {
		return wichevr(result[index], "");
	}

	return result;
};

module.exports = mtch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm10Y2guc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJyYXplIiwic3RyaW5nZSIsInRydWx5Iiwid2ljaGV2ciIsIm10Y2giLCJ0ZXh0IiwicGF0dGVybiIsImluZGV4IiwiUmVnRXhwIiwiRXJyb3IiLCJyZXN1bHQiLCJtYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRUEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1HLFFBQVFILFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUksVUFBVUosUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1LLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxJQUFmLEVBQXFCQyxPQUFyQixFQUE4QkMsS0FBOUIsRUFBcUM7QUFDakQ7Ozs7Ozs7Ozs7Ozs7QUFhQSxLQUFJLE9BQU9ELE9BQVAsSUFBa0IsUUFBdEIsRUFBZ0M7QUFDL0JBLFlBQVUsSUFBSUUsTUFBSixDQUFZRixPQUFaLENBQVY7QUFDQTs7QUFFRDtBQUNBLEtBQUksRUFBR0EsbUJBQW1CRSxNQUF0QixDQUFKLEVBQW9DO0FBQ25DLFFBQU0sSUFBSUMsS0FBSixDQUFXLGlCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJUCxNQUFPSyxLQUFQLEtBQWtCLE9BQU9BLEtBQVAsSUFBZ0IsUUFBdEMsRUFBZ0Q7QUFDL0MsUUFBTSxJQUFJRSxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRURKLFFBQU9KLFFBQVNJLElBQVQsQ0FBUDs7QUFFQSxLQUFJUCxNQUFPTyxJQUFQLENBQUosRUFBbUI7QUFDbEIsTUFBSVAsTUFBT1MsS0FBUCxDQUFKLEVBQW9CO0FBQ25CLFVBQU8sRUFBUDtBQUNBOztBQUVELFNBQU8sRUFBUDtBQUNBOztBQUVELEtBQUlHLFNBQVNWLEtBQU1LLEtBQUtNLEtBQUwsQ0FBWUwsT0FBWixDQUFOLENBQWI7O0FBRUEsS0FBSUosTUFBT0ssS0FBUCxDQUFKLEVBQW9CO0FBQ25CLFNBQU9KLFFBQVNPLE9BQVFILEtBQVIsQ0FBVCxFQUEwQixFQUExQixDQUFQO0FBQ0E7O0FBRUQsUUFBT0csTUFBUDtBQUNBLENBNUNEOztBQThDQUUsT0FBT0MsT0FBUCxHQUFpQlQsSUFBakIiLCJmaWxlIjoibXRjaC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJtdGNoXCIsXG5cdFx0XHRcInBhdGhcIjogXCJtdGNoL210Y2guanNcIixcblx0XHRcdFwiZmlsZVwiOiBcIm10Y2guanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibXRjaFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbXRjaC5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcIm10Y2gtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRTaG9ydGVyIHN0cmluZyBtYXRjaGluZy5cblxuXHRcdElmIGluZGV4IGlzIGdpdmVuIGl0IHdpbGwgYWx3YXlzIHJldHVybiB0aGUgbWF0Y2hpbmcgaW5kZXggc3RyaW5nXG5cdFx0XHRvciBlbXB0eSBzdHJpbmcgb3RoZXJ3aXNlLlxuXG5cdFx0SWYgbm8gaW5kZXggaXMgZ2l2ZW4gaXQgd2lsbCByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbWF0Y2ggcHJvY2VkdXJlXG5cdFx0XHRvciBlbXB0eSBhcnJheSBvdGhlcndpc2UuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwic3RyaW5nZVwiOiBcInN0cmluZ2VcIixcblx0XHRcdFwidHJ1bHlcIjogXCJ0cnVseVwiLFxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHN0cmluZ2UgPSByZXF1aXJlKCBcInN0cmluZ2VcIiApO1xuY29uc3QgdHJ1bHkgPSByZXF1aXJlKCBcInRydWx5XCIgKTtcbmNvbnN0IHdpY2hldnIgPSByZXF1aXJlKCBcIndpY2hldnJcIiApO1xuXG5jb25zdCBtdGNoID0gZnVuY3Rpb24gbXRjaCggdGV4dCwgcGF0dGVybiwgaW5kZXggKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJ0ZXh0OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwicGF0dGVybjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRSZWdFeHBcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJpbmRleFwiOiBcIm51bWJlclwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggdHlwZW9mIHBhdHRlcm4gPT0gXCJzdHJpbmdcIiApe1xuXHRcdHBhdHRlcm4gPSBuZXcgUmVnRXhwKCBwYXR0ZXJuICk7XG5cdH1cblxuXHQvLzogQG5vdGU6IENhbm5vdCB1c2UgY2xhem9mIGhlcmUuXG5cdGlmKCAhKCBwYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwYXR0ZXJuXCIgKTtcblx0fVxuXG5cdGlmKCB0cnVseSggaW5kZXggKSAmJiB0eXBlb2YgaW5kZXggIT0gXCJudW1iZXJcIiApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGluZGV4XCIgKTtcblx0fVxuXG5cdHRleHQgPSBzdHJpbmdlKCB0ZXh0ICk7XG5cblx0aWYoIGZhbHp5KCB0ZXh0ICkgKXtcblx0XHRpZiggZmFsenkoIGluZGV4ICkgKXtcblx0XHRcdHJldHVybiBcIlwiO1xuXHRcdH1cblxuXHRcdHJldHVybiBbIF07XG5cdH1cblxuXHRsZXQgcmVzdWx0ID0gcmF6ZSggdGV4dC5tYXRjaCggcGF0dGVybiApICk7XG5cblx0aWYoIHRydWx5KCBpbmRleCApICl7XG5cdFx0cmV0dXJuIHdpY2hldnIoIHJlc3VsdFsgaW5kZXggXSwgXCJcIiApO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbXRjaDtcbiJdfQ==
//# sourceMappingURL=mtch.support.js.map
