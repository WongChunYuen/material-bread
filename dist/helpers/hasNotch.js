Object.defineProperty(exports,"__esModule",{value:true});exports.default=exports.hasNotch=void 0;var _reactNative=require("react-native");var IPHONE_XS_HEIGHT=812;var IPHONE_XR_HEIGHT=896;var _Dimensions$get=_reactNative.Dimensions.get('window'),WINDOW_WIDTH=_Dimensions$get.width,WINDOW_HEIGHT=_Dimensions$get.height;var hasNotch=_reactNative.Platform.OS==='ios'&&!_reactNative.Platform.isPad&&!_reactNative.Platform.isTVOS&&(WINDOW_HEIGHT===IPHONE_XS_HEIGHT||WINDOW_WIDTH===IPHONE_XS_HEIGHT||WINDOW_HEIGHT===IPHONE_XR_HEIGHT||WINDOW_WIDTH===IPHONE_XR_HEIGHT);exports.hasNotch=hasNotch;var _default=hasNotch;exports.default=_default;