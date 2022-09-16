(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["forms-wizards"],{"16d7":function(t,e,a){},"2ee4":function(t,e,a){!function(e,a){t.exports=a()}("undefined"!=typeof self&&self,(function(){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e){t.exports=function(t,e,a,n,i,s){var o,r=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,r=t.default);var l,u="function"==typeof r?r.options:r;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),a&&(u.functional=!0),i&&(u._scopeId=i),s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=l):n&&(l=n),l){var d=u.functional,b=d?u.render:u.beforeCreate;d?(u._injectStyles=l,u.render=function(t,e){return l.call(e),b(t,e)}):u.beforeCreate=b?[].concat(b,l):[l]}return{esModule:o,exports:r,options:u}}},function(t,e,a){"use strict";var n=a(2),i=a(4),s=a(14);e.a={name:"form-wizard",components:{WizardButton:n.a,WizardStep:i.a},props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},hideButtons:{type:Boolean,default:!1},validateOnBack:Boolean,color:{type:String,default:"#e74c3c"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},layout:{type:String,default:"horizontal"},stepsClasses:{type:[String,Array],default:""},stepSize:{type:String,default:"md",validator:function(t){return-1!==["xs","sm","md","lg"].indexOf(t)}},transition:{type:String,default:""},startIndex:{type:Number,default:0,validator:function(t){return t>=0}}},provide:function(){return{addTab:this.addTab,removeTab:this.removeTab}},data:function(){return{activeTabIndex:0,currentPercentage:0,maxStep:0,loading:!1,tabs:[]}},computed:{slotProps:function(){return{nextTab:this.nextTab,prevTab:this.prevTab,activeTabIndex:this.activeTabIndex,isLastStep:this.isLastStep,fillButtonStyle:this.fillButtonStyle}},tabCount:function(){return this.tabs.length},isLastStep:function(){return this.activeTabIndex===this.tabCount-1},isVertical:function(){return"vertical"===this.layout},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){return this.activeTabIndex>0?this.stepPercentage*(2*this.activeTabIndex+1):this.stepPercentage}},methods:{emitTabChange:function(t,e){this.$emit("on-change",t,e),this.$emit("update:startIndex",e)},addTab:function(t){var e=this.$slots.default.indexOf(t.$vnode);t.tabId=""+t.title.replace(/ /g,"")+e,this.tabs.splice(e,0,t),e<this.activeTabIndex+1&&(this.maxStep=e,this.changeTab(this.activeTabIndex+1,e))},removeTab:function(t){var e=this.tabs,a=e.indexOf(t);a>-1&&(a===this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.changeTab(this.activeTabIndex,this.activeTabIndex-1)),a<this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.activeTabIndex=this.activeTabIndex-1,this.emitTabChange(this.activeTabIndex+1,this.activeTabIndex)),e.splice(a,1))},reset:function(){this.maxStep=0,this.tabs.forEach((function(t){t.checked=!1})),this.navigateToTab(0)},activateAll:function(){this.maxStep=this.tabs.length-1,this.tabs.forEach((function(t){t.checked=!0}))},navigateToTab:function(t){var e=this,a=t>this.activeTabIndex;if(t<=this.maxStep){var n=function n(){a&&t-e.activeTabIndex>1?(e.changeTab(e.activeTabIndex,e.activeTabIndex+1),e.beforeTabChange(e.activeTabIndex,n)):(e.changeTab(e.activeTabIndex,t),e.afterTabChange(e.activeTabIndex))};a?this.beforeTabChange(this.activeTabIndex,n):(this.setValidationError(null),n())}return t<=this.maxStep},nextTab:function(){var t=this,e=function(){t.activeTabIndex<t.tabCount-1?(t.changeTab(t.activeTabIndex,t.activeTabIndex+1),t.afterTabChange(t.activeTabIndex)):t.$emit("on-complete")};this.beforeTabChange(this.activeTabIndex,e)},prevTab:function(){var t=this,e=function(){t.activeTabIndex>0&&(t.setValidationError(null),t.changeTab(t.activeTabIndex,t.activeTabIndex-1))};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,e):e()},focusNextTab:function(){var t=Object(s.b)(this.tabs);if(-1!==t&&t<this.tabs.length-1){var e=this.tabs[t+1];e.checked&&Object(s.a)(e.tabId)}},focusPrevTab:function(){var t=Object(s.b)(this.tabs);if(-1!==t&&t>0){var e=this.tabs[t-1].tabId;Object(s.a)(e)}},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t){this.tabs[this.activeTabIndex].validationError=t,this.$emit("on-error",t)},validateBeforeChange:function(t,e){var a=this;if(this.setValidationError(null),Object(s.c)(t))this.setLoading(!0),t.then((function(t){a.setLoading(!1);var n=!0===t;a.executeBeforeChange(n,e)})).catch((function(t){a.setLoading(!1),a.setValidationError(t)}));else{var n=!0===t;this.executeBeforeChange(n,e)}},executeBeforeChange:function(t,e){this.$emit("on-validate",t,this.activeTabIndex),t?e():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,e){if(!this.loading){var a=this.tabs[t];if(a&&void 0!==a.beforeChange){var n=a.beforeChange();this.validateBeforeChange(n,e)}else e()}},afterTabChange:function(t){if(!this.loading){var e=this.tabs[t];e&&void 0!==e.afterChange&&e.afterChange()}},changeTab:function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=this.tabs[t],i=this.tabs[e];return n&&(n.active=!1),i&&(i.active=!0),a&&this.activeTabIndex!==e&&this.emitTabChange(t,e),this.activeTabIndex=e,this.activateTabAndCheckStep(this.activeTabIndex),!0},tryChangeRoute:function(t){this.$router&&t.route&&this.$router.push(t.route)},checkRouteChange:function(t){var e=-1,a=this.tabs.find((function(a,n){var i=a.route===t;return i&&(e=n),i}));if(a&&!a.active){var n=e>this.activeTabIndex;this.navigateToTab(e,n)}},deactivateTabs:function(){this.tabs.forEach((function(t){t.active=!1}))},activateTab:function(t){this.deactivateTabs();var e=this.tabs[t];e&&(e.active=!0,e.checked=!0,this.tryChangeRoute(e))},activateTabAndCheckStep:function(t){this.activateTab(t),t>this.maxStep&&(this.maxStep=t),this.activeTabIndex=t},initializeTabs:function(){this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):window.console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")}},mounted:function(){this.initializeTabs()},watch:{"$route.path":function(t){this.checkRouteChange(t)}}}},function(t,e,a){"use strict";function n(t){a(10)}var i=a(3),s=a(11),o=a(0),r=n,c=o(i.a,s.a,!1,r,null,null);e.a=c.exports},function(t,e,a){"use strict";e.a={}},function(t,e,a){"use strict";function n(t){a(12)}var i=a(5),s=a(13),o=a(0),r=n,c=o(i.a,s.a,!1,r,null,null);e.a=c.exports},function(t,e,a){"use strict";e.a={name:"wizard-step",props:{tab:{type:Object,default:function(){}},transition:{type:String,default:""},index:{type:Number,default:0}},computed:{iconActiveStyle:function(){return{backgroundColor:this.tab.color}},stepCheckedStyle:function(){return{borderColor:this.tab.color}},errorStyle:function(){return{borderColor:this.tab.errorColor,backgroundColor:this.tab.errorColor}},stepTitleStyle:function(){return{color:this.tab.validationError?this.tab.errorColor:this.tab.color}},isStepSquare:function(){return"square"===this.tab.shape},isTabShape:function(){return"tab"===this.tab.shape}}}},function(t,e,a){"use strict";e.a={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function},route:{type:[String,Object]},additionalInfo:{type:Object,default:function(){}}},inject:["addTab","removeTab"],data:function(){return{active:!1,validationError:null,checked:!1,tabId:""}},computed:{shape:function(){return this.$parent.shape},color:function(){return this.$parent.color},errorColor:function(){return this.$parent.errorColor}},mounted:function(){this.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeTab(this)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(8),i=a(16),s=a(2),o=a(4);a.d(e,"FormWizard",(function(){return n.a})),a.d(e,"TabContent",(function(){return i.a})),a.d(e,"WizardButton",(function(){return s.a})),a.d(e,"WizardStep",(function(){return o.a}));var r={install:function(t){t.component("form-wizard",n.a),t.component("tab-content",i.a),t.component("wizard-button",s.a),t.component("wizard-step",o.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),e.default=r},function(t,e,a){"use strict";function n(t){a(9)}var i=a(1),s=a(15),o=a(0),r=n,c=o(i.a,s.a,!1,r,null,null);e.a=c.exports},function(t,e){},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"wizard-btn",attrs:{tabindex:"-1",type:"button"}},[t._t("default")],2)},i=[],s={render:n,staticRenderFns:i};e.a=s},function(t,e){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:{active:t.tab.active}},[a("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[a("div",{staticClass:"wizard-icon-circle md",class:{checked:t.tab.checked,square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.checked?t.stepCheckedStyle:{},t.tab.validationError?t.errorStyle:{}],attrs:{role:"tab",tabindex:t.tab.checked?0:"",id:"step-"+t.tab.tabId,"aria-controls":t.tab.tabId,"aria-disabled":t.tab.active,"aria-selected":t.tab.active}},[a("transition",{attrs:{name:t.transition,mode:"out-in"}},[t.tab.active?a("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.active?t.iconActiveStyle:{},t.tab.validationError?t.errorStyle:{}]},[t._t("active-step",[t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2):t._e(),t._v(" "),t.tab.active?t._e():t._t("default",[!t.tab.active&&t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):t._e(),t._v(" "),t.tab.active||t.tab.icon?t._e():a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2)],1),t._v(" "),t._t("title",[a("span",{staticClass:"stepTitle",class:{active:t.tab.active,has_error:t.tab.validationError},style:t.tab.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(t.tab.title)+"\n      ")])])],2)])},i=[],s={render:n,staticRenderFns:i};e.a=s},function(t,e,a){"use strict";function n(){return document.activeElement.id}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=n();return t.findIndex((function(t){return t.tabId===e}))}function s(t){document.getElementById(t).focus()}function o(t){return t.then&&"function"==typeof t.then}e.b=i,e.a=s,e.c=o},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-form-wizard",class:[t.stepSize,{vertical:t.isVertical}],on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"right",39,e.key)?"button"in e&&2!==e.button?null:void t.focusNextTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key)?"button"in e&&0!==e.button?null:void t.focusPrevTab(e):null}]}},[a("div",{staticClass:"wizard-header"},[t._t("title",[a("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),a("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),a("div",{staticClass:"wizard-navigation"},[t.isVertical?t._e():a("div",{staticClass:"wizard-progress-with-circle"},[a("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),a("ul",{staticClass:"wizard-nav wizard-nav-pills",class:t.stepsClasses,attrs:{role:"tablist"}},[t._l(t.tabs,(function(e,n){return t._t("step",[a("wizard-step",{attrs:{tab:e,"step-size":t.stepSize,transition:t.transition,index:n},nativeOn:{click:function(e){t.navigateToTab(n)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.navigateToTab(n)}}})],{tab:e,index:n,navigateToTab:t.navigateToTab,stepSize:t.stepSize,transition:t.transition})}))],2),t._v(" "),a("div",{staticClass:"wizard-tab-content"},[t._t("default",null,null,t.slotProps)],2)]),t._v(" "),t.hideButtons?t._e():a("div",{staticClass:"wizard-card-footer clearfix"},[t._t("footer",[a("div",{staticClass:"wizard-footer-left"},[t.displayPrevButton?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.prevTab(e)}}},[t._t("prev",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n              "+t._s(t.backButtonText)+"\n            ")])],null,t.slotProps)],2):t._e(),t._v(" "),t._t("custom-buttons-left",null,null,t.slotProps)],2),t._v(" "),a("div",{staticClass:"wizard-footer-right"},[t._t("custom-buttons-right",null,null,t.slotProps),t._v(" "),t.isLastStep?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("finish",[a("wizard-button",{style:t.fillButtonStyle},[t._v("\n              "+t._s(t.finishButtonText)+"\n            ")])],null,t.slotProps)],2):a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("next",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n            "+t._s(t.nextButtonText)+"\n           ")])],null,t.slotProps)],2)],2)],null,t.slotProps)],2)])},i=[],s={render:n,staticRenderFns:i};e.a=s},function(t,e,a){"use strict";var n=a(6),i=a(17),s=a(0),o=s(n.a,i.a,!1,null,null,null);e.a=o.exports},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"wizard-tab-container",attrs:{role:"tabpanel",id:t.tabId,"aria-hidden":!t.active,"aria-labelledby":"step-"+t.tabId}},[t._t("default",null,{active:t.active})],2)},i=[],s={render:n,staticRenderFns:i};e.a=s}])}))},"3e35":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("portal",{attrs:{to:"breadcrumb"}},[e("ul",{staticClass:"navbar-nav flex-row"},[e("li",[e("div",{staticClass:"page-header"},[e("nav",{staticClass:"breadcrumb-one",attrs:{"aria-label":"breadcrumb"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("a",{attrs:{href:"javascript:;"}},[t._v("Forms")])]),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e("span",[t._v("Wizards")])])])])])])])]),e("div",{staticClass:"container"},[e("div",{staticClass:"nav sidenav"},[e("scrollactive",{staticClass:"sidenav-content",attrs:{tag:"div","active-class":"active",offset:120,modifyUrl:!1,highlightFirstItem:!0}},[e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#wizards_pills"}},[t._v("Pills")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#wizards_circle"}},[t._v("Circle")]),e("a",{staticClass:"nav-link scrollactive-item",attrs:{href:"#wizards_square"}},[t._v("Square")])])],1),e("div",{staticClass:"row layout-top-spacing"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break"},[e("svg",{staticClass:"feather feather-bell",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("path",{attrs:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}}),e("path",{attrs:{d:"M13.73 21a2 2 0 0 1-3.46 0"}})]),t._v(" Documentation: "),e("a",{staticClass:"text-info",attrs:{target:"_blank",href:"https://www.npmjs.com/package/vue-form-wizard"}},[t._v(" https://www.npmjs.com/package/vue-form-wizard ")])])])]),e("div",{staticClass:"row layout-top-spacing",attrs:{id:"cancel-row"}},[t._m(0),e("div",{staticClass:"col-lg-12 layout-spacing"},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(1),e("div",{staticClass:"panel-body"},[e("form-wizard",{staticClass:"pills text-only",attrs:{shape:"tab",title:"",subtitle:"",color:"#4361ee"}},[e("tab-content",{attrs:{title:"1 Home"}},[e("p",[t._v("Try the keyboard navigation by clicking arrow left or right!")])]),e("tab-content",{attrs:{title:"2 About"}},[e("p",[t._v("Wonderful transition effects.")])]),e("tab-content",{attrs:{title:"3 Success"}},[e("p",[t._v("The next and previous buttons help you to navigate through your content.")])])],1),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code1")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code1")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v('<form-wizard shape="tab" title="" subtitle="" class="pills text-only" color="#4361ee">\n    <tab-content title="1 Home">\n        <p>Try the keyboard navigation by clicking arrow left or right!</p>\n    </tab-content>\n    <tab-content title="2 About">\n        <p>Wonderful transition effects.</p>\n    </tab-content>\n    <tab-content title="3 Success">\n        <p>The next and previous buttons help you to navigate through your content.</p>\n    </tab-content>\n</form-wizard>\n')])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 layout-spacing"},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(2),e("div",{staticClass:"panel-body"},[e("form-wizard",{staticClass:"pills",attrs:{shape:"tab",title:"",subtitle:"",color:"#4361ee"}},[e("tab-content",{attrs:{title:"",icon:"far fa-list-alt"}},[e("p",[t._v("Try the keyboard navigation by clicking arrow left or right!")])]),e("tab-content",{attrs:{title:"",icon:"far fa-user"}},[e("p",[t._v("Wonderful transition effects.")])]),e("tab-content",{attrs:{title:"",icon:"far fa-thumbs-up"}},[e("p",[t._v("The next and previous buttons help you to navigate through your content.")])])],1),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code2")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code2")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v('<form-wizard shape="tab" title="" subtitle="" class="pills" color="#4361ee">\n    <tab-content title="" icon="far fa-list-alt">\n        <p>Try the keyboard navigation by clicking arrow left or right!</p>\n    </tab-content>\n    <tab-content title="" icon="far fa-user">\n        <p>Wonderful transition effects.</p>\n    </tab-content>\n    <tab-content title="" icon="far fa-thumbs-up">\n        <p>The next and previous buttons help you to navigate through your content.</p>\n    </tab-content>\n</form-wizard>\n')])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 layout-spacing"},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(3),e("div",{staticClass:"panel-body"},[e("form-wizard",{staticClass:"pills",attrs:{shape:"tab",title:"",subtitle:"",color:"#4361ee"}},[e("tab-content",{attrs:{title:"Home",icon:"far fa-list-alt"}},[e("p",[t._v("Try the keyboard navigation by clicking arrow left or right!")])]),e("tab-content",{attrs:{title:"About",icon:"far fa-user"}},[e("p",[t._v("Wonderful transition effects.")])]),e("tab-content",{attrs:{title:"Success",icon:"far fa-thumbs-up"}},[e("p",[t._v("The next and previous buttons help you to navigate through your content.")])])],1),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code3")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code3")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v('<form-wizard shape="tab" title="" subtitle="" class="pills" color="#4361ee">\n    <tab-content title="Home" icon="far fa-list-alt">\n        <p>Try the keyboard navigation by clicking arrow left or right!</p>\n    </tab-content>\n    <tab-content title="About" icon="far fa-user">\n        <p>Wonderful transition effects.</p>\n    </tab-content>\n    <tab-content title="Success" icon="far fa-thumbs-up">\n        <p>The next and previous buttons help you to navigate through your content.</p>\n    </tab-content>\n</form-wizard>\n')])])],1):t._e()],1)],1)])]),t._m(4),e("div",{staticClass:"col-lg-12 layout-spacing"},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(5),e("div",{staticClass:"panel-body"},[e("form-wizard",{staticClass:"circle",attrs:{title:"",subtitle:"",color:"#4361ee"}},[e("tab-content",{attrs:{title:"",icon:"far fa-list-alt"}},[e("p",[t._v("Try the keyboard navigation by clicking arrow left or right!")])]),e("tab-content",{attrs:{title:"",icon:"far fa-user"}},[e("p",[t._v("Wonderful transition effects.")])]),e("tab-content",{attrs:{title:"",icon:"far fa-thumbs-up"}},[e("p",[t._v("The next and previous buttons help you to navigate through your content.")])])],1),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code4")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code4")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v('<form-wizard title="" subtitle="" class="circle" color="#4361ee">\n    <tab-content title="" icon="far fa-list-alt">\n        <p>Try the keyboard navigation by clicking arrow left or right!</p>\n    </tab-content>\n    <tab-content title="" icon="far fa-user">\n        <p>Wonderful transition effects.</p>\n    </tab-content>\n    <tab-content title="" icon="far fa-thumbs-up">\n        <p>The next and previous buttons help you to navigate through your content.</p>\n    </tab-content>\n</form-wizard>\n')])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 layout-spacing"},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(6),e("div",{staticClass:"panel-body"},[e("form-wizard",{staticClass:"circle",attrs:{title:"",subtitle:"",color:"#4361ee"}},[e("tab-content",{attrs:{title:"Home",icon:"far fa-list-alt"}},[e("p",[t._v("Try the keyboard navigation by clicking arrow left or right!")])]),e("tab-content",{attrs:{title:"About",icon:"far fa-user"}},[e("p",[t._v("Wonderful transition effects.")])]),e("tab-content",{attrs:{title:"Success",icon:"far fa-thumbs-up"}},[e("p",[t._v("The next and previous buttons help you to navigate through your content.")])])],1),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code5")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code5")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v('<form-wizard title="" subtitle="" class="circle" color="#4361ee">\n    <tab-content title="Home" icon="far fa-list-alt">\n        <p>Try the keyboard navigation by clicking arrow left or right!</p>\n    </tab-content>\n    <tab-content title="About" icon="far fa-user">\n        <p>Wonderful transition effects.</p>\n    </tab-content>\n    <tab-content title="Success" icon="far fa-thumbs-up">\n        <p>The next and previous buttons help you to navigate through your content.</p>\n    </tab-content>\n</form-wizard>\n')])])],1):t._e()],1)],1)])]),t._m(7),e("div",{staticClass:"col-lg-12 layout-spacing"},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(8),e("div",{staticClass:"panel-body"},[e("form-wizard",{staticClass:"square",attrs:{shape:"square",title:"",subtitle:"",color:"#4361ee"}},[e("tab-content",{attrs:{title:"",icon:"far fa-list-alt"}},[e("p",[t._v("Try the keyboard navigation by clicking arrow left or right!")])]),e("tab-content",{attrs:{title:"",icon:"far fa-user"}},[e("p",[t._v("Wonderful transition effects.")])]),e("tab-content",{attrs:{title:"",icon:"far fa-thumbs-up"}},[e("p",[t._v("The next and previous buttons help you to navigate through your content.")])])],1),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code6")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code6")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v('<form-wizard shape="square" title="" subtitle="" class="square" color="#4361ee">\n    <tab-content title="" icon="far fa-list-alt">\n        <p>Try the keyboard navigation by clicking arrow left or right!</p>\n    </tab-content>\n    <tab-content title="" icon="far fa-user">\n        <p>Wonderful transition effects.</p>\n    </tab-content>\n    <tab-content title="" icon="far fa-thumbs-up">\n        <p>The next and previous buttons help you to navigate through your content.</p>\n    </tab-content>\n</form-wizard>\n')])])],1):t._e()],1)],1)])]),e("div",{staticClass:"col-lg-12 layout-spacing"},[e("div",{staticClass:"statbox panel box box-shadow"},[t._m(9),e("div",{staticClass:"panel-body"},[e("form-wizard",{staticClass:"square",attrs:{shape:"square",title:"",subtitle:""}},[e("tab-content",{attrs:{title:"Home",icon:"far fa-list-alt"}},[e("p",[t._v("Try the keyboard navigation by clicking arrow left or right!")])]),e("tab-content",{attrs:{title:"About",icon:"far fa-user"}},[e("p",[t._v("Wonderful transition effects.")])]),e("tab-content",{attrs:{title:"Success",icon:"far fa-thumbs-up"}},[e("p",[t._v("The next and previous buttons help you to navigate through your content.")])])],1),e("div",{staticClass:"code-section-container show-code"},[e("b-button",{staticClass:"toggle-code-snippet",attrs:{variant:"default"},on:{click:function(e){return t.toggleCode("code7")}}},[e("span",[t._v("Code")])]),t.code_arr.includes("code7")?e("div",{staticClass:"code-section text-left"},[e("highlight",[e("pre",[t._v('<form-wizard shape="square" title="" subtitle="" class="square" color="#4361ee">\n    <tab-content title="Home" icon="far fa-list-alt">\n        <p>Try the keyboard navigation by clicking arrow left or right!</p>\n    </tab-content>\n    <tab-content title="About" icon="far fa-user">\n        <p>Wonderful transition effects.</p>\n    </tab-content>\n    <tab-content title="Success" icon="far fa-thumbs-up">\n        <p>The next and previous buttons help you to navigate through your content.</p>\n    </tab-content>\n</form-wizard>\n')])])],1):t._e()],1)],1)])])])])],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-12",attrs:{id:"wizards_pills"}},[e("div",{staticClass:"seperator-header"},[e("h4",{},[t._v("Pills")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Text Only")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Icon Only")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Text & Icon")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-12",attrs:{id:"wizards_circle"}},[e("div",{staticClass:"seperator-header"},[e("h4",{},[t._v("Circle")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Icon Only")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Text & Icon")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-12",attrs:{id:"wizards_square"}},[e("div",{staticClass:"seperator-header"},[e("h4",{},[t._v("Square")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Icon Only")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-12 col-md-12 col-sm-12 col-12"},[e("h4",[t._v("Text & Icon")])])])])}],s=(a("0706"),a("e706")),o=a("2ee4"),r=(a("da93"),a("d9a1"),a("9bd3"),{metaInfo:{title:"Wizards"},components:{highlight:s["a"],FormWizard:o["FormWizard"],TabContent:o["TabContent"]},data(){return{code_arr:[]}},mounted(){},methods:{toggleCode(t){this.code_arr.includes(t)?this.code_arr=this.code_arr.filter(e=>e!=t):this.code_arr.push(t)}}}),c=r,l=(a("a5c0"),a("2877")),u=Object(l["a"])(c,n,i,!1,null,null,null);e["default"]=u.exports},a5c0:function(t,e,a){"use strict";a("16d7")},da93:function(t,e,a){}}]);
//# sourceMappingURL=forms-wizards.9a21da59.js.map