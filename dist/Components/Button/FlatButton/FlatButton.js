var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _ButtonBase=_interopRequireDefault(require("../ButtonBase/ButtonBase"));var _=require("../../../");var _color=_interopRequireDefault(require("color"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Button/FlatButton/FlatButton.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var FlatButton=function(_Component){(0,_inherits2.default)(FlatButton,_Component);function FlatButton(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,FlatButton);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(FlatButton)).call.apply(_getPrototypeOf2,[this].concat(args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{stateBackgroundColor:null});return _this;}(0,_createClass2.default)(FlatButton,[{key:"getButtonStyles",value:function getButtonStyles(){var theme=this.props.theme;var buttonStyles=_objectSpread({},theme.containedButton,{backgroundColor:this.getBackgroundColor()});return buttonStyles;}},{key:"getBackgroundColor",value:function getBackgroundColor(){var _this$props=this.props,userColor=_this$props.color,disabled=_this$props.disabled,theme=_this$props.theme;var stateBackgroundColor=this.state.stateBackgroundColor;var backgroundColor=userColor?userColor:theme.primary.main;backgroundColor=disabled?'rgba(0, 0, 0, 0.12)':backgroundColor;return stateBackgroundColor?stateBackgroundColor:backgroundColor;}},{key:"getRippleColor",value:function getRippleColor(){var rippleColor=this.props.rippleColor;var bgColor=this.getBackgroundColor();var implementedRippleColor=this.getOverlayColor(bgColor,0.12,0.32);return rippleColor?rippleColor:implementedRippleColor;}},{key:"getTextColor",value:function getTextColor(){var _this$props2=this.props,textColor=_this$props2.textColor,disabled=_this$props2.disabled;var implementedTextColor=disabled?'rgba(0, 0, 0, 0.26)':'white';if(textColor)implementedTextColor=textColor;return implementedTextColor;}},{key:"getOverlayColor",value:function getOverlayColor(bgColor,lightOverlay,darkOverlay){var modifiedColor;if((0,_color.default)(bgColor).isDark()){modifiedColor=(0,_color.default)(bgColor).lighten(darkOverlay).rgb().string();}else{modifiedColor=(0,_color.default)(bgColor).darken(lightOverlay).rgb().string();}return modifiedColor;}},{key:"handleHover",value:function handleHover(toggle){var bgColor=this.getBackgroundColor();var implementedColor=toggle?this.getOverlayColor(bgColor,0.08,0.08):null;this.setState({stateBackgroundColor:implementedColor});}},{key:"render",value:function render(){var _this2=this;var _this$props3=this.props,containerStyle=_this$props3.containerStyle,props=(0,_objectWithoutProperties2.default)(_this$props3,["containerStyle"]);return _react.default.createElement(_.Hoverable,{onHoverIn:function onHoverIn(){return _this2.handleHover(true);},onHoverOut:function onHoverOut(){return _this2.handleHover(false);},style:containerStyle,__source:{fileName:_jsxFileName,lineNumber:95}},function(){return _react.default.createElement(_ButtonBase.default,(0,_extends2.default)({typeRippleColor:_this2.getRippleColor(),typeTextColor:_this2.getTextColor(),typeButtonStyles:_this2.getButtonStyles()},props,{__source:{fileName:_jsxFileName,lineNumber:100}}));});}}]);return FlatButton;}(_react.Component);(0,_defineProperty2.default)(FlatButton,"propTypes",{disabled:_propTypes.default.bool,color:_propTypes.default.string,textColor:_propTypes.default.string,rippleColor:_propTypes.default.string,theme:_propTypes.default.object,onPressIn:_propTypes.default.func,onPressOut:_propTypes.default.func,containerStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array])});var _default=(0,_withTheme.default)(FlatButton);exports.default=_default;