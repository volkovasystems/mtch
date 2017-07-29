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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm10Y2guc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJyYXplIiwic3RyaW5nZSIsInRydWx5Iiwid2ljaGV2ciIsIm10Y2giLCJ0ZXh0IiwicGF0dGVybiIsImluZGV4IiwiUmVnRXhwIiwiRXJyb3IiLCJyZXN1bHQiLCJtYXRjaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRUEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1HLFFBQVFILFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUksVUFBVUosUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1LLE9BQU8sU0FBU0EsSUFBVCxDQUFlQyxJQUFmLEVBQXFCQyxPQUFyQixFQUE4QkMsS0FBOUIsRUFBcUM7QUFDakQ7Ozs7Ozs7Ozs7Ozs7QUFhQSxLQUFJLE9BQU9ELE9BQVAsSUFBa0IsUUFBdEIsRUFBZ0M7QUFDL0JBLFlBQVUsSUFBSUUsTUFBSixDQUFZRixPQUFaLENBQVY7QUFDQTs7QUFFRDtBQUNBLEtBQUksRUFBR0EsbUJBQW1CRSxNQUF0QixDQUFKLEVBQW9DO0FBQ25DLFFBQU0sSUFBSUMsS0FBSixDQUFXLGlCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJUCxNQUFPSyxLQUFQLEtBQWtCLE9BQU9BLEtBQVAsSUFBZ0IsUUFBdEMsRUFBZ0Q7QUFDL0MsUUFBTSxJQUFJRSxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRURKLFFBQU9KLFFBQVNJLElBQVQsQ0FBUDs7QUFFQSxLQUFJUCxNQUFPTyxJQUFQLENBQUosRUFBbUI7QUFDbEIsTUFBSVAsTUFBT1MsS0FBUCxDQUFKLEVBQW9CO0FBQ25CLFVBQU8sRUFBUDtBQUNBOztBQUVELFNBQU8sRUFBUDtBQUNBOztBQUVELEtBQUlHLFNBQVNWLEtBQU1LLEtBQUtNLEtBQUwsQ0FBWUwsT0FBWixDQUFOLENBQWI7O0FBRUEsS0FBSUosTUFBT0ssS0FBUCxDQUFKLEVBQW9CO0FBQ25CLFNBQU9KLFFBQVNPLE9BQVFILEtBQVIsQ0FBVCxFQUEwQixFQUExQixDQUFQO0FBQ0E7O0FBRUQsUUFBT0csTUFBUDtBQUNBLENBNUNEOztBQThDQUUsT0FBT0MsT0FBUCxHQUFpQlQsSUFBakIiLCJmaWxlIjoibXRjaC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcIm10Y2hcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwibXRjaC9tdGNoLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcIm10Y2guanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJtdGNoXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL210Y2guZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcIm10Y2gtdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRTaG9ydGVyIHN0cmluZyBtYXRjaGluZy5cclxuXHJcblx0XHRJZiBpbmRleCBpcyBnaXZlbiBpdCB3aWxsIGFsd2F5cyByZXR1cm4gdGhlIG1hdGNoaW5nIGluZGV4IHN0cmluZ1xyXG5cdFx0XHRvciBlbXB0eSBzdHJpbmcgb3RoZXJ3aXNlLlxyXG5cclxuXHRcdElmIG5vIGluZGV4IGlzIGdpdmVuIGl0IHdpbGwgcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIG1hdGNoIHByb2NlZHVyZVxyXG5cdFx0XHRvciBlbXB0eSBhcnJheSBvdGhlcndpc2UuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXHJcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcclxuXHRcdFx0XCJzdHJpbmdlXCI6IFwic3RyaW5nZVwiLFxyXG5cdFx0XHRcInRydWx5XCI6IFwidHJ1bHlcIixcclxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcclxuY29uc3Qgc3RyaW5nZSA9IHJlcXVpcmUoIFwic3RyaW5nZVwiICk7XHJcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XHJcbmNvbnN0IHdpY2hldnIgPSByZXF1aXJlKCBcIndpY2hldnJcIiApO1xyXG5cclxuY29uc3QgbXRjaCA9IGZ1bmN0aW9uIG10Y2goIHRleHQsIHBhdHRlcm4sIGluZGV4ICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJ0ZXh0OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXHJcblx0XHRcdFx0XCJwYXR0ZXJuOnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXHJcblx0XHRcdFx0XHRSZWdFeHBcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFwiaW5kZXhcIjogXCJudW1iZXJcIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCB0eXBlb2YgcGF0dGVybiA9PSBcInN0cmluZ1wiICl7XHJcblx0XHRwYXR0ZXJuID0gbmV3IFJlZ0V4cCggcGF0dGVybiApO1xyXG5cdH1cclxuXHJcblx0Ly86IEBub3RlOiBDYW5ub3QgdXNlIGNsYXpvZiBoZXJlLlxyXG5cdGlmKCAhKCBwYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHBhdHRlcm5cIiApO1xyXG5cdH1cclxuXHJcblx0aWYoIHRydWx5KCBpbmRleCApICYmIHR5cGVvZiBpbmRleCAhPSBcIm51bWJlclwiICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBpbmRleFwiICk7XHJcblx0fVxyXG5cclxuXHR0ZXh0ID0gc3RyaW5nZSggdGV4dCApO1xyXG5cclxuXHRpZiggZmFsenkoIHRleHQgKSApe1xyXG5cdFx0aWYoIGZhbHp5KCBpbmRleCApICl7XHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBbIF07XHJcblx0fVxyXG5cclxuXHRsZXQgcmVzdWx0ID0gcmF6ZSggdGV4dC5tYXRjaCggcGF0dGVybiApICk7XHJcblxyXG5cdGlmKCB0cnVseSggaW5kZXggKSApe1xyXG5cdFx0cmV0dXJuIHdpY2hldnIoIHJlc3VsdFsgaW5kZXggXSwgXCJcIiApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbXRjaDtcclxuIl19
//# sourceMappingURL=mtch.support.js.map
