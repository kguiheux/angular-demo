function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _createSuper(e){return function(){var t,n=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var r=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{NFeN:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return N}));var r=n("fXoL"),o=n("FKr1"),i=n("8LU1"),a=n("ofXK"),s=n("vkgz"),c=n("lJxs"),l=n("JIr8"),u=n("nYR2"),f=n("w1tV"),h=n("IzEk"),v=n("tk/3"),g=n("jhN1"),m=n("LRne"),_=n("z6cu"),d=n("cp0P"),p=["*"];function y(e){return Error('Unable to find icon with the name "'.concat(e,'"'))}function b(e){return Error("The URL provided to MatIconRegistry was not trusted as a resource URL "+"via Angular's DomSanitizer. Attempted URL was \"".concat(e,'".'))}function S(e){return Error("The literal provided to MatIconRegistry was not trusted as safe HTML by "+"Angular's DomSanitizer. Attempted literal was \"".concat(e,'".'))}var I=function e(t,n){_classCallCheck(this,e),this.options=n,t.nodeName?this.svgElement=t:this.url=t},C=function(){var e=function(){function e(t,n,r,o){_classCallCheck(this,e),this._httpClient=t,this._sanitizer=n,this._errorHandler=o,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._defaultFontSetClass="material-icons",this._document=r}return _createClass(e,[{key:"addSvgIcon",value:function(e,t,n){return this.addSvgIconInNamespace("",e,t,n)}},{key:"addSvgIconLiteral",value:function(e,t,n){return this.addSvgIconLiteralInNamespace("",e,t,n)}},{key:"addSvgIconInNamespace",value:function(e,t,n,r){return this._addSvgIconConfig(e,t,new I(n,r))}},{key:"addSvgIconLiteralInNamespace",value:function(e,t,n,o){var i=this._sanitizer.sanitize(r.I.HTML,n);if(!i)throw S(n);var a=this._createSvgElementForSingleIcon(i,o);return this._addSvgIconConfig(e,t,new I(a,o))}},{key:"addSvgIconSet",value:function(e,t){return this.addSvgIconSetInNamespace("",e,t)}},{key:"addSvgIconSetLiteral",value:function(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}},{key:"addSvgIconSetInNamespace",value:function(e,t,n){return this._addSvgIconSetConfig(e,new I(t,n))}},{key:"addSvgIconSetLiteralInNamespace",value:function(e,t,n){var o=this._sanitizer.sanitize(r.I.HTML,t);if(!o)throw S(t);var i=this._svgElementFromString(o);return this._addSvgIconSetConfig(e,new I(i,n))}},{key:"registerFontClassAlias",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return this._fontCssClassesByAlias.set(e,t),this}},{key:"classNameForFontAlias",value:function(e){return this._fontCssClassesByAlias.get(e)||e}},{key:"setDefaultFontSetClass",value:function(e){return this._defaultFontSetClass=e,this}},{key:"getDefaultFontSetClass",value:function(){return this._defaultFontSetClass}},{key:"getSvgIconFromUrl",value:function(e){var t=this,n=this._sanitizer.sanitize(r.I.RESOURCE_URL,e);if(!n)throw b(e);var o=this._cachedIconsByUrl.get(n);return o?Object(m.a)(E(o)):this._loadSvgIconFromConfig(new I(e)).pipe(Object(s.a)((function(e){return t._cachedIconsByUrl.set(n,e)})),Object(c.a)((function(e){return E(e)})))}},{key:"getNamedSvgIcon",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=k(t,e),r=this._svgIconConfigs.get(n);if(r)return this._getSvgFromConfig(r);var o=this._iconSetConfigs.get(t);return o?this._getSvgFromIconSetConfigs(e,o):Object(_.a)(y(n))}},{key:"ngOnDestroy",value:function(){this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}},{key:"_getSvgFromConfig",value:function(e){return e.svgElement?Object(m.a)(E(e.svgElement)):this._loadSvgIconFromConfig(e).pipe(Object(s.a)((function(t){return e.svgElement=t})),Object(c.a)((function(e){return E(e)})))}},{key:"_getSvgFromIconSetConfigs",value:function(e,t){var n=this,o=this._extractIconWithNameFromAnySet(e,t);if(o)return Object(m.a)(o);var i=t.filter((function(e){return!e.svgElement})).map((function(e){return n._loadSvgIconSetFromConfig(e).pipe(Object(l.a)((function(t){var o="Loading icon set URL: ".concat(n._sanitizer.sanitize(r.I.RESOURCE_URL,e.url)," failed: ").concat(t.message);return n._errorHandler?n._errorHandler.handleError(new Error(o)):console.error(o),Object(m.a)(null)})))}));return Object(d.a)(i).pipe(Object(c.a)((function(){var r=n._extractIconWithNameFromAnySet(e,t);if(!r)throw y(e);return r})))}},{key:"_extractIconWithNameFromAnySet",value:function(e,t){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.svgElement){var o=this._extractSvgIconFromSet(r.svgElement,e,r.options);if(o)return o}}return null}},{key:"_loadSvgIconFromConfig",value:function(e){var t=this;return this._fetchUrl(e.url).pipe(Object(c.a)((function(n){return t._createSvgElementForSingleIcon(n,e.options)})))}},{key:"_loadSvgIconSetFromConfig",value:function(e){var t=this;return e.svgElement?Object(m.a)(e.svgElement):this._fetchUrl(e.url).pipe(Object(c.a)((function(n){return e.svgElement||(e.svgElement=t._svgElementFromString(n)),e.svgElement})))}},{key:"_createSvgElementForSingleIcon",value:function(e,t){var n=this._svgElementFromString(e);return this._setSvgAttributes(n,t),n}},{key:"_extractSvgIconFromSet",value:function(e,t,n){var r=e.querySelector('[id="'.concat(t,'"]'));if(!r)return null;var o=r.cloneNode(!0);if(o.removeAttribute("id"),"svg"===o.nodeName.toLowerCase())return this._setSvgAttributes(o,n);if("symbol"===o.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(o),n);var i=this._svgElementFromString("<svg></svg>");return i.appendChild(o),this._setSvgAttributes(i,n)}},{key:"_svgElementFromString",value:function(e){var t=this._document.createElement("DIV");t.innerHTML=e;var n=t.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}},{key:"_toSvgElement",value:function(e){for(var t=this._svgElementFromString("<svg></svg>"),n=e.attributes,r=0;r<n.length;r++){var o=n[r],i=o.name,a=o.value;"id"!==i&&t.setAttribute(i,a)}for(var s=0;s<e.childNodes.length;s++)e.childNodes[s].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[s].cloneNode(!0));return t}},{key:"_setSvgAttributes",value:function(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}},{key:"_fetchUrl",value:function(e){var t=this;if(!this._httpClient)throw Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.");if(null==e)throw Error('Cannot fetch icon from URL "'.concat(e,'".'));var n=this._sanitizer.sanitize(r.I.RESOURCE_URL,e);if(!n)throw b(e);var o=this._inProgressUrlFetches.get(n);if(o)return o;var i=this._httpClient.get(n,{responseType:"text"}).pipe(Object(u.a)((function(){return t._inProgressUrlFetches.delete(n)})),Object(f.a)());return this._inProgressUrlFetches.set(n,i),i}},{key:"_addSvgIconConfig",value:function(e,t,n){return this._svgIconConfigs.set(k(e,t),n),this}},{key:"_addSvgIconSetConfig",value:function(e,t){var n=this._iconSetConfigs.get(e);return n?n.push(t):this._iconSetConfigs.set(e,[t]),this}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Xb(v.b,8),r.Xb(g.b),r.Xb(a.e,8),r.Xb(r.m,8))},e.\u0275prov=Object(r.Jb)({factory:function(){return new e(Object(r.Xb)(v.b,8),Object(r.Xb)(g.b),Object(r.Xb)(a.e,8),Object(r.Xb)(r.m,8))},token:e,providedIn:"root"}),e}();function E(e){return e.cloneNode(!0)}function k(e,t){return e+":"+t}var w=Object(o.n)((function e(t){_classCallCheck(this,e),this._elementRef=t})),F=new r.q("mat-icon-location",{providedIn:"root",factory:function(){var e=Object(r.U)(a.e),t=e?e.location:null;return{getPathname:function(){return t?t.pathname+t.search:""}}}}),O=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],R=O.map((function(e){return"[".concat(e,"]")})).join(", "),A=/^url\(['"]?#(.*?)['"]?\)$/,j=function(){var e=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r,o,i,a){var s;return _classCallCheck(this,n),(s=t.call(this,e))._iconRegistry=r,s._location=i,s._errorHandler=a,s._inline=!1,o||e.nativeElement.setAttribute("aria-hidden","true"),s}return _createClass(n,[{key:"_splitIconName",value:function(e){if(!e)return["",""];var t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error('Invalid icon name: "'.concat(e,'"'))}}},{key:"ngOnChanges",value:function(e){var t=this,n=e.svgIcon;if(n)if(this.svgIcon){var r=_slicedToArray(this._splitIconName(this.svgIcon),2),o=r[0],i=r[1];this._iconRegistry.getNamedSvgIcon(i,o).pipe(Object(h.a)(1)).subscribe((function(e){return t._setSvgElement(e)}),(function(e){var n="Error retrieving icon ".concat(o,":").concat(i,"! ").concat(e.message);t._errorHandler?t._errorHandler.handleError(new Error(n)):console.error(n)}))}else n.previousValue&&this._clearSvgElement();this._usingFontIcon()&&this._updateFontIconClasses()}},{key:"ngOnInit",value:function(){this._usingFontIcon()&&this._updateFontIconClasses()}},{key:"ngAfterViewChecked",value:function(){var e=this._elementsWithExternalReferences;if(e&&this._location&&e.size){var t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}},{key:"ngOnDestroy",value:function(){this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}},{key:"_usingFontIcon",value:function(){return!this.svgIcon}},{key:"_setSvgElement",value:function(e){this._clearSvgElement();for(var t=e.querySelectorAll("style"),n=0;n<t.length;n++)t[n].textContent+=" ";if(this._location){var r=this._location.getPathname();this._previousPath=r,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(r)}this._elementRef.nativeElement.appendChild(e)}},{key:"_clearSvgElement",value:function(){var e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){var n=e.childNodes[t];1===n.nodeType&&"svg"!==n.nodeName.toLowerCase()||e.removeChild(n)}}},{key:"_updateFontIconClasses",value:function(){if(this._usingFontIcon()){var e=this._elementRef.nativeElement,t=this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet):this._iconRegistry.getDefaultFontSetClass();t!=this._previousFontSetClass&&(this._previousFontSetClass&&e.classList.remove(this._previousFontSetClass),t&&e.classList.add(t),this._previousFontSetClass=t),this.fontIcon!=this._previousFontIconClass&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}}},{key:"_cleanupFontValue",value:function(e){return"string"==typeof e?e.trim().split(" ")[0]:e}},{key:"_prependPathToReferences",value:function(e){var t=this._elementsWithExternalReferences;t&&t.forEach((function(t,n){t.forEach((function(t){n.setAttribute(t.name,"url('".concat(e,"#").concat(t.value,"')"))}))}))}},{key:"_cacheChildrenWithExternalReferences",value:function(e){for(var t=e.querySelectorAll(R),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map,r=function(e){O.forEach((function(r){var o=t[e],i=o.getAttribute(r),a=i?i.match(A):null;if(a){var s=n.get(o);s||(s=[],n.set(o,s)),s.push({name:r,value:a[1]})}}))},o=0;o<t.length;o++)r(o)}},{key:"inline",get:function(){return this._inline},set:function(e){this._inline=Object(i.b)(e)}},{key:"fontSet",get:function(){return this._fontSet},set:function(e){this._fontSet=this._cleanupFontValue(e)}},{key:"fontIcon",get:function(){return this._fontIcon},set:function(e){this._fontIcon=this._cleanupFontValue(e)}}]),n}(w);return e.\u0275fac=function(t){return new(t||e)(r.Nb(r.l),r.Nb(C),r.Yb("aria-hidden"),r.Nb(F,8),r.Nb(r.m,8))},e.\u0275cmp=r.Hb({type:e,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:4,hostBindings:function(e,t){2&e&&r.Eb("mat-icon-inline",t.inline)("mat-icon-no-color","primary"!==t.color&&"accent"!==t.color&&"warn"!==t.color)},inputs:{color:"color",inline:"inline",fontSet:"fontSet",fontIcon:"fontIcon",svgIcon:"svgIcon"},exportAs:["matIcon"],features:[r.yb,r.zb],ngContentSelectors:p,decls:1,vars:0,template:function(e,t){1&e&&(r.hc(),r.gc(0))},styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],encapsulation:2,changeDetection:0}),e}(),N=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(t){return new(t||e)},imports:[[o.e],o.e]}),e}()}}]);