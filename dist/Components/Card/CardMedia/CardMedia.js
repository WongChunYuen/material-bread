var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _propTypes=_interopRequireDefault(require("prop-types"));var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _CardMedia=_interopRequireDefault(require("./CardMedia.styles"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/Card/CardMedia/CardMedia.js";var CardMedia=function(_Component){(0,_inherits2.default)(CardMedia,_Component);function CardMedia(){(0,_classCallCheck2.default)(this,CardMedia);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(CardMedia).apply(this,arguments));}(0,_createClass2.default)(CardMedia,[{key:"_renderText",value:function _renderText(){return _react.default.createElement(_reactNative.View,{style:_CardMedia.default.textContainer,__source:{fileName:_jsxFileName,lineNumber:25}},this._renderTitle(),this._renderSubtitle());}},{key:"_renderTitle",value:function _renderTitle(){var _this$props=this.props,title=_this$props.title,titleStyles=_this$props.titleStyles;if(!title)return null;return _react.default.createElement(_reactNative.Text,{style:[_CardMedia.default.title,titleStyles],__source:{fileName:_jsxFileName,lineNumber:35}},title);}},{key:"_renderSubtitle",value:function _renderSubtitle(){var _this$props2=this.props,subtitle=_this$props2.subtitle,subtitleStyles=_this$props2.subtitleStyles;if(!subtitle)return null;return _react.default.createElement(_reactNative.Text,{style:[_CardMedia.default.subtitle,subtitleStyles],__source:{fileName:_jsxFileName,lineNumber:41}},subtitle);}},{key:"render",value:function render(){var _this$props3=this.props,image=_this$props3.image,style=_this$props3.style,height=_this$props3.height;return _react.default.createElement(_reactNative.View,{style:[_CardMedia.default.container,{height:height},style],__source:{fileName:_jsxFileName,lineNumber:47}},image,this._renderText());}}]);return CardMedia;}(_react.Component);(0,_defineProperty2.default)(CardMedia,"propTypes",{children:_propTypes.default.node,image:_propTypes.default.node,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),title:_propTypes.default.string,titleStyles:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),subtitle:_propTypes.default.string,subtitleStyles:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),height:_propTypes.default.number});(0,_defineProperty2.default)(CardMedia,"defaultProps",{height:155});var _default=(0,_withTheme.default)(CardMedia);exports.default=_default;