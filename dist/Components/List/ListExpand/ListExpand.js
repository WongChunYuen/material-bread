var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react=_interopRequireWildcard(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _reactNative=require("react-native");var _withTheme=_interopRequireDefault(require("../../../Theme/withTheme"));var _Ripple=_interopRequireDefault(require("../../Ripple/Ripple"));var _Icon=_interopRequireDefault(require("../../Icon/Icon"));var _Hoverable=_interopRequireDefault(require("../../../Utils/Hoverable/Hoverable.js"));var _color=_interopRequireDefault(require("color"));var _ListExpand=_interopRequireDefault(require("./ListExpand.styles"));var _jsxFileName="/Users/cody/projects/material-bread/src/Components/List/ListExpand/ListExpand.js";var ListExpand=function(_Component){(0,_inherits2.default)(ListExpand,_Component);function ListExpand(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,ListExpand);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(ListExpand)).call.apply(_getPrototypeOf2,[this].concat(args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{isOpen:false,menuHeight:new _reactNative.Animated.Value(0),animationDuration:150,stateBackgroundColor:null});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"toggleMenu",function(){var onPress=_this.props.onPress;var _this$state=_this.state,isOpen=_this$state.isOpen,animationDuration=_this$state.animationDuration,menuHeight=_this$state.menuHeight,initialHeight=_this$state.initialHeight;if(initialHeight==0){setTimeout(function(){return _this.toggleMenu();},100);return;}var height=initialHeight;if(isOpen)height=0;if(onPress){onPress();}_reactNative.Animated.timing(menuHeight,{toValue:height,duration:animationDuration,useNativeDriver:true}).start();_this.setState({isOpen:!isOpen});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"onMenuLayout",function(e){var _e$nativeEvent$layout=e.nativeEvent.layout,width=_e$nativeEvent$layout.width,height=_e$nativeEvent$layout.height;_this.setState({initialWidth:width,initialHeight:height});});(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"getBackgroundColor",function(){var stateBackgroundColor=_this.state.stateBackgroundColor;var implementedBackgroundColor='transparent';implementedBackgroundColor=stateBackgroundColor?stateBackgroundColor:implementedBackgroundColor;return implementedBackgroundColor;});return _this;}(0,_createClass2.default)(ListExpand,[{key:"componentDidMount",value:function componentDidMount(){var expanded=this.props.expanded;if(expanded){this.setState({isOpen:expanded});}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var expanded=this.props.expanded;if(expanded!==prevProps.expanded){this.setState({isOpen:expanded});}}},{key:"renderExpandedContent",value:function renderExpandedContent(){var _this$props=this.props,children=_this$props.children,icon=_this$props.icon;var _this$state2=this.state,menuHeight=_this$state2.menuHeight,initialHeight=_this$state2.initialHeight;return _react.default.createElement(_reactNative.Animated.View,{useNativeDriver:true,style:{height:menuHeight,overflow:'hidden',width:'100%',paddingLeft:icon?42:0,zIndex:100},__source:{fileName:_jsxFileName,lineNumber:88}},_react.default.createElement(_reactNative.View,{style:{width:'100%',height:initialHeight,zIndex:100},onLayout:this.onMenuLayout,__source:{fileName:_jsxFileName,lineNumber:97}},children));}},{key:"_renderIcon",value:function _renderIcon(){var icon=this.props.icon;return _react.default.cloneElement(icon,{size:icon.props.size?icon.props.size:24,color:icon.props.color?icon.props.color:'#6e6e6e'});}},{key:"handleHover",value:function handleHover(toggle){var rippleProps=this.props.rippleProps;var bgColor=this.getBackgroundColor();var implementedColor;if(bgColor=='transparent'){implementedColor=toggle?'rgba(0, 0, 0, 0.12)':null;}else{if((0,_color.default)(bgColor).isDark()){implementedColor=toggle?(0,_color.default)(bgColor).lighten(0.15).rgb().string():null;}else{implementedColor=toggle?(0,_color.default)(bgColor).darken(0.15).rgb().string():null;}}if(rippleProps&&rippleProps.rippleColor){implementedColor=toggle?(0,_color.default)(rippleProps.rippleColor).alpha(0.12).rgb().string():null;}this.setState({stateBackgroundColor:implementedColor});}},{key:"render",value:function render(){var _this2=this;var _this$props2=this.props,title=_this$props2.title,style=_this$props2.style,titleStyle=_this$props2.titleStyle,icon=_this$props2.icon,expandIconStyle=_this$props2.expandIconStyle,rippleProps=_this$props2.rippleProps;var isOpen=this.state.isOpen;return _react.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:179}},_react.default.createElement(_Hoverable.default,{onHoverIn:function onHoverIn(){return _this2.handleHover(true);},onHoverOut:function onHoverOut(){return _this2.handleHover(false);},__source:{fileName:_jsxFileName,lineNumber:180}},_react.default.createElement(_Ripple.default,(0,_extends2.default)({style:[_ListExpand.default.container,{backgroundColor:this.getBackgroundColor()},style],onPress:this.toggleMenu,rippleDuration:100},rippleProps,{__source:{fileName:_jsxFileName,lineNumber:183}}),icon?this._renderIcon():null,_react.default.createElement(_reactNative.Text,{style:[_ListExpand.default.title,{marginLeft:icon?16:0},titleStyle],__source:{fileName:_jsxFileName,lineNumber:193}},title),_react.default.createElement(_reactNative.View,{style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:197}}),_react.default.createElement(_Icon.default,{name:isOpen?'expand-less':'expand-more',size:24,style:expandIconStyle,__source:{fileName:_jsxFileName,lineNumber:198}}))),this.renderExpandedContent());}}]);return ListExpand;}(_react.Component);(0,_defineProperty2.default)(ListExpand,"propTypes",{expanded:_propTypes.default.bool,onPress:_propTypes.default.func,children:_propTypes.default.node,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),title:_propTypes.default.string,titleStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),theme:_propTypes.default.object,icon:_propTypes.default.node,expandIconStyle:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array]),rippleProps:_propTypes.default.object});var _default=(0,_withTheme.default)(ListExpand);exports.default=_default;