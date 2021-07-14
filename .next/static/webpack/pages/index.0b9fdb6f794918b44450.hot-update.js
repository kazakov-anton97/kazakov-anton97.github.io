webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(window, factory) {
	var lazySizes = factory(window, window.document, Date);
	window.lazySizes = lazySizes;
	if( true && module.exports){
		module.exports = lazySizes;
	}
}(typeof window != 'undefined' ?
      window : {}, 
/**
 * import("./types/global")
 * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
 */
function l(window, document, Date) { // Pass in the window Date function also for SSR because the Date class can be lost
	'use strict';
	/*jshint eqnull:true */

	var lazysizes,
		/**
		 * @type { LazySizesConfigPartial }
		 */
		lazySizesCfg;

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			fastLoadedClass: 'ls-is-cached',
			iframeLoadMode: 0,
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125,
		};

		lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesCfg)){
				lazySizesCfg[prop] = lazySizesDefaults[prop];
			}
		}
	})();

	if (!document || !document.getElementsByClassName) {
		return {
			init: function () {},
			/**
			 * @type { LazySizesConfigPartial }
			 */
			cfg: lazySizesCfg,
			/**
			 * @type { true }
			 */
			noSupport: true,
		};
	}

	var docElem = document.documentElement;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	/**
	 * Update to bind to window because 'this' becomes null during SSR
	 * builds.
	 */
	var addEventListener = window[_addEventListener].bind(window);

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	/**
	 * @param elem { Element }
	 * @param name { string }
	 * @param detail { any }
	 * @param noBubbles { boolean }
	 * @param noCancelable { boolean }
	 * @returns { CustomEvent }
	 */
	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('Event');

		if(!detail){
			detail = {};
		}

		detail.instance = lazysizes;

		event.initEvent(name, !noBubbles, !noCancelable);

		event.detail = detail;

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesCfg.pf) ) ){
			if(full && full.src && !el[_getAttribute]('srcset')){
				el.setAttribute('srcset', full.src);
			}
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	/**
	 *
	 * @param elem { Element }
	 * @param parent { Element }
	 * @param [width] {number}
	 * @returns {number}
	 */
	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function(){
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while(runFns.length){
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function(fn, queue){
			if(running && !queue){
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = lazySizesCfg.throttleDelay;
		var rICTimeout = lazySizesCfg.ricTimeout;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});

				if(rICTimeout !== lazySizesCfg.ricTimeout){
					rICTimeout = lazySizesCfg.ricTimeout;
				}
			} :
			rAFIt(function(){
				setTimeout(run);
			}, true)
		;

		return function(isPriority){
			var delay;

			if((isPriority = isPriority === true)){
				rICTimeout = 33;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || delay < 9){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	var loader = (function(){
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isVisible = function (elem) {
			if (isBodyHidden == null) {
				isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
			}

			return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = isVisible(elem);

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,
				beforeExpandVal, defaultExpand, preloadExpand, hFac;
			var lazyloadElems = lazysizes.elements;

			if((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if (!defaultExpand) {
						defaultExpand = (!lazySizesCfg.expand || lazySizesCfg.expand < 1) ?
							docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :
							lazySizesCfg.expand;

						lazysizes._defEx = defaultExpand;

						preloadExpand = defaultExpand * lazySizesCfg.expFactor;
						hFac = lazySizesCfg.hFac;
						isBodyHidden = null;

						if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
							currentExpand = preloadExpand;
							lowRuns = 0;
						} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
							currentExpand = defaultExpand;
						} else {
							currentExpand = shrinkExpand;
						}
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						(lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			var elem = e.target;

			if (elem._lazyCache) {
				delete elem._lazyCache;
				return;
			}

			resetPreloading(e);
			addClass(elem, lazySizesCfg.loadedClass);
			removeClass(elem, lazySizesCfg.loadingClass);
			addRemoveLoadEvents(elem, rafSwitchLoadingClass);
			triggerEvent(elem, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			var loadMode = elem.getAttribute('data-load-mode') || lazySizesCfg.iframeLoadMode;

			// loadMode can be also a string!
			if (loadMode == 0) {
				elem.contentWindow.location.replace(src);
			} else if (loadMode == 1) {
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

			if( (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesCfg.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
				src = elem[_getAttribute](lazySizesCfg.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				addClass(elem, lazySizesCfg.loadingClass);

				if(firesLoad){
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(isImg && (srcset || isPicture)){
					updatePolyfill(elem, {src: src});
				}
			}

			if(elem._lazyRace){
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesCfg.lazyClass);

			rAF(function(){
				// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
				var isLoaded = elem.complete && elem.naturalWidth > 1;

				if( !firesLoad || isLoaded){
					if (isLoaded) {
						addClass(elem, lazySizesCfg.fastLoadedClass);
					}
					switchLoadingClass(event);
					elem._lazyCache = true;
					setTimeout(function(){
						if ('_lazyCache' in elem) {
							delete elem._lazyCache;
						}
					}, 9);
				}
				if (elem.loading == 'lazy') {
					isLoading--;
				}
			}, true);
		});

		/**
		 *
		 * @param elem { Element }
		 */
		var unveilElement = function (elem){
			if (elem._lazyRace) {return;}
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var afterScroll = debounce(function(){
			lazySizesCfg.loadMode = 3;
			throttledCheckElements();
		});

		var altLoadmodeScrollListner = function(){
			if(lazySizesCfg.loadMode == 3){
				lazySizesCfg.loadMode = 2;
			}
			afterScroll();
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}


			isCompleted = true;

			lazySizesCfg.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', altLoadmodeScrollListner, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				addEventListener('pageshow', function (e) {
					if (e.persisted) {
						var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

						if (loadingElements.length && loadingElements.forEach) {
							requestAnimationFrame(function () {
								loadingElements.forEach( function (img) {
									if (img.complete) {
										unveilElement(img);
									}
								});
							});
						}
					}
				});

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazysizes.elements.length){
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement,
			_aLSL: altLoadmodeScrollListner,
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		/**
		 *
		 * @param elem {Element}
		 * @param dataAttr
		 * @param [width] { number }
		 */
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i && document.getElementsByClassName){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	setTimeout(function(){
		if(lazySizesCfg.init){
			init();
		}
	});

	lazysizes = {
		/**
		 * @type { LazySizesConfigPartial }
		 */
		cfg: lazySizesCfg,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};

	return lazysizes;
}
));


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_arrow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/arrow */ "./components/arrow.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/lib/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");
/* harmony import */ var _components_clients__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/clients */ "./components/clients.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_18__);







var _jsxFileName = "C:\\Users\\Anton\\Documents\\GitHub\\anton.github.io\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }














var Home = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleResize", function () {
      _this.positionImage();

      _this.setState({
        isMobile: window.innerWidth < _config__WEBPACK_IMPORTED_MODULE_17__["MOBILE_BREAKPOINT"] ? true : false
      });
    });

    _this.state = {
      isMobile: false,
      underlineExpand: false,
      backgroundStyles: {
        top: "0",
        left: "0"
      },
      backgroundReady: false,
      backgroundShow: false,
      loadingLogoReady: false,
      animate: false,
      menuBtnColor: "black"
    };
    _this.backgroundImage = react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef();
    _this.rellaxRef = react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef();
    _this.notPerformedAnimation = true;
    _this.whiteMenuSections = [react__WEBPACK_IMPORTED_MODULE_10___default.a.createRef()];
    return _this;
  } // handleScroll = ()=>{
  //   for(let i=0;i<this.whiteMenuSections.length;i++){
  //     let boundingVals = this.whiteMenuSections[i].current.getBoundingClientRect()
  //     if(boundingVals.top < 0 && (boundingVals.top * -1 < boundingVals.height)){
  //       this.setState({menuBtnColor:"white"})
  //     } else {
  //       this.setState({menuBtnColor:"black"})
  //     }
  //   }
  // }


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "positionImage",
    value: function positionImage(cb) {
      var backgroundStyles = {
        bottom: "0rem",
        left: "-31.5%",
        width: "208%"
      };
      if (window.innerWidth > 400) backgroundStyles = {
        bottom: "0rem",
        left: "-31.5%",
        width: "208%"
      };
      if (window.innerWidth > 650) backgroundStyles = {
        bottom: "0",
        left: "-20.5%",
        width: "120%"
      };
      if (window.innerWidth > 1024) // backgroundStyles = {top:"-1.5rem",left:"-20.5%",width:"120%"}
        // backgroundStyles = { top: "-0.5rem", left: "-7.5%" };
        backgroundStyles = {
          bottom: "0",
          left: "-7.5%"
        };
      if (window.innerWidth > 1366) // backgroundStyles = { top: "-0.5rem", left: "-7.5%" };
        backgroundStyles = {
          bottom: "0",
          left: "-7.5%"
        };
      if (window.innerWidth > 1440) // backgroundStyles = { top: "-1.5rem", left: "-7.5%" };
        backgroundStyles = {
          bottom: "0",
          left: "-7.5%"
        }; // }

      this.setState({
        backgroundStyles: backgroundStyles
      }, function () {
        if (cb) {
          cb();
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.state.backgroundReady && this.state.loadingLogoReady && this.notPerformedAnimation) {
        this.positionImage();
        this.notPerformedAnimation = false;
        this.props.openMenu(false); // this.mouseEvents()

        setTimeout(function () {
          _this2.setState({
            animate: true
          }, function () {// this.props.removeClassFromCursor("larger")  
            // this.props.removeClassFromCursor("white")  
          });
        }, 750);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.setState({
        isMobile: window.innerWidth < _config__WEBPACK_IMPORTED_MODULE_17__["MOBILE_BREAKPOINT"] ? true : false
      });
      window.addEventListener("resize", this.handleResize); // window.addEventListener("scroll", this.handleScroll)

      var loadingLogo = new Image();
      loadingLogo.src = "/images/loading_logo.png";

      loadingLogo.onload = function () {
        _this3.setState({
          loadingLogoReady: true
        });
      };

      var img = new Image();
      img.src = "/images/home-cover.jpg";

      img.onload = function () {
        _this3.setState({
          backgroundReady: true
        });
      };

      this.props.removeClassFromCursor("white");
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize); // window.removeEventListener("scroll", this.handleScroll)
    }
  }, {
    key: "render",
    value: function render() {
      //     for seo purpose
      var schemaData = {
        "@context": "http://schema.org",
        "@type": "service",
        "name": "Opposable Thumbs",
        "url": "https://opposable-thumbs.vercel.app/"
      };
      JSON.stringify(schemaData);
      return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        navPosition: "absolute",
        navTextColor: "black",
        menuBtnColor: this.state.menuBtnColor,
        page: "home",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 9
        }
      }, __jsx("meta", {
        name: "google-site-verification",
        content: "fTp7loBzDTAjXEutiEclfst4c3vt13uktqW_dAFTWoI",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 3
        }
      }), __jsx("meta", {
        name: "keywords",
        content: "brand identity agency, brand identity design agency, corporate identity agency, brand identity, branding design, digital media management,digital media agency, social media agencies,digital media marketing companies",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 3
        }
      }), __jsx("title", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }
      }, "Brand Identity Agency | Opposable Thumbs"), __jsx("meta", {
        name: "description",
        content: "Opposable Thumbs work with companies for their branding. If you have a new brand to launch, we can help you, right from naming it to developing its identity.",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 1
        }
      }), __jsx("link", {
        rel: "icon",
        href: "/favicon.ico",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }
      }), __jsx("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-VTMF70P7HW",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 14
        }
      }), __jsx("script", {
        src: "../lazysizes.min.js",
        async: true,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 14
        }
      }), __jsx("script", {
        dangerouslySetInnerHTML: {
          __html: "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'G-VTMF70P7HW');\n          "
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(schemaData)
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 1
        }
      })), this.state.loadingLogoReady && __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "".concat(this.state.animate ? "animate" : ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }
      }, __jsx("div", {
        style: {
          height: "".concat(this.props.common.windowHeight, "px")
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "loading-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "/images/loading_logo.png",
        alt: "homecover",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 19
        }
      }))), __jsx("div", {
        style: {
          height: "".concat(this.props.common.windowHeight, "px")
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "top-section-wrapper black-cursor ".concat(this.state.animate ? "animate" : ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }
      }, __jsx("img", {
        style: this.state.backgroundStyles,
        src: "/images/home-cover.jpg",
        ref: this.backgroundImage,
        alt: "homecover",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "background",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "top-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "storytellers futura-light",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "overflow-hidden",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "child",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 27
        }
      }, "MEET THE STORYTELLERS"))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "hello helvetica-neue-condensed",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "overflow-hidden",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "child",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 27
        }
      }, "Hello")), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "full-service big-caslon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "overflow-hidden",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 27
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "child",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 31
        }
      }, "Independent", __jsx("br", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 45
        }
      }), "Agency")))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "home-down-arrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 25
        }
      }, " ")), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "overflow-hidden looking-for",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "child",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "bottom-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 27
        }
      }, __jsx("h1", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 56
        }
      }, "Brand Identity Agency")))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "white-fade",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-categories text-center padded-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 13
        }
      }, "Insights / Brand Identity / Packaging / Advertising / Digital / Graphics / Films"), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-items",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "row no-gutters",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 17
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/BigBanyan.jpg",
        bgImageAlt: "big banyan",
        strength: 200,
        className: "portfolio-item ".concat(this.state.isMobile ? "white-menu-btn" : ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/big-banyan",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 35
        }
      }, "Big Banyan ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 88
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 118
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 35
        }
      }, "An Italian winemaker. A passionate brand team. And us. Years of t\xEAte-\xE0-t\xEAtes and research-driven insights led us to recreate the packaging and communication strategy for Big Banyan. "))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/langoor.jpg",
        bgImageAlt: "langoor",
        strength: 200,
        className: "portfolio-item ".concat(this.state.isMobile ? "white-menu-btn" : ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/langoor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 35
        }
      }, "L'angoor ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 86
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 116
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 35
        }
      }, "Wine can be elegant. Wine can be sophisticated. But wine and fun? Here\u2019s how we married \u2018fun\u2019 and a new brand of wines from Big Banyan, known for its premium wines."))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/Enchanteur.jpg",
        bgImageAlt: "enchanteur",
        strength: 200,
        className: "portfolio-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/enchanteur",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 35
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 37
        }
      }, "Enchanteur ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 90
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 120
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 37
        }
      }, "It\u2019s French, it\u2019s romantic and it\u2019s so very floral. How can we not fall in love with Enchanteur? We have K-drama fans on our team who absolutely love this brand!"))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/fynd.jpg",
        bgImageAlt: "langoor",
        strength: 200,
        className: "portfolio-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/fynd",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 35
        }
      }, "FYND ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 82
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 112
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 35
        }
      }, "Seeded in the idea of self-expression, FYND inspired us with its functional clothing lines. From strategy to identity and brand architecture design, we helped bring this brand to life. "))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/Chandrika3.jpg",
        bgImageAlt: "langoor",
        strength: 200,
        className: "portfolio-item ".concat(this.state.isMobile ? "white-menu-btn" : ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 23
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/chandrika",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 35
        }
      }, "Chandrika ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 87
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 117
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 35
        }
      }, "Here\u2019s a brand we all grew up with. And yet, it managed to surprise us with its secrets. We shared these little nuggets with the world in our campaign."))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/Santoor.jpg",
        bgImageAlt: "langoor",
        strength: 200,
        className: "portfolio-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/santoor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 35
        }
      }, "Santoor ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 85
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 115
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 35
        }
      }, "Who doesn\u2019t remember the classic \u201Cmummy\u201D ads! It gives us great pride to work on campaigns for a brand that\u2019s as relevant today as it was a few decades ago."))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/VoiJeans.png",
        bgImageAlt: "langoor",
        strength: 200,
        className: "portfolio-item ".concat(this.state.isMobile ? "white-menu-btn" : ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/voi-jeans",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 35
        }
      }, "VOI Jeans ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 87
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 117
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 35
        }
      }, "The very idea of these denims inspired us! VOI has ergonomically engineered denims that called for edgy, fashion forward communication. And we reveled in it."))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/Iceburg1.jpg",
        bgImageAlt: "langoor",
        strength: 200,
        className: "portfolio-item ".concat(this.state.isMobile ? "white-menu-btn" : ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 23
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/iceburg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 35
        }
      }, "IceBurg ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 85
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 115
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 35
        }
      }, "Intense cravings for burgers and shakes fed our brains as we worked on the brand idea and identity for this UK-based gourmet burger chain."))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 odd mia-by-tanishq larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/Mia1.jpg",
        bgImageAlt: "langoor",
        strength: 200,
        className: "portfolio-item ".concat(this.state.isMobile ? "white-menu-btn" : ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects/mia-by-tanishq",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 27
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 35
        }
      }, "Mia - Tanishq ", __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "arrow-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 91
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 121
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 35
        }
      }, "These films are a collection of stories of Indian women who inspire you with their resilience, charm you with their presence and awe you with their achievements."))))))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "col-md-6 even larger-cursor white-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 19
        }
      }, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_13__["Parallax"], {
        bgImage: "/images/portfolio/Graphics1.jpg",
        bgImageAlt: "graphics",
        strength: 200,
        className: "portfolio-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info-wrapper format1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "p-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 33
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-title neufreit",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 35
        }
      }, "Graphics"), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "portfolio-description",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 35
        }
      }, "A digital art project that led us to create edgy, modern graphics for clothing and merchandise."))))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: "/projects",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "no-css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "explore-more text-center padded-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "browse",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 21
        }
      }, "browse"), __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "explore-arrow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 23
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 25
        }
      })))))), __jsx("div", {
        ref: this.whiteMenuSections[0],
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "services position-relative padded-content white-cursor white-cursor white-menu-btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "service-heading more-letter-spacing futura-light slightly-larger-text yellow-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 15
        }
      }, "SERVICES"), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "service-lists",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 15
        }
      }, __jsx("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "service-items list-style-none white-text larger-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 17
        }
      }, __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: {
          pathname: '/projects',
          query: {
            filter: 'insights'
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 23
        }
      }, "Insights"))), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: {
          pathname: '/projects',
          query: {
            filter: 'brand-identity'
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 25
        }
      }, "Brand Identity"))), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: {
          pathname: '/projects',
          query: {
            filter: 'packaging'
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 25
        }
      }, "Packaging"))), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: {
          pathname: '/projects',
          query: {
            filter: 'advertising'
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 25
        }
      }, "Advertising"))), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: {
          pathname: '/projects',
          query: {
            filter: 'digital'
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400,
          columnNumber: 25
        }
      }, "Digital"))), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: {
          pathname: '/projects',
          query: {
            filter: 'digital'
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 25
        }
      }, "Graphics"))), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "poppins-regular",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 19
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
        href: {
          pathname: '/projects',
          query: {
            filter: 'films'
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "larger-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414,
          columnNumber: 25
        }
      }, "Films")))), __jsx("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "skills list-style-none slightly-larger-text futura-light yellow-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 17
        }
      }, __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 19
        }
      }, "CREATIVE"), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422,
          columnNumber: 19
        }
      }, "INSIGHT-DRIVEN"), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423,
          columnNumber: 19
        }
      }, "CULTURALLY RELEVANT"))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "service-image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: "/images/services-bg-2.png",
        alt: "homecover",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "width-100",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 17
        }
      })), __jsx("div", {
        style: {
          marginTop: "7.2rem"
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "show-mobile hide-desktop text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 15
        }
      }, __jsx(_components_arrow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        direction: "down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 17
        }
      }))), __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "position-relative",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433,
          columnNumber: 11
        }
      }, __jsx(_components_clients__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434,
          columnNumber: 13
        }
      }), __jsx("img", {
        "data-src": "/images/wave-black.gif",
        alt: "homecover",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "width-100 wave lazyload",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 13
        }
      }))), !this.state.loadingLogoReady && __jsx("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2863980262", [this.props.common.windowHeight + 100]]]) + " " + "black-bg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440,
          columnNumber: 11
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2863980262",
        dynamic: [this.props.common.windowHeight + 100],
        __self: this
      }, ".white-fade.__jsx-style-dynamic-selector{position:absolute;bottom:0;height:10rem;width:50%;background:-moz-linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,1));background:-webkit-linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,1));background:linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,1));background:linear-gradient(to bottom,rgba(255,255,255,0),white);}.arrow-right.__jsx-style-dynamic-selector{-webkit-transition:-webkit-transform 400ms cubic-bezier(0.77,0,0.175,1);-webkit-transition:transform 400ms cubic-bezier(0.77,0,0.175,1);transition:transform 400ms cubic-bezier(0.77,0,0.175,1);display:inline-block;}.p-info-wrapper.__jsx-style-dynamic-selector:hover .arrow-right.__jsx-style-dynamic-selector,.portfolio-item.__jsx-style-dynamic-selector:hover .arrow-right.__jsx-style-dynamic-selector{-webkit-transform:translateX(1rem);-ms-transform:translateX(1rem);transform:translateX(1rem);}.wave.__jsx-style-dynamic-selector{width:100%;position:absolute;bottom:0;left:0;}.service-items.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#ffffff;}.service-items.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:none;text-decoration:none;color:#F9ED32;}.service-items.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector:hover{font-family:PoppinsMediumItalic,sans-serif !important;}.p-info-wrapper.__jsx-style-dynamic-selector{position:relative;}.format1.__jsx-style-dynamic-selector .p-info.__jsx-style-dynamic-selector{position:absolute;bottom:0;color:#ffffff;bottom:7rem;padding:0 5%;}.animate.__jsx-style-dynamic-selector .hello.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:0.4s;transition-delay:0.4s;}.animate.__jsx-style-dynamic-selector .storytellers.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:0.6s;transition-delay:0.6s;}.animate.__jsx-style-dynamic-selector .full-service.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:0.8s;transition-delay:0.8s;}.animate.__jsx-style-dynamic-selector .looking-for.__jsx-style-dynamic-selector .child.__jsx-style-dynamic-selector{-webkit-transition-delay:1s;transition-delay:1s;}.explore-more.__jsx-style-dynamic-selector{font-size:4.6rem;margin-top:8rem;}.service-lists.__jsx-style-dynamic-selector{margin-left:14rem;}.service-items.__jsx-style-dynamic-selector{padding-left:6.5rem;margin-top:5rem;line-height:1.2;border-left:1px solid #ffffff;}.skills.__jsx-style-dynamic-selector{margin-top:6rem;padding-left:6.5rem;}.service-image.__jsx-style-dynamic-selector{position:absolute;right:-5%;top:-1%;width:47%;}.services.__jsx-style-dynamic-selector{background:#000000;padding-top:8.8rem;padding-bottom:25rem;overflow:hidden;}.portfolio.__jsx-style-dynamic-selector{background:#ffffff;padding-top:8rem;padding-bottom:8rem;position:relative;}.portfolio-items.__jsx-style-dynamic-selector{margin-top:17rem;padding-left:15%;padding-right:15%;}.portfolio-items.__jsx-style-dynamic-selector .row.__jsx-style-dynamic-selector .even.__jsx-style-dynamic-selector{margin-top:-8rem;}.portfolio-title.__jsx-style-dynamic-selector{font-size:4.6rem;}.portfolio-item.format2.__jsx-style-dynamic-selector .image-wrapper.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;}.portfolio-description.__jsx-style-dynamic-selector{width:80%;}.even.__jsx-style-dynamic-selector .format2.__jsx-style-dynamic-selector .portfolio-info.__jsx-style-dynamic-selector{margin-bottom:12rem;}.format2.__jsx-style-dynamic-selector .portfolio-info.__jsx-style-dynamic-selector{margin-top:3rem;padding:0 5%;}.format1.__jsx-style-dynamic-selector .portfolio-info.__jsx-style-dynamic-selector{position:absolute;bottom:0;color:#ffffff;bottom:8rem;padding:0 5%;}.format1.__jsx-style-dynamic-selector{padding-top:125%;background-attachment:fixed;background-size:50%;background-repeat:no-repeat;}.even.__jsx-style-dynamic-selector .format1.__jsx-style-dynamic-selector{background-position:calc(100%) 0px;}.portfolio-categories.__jsx-style-dynamic-selector{font-size:1.8rem;}.bottom-text.__jsx-style-dynamic-selector{margin-top:4.5rem;font-size:1.8rem;}.home-down-arrow.__jsx-style-dynamic-selector{margin-top:4rem;opacity:0;-webkit-animation-name:floating-__jsx-style-dynamic-selector;animation-name:floating-__jsx-style-dynamic-selector;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-transition:opacity 1s;transition:opacity 1s;-webkit-transition-delay:1.4s;transition-delay:1.4s;}.animate.__jsx-style-dynamic-selector .home-down-arrow.__jsx-style-dynamic-selector{opacity:1;}@-webkit-keyframes floating-__jsx-style-dynamic-selector{from{-webkit-transform:translate(0,0px);-ms-transform:translate(0,0px);transform:translate(0,0px);}65%{-webkit-transform:translate(0,15px);-ms-transform:translate(0,15px);transform:translate(0,15px);}to{-webkit-transform:translate(0,-0px);-ms-transform:translate(0,-0px);transform:translate(0,-0px);}}@keyframes floating-__jsx-style-dynamic-selector{from{-webkit-transform:translate(0,0px);-ms-transform:translate(0,0px);transform:translate(0,0px);}65%{-webkit-transform:translate(0,15px);-ms-transform:translate(0,15px);transform:translate(0,15px);}to{-webkit-transform:translate(0,-0px);-ms-transform:translate(0,-0px);transform:translate(0,-0px);}}.storytellers.__jsx-style-dynamic-selector{-webkit-letter-spacing:1.7rem;-moz-letter-spacing:1.7rem;-ms-letter-spacing:1.7rem;letter-spacing:1.7rem;font-size:1.2rem;margin-top:15rem;}.animate.__jsx-style-dynamic-selector .loading-wrapper.__jsx-style-dynamic-selector{-webkit-transform:translateY(-".concat(this.props.common.windowHeight + 100, "px);-ms-transform:translateY(-").concat(this.props.common.windowHeight + 100, "px);transform:translateY(-").concat(this.props.common.windowHeight + 100, "px);}.loading-wrapper.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}.loading-wrapper.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:1000;background:#000000;-webkit-transition:-webkit-transform 0.6s cubic-bezier(0.77,0,0.175,1);-webkit-transition:transform 0.6s cubic-bezier(0.77,0,0.175,1);transition:transform 0.6s cubic-bezier(0.77,0,0.175,1);}.black-bg.__jsx-style-dynamic-selector{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:999;background:#000000;}.loading-wrapper.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:200px;position:absolute;left:calc(50% - 100px);top:calc(50% - 56px);}.top-section-wrapper.__jsx-style-dynamic-selector{max-width:100%;width:100%;height:100vh;margin:auto;overflow:hidden;position:relative;background:#ffffff;}.top-content.__jsx-style-dynamic-selector{position:relative;z-index:2;text-align:center;height:100%;overflow:hidden;}.text.__jsx-style-dynamic-selector{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;padding-bottom:5rem;}.hello.__jsx-style-dynamic-selector{color:#ffff20;font-size:36rem;position:relative;line-height:0.8;}.full-service.__jsx-style-dynamic-selector{color:#414042;font-size:7rem;position:absolute;left:0;right:0;margin:auto;top:3rem;line-height:1.15;}.background.__jsx-style-dynamic-selector{position:absolute;width:100%;opacity:0;-webkit-transition:opacity 1.5s;transition:opacity 1.5s;-webkit-transition-delay:1.2s;transition-delay:1.2s;}.animate.__jsx-style-dynamic-selector .background.__jsx-style-dynamic-selector{opacity:1;}.contact.__jsx-style-dynamic-selector{position:absolute;bottom:3.5rem;right:3.5rem;z-index:3;font-size:1.4rem;}.contact.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:#212529;}.contact.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{color:#212529;-webkit-text-decoration:none;text-decoration:none;}.underline.__jsx-style-dynamic-selector{position:absolute;display:inline-block;left:0;width:0;height:0.1rem;background:#000000;bottom:-1rem;-webkit-transition:all 0.3s cubic-bezier(0.785,0.135,0.15,0.86);transition:all 0.3s cubic-bezier(0.785,0.135,0.15,0.86);}.contact.__jsx-style-dynamic-selector:hover .underline.__jsx-style-dynamic-selector,.underline.expand.__jsx-style-dynamic-selector{width:6rem;}.browse.__jsx-style-dynamic-selector{margin-bottom:-1rem;}@media only screen and (max-width:768px){.text.__jsx-style-dynamic-selector{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:40%;}.hello.__jsx-style-dynamic-selector{font-size:16rem;}.full-service.__jsx-style-dynamic-selector{font-size:3.5rem;}.storytellers.__jsx-style-dynamic-selector{font-size:1.1rem;margin-top:0;}.bottom-text.__jsx-style-dynamic-selector{margin-top:7rem;}.portfolio-items.__jsx-style-dynamic-selector{margin-top:3rem;padding-left:0;padding-right:0;}.portfolio-items.__jsx-style-dynamic-selector .row.__jsx-style-dynamic-selector .even.__jsx-style-dynamic-selector{margin-top:0;}.mia-by-tanishq.__jsx-style-dynamic-selector{margin-top:-5rem;}.service-lists.__jsx-style-dynamic-selector{margin-left:0rem;position:relative;z-index:10;}.service-heading.__jsx-style-dynamic-selector{text-align:center;}.service-items.__jsx-style-dynamic-selector{padding-left:0;border-left:none;text-align:center;}.skills.__jsx-style-dynamic-selector{padding-left:0;text-align:center;}.service-image.__jsx-style-dynamic-selector{display:none;}.services.__jsx-style-dynamic-selector{padding-bottom:8.8rem;}.white-fade.__jsx-style-dynamic-selector{height:3rem;}.full-service.__jsx-style-dynamic-selector{top:0;}.storytellers.__jsx-style-dynamic-selector{margin-bottom:2rem;}.portfolio.__jsx-style-dynamic-selector{padding-bottom:4rem;}.explore-more.__jsx-style-dynamic-selector{margin-top:4rem;}.explore-arrow.__jsx-style-dynamic-selector{display:inline-block;margin-left:1rem;}.browse.__jsx-style-dynamic-selector{margin-bottom:-2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25cXERvY3VtZW50c1xcR2l0SHViXFxhbnRvbi5naXRodWIuaW9cXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Ym9CLEFBR2lDLEFBVXlDLEFBSzlELEFBRWMsQUFPRSxBQUdPLEFBSWtDLEFBR3JDLEFBR0MsQUFPSSxBQUdBLEFBR0EsQUFHRixBQUdKLEFBSUUsQUFHRSxBQU1KLEFBSUUsQUFNQSxBQU1BLEFBTUEsQUFLRixBQUdFLEFBR1IsQUFHQSxBQUdTLEFBR0osQUFJSyxBQU9ELEFBTWtCLEFBR25CLEFBR0UsQUFJSCxBQVVSLEFBRzBCLEFBQ0EsQUFDQSxBQUdYLEFBS2dDLEFBR2hDLEFBR1AsQUFVRixBQVNELEFBTUcsQUFTRyxBQU9OLEFBUUUsQUFNQSxBQVVJLEFBT1IsQUFHUSxBQU9KLEFBR0EsQUFJSSxBQVdQLEFBR00sQUFJUSxBQUlWLEFBR0UsQUFHRCxBQUlBLEFBR0EsQUFLSixBQUdJLEFBR0MsQUFLQSxBQUdILEFBS0EsQUFTRixBQUdTLEFBR1IsQUFHUixBQUdjLEFBR0EsQUFHSixBQUdLLEFBSUQsTUFmckIsSUFwT0YsQUEyQ0EsQUEyRkEsQ0E5Tm9CLEFBcUZwQixBQXFLQSxDQWpGc0IsQUFzQkwsQUEwSGYsQ0FsQ0EsQUE0QkEsQ0E1U0YsQUFnTW9CLEFBTUQsQUEyQm5CLEFBR3lCLENBckZmLEFBVUYsQUFlTyxBQXNISyxBQUtDLENBdFBDLEFBMENSLEFBMkJELEFBNElYLEFBVUEsQUFHZ0IsQUFtRGhCLENBOVJlLEFBbUNHLEFBS3BCLEFBR0EsQUF1QmdDLEFBU2hDLEFBc0pFLEFBR2MsQUFlZCxBQUdvQixDQTlTWCxBQWtDWCxBQUdXLEFBdUJYLEFBYVksQUEwQ0MsQUFtQk8sQUFtRU4sQUErQkMsQUFVRyxBQWNPLEFBbUR2QixDQXBPa0IsQUFNRixBQTJQaEIsQ0FqUmdCLEFBNkNsQixBQWtLQSxBQXFFRSxBQVVBLENBckxTLEFBVUYsQUF1S1csQ0FsQmxCLElBNUwwQixBQXNEWCxDQWhNRixBQXFDQyxBQThFRSxDQTFDUixBQStGSyxBQVVGLEFBdUJTLENBdkxaLEFBNkZWLEFBK0dzQixBQVVSLENBOUNhLEFBOEJMLEFBb0VwQixDQU9pQixDQWpERixBQW9FSSxDQTlQckIsQUFtUUUsQ0FoT21CLENBb0NyQixBQU9BLEFBd0tlLENBL09HLEFBTWxCLEFBS1ksQUFXVSxFQWxFYixBQTREYSxBQTBRcEIsQ0FoTGUsQUFVRixBQWNDLEFBd0NZLEFBdUJqQixDQS9QQyxDQXFDRSxBQThFRSxJQWhHaEIsQUFzR3dCLEFBeUhWLENBeEtkLEFBK0hnQixBQXVESixBQThDVixDQWhGUyxBQXFFVCxDQWhQRixBQXFLbUIsRUF2TndFLEFBd0I1RSxBQTZSYixDQXJIa0IsQ0F2SnBCLEFBR0EsQUFHQSxBQWVnQyxBQTRCaEMsQUE4RWlCLEFBVUgsQ0E3SUMsQUE4RUUsQUFzRVEsQ0E3SnpCLEFBa01ZLEFBa0NNLENBZEcsQ0E5SkYsRUFxSEMsQ0EzSEgsR0FpSkQsRUF0TWhCLEFBMEpxQixBQXFDckIsQUFrQ0EsQ0FqSWdDLEFBZ0RULENBbkl2QixBQThFQSxDQTZFc0IsQ0FnRUMsSUFkdkIsRUE5SkEsQUFxR0EsQUFnQkEsQUFzQmEsQ0FqSmIsT0FoQkEsQ0FxSEEsQUE2Q3FCLENBaEVyQixBQVM4RCxDQXdCdkMsQ0FZRyxDQW9EVCxNQXZQakIsQUErR0EsQUF5QnNDLEVBcUZaLENBcEZZLEFBQ0EsQ0EwSGYsR0E3Q3ZCLEFBaUMrRCxJQWhFL0QsQ0ExQ3FCLFdBdUhuQixNQXRIbUIsV0F6SnlFLE1BMEo5RixDQWxCMEIsT0FnRzFCLGlCQTFCMEIsVUFqRDFCLGtCQXZKc0IsQUFtSWlCLHFCQWxJdkMsTUFOc0YsQ0FrUXRGLDJDQXBEc0IsT0FyRW9CLEdBZ0MxQyxRQXNDd0IsZ0JBOU0rQyxJQStNdkUscURBdEUwQixPQXhJMUIsNkNBeUl5QixvREFDekIiLCJmaWxlIjoiQzpcXFVzZXJzXFxBbnRvblxcRG9jdW1lbnRzXFxHaXRIdWJcXGFudG9uLmdpdGh1Yi5pb1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIlxuaW1wb3J0IEFycm93IGZyb20gXCIuLi9jb21wb25lbnRzL2Fycm93XCJcbmltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtvcGVuTWVudX0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcbmltcG9ydCBDbGllbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvY2xpZW50cydcbmltcG9ydCB7YWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3J9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnXG5pbXBvcnQgeyBNT0JJTEVfQlJFQUtQT0lOVCB9IGZyb20gXCIuLi9jb25maWdcIlxuaW1wb3J0IHtsYXp5c2l6ZXN9IGZyb20gXCJsYXp5c2l6ZXNcIlxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc01vYmlsZTpmYWxzZSxcbiAgICAgIHVuZGVybGluZUV4cGFuZDogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kU3R5bGVzOiB7IHRvcDogXCIwXCIsIGxlZnQ6IFwiMFwiIH0sXG4gICAgICBiYWNrZ3JvdW5kUmVhZHk6IGZhbHNlLFxuICAgICAgYmFja2dyb3VuZFNob3c6IGZhbHNlLFxuICAgICAgbG9hZGluZ0xvZ29SZWFkeTogZmFsc2UsXG4gICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgIG1lbnVCdG5Db2xvcjpcImJsYWNrXCJcbiAgICB9O1xuICAgIHRoaXMuYmFja2dyb3VuZEltYWdlID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICB0aGlzLnJlbGxheFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5ub3RQZXJmb3JtZWRBbmltYXRpb24gPSB0cnVlXG4gICAgdGhpcy53aGl0ZU1lbnVTZWN0aW9ucyA9IFtSZWFjdC5jcmVhdGVSZWYoKV1cbiAgfVxuICAvLyBoYW5kbGVTY3JvbGwgPSAoKT0+e1xuICAvLyAgIGZvcihsZXQgaT0wO2k8dGhpcy53aGl0ZU1lbnVTZWN0aW9ucy5sZW5ndGg7aSsrKXtcbiAgLy8gICAgIGxldCBib3VuZGluZ1ZhbHMgPSB0aGlzLndoaXRlTWVudVNlY3Rpb25zW2ldLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgLy8gICAgIGlmKGJvdW5kaW5nVmFscy50b3AgPCAwICYmIChib3VuZGluZ1ZhbHMudG9wICogLTEgPCBib3VuZGluZ1ZhbHMuaGVpZ2h0KSl7XG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe21lbnVCdG5Db2xvcjpcIndoaXRlXCJ9KVxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudUJ0bkNvbG9yOlwiYmxhY2tcIn0pXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICB0aGlzLnBvc2l0aW9uSW1hZ2UoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtpc01vYmlsZTp3aW5kb3cuaW5uZXJXaWR0aCA8IE1PQklMRV9CUkVBS1BPSU5UP3RydWU6ZmFsc2V9KVxuICB9XG4gIHBvc2l0aW9uSW1hZ2UoY2IpIHtcbiAgICBsZXQgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjByZW1cIiwgbGVmdDogXCItMzEuNSVcIiwgd2lkdGg6IFwiMjA4JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNDAwKVxuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjByZW1cIiwgbGVmdDogXCItMzEuNSVcIiwgd2lkdGg6IFwiMjA4JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjUwKVxuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItMjAuNSVcIiwgd2lkdGg6IFwiMTIwJVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyNClcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7dG9wOlwiLTEuNXJlbVwiLGxlZnQ6XCItMjAuNSVcIix3aWR0aDpcIjEyMCVcIn1cbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMC41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTM2NilcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMC41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTQ0MClcbiAgICAgIC8vIGJhY2tncm91bmRTdHlsZXMgPSB7IHRvcDogXCItMS41cmVtXCIsIGxlZnQ6IFwiLTcuNSVcIiB9O1xuICAgICAgYmFja2dyb3VuZFN0eWxlcyA9IHsgYm90dG9tOiBcIjBcIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgLy8gfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBiYWNrZ3JvdW5kU3R5bGVzIH0sICgpID0+IHtcbiAgICAgIGlmIChjYikge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuc3RhdGUuYmFja2dyb3VuZFJlYWR5ICYmXG4gICAgICB0aGlzLnN0YXRlLmxvYWRpbmdMb2dvUmVhZHkgJiZcbiAgICAgIHRoaXMubm90UGVyZm9ybWVkQW5pbWF0aW9uXG4gICAgKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uSW1hZ2UoKTtcbiAgICAgIHRoaXMubm90UGVyZm9ybWVkQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICB0aGlzLnByb3BzLm9wZW5NZW51KGZhbHNlKTtcbiAgICAgIC8vIHRoaXMubW91c2VFdmVudHMoKVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbmltYXRlOiB0cnVlIH0sKCk9PntcbiAgICAgICAgICAvLyB0aGlzLnByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcImxhcmdlclwiKSAgXG4gICAgICAgICAgLy8gdGhpcy5wcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJ3aGl0ZVwiKSAgXG4gICAgICAgIH0pO1xuICAgICAgfSwgNzUwKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNNb2JpbGU6d2luZG93LmlubmVyV2lkdGggPCBNT0JJTEVfQlJFQUtQT0lOVD90cnVlOmZhbHNlfSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVJlc2l6ZSlcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbClcbiAgICBjb25zdCBsb2FkaW5nTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvYWRpbmdMb2dvLnNyYyA9IFwiL2ltYWdlcy9sb2FkaW5nX2xvZ28ucG5nXCI7XG4gICAgbG9hZGluZ0xvZ28ub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdMb2dvUmVhZHk6IHRydWUgfSk7XG4gICAgfTtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gXCIvaW1hZ2VzL2hvbWUtY292ZXIuanBnXCI7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBiYWNrZ3JvdW5kUmVhZHk6IHRydWUgfSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwid2hpdGVcIilcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlUmVzaXplKVxuICAgIC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlU2Nyb2xsKVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICBcbi8vICAgICBmb3Igc2VvIHB1cnBvc2VcbiAgICAgIGNvbnN0IHNjaGVtYURhdGE9e1xuXG4gICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cDovL3NjaGVtYS5vcmdcIixcbiAgICAgIFwiQHR5cGVcIjogXCJzZXJ2aWNlXCIsXG4gICAgICBcIm5hbWVcIjogXCJPcHBvc2FibGUgVGh1bWJzXCIsXG4gICAgICBcInVybFwiOiBcImh0dHBzOi8vb3Bwb3NhYmxlLXRodW1icy52ZXJjZWwuYXBwL1wiXG4gICB9XG5cbiAgIEpTT04uc3RyaW5naWZ5KHNjaGVtYURhdGEpXG4gICAgXG4gICAgXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgbmF2UG9zaXRpb249XCJhYnNvbHV0ZVwiIG5hdlRleHRDb2xvcj1cImJsYWNrXCIgbWVudUJ0bkNvbG9yPXt0aGlzLnN0YXRlLm1lbnVCdG5Db2xvcn0gcGFnZT1cImhvbWVcIj5cbiAgICAgICAgPEhlYWQ+XG4gIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwiZlRwN2xvQnpEVEFqWEV1dGlFY2xmc3Q0YzN2dDEzdWt0cVdfZEFGVFdvSVwiIC8+XG4gIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJicmFuZCBpZGVudGl0eSBhZ2VuY3ksIGJyYW5kIGlkZW50aXR5IGRlc2lnbiBhZ2VuY3ksIGNvcnBvcmF0ZSBpZGVudGl0eSBhZ2VuY3ksIGJyYW5kIGlkZW50aXR5LCBicmFuZGluZyBkZXNpZ24sIGRpZ2l0YWwgbWVkaWEgbWFuYWdlbWVudCxkaWdpdGFsIG1lZGlhIGFnZW5jeSwgc29jaWFsIG1lZGlhIGFnZW5jaWVzLGRpZ2l0YWwgbWVkaWEgbWFya2V0aW5nIGNvbXBhbmllc1wiLz5cbiAgICAgICAgICA8dGl0bGU+QnJhbmQgSWRlbnRpdHkgQWdlbmN5IHwgT3Bwb3NhYmxlIFRodW1iczwvdGl0bGU+XG4gICAgICAgICAgey8qIDxoMT5PcHBvc2FibGUgVGh1bWJzPC9oMT4gKi99XG48bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiT3Bwb3NhYmxlIFRodW1icyB3b3JrIHdpdGggY29tcGFuaWVzIGZvciB0aGVpciBicmFuZGluZy4gSWYgeW91IGhhdmUgYSBuZXcgYnJhbmQgdG8gbGF1bmNoLCB3ZSBjYW4gaGVscCB5b3UsIHJpZ2h0IGZyb20gbmFtaW5nIGl0IHRvIGRldmVsb3BpbmcgaXRzIGlkZW50aXR5LlwiLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry1WVE1GNzBQN0hXXCI+PC9zY3JpcHQ+XG4gICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9sYXp5c2l6ZXMubWluLmpzXCIgYXN5bmM+PC9zY3JpcHQ+XG4gICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnRy1WVE1GNzBQN0hXJyk7XG4gICAgICAgICAgYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz4gXG5cbiB7Lyogc2NoZW1hIGlzIGltcGxlbWVudGVkICovfVxuPHNjcmlwdFxuICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCJcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KHNjaGVtYURhdGEpIH19XG4gIC8+XG4gICAgICAgICAgICAgICAgICBcbjwvSGVhZD5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZ0xvZ29SZWFkeSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUuYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy13cmFwcGVyXCIgc3R5bGU9e3toZWlnaHQ6YCR7dGhpcy5wcm9wcy5jb21tb24ud2luZG93SGVpZ2h0fXB4YH19PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvYWRpbmdfbG9nby5wbmdcIiBhbHQ9J2hvbWVjb3ZlcicgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9wLXNlY3Rpb24td3JhcHBlciBibGFjay1jdXJzb3IgJHt0aGlzLnN0YXRlLmFuaW1hdGUgPyBcImFuaW1hdGVcIiA6IFwiXCJ9YH0gc3R5bGU9e3sgaGVpZ2h0OiBgJHt0aGlzLnByb3BzLmNvbW1vbi53aW5kb3dIZWlnaHR9cHhgIH19PlxuICAgICAgICAgICAgey8qIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9ob21lLWNvdmVyLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJob21lIGNvdmVyXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwiXCI+ICovfVxuICAgICAgICAgICAgPGltZyBzdHlsZT17dGhpcy5zdGF0ZS5iYWNrZ3JvdW5kU3R5bGVzfSBzcmM9XCIvaW1hZ2VzL2hvbWUtY292ZXIuanBnXCIgY2xhc3NOYW1lPXtgYmFja2dyb3VuZGB9IHJlZj17dGhpcy5iYWNrZ3JvdW5kSW1hZ2V9IGFsdD0naG9tZWNvdmVyJy8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Rvcnl0ZWxsZXJzIGZ1dHVyYS1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgTUVFVCBUSEUgU1RPUllURUxMRVJTICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVsbG8gaGVsdmV0aWNhLW5ldWUtY29uZGVuc2VkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVsbG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnVsbC1zZXJ2aWNlIGJpZy1jYXNsb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluZGVwZW5kZW50PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFnZW5jeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWRvd24tYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3cgZG93blwiPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiBsb29raW5nLWZvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS10ZXh0XCI+PGgxPkJyYW5kIElkZW50aXR5IEFnZW5jeTwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8L1BhcmFsbGF4PiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hpdGUtZmFkZVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1jYXRlZ29yaWVzIHRleHQtY2VudGVyIHBhZGRlZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIEluc2lnaHRzIC8gQnJhbmQgSWRlbnRpdHkgLyBQYWNrYWdpbmcgLyBBZHZlcnRpc2luZyAvIERpZ2l0YWwgLyBHcmFwaGljcyAvIEZpbG1zXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9kZCBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9CaWdCYW55YW4uanBnXCIgYmdJbWFnZUFsdD1cImJpZyBiYW55YW5cIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvYmlnLWJhbnlhblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5CaWcgQmFueWFuIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5BbiBJdGFsaWFuIHdpbmVtYWtlci4gQSBwYXNzaW9uYXRlIGJyYW5kIHRlYW0uIEFuZCB1cy4gWWVhcnMgb2YgdMOqdGUtw6AtdMOqdGVzIGFuZCByZXNlYXJjaC1kcml2ZW4gaW5zaWdodHMgbGVkIHVzIHRvIHJlY3JlYXRlIHRoZSBwYWNrYWdpbmcgYW5kIGNvbW11bmljYXRpb24gc3RyYXRlZ3kgZm9yIEJpZyBCYW55YW4uIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL2xhbmdvb3IuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvbGFuZ29vclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5MJ2FuZ29vciA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+V2luZSBjYW4gYmUgZWxlZ2FudC4gV2luZSBjYW4gYmUgc29waGlzdGljYXRlZC4gQnV0IHdpbmUgYW5kIGZ1bj8gSGVyZeKAmXMgaG93IHdlIG1hcnJpZWQg4oCYZnVu4oCZIGFuZCBhIG5ldyBicmFuZCBvZiB3aW5lcyBmcm9tIEJpZyBCYW55YW4sIGtub3duIGZvciBpdHMgcHJlbWl1bSB3aW5lcy48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2RkIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL0VuY2hhbnRldXIuanBnXCIgYmdJbWFnZUFsdD1cImVuY2hhbnRldXJcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9XCJwb3J0Zm9saW8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2VuY2hhbnRldXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+RW5jaGFudGV1ciA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5JdOKAmXMgRnJlbmNoLCBpdOKAmXMgcm9tYW50aWMgYW5kIGl04oCZcyBzbyB2ZXJ5IGZsb3JhbC4gSG93IGNhbiB3ZSBub3QgZmFsbCBpbiBsb3ZlIHdpdGggRW5jaGFudGV1cj8gV2UgaGF2ZSBLLWRyYW1hIGZhbnMgb24gb3VyIHRlYW0gd2hvIGFic29sdXRlbHkgbG92ZSB0aGlzIGJyYW5kITwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9meW5kLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9meW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkZZTkQgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPlNlZWRlZCBpbiB0aGUgaWRlYSBvZiBzZWxmLWV4cHJlc3Npb24sIEZZTkQgaW5zcGlyZWQgdXMgd2l0aCBpdHMgZnVuY3Rpb25hbCBjbG90aGluZyBsaW5lcy4gRnJvbSBzdHJhdGVneSB0byBpZGVudGl0eSBhbmQgYnJhbmQgYXJjaGl0ZWN0dXJlIGRlc2lnbiwgd2UgaGVscGVkIGJyaW5nIHRoaXMgYnJhbmQgdG8gbGlmZS4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9kZCBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vQ2hhbmRyaWthMy5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9jaGFuZHJpa2FcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+Q2hhbmRyaWthIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5IZXJl4oCZcyBhIGJyYW5kIHdlIGFsbCBncmV3IHVwIHdpdGguIEFuZCB5ZXQsIGl0IG1hbmFnZWQgdG8gc3VycHJpc2UgdXMgd2l0aCBpdHMgc2VjcmV0cy4gV2Ugc2hhcmVkIHRoZXNlIGxpdHRsZSBudWdnZXRzIHdpdGggdGhlIHdvcmxkIGluIG91ciBjYW1wYWlnbi48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGV2ZW4gbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vU2FudG9vci5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvc2FudG9vclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5TYW50b29yIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5XaG8gZG9lc27igJl0IHJlbWVtYmVyIHRoZSBjbGFzc2ljIOKAnG11bW154oCdIGFkcyEgSXQgZ2l2ZXMgdXMgZ3JlYXQgcHJpZGUgdG8gd29yayBvbiBjYW1wYWlnbnMgZm9yIGEgYnJhbmQgdGhhdOKAmXMgYXMgcmVsZXZhbnQgdG9kYXkgYXMgaXQgd2FzIGEgZmV3IGRlY2FkZXMgYWdvLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vVm9pSmVhbnMucG5nXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9e2Bwb3J0Zm9saW8taXRlbSAke3RoaXMuc3RhdGUuaXNNb2JpbGU/XCJ3aGl0ZS1tZW51LWJ0blwiOlwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvdm9pLWplYW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPlZPSSBKZWFucyA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+VGhlIHZlcnkgaWRlYSBvZiB0aGVzZSBkZW5pbXMgaW5zcGlyZWQgdXMhIFZPSSBoYXMgZXJnb25vbWljYWxseSBlbmdpbmVlcmVkIGRlbmltcyB0aGF0IGNhbGxlZCBmb3IgZWRneSwgZmFzaGlvbiBmb3J3YXJkIGNvbW11bmljYXRpb24uIEFuZCB3ZSByZXZlbGVkIGluIGl0LjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9JY2VidXJnMS5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9pY2VidXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkljZUJ1cmcgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPkludGVuc2UgY3JhdmluZ3MgZm9yIGJ1cmdlcnMgYW5kIHNoYWtlcyBmZWQgb3VyIGJyYWlucyBhcyB3ZSB3b3JrZWQgb24gdGhlIGJyYW5kIGlkZWEgYW5kIGlkZW50aXR5IGZvciB0aGlzIFVLLWJhc2VkIGdvdXJtZXQgYnVyZ2VyIGNoYWluLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbWlhLWJ5LXRhbmlzaHEgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vTWlhMS5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9taWEtYnktdGFuaXNocVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5NaWEgLSBUYW5pc2hxIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5UaGVzZSBmaWxtcyBhcmUgYSBjb2xsZWN0aW9uIG9mIHN0b3JpZXMgb2YgSW5kaWFuIHdvbWVuIHdobyBpbnNwaXJlIHlvdSB3aXRoIHRoZWlyIHJlc2lsaWVuY2UsIGNoYXJtIHlvdSB3aXRoIHRoZWlyIHByZXNlbmNlIGFuZCBhd2UgeW91IHdpdGggdGhlaXIgYWNoaWV2ZW1lbnRzLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL0dyYXBoaWNzMS5qcGdcIiBiZ0ltYWdlQWx0PVwiZ3JhcGhpY3NcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9XCJwb3J0Zm9saW8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5HcmFwaGljcyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPkEgZGlnaXRhbCBhcnQgcHJvamVjdCB0aGF0IGxlZCB1cyB0byBjcmVhdGUgZWRneSwgbW9kZXJuIGdyYXBoaWNzIGZvciBjbG90aGluZyBhbmQgbWVyY2hhbmRpc2UuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5vLWNzc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwbG9yZS1tb3JlIHRleHQtY2VudGVyIHBhZGRlZC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJvd3NlXCI+YnJvd3NlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiNC42cmVtXCJ9fT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXhwbG9yZS1hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93IGRpcmVjdGlvbj1cImRvd25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZXMgcG9zaXRpb24tcmVsYXRpdmUgcGFkZGVkLWNvbnRlbnQgd2hpdGUtY3Vyc29yIHdoaXRlLWN1cnNvciB3aGl0ZS1tZW51LWJ0blwiIHJlZj17dGhpcy53aGl0ZU1lbnVTZWN0aW9uc1swXX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1oZWFkaW5nIG1vcmUtbGV0dGVyLXNwYWNpbmcgZnV0dXJhLWxpZ2h0IHNsaWdodGx5LWxhcmdlci10ZXh0IHllbGxvdy10ZXh0XCI+U0VSVklDRVM8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWxpc3RzXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNlcnZpY2UtaXRlbXMgbGlzdC1zdHlsZS1ub25lIHdoaXRlLXRleHQgbGFyZ2VyLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2luc2lnaHRzJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEluc2lnaHRzXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnYnJhbmQtaWRlbnRpdHknIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEJyYW5kIElkZW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdwYWNrYWdpbmcnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBhY2thZ2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnYWR2ZXJ0aXNpbmcnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkdmVydGlzaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdkaWdpdGFsJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBEaWdpdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdkaWdpdGFsJyB9LH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBHcmFwaGljc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnZmlsbXMnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZpbG1zXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2tpbGxzIGxpc3Qtc3R5bGUtbm9uZSBzbGlnaHRseS1sYXJnZXItdGV4dCBmdXR1cmEtbGlnaHQgeWVsbG93LXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5DUkVBVElWRTwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+SU5TSUdIVC1EUklWRU48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPkNVTFRVUkFMTFkgUkVMRVZBTlQ8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc2VydmljZXMtYmctMi5wbmdcIiBjbGFzc05hbWU9XCJ3aWR0aC0xMDBcIiAgYWx0PSdob21lY292ZXInLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1tb2JpbGUgaGlkZS1kZXNrdG9wIHRleHQtY2VudGVyXCIgc3R5bGU9e3ttYXJnaW5Ub3A6XCI3LjJyZW1cIn19PlxuICAgICAgICAgICAgICAgIDxBcnJvdyBkaXJlY3Rpb249XCJkb3duXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPENsaWVudHMgLz5cbiAgICAgICAgICAgIDxpbWcgZGF0YS1zcmM9XCIvaW1hZ2VzL3dhdmUtYmxhY2suZ2lmXCIgY2xhc3NOYW1lPVwid2lkdGgtMTAwIHdhdmUgbGF6eWxvYWRcIiBhbHQ9J2hvbWVjb3ZlcicgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHshdGhpcy5zdGF0ZS5sb2FkaW5nTG9nb1JlYWR5ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsYWNrLWJnXCI+PC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC53aGl0ZS1mYWRle1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMHJlbTtcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwyNTUsMjU1LCAxKSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgcmdiYSgyNTUsMjU1LDI1NSwgMSkpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwyNTUsMjU1LCAxKSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHdoaXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hcnJvdy1yaWdodHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSk7XG4gICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnAtaW5mby13cmFwcGVyOmhvdmVyIC5hcnJvdy1yaWdodCwucG9ydGZvbGlvLWl0ZW06aG92ZXIgLmFycm93LXJpZ2h0e1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgxcmVtKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLndhdmV7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIC8vIGJvdHRvbTogLTc4JTtcbiAgICAgICAgICAgICAgYm90dG9tOjA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pdGVtcyBsaSBhe1xuICAgICAgICAgICAgICBjb2xvcjojZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXMgbGkgYTpob3ZlcntcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiNGOUVEMzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pdGVtcyBsaTpob3ZlcntcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnNNZWRpdW1JdGFsaWMsc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnAtaW5mby13cmFwcGVye1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtYXQxIC5wLWluZm97XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgYm90dG9tOiA3cmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmhlbGxvIC5jaGlsZHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbmltYXRlIC5zdG9yeXRlbGxlcnMgLmNoaWxke1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmZ1bGwtc2VydmljZSAuY2hpbGR7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuOHM7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgLmFuaW1hdGUgLmxvb2tpbmctZm9yIC5jaGlsZHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZXhwbG9yZS1tb3Jle1xuICAgICAgICAgICAgICBmb250LXNpemU6NC42cmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1saXN0cyB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1ze1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDYuNXJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNraWxscyB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNi41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2UtaW1hZ2V7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgcmlnaHQ6IC01JTtcbiAgICAgICAgICAgICAgdG9wOiAtMSU7XG4gICAgICAgICAgICAgIHdpZHRoOiA0NyU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZXN7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IzAwMDAwMDtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6OC44cmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbToyNXJlbTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpb3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmZmZmO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo4cmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHJlbTtcbiAgICAgICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlvLWl0ZW1ze1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTdyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjE1JTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjE1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXMgLnJvdyAuZXZlbntcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDotOHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8tdGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjQuNnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbS5mb3JtYXQyIC5pbWFnZS13cmFwcGVyIGltZ3tcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8tZGVzY3JpcHRpb257XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZXZlbiAuZm9ybWF0MiAucG9ydGZvbGlvLWluZm97XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybWF0MiAucG9ydGZvbGlvLWluZm97XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6M3JlbTtcbiAgICAgICAgICAgICAgcGFkZGluZzowIDUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1hdDEgLnBvcnRmb2xpby1pbmZve1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA4cmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybWF0MXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTI1JTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZXZlbiAuZm9ybWF0MXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUpIDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8tY2F0ZWdvcmllc3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MS44cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJvdHRvbS10ZXh0e1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQuNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MS44cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhvbWUtZG93bi1hcnJvd3tcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjRyZW07XG4gICAgICAgICAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmbG9hdGluZztcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheToxLjRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmhvbWUtZG93bi1hcnJvd3tcbiAgICAgICAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyBmbG9hdGluZyB7XG4gICAgICAgICAgICAgIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAgMHB4KTsgfVxuICAgICAgICAgICAgICA2NSUgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTVweCk7IH1cbiAgICAgICAgICAgICAgdG8gICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0wcHgpOyB9ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0b3J5dGVsbGVycyB7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuN3JlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbmltYXRlIC5sb2FkaW5nLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJHt0aGlzLnByb3BzLmNvbW1vbi53aW5kb3dIZWlnaHQgKyAxMDB9cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2FkaW5nLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBjdWJpYy1iZXppZXIoMC43NywgMCwgMC4xNzUsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsYWNrLWJne1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2FkaW5nLXdyYXBwZXIgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTAwcHgpO1xuICAgICAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSA1NnB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50b3Atc2VjdGlvbi13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50b3AtY29udGVudCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVsbG8ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZjIwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZyZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjAuODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mdWxsLXNlcnZpY2Uge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDE0MDQyOztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDdyZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIHRvcDogM3JlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMS4ycztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbmltYXRlIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDMuNXJlbTtcbiAgICAgICAgICAgICAgICByaWdodDogMy41cmVtO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdCBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0IGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC51bmRlcmxpbmUge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuMXJlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogLTFyZW07XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzg1LCAwLjEzNSwgMC4xNSwgMC44Nik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdDpob3ZlciAudW5kZXJsaW5lLFxuICAgICAgICAgICAgLnVuZGVybGluZS5leHBhbmQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJyb3dzZXtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTotMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4gICAgICAgICAgICAgIC50ZXh0e1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGVsbG97XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE2cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5mdWxsLXNlcnZpY2V7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnN0b3J5dGVsbGVyc3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MS4xcmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYm90dG9tLXRleHR7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogN3JlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucG9ydGZvbGlvLWl0ZW1ze1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDowO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXMgLnJvdyAuZXZlbntcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLm1pYS1ieS10YW5pc2hxe1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6LTVyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlcnZpY2UtbGlzdHMge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VydmljZS1oZWFkaW5ne1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1ze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0Om5vbmU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNraWxsc3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VydmljZS1pbWFnZSB7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHQ6IC0xMCU7XG4gICAgICAgICAgICAgICAgLy8gdG9wOmF1dG87XG4gICAgICAgICAgICAgICAgLy8gYm90dG9tOiAtMSU7XG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDU3JTtcbiAgICAgICAgICAgICAgICAvLyB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VydmljZXN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206OC44cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC53aGl0ZS1mYWRle1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjNyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmZ1bGwtc2VydmljZXtcbiAgICAgICAgICAgICAgICB0b3A6MDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3Rvcnl0ZWxsZXJzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wb3J0Zm9saW97XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206NHJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbG9yZS1tb3Jle1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NHJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZXhwbG9yZS1hcnJvd3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxcmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5icm93c2V7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTotMnJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoeyBjb21tb24gfSkge1xuICByZXR1cm4ge1xuICAgIGNvbW1vbixcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7b3Blbk1lbnUsYWRkQ2xhc3NUb0N1cnNvcixyZW1vdmVDbGFzc0Zyb21DdXJzb3J9KShIb21lKTtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Anton\\\\Documents\\\\GitHub\\\\anton.github.io\\\\pages\\\\index.js */")));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

function mapStateToProps(_ref) {
  var common = _ref.common;
  return {
    common: common
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, {
  openMenu: _redux_actions__WEBPACK_IMPORTED_MODULE_15__["openMenu"],
  addClassToCursor: _redux_actions__WEBPACK_IMPORTED_MODULE_15__["addClassToCursor"],
  removeClassFromCursor: _redux_actions__WEBPACK_IMPORTED_MODULE_15__["removeClassFromCursor"]
})(Home));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xhenlzaXplcy9sYXp5c2l6ZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInBvc2l0aW9uSW1hZ2UiLCJzZXRTdGF0ZSIsImlzTW9iaWxlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIk1PQklMRV9CUkVBS1BPSU5UIiwic3RhdGUiLCJ1bmRlcmxpbmVFeHBhbmQiLCJiYWNrZ3JvdW5kU3R5bGVzIiwidG9wIiwibGVmdCIsImJhY2tncm91bmRSZWFkeSIsImJhY2tncm91bmRTaG93IiwibG9hZGluZ0xvZ29SZWFkeSIsImFuaW1hdGUiLCJtZW51QnRuQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJSZWFjdCIsImNyZWF0ZVJlZiIsInJlbGxheFJlZiIsIm5vdFBlcmZvcm1lZEFuaW1hdGlvbiIsIndoaXRlTWVudVNlY3Rpb25zIiwiY2IiLCJib3R0b20iLCJ3aWR0aCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsIm9wZW5NZW51Iiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVSZXNpemUiLCJsb2FkaW5nTG9nbyIsIkltYWdlIiwic3JjIiwib25sb2FkIiwiaW1nIiwicmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjaGVtYURhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiY29tbW9uIiwid2luZG93SGVpZ2h0IiwiX19odG1sIiwiaGVpZ2h0IiwicGF0aG5hbWUiLCJxdWVyeSIsImZpbHRlciIsIm1hcmdpblRvcCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiLCJhZGRDbGFzc1RvQ3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQXlCO0FBQzdCO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUJBQWlC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QWxlcEUsdUNBa2VtQyxLQUFLM0MsS0FBTCxDQUFXMEMsTUFBWCxDQUFrQkMsWUFBbEIsR0FBaUMsR0FsZXBFLDJ5cERBREY7QUFxcUJEOzs7O0VBbHhCZ0J6Qiw2Q0FBSyxDQUFDZ0MsUzs7QUFveEJ6QixTQUFTQyxlQUFULE9BQXFDO0FBQUEsTUFBVlQsTUFBVSxRQUFWQSxNQUFVO0FBQ25DLFNBQU87QUFDTEEsVUFBTSxFQUFOQTtBQURLLEdBQVA7QUFHRDs7QUFDY1UsMEhBQU8sQ0FBQ0QsZUFBRCxFQUFrQjtBQUFDdkIsVUFBUSxFQUFSQSx3REFBRDtBQUFVeUIsa0JBQWdCLEVBQWhCQSxnRUFBVjtBQUEyQmhCLHVCQUFxQixFQUFyQkEscUVBQXFCQTtBQUFoRCxDQUFsQixDQUFQLENBQTRFdEMsSUFBNUUsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYjlmZGI2Zjc5NDkxOGI0NDQ1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKHdpbmRvdywgZmFjdG9yeSkge1xuXHR2YXIgbGF6eVNpemVzID0gZmFjdG9yeSh3aW5kb3csIHdpbmRvdy5kb2N1bWVudCwgRGF0ZSk7XG5cdHdpbmRvdy5sYXp5U2l6ZXMgPSBsYXp5U2l6ZXM7XG5cdGlmKHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpe1xuXHRcdG1vZHVsZS5leHBvcnRzID0gbGF6eVNpemVzO1xuXHR9XG59KHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgd2luZG93IDoge30sIFxuLyoqXG4gKiBpbXBvcnQoXCIuL3R5cGVzL2dsb2JhbFwiKVxuICogQHR5cGVkZWYgeyBpbXBvcnQoXCIuL3R5cGVzL2xhenlzaXplcy1jb25maWdcIikuTGF6eVNpemVzQ29uZmlnUGFydGlhbCB9IExhenlTaXplc0NvbmZpZ1BhcnRpYWxcbiAqL1xuZnVuY3Rpb24gbCh3aW5kb3csIGRvY3VtZW50LCBEYXRlKSB7IC8vIFBhc3MgaW4gdGhlIHdpbmRvdyBEYXRlIGZ1bmN0aW9uIGFsc28gZm9yIFNTUiBiZWNhdXNlIHRoZSBEYXRlIGNsYXNzIGNhbiBiZSBsb3N0XG5cdCd1c2Ugc3RyaWN0Jztcblx0Lypqc2hpbnQgZXFudWxsOnRydWUgKi9cblxuXHR2YXIgbGF6eXNpemVzLFxuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHsgTGF6eVNpemVzQ29uZmlnUGFydGlhbCB9XG5cdFx0ICovXG5cdFx0bGF6eVNpemVzQ2ZnO1xuXG5cdChmdW5jdGlvbigpe1xuXHRcdHZhciBwcm9wO1xuXG5cdFx0dmFyIGxhenlTaXplc0RlZmF1bHRzID0ge1xuXHRcdFx0bGF6eUNsYXNzOiAnbGF6eWxvYWQnLFxuXHRcdFx0bG9hZGVkQ2xhc3M6ICdsYXp5bG9hZGVkJyxcblx0XHRcdGxvYWRpbmdDbGFzczogJ2xhenlsb2FkaW5nJyxcblx0XHRcdHByZWxvYWRDbGFzczogJ2xhenlwcmVsb2FkJyxcblx0XHRcdGVycm9yQ2xhc3M6ICdsYXp5ZXJyb3InLFxuXHRcdFx0Ly9zdHJpY3RDbGFzczogJ2xhenlzdHJpY3QnLFxuXHRcdFx0YXV0b3NpemVzQ2xhc3M6ICdsYXp5YXV0b3NpemVzJyxcblx0XHRcdGZhc3RMb2FkZWRDbGFzczogJ2xzLWlzLWNhY2hlZCcsXG5cdFx0XHRpZnJhbWVMb2FkTW9kZTogMCxcblx0XHRcdHNyY0F0dHI6ICdkYXRhLXNyYycsXG5cdFx0XHRzcmNzZXRBdHRyOiAnZGF0YS1zcmNzZXQnLFxuXHRcdFx0c2l6ZXNBdHRyOiAnZGF0YS1zaXplcycsXG5cdFx0XHQvL3ByZWxvYWRBZnRlckxvYWQ6IGZhbHNlLFxuXHRcdFx0bWluU2l6ZTogNDAsXG5cdFx0XHRjdXN0b21NZWRpYToge30sXG5cdFx0XHRpbml0OiB0cnVlLFxuXHRcdFx0ZXhwRmFjdG9yOiAxLjUsXG5cdFx0XHRoRmFjOiAwLjgsXG5cdFx0XHRsb2FkTW9kZTogMixcblx0XHRcdGxvYWRIaWRkZW46IHRydWUsXG5cdFx0XHRyaWNUaW1lb3V0OiAwLFxuXHRcdFx0dGhyb3R0bGVEZWxheTogMTI1LFxuXHRcdH07XG5cblx0XHRsYXp5U2l6ZXNDZmcgPSB3aW5kb3cubGF6eVNpemVzQ29uZmlnIHx8IHdpbmRvdy5sYXp5c2l6ZXNDb25maWcgfHwge307XG5cblx0XHRmb3IocHJvcCBpbiBsYXp5U2l6ZXNEZWZhdWx0cyl7XG5cdFx0XHRpZighKHByb3AgaW4gbGF6eVNpemVzQ2ZnKSl7XG5cdFx0XHRcdGxhenlTaXplc0NmZ1twcm9wXSA9IGxhenlTaXplc0RlZmF1bHRzW3Byb3BdO1xuXHRcdFx0fVxuXHRcdH1cblx0fSkoKTtcblxuXHRpZiAoIWRvY3VtZW50IHx8ICFkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGluaXQ6IGZ1bmN0aW9uICgpIHt9LFxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAdHlwZSB7IExhenlTaXplc0NvbmZpZ1BhcnRpYWwgfVxuXHRcdFx0ICovXG5cdFx0XHRjZmc6IGxhenlTaXplc0NmZyxcblx0XHRcdC8qKlxuXHRcdFx0ICogQHR5cGUgeyB0cnVlIH1cblx0XHRcdCAqL1xuXHRcdFx0bm9TdXBwb3J0OiB0cnVlLFxuXHRcdH07XG5cdH1cblxuXHR2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXHR2YXIgc3VwcG9ydFBpY3R1cmUgPSB3aW5kb3cuSFRNTFBpY3R1cmVFbGVtZW50O1xuXG5cdHZhciBfYWRkRXZlbnRMaXN0ZW5lciA9ICdhZGRFdmVudExpc3RlbmVyJztcblxuXHR2YXIgX2dldEF0dHJpYnV0ZSA9ICdnZXRBdHRyaWJ1dGUnO1xuXG5cdC8qKlxuXHQgKiBVcGRhdGUgdG8gYmluZCB0byB3aW5kb3cgYmVjYXVzZSAndGhpcycgYmVjb21lcyBudWxsIGR1cmluZyBTU1Jcblx0ICogYnVpbGRzLlxuXHQgKi9cblx0dmFyIGFkZEV2ZW50TGlzdGVuZXIgPSB3aW5kb3dbX2FkZEV2ZW50TGlzdGVuZXJdLmJpbmQod2luZG93KTtcblxuXHR2YXIgc2V0VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0O1xuXG5cdHZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQ7XG5cblx0dmFyIHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjaztcblxuXHR2YXIgcmVnUGljdHVyZSA9IC9ecGljdHVyZSQvaTtcblxuXHR2YXIgbG9hZEV2ZW50cyA9IFsnbG9hZCcsICdlcnJvcicsICdsYXp5aW5jbHVkZWQnLCAnX2xhenlsb2FkZWQnXTtcblxuXHR2YXIgcmVnQ2xhc3NDYWNoZSA9IHt9O1xuXG5cdHZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBlbGUge0VsZW1lbnR9XG5cdCAqIEBwYXJhbSBjbHMge3N0cmluZ31cblx0ICovXG5cdHZhciBoYXNDbGFzcyA9IGZ1bmN0aW9uKGVsZSwgY2xzKSB7XG5cdFx0aWYoIXJlZ0NsYXNzQ2FjaGVbY2xzXSl7XG5cdFx0XHRyZWdDbGFzc0NhY2hlW2Nsc10gPSBuZXcgUmVnRXhwKCcoXFxcXHN8XiknK2NscysnKFxcXFxzfCQpJyk7XG5cdFx0fVxuXHRcdHJldHVybiByZWdDbGFzc0NhY2hlW2Nsc10udGVzdChlbGVbX2dldEF0dHJpYnV0ZV0oJ2NsYXNzJykgfHwgJycpICYmIHJlZ0NsYXNzQ2FjaGVbY2xzXTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIGVsZSB7RWxlbWVudH1cblx0ICogQHBhcmFtIGNscyB7c3RyaW5nfVxuXHQgKi9cblx0dmFyIGFkZENsYXNzID0gZnVuY3Rpb24oZWxlLCBjbHMpIHtcblx0XHRpZiAoIWhhc0NsYXNzKGVsZSwgY2xzKSl7XG5cdFx0XHRlbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIChlbGVbX2dldEF0dHJpYnV0ZV0oJ2NsYXNzJykgfHwgJycpLnRyaW0oKSArICcgJyArIGNscyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gZWxlIHtFbGVtZW50fVxuXHQgKiBAcGFyYW0gY2xzIHtzdHJpbmd9XG5cdCAqL1xuXHR2YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbGUsIGNscykge1xuXHRcdHZhciByZWc7XG5cdFx0aWYgKChyZWcgPSBoYXNDbGFzcyhlbGUsY2xzKSkpIHtcblx0XHRcdGVsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGVsZVtfZ2V0QXR0cmlidXRlXSgnY2xhc3MnKSB8fCAnJykucmVwbGFjZShyZWcsICcgJykpO1xuXHRcdH1cblx0fTtcblxuXHR2YXIgYWRkUmVtb3ZlTG9hZEV2ZW50cyA9IGZ1bmN0aW9uKGRvbSwgZm4sIGFkZCl7XG5cdFx0dmFyIGFjdGlvbiA9IGFkZCA/IF9hZGRFdmVudExpc3RlbmVyIDogJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuXHRcdGlmKGFkZCl7XG5cdFx0XHRhZGRSZW1vdmVMb2FkRXZlbnRzKGRvbSwgZm4pO1xuXHRcdH1cblx0XHRsb2FkRXZlbnRzLmZvckVhY2goZnVuY3Rpb24oZXZ0KXtcblx0XHRcdGRvbVthY3Rpb25dKGV2dCwgZm4pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gZWxlbSB7IEVsZW1lbnQgfVxuXHQgKiBAcGFyYW0gbmFtZSB7IHN0cmluZyB9XG5cdCAqIEBwYXJhbSBkZXRhaWwgeyBhbnkgfVxuXHQgKiBAcGFyYW0gbm9CdWJibGVzIHsgYm9vbGVhbiB9XG5cdCAqIEBwYXJhbSBub0NhbmNlbGFibGUgeyBib29sZWFuIH1cblx0ICogQHJldHVybnMgeyBDdXN0b21FdmVudCB9XG5cdCAqL1xuXHR2YXIgdHJpZ2dlckV2ZW50ID0gZnVuY3Rpb24oZWxlbSwgbmFtZSwgZGV0YWlsLCBub0J1YmJsZXMsIG5vQ2FuY2VsYWJsZSl7XG5cdFx0dmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG5cblx0XHRpZighZGV0YWlsKXtcblx0XHRcdGRldGFpbCA9IHt9O1xuXHRcdH1cblxuXHRcdGRldGFpbC5pbnN0YW5jZSA9IGxhenlzaXplcztcblxuXHRcdGV2ZW50LmluaXRFdmVudChuYW1lLCAhbm9CdWJibGVzLCAhbm9DYW5jZWxhYmxlKTtcblxuXHRcdGV2ZW50LmRldGFpbCA9IGRldGFpbDtcblxuXHRcdGVsZW0uZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdFx0cmV0dXJuIGV2ZW50O1xuXHR9O1xuXG5cdHZhciB1cGRhdGVQb2x5ZmlsbCA9IGZ1bmN0aW9uIChlbCwgZnVsbCl7XG5cdFx0dmFyIHBvbHlmaWxsO1xuXHRcdGlmKCAhc3VwcG9ydFBpY3R1cmUgJiYgKCBwb2x5ZmlsbCA9ICh3aW5kb3cucGljdHVyZWZpbGwgfHwgbGF6eVNpemVzQ2ZnLnBmKSApICl7XG5cdFx0XHRpZihmdWxsICYmIGZ1bGwuc3JjICYmICFlbFtfZ2V0QXR0cmlidXRlXSgnc3Jjc2V0Jykpe1xuXHRcdFx0XHRlbC5zZXRBdHRyaWJ1dGUoJ3NyY3NldCcsIGZ1bGwuc3JjKTtcblx0XHRcdH1cblx0XHRcdHBvbHlmaWxsKHtyZWV2YWx1YXRlOiB0cnVlLCBlbGVtZW50czogW2VsXX0pO1xuXHRcdH0gZWxzZSBpZihmdWxsICYmIGZ1bGwuc3JjKXtcblx0XHRcdGVsLnNyYyA9IGZ1bGwuc3JjO1xuXHRcdH1cblx0fTtcblxuXHR2YXIgZ2V0Q1NTID0gZnVuY3Rpb24gKGVsZW0sIHN0eWxlKXtcblx0XHRyZXR1cm4gKGdldENvbXB1dGVkU3R5bGUoZWxlbSwgbnVsbCkgfHwge30pW3N0eWxlXTtcblx0fTtcblxuXHQvKipcblx0ICpcblx0ICogQHBhcmFtIGVsZW0geyBFbGVtZW50IH1cblx0ICogQHBhcmFtIHBhcmVudCB7IEVsZW1lbnQgfVxuXHQgKiBAcGFyYW0gW3dpZHRoXSB7bnVtYmVyfVxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0dmFyIGdldFdpZHRoID0gZnVuY3Rpb24oZWxlbSwgcGFyZW50LCB3aWR0aCl7XG5cdFx0d2lkdGggPSB3aWR0aCB8fCBlbGVtLm9mZnNldFdpZHRoO1xuXG5cdFx0d2hpbGUod2lkdGggPCBsYXp5U2l6ZXNDZmcubWluU2l6ZSAmJiBwYXJlbnQgJiYgIWVsZW0uX2xhenlzaXplc1dpZHRoKXtcblx0XHRcdHdpZHRoID0gIHBhcmVudC5vZmZzZXRXaWR0aDtcblx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuXHRcdH1cblxuXHRcdHJldHVybiB3aWR0aDtcblx0fTtcblxuXHR2YXIgckFGID0gKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHJ1bm5pbmcsIHdhaXRpbmc7XG5cdFx0dmFyIGZpcnN0Rm5zID0gW107XG5cdFx0dmFyIHNlY29uZEZucyA9IFtdO1xuXHRcdHZhciBmbnMgPSBmaXJzdEZucztcblxuXHRcdHZhciBydW4gPSBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIHJ1bkZucyA9IGZucztcblxuXHRcdFx0Zm5zID0gZmlyc3RGbnMubGVuZ3RoID8gc2Vjb25kRm5zIDogZmlyc3RGbnM7XG5cblx0XHRcdHJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0d2FpdGluZyA9IGZhbHNlO1xuXG5cdFx0XHR3aGlsZShydW5GbnMubGVuZ3RoKXtcblx0XHRcdFx0cnVuRm5zLnNoaWZ0KCkoKTtcblx0XHRcdH1cblxuXHRcdFx0cnVubmluZyA9IGZhbHNlO1xuXHRcdH07XG5cblx0XHR2YXIgcmFmQmF0Y2ggPSBmdW5jdGlvbihmbiwgcXVldWUpe1xuXHRcdFx0aWYocnVubmluZyAmJiAhcXVldWUpe1xuXHRcdFx0XHRmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm5zLnB1c2goZm4pO1xuXG5cdFx0XHRcdGlmKCF3YWl0aW5nKXtcblx0XHRcdFx0XHR3YWl0aW5nID0gdHJ1ZTtcblx0XHRcdFx0XHQoZG9jdW1lbnQuaGlkZGVuID8gc2V0VGltZW91dCA6IHJlcXVlc3RBbmltYXRpb25GcmFtZSkocnVuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyYWZCYXRjaC5fbHNGbHVzaCA9IHJ1bjtcblxuXHRcdHJldHVybiByYWZCYXRjaDtcblx0fSkoKTtcblxuXHR2YXIgckFGSXQgPSBmdW5jdGlvbihmbiwgc2ltcGxlKXtcblx0XHRyZXR1cm4gc2ltcGxlID9cblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyQUYoZm4pO1xuXHRcdFx0fSA6XG5cdFx0XHRmdW5jdGlvbigpe1xuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0XHRcdHZhciBhcmdzID0gYXJndW1lbnRzO1xuXHRcdFx0XHRyQUYoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRmbi5hcHBseSh0aGF0LCBhcmdzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0O1xuXHR9O1xuXG5cdHZhciB0aHJvdHRsZSA9IGZ1bmN0aW9uKGZuKXtcblx0XHR2YXIgcnVubmluZztcblx0XHR2YXIgbGFzdFRpbWUgPSAwO1xuXHRcdHZhciBnRGVsYXkgPSBsYXp5U2l6ZXNDZmcudGhyb3R0bGVEZWxheTtcblx0XHR2YXIgcklDVGltZW91dCA9IGxhenlTaXplc0NmZy5yaWNUaW1lb3V0O1xuXHRcdHZhciBydW4gPSBmdW5jdGlvbigpe1xuXHRcdFx0cnVubmluZyA9IGZhbHNlO1xuXHRcdFx0bGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdFx0Zm4oKTtcblx0XHR9O1xuXHRcdHZhciBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHJJQ1RpbWVvdXQgPiA0OSA/XG5cdFx0XHRmdW5jdGlvbigpe1xuXHRcdFx0XHRyZXF1ZXN0SWRsZUNhbGxiYWNrKHJ1biwge3RpbWVvdXQ6IHJJQ1RpbWVvdXR9KTtcblxuXHRcdFx0XHRpZihySUNUaW1lb3V0ICE9PSBsYXp5U2l6ZXNDZmcucmljVGltZW91dCl7XG5cdFx0XHRcdFx0cklDVGltZW91dCA9IGxhenlTaXplc0NmZy5yaWNUaW1lb3V0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IDpcblx0XHRcdHJBRkl0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHNldFRpbWVvdXQocnVuKTtcblx0XHRcdH0sIHRydWUpXG5cdFx0O1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGlzUHJpb3JpdHkpe1xuXHRcdFx0dmFyIGRlbGF5O1xuXG5cdFx0XHRpZigoaXNQcmlvcml0eSA9IGlzUHJpb3JpdHkgPT09IHRydWUpKXtcblx0XHRcdFx0cklDVGltZW91dCA9IDMzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihydW5uaW5nKXtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRydW5uaW5nID0gIHRydWU7XG5cblx0XHRcdGRlbGF5ID0gZ0RlbGF5IC0gKERhdGUubm93KCkgLSBsYXN0VGltZSk7XG5cblx0XHRcdGlmKGRlbGF5IDwgMCl7XG5cdFx0XHRcdGRlbGF5ID0gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYoaXNQcmlvcml0eSB8fCBkZWxheSA8IDkpe1xuXHRcdFx0XHRpZGxlQ2FsbGJhY2soKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoaWRsZUNhbGxiYWNrLCBkZWxheSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblxuXHQvL2Jhc2VkIG9uIGh0dHA6Ly9tb2Rlcm5qYXZhc2NyaXB0LmJsb2dzcG90LmRlLzIwMTMvMDgvYnVpbGRpbmctYmV0dGVyLWRlYm91bmNlLmh0bWxcblx0dmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZnVuYykge1xuXHRcdHZhciB0aW1lb3V0LCB0aW1lc3RhbXA7XG5cdFx0dmFyIHdhaXQgPSA5OTtcblx0XHR2YXIgcnVuID0gZnVuY3Rpb24oKXtcblx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0ZnVuYygpO1xuXHRcdH07XG5cdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbGFzdCA9IERhdGUubm93KCkgLSB0aW1lc3RhbXA7XG5cblx0XHRcdGlmIChsYXN0IDwgd2FpdCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQocmVxdWVzdElkbGVDYWxsYmFjayB8fCBydW4pKHJ1bik7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cblx0XHRcdGlmICghdGltZW91dCkge1xuXHRcdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblxuXHR2YXIgbG9hZGVyID0gKGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHByZWxvYWRFbGVtcywgaXNDb21wbGV0ZWQsIHJlc2V0UHJlbG9hZGluZ1RpbWVyLCBsb2FkTW9kZSwgc3RhcnRlZDtcblxuXHRcdHZhciBlTHZXLCBlbHZILCBlTHRvcCwgZUxsZWZ0LCBlTHJpZ2h0LCBlTGJvdHRvbSwgaXNCb2R5SGlkZGVuO1xuXG5cdFx0dmFyIHJlZ0ltZyA9IC9eaW1nJC9pO1xuXHRcdHZhciByZWdJZnJhbWUgPSAvXmlmcmFtZSQvaTtcblxuXHRcdHZhciBzdXBwb3J0U2Nyb2xsID0gKCdvbnNjcm9sbCcgaW4gd2luZG93KSAmJiAhKC8oZ2xlfGluZylib3QvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpO1xuXG5cdFx0dmFyIHNocmlua0V4cGFuZCA9IDA7XG5cdFx0dmFyIGN1cnJlbnRFeHBhbmQgPSAwO1xuXG5cdFx0dmFyIGlzTG9hZGluZyA9IDA7XG5cdFx0dmFyIGxvd1J1bnMgPSAtMTtcblxuXHRcdHZhciByZXNldFByZWxvYWRpbmcgPSBmdW5jdGlvbihlKXtcblx0XHRcdGlzTG9hZGluZy0tO1xuXHRcdFx0aWYoIWUgfHwgaXNMb2FkaW5nIDwgMCB8fCAhZS50YXJnZXQpe1xuXHRcdFx0XHRpc0xvYWRpbmcgPSAwO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgaXNWaXNpYmxlID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHRcdGlmIChpc0JvZHlIaWRkZW4gPT0gbnVsbCkge1xuXHRcdFx0XHRpc0JvZHlIaWRkZW4gPSBnZXRDU1MoZG9jdW1lbnQuYm9keSwgJ3Zpc2liaWxpdHknKSA9PSAnaGlkZGVuJztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGlzQm9keUhpZGRlbiB8fCAhKGdldENTUyhlbGVtLnBhcmVudE5vZGUsICd2aXNpYmlsaXR5JykgPT0gJ2hpZGRlbicgJiYgZ2V0Q1NTKGVsZW0sICd2aXNpYmlsaXR5JykgPT0gJ2hpZGRlbicpO1xuXHRcdH07XG5cblx0XHR2YXIgaXNOZXN0ZWRWaXNpYmxlID0gZnVuY3Rpb24oZWxlbSwgZWxlbUV4cGFuZCl7XG5cdFx0XHR2YXIgb3V0ZXJSZWN0O1xuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW07XG5cdFx0XHR2YXIgdmlzaWJsZSA9IGlzVmlzaWJsZShlbGVtKTtcblxuXHRcdFx0ZUx0b3AgLT0gZWxlbUV4cGFuZDtcblx0XHRcdGVMYm90dG9tICs9IGVsZW1FeHBhbmQ7XG5cdFx0XHRlTGxlZnQgLT0gZWxlbUV4cGFuZDtcblx0XHRcdGVMcmlnaHQgKz0gZWxlbUV4cGFuZDtcblxuXHRcdFx0d2hpbGUodmlzaWJsZSAmJiAocGFyZW50ID0gcGFyZW50Lm9mZnNldFBhcmVudCkgJiYgcGFyZW50ICE9IGRvY3VtZW50LmJvZHkgJiYgcGFyZW50ICE9IGRvY0VsZW0pe1xuXHRcdFx0XHR2aXNpYmxlID0gKChnZXRDU1MocGFyZW50LCAnb3BhY2l0eScpIHx8IDEpID4gMCk7XG5cblx0XHRcdFx0aWYodmlzaWJsZSAmJiBnZXRDU1MocGFyZW50LCAnb3ZlcmZsb3cnKSAhPSAndmlzaWJsZScpe1xuXHRcdFx0XHRcdG91dGVyUmVjdCA9IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0XHR2aXNpYmxlID0gZUxyaWdodCA+IG91dGVyUmVjdC5sZWZ0ICYmXG5cdFx0XHRcdFx0XHRlTGxlZnQgPCBvdXRlclJlY3QucmlnaHQgJiZcblx0XHRcdFx0XHRcdGVMYm90dG9tID4gb3V0ZXJSZWN0LnRvcCAtIDEgJiZcblx0XHRcdFx0XHRcdGVMdG9wIDwgb3V0ZXJSZWN0LmJvdHRvbSArIDFcblx0XHRcdFx0XHQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHZpc2libGU7XG5cdFx0fTtcblxuXHRcdHZhciBjaGVja0VsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZUxsZW4sIGksIHJlY3QsIGF1dG9Mb2FkRWxlbSwgbG9hZGVkU29tZXRoaW5nLCBlbGVtRXhwYW5kLCBlbGVtTmVnYXRpdmVFeHBhbmQsIGVsZW1FeHBhbmRWYWwsXG5cdFx0XHRcdGJlZm9yZUV4cGFuZFZhbCwgZGVmYXVsdEV4cGFuZCwgcHJlbG9hZEV4cGFuZCwgaEZhYztcblx0XHRcdHZhciBsYXp5bG9hZEVsZW1zID0gbGF6eXNpemVzLmVsZW1lbnRzO1xuXG5cdFx0XHRpZigobG9hZE1vZGUgPSBsYXp5U2l6ZXNDZmcubG9hZE1vZGUpICYmIGlzTG9hZGluZyA8IDggJiYgKGVMbGVuID0gbGF6eWxvYWRFbGVtcy5sZW5ndGgpKXtcblxuXHRcdFx0XHRpID0gMDtcblxuXHRcdFx0XHRsb3dSdW5zKys7XG5cblx0XHRcdFx0Zm9yKDsgaSA8IGVMbGVuOyBpKyspe1xuXG5cdFx0XHRcdFx0aWYoIWxhenlsb2FkRWxlbXNbaV0gfHwgbGF6eWxvYWRFbGVtc1tpXS5fbGF6eVJhY2Upe2NvbnRpbnVlO31cblxuXHRcdFx0XHRcdGlmKCFzdXBwb3J0U2Nyb2xsIHx8IChsYXp5c2l6ZXMucHJlbWF0dXJlVW52ZWlsICYmIGxhenlzaXplcy5wcmVtYXR1cmVVbnZlaWwobGF6eWxvYWRFbGVtc1tpXSkpKXt1bnZlaWxFbGVtZW50KGxhenlsb2FkRWxlbXNbaV0pO2NvbnRpbnVlO31cblxuXHRcdFx0XHRcdGlmKCEoZWxlbUV4cGFuZFZhbCA9IGxhenlsb2FkRWxlbXNbaV1bX2dldEF0dHJpYnV0ZV0oJ2RhdGEtZXhwYW5kJykpIHx8ICEoZWxlbUV4cGFuZCA9IGVsZW1FeHBhbmRWYWwgKiAxKSl7XG5cdFx0XHRcdFx0XHRlbGVtRXhwYW5kID0gY3VycmVudEV4cGFuZDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoIWRlZmF1bHRFeHBhbmQpIHtcblx0XHRcdFx0XHRcdGRlZmF1bHRFeHBhbmQgPSAoIWxhenlTaXplc0NmZy5leHBhbmQgfHwgbGF6eVNpemVzQ2ZnLmV4cGFuZCA8IDEpID9cblx0XHRcdFx0XHRcdFx0ZG9jRWxlbS5jbGllbnRIZWlnaHQgPiA1MDAgJiYgZG9jRWxlbS5jbGllbnRXaWR0aCA+IDUwMCA/IDUwMCA6IDM3MCA6XG5cdFx0XHRcdFx0XHRcdGxhenlTaXplc0NmZy5leHBhbmQ7XG5cblx0XHRcdFx0XHRcdGxhenlzaXplcy5fZGVmRXggPSBkZWZhdWx0RXhwYW5kO1xuXG5cdFx0XHRcdFx0XHRwcmVsb2FkRXhwYW5kID0gZGVmYXVsdEV4cGFuZCAqIGxhenlTaXplc0NmZy5leHBGYWN0b3I7XG5cdFx0XHRcdFx0XHRoRmFjID0gbGF6eVNpemVzQ2ZnLmhGYWM7XG5cdFx0XHRcdFx0XHRpc0JvZHlIaWRkZW4gPSBudWxsO1xuXG5cdFx0XHRcdFx0XHRpZihjdXJyZW50RXhwYW5kIDwgcHJlbG9hZEV4cGFuZCAmJiBpc0xvYWRpbmcgPCAxICYmIGxvd1J1bnMgPiAyICYmIGxvYWRNb2RlID4gMiAmJiAhZG9jdW1lbnQuaGlkZGVuKXtcblx0XHRcdFx0XHRcdFx0Y3VycmVudEV4cGFuZCA9IHByZWxvYWRFeHBhbmQ7XG5cdFx0XHRcdFx0XHRcdGxvd1J1bnMgPSAwO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmKGxvYWRNb2RlID4gMSAmJiBsb3dSdW5zID4gMSAmJiBpc0xvYWRpbmcgPCA2KXtcblx0XHRcdFx0XHRcdFx0Y3VycmVudEV4cGFuZCA9IGRlZmF1bHRFeHBhbmQ7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50RXhwYW5kID0gc2hyaW5rRXhwYW5kO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKGJlZm9yZUV4cGFuZFZhbCAhPT0gZWxlbUV4cGFuZCl7XG5cdFx0XHRcdFx0XHRlTHZXID0gaW5uZXJXaWR0aCArIChlbGVtRXhwYW5kICogaEZhYyk7XG5cdFx0XHRcdFx0XHRlbHZIID0gaW5uZXJIZWlnaHQgKyBlbGVtRXhwYW5kO1xuXHRcdFx0XHRcdFx0ZWxlbU5lZ2F0aXZlRXhwYW5kID0gZWxlbUV4cGFuZCAqIC0xO1xuXHRcdFx0XHRcdFx0YmVmb3JlRXhwYW5kVmFsID0gZWxlbUV4cGFuZDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZWN0ID0gbGF6eWxvYWRFbGVtc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdFx0XHRcdGlmICgoZUxib3R0b20gPSByZWN0LmJvdHRvbSkgPj0gZWxlbU5lZ2F0aXZlRXhwYW5kICYmXG5cdFx0XHRcdFx0XHQoZUx0b3AgPSByZWN0LnRvcCkgPD0gZWx2SCAmJlxuXHRcdFx0XHRcdFx0KGVMcmlnaHQgPSByZWN0LnJpZ2h0KSA+PSBlbGVtTmVnYXRpdmVFeHBhbmQgKiBoRmFjICYmXG5cdFx0XHRcdFx0XHQoZUxsZWZ0ID0gcmVjdC5sZWZ0KSA8PSBlTHZXICYmXG5cdFx0XHRcdFx0XHQoZUxib3R0b20gfHwgZUxyaWdodCB8fCBlTGxlZnQgfHwgZUx0b3ApICYmXG5cdFx0XHRcdFx0XHQobGF6eVNpemVzQ2ZnLmxvYWRIaWRkZW4gfHwgaXNWaXNpYmxlKGxhenlsb2FkRWxlbXNbaV0pKSAmJlxuXHRcdFx0XHRcdFx0KChpc0NvbXBsZXRlZCAmJiBpc0xvYWRpbmcgPCAzICYmICFlbGVtRXhwYW5kVmFsICYmIChsb2FkTW9kZSA8IDMgfHwgbG93UnVucyA8IDQpKSB8fCBpc05lc3RlZFZpc2libGUobGF6eWxvYWRFbGVtc1tpXSwgZWxlbUV4cGFuZCkpKXtcblx0XHRcdFx0XHRcdHVudmVpbEVsZW1lbnQobGF6eWxvYWRFbGVtc1tpXSk7XG5cdFx0XHRcdFx0XHRsb2FkZWRTb21ldGhpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdFx0aWYoaXNMb2FkaW5nID4gOSl7YnJlYWs7fVxuXHRcdFx0XHRcdH0gZWxzZSBpZighbG9hZGVkU29tZXRoaW5nICYmIGlzQ29tcGxldGVkICYmICFhdXRvTG9hZEVsZW0gJiZcblx0XHRcdFx0XHRcdGlzTG9hZGluZyA8IDQgJiYgbG93UnVucyA8IDQgJiYgbG9hZE1vZGUgPiAyICYmXG5cdFx0XHRcdFx0XHQocHJlbG9hZEVsZW1zWzBdIHx8IGxhenlTaXplc0NmZy5wcmVsb2FkQWZ0ZXJMb2FkKSAmJlxuXHRcdFx0XHRcdFx0KHByZWxvYWRFbGVtc1swXSB8fCAoIWVsZW1FeHBhbmRWYWwgJiYgKChlTGJvdHRvbSB8fCBlTHJpZ2h0IHx8IGVMbGVmdCB8fCBlTHRvcCkgfHwgbGF6eWxvYWRFbGVtc1tpXVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDZmcuc2l6ZXNBdHRyKSAhPSAnYXV0bycpKSkpe1xuXHRcdFx0XHRcdFx0YXV0b0xvYWRFbGVtID0gcHJlbG9hZEVsZW1zWzBdIHx8IGxhenlsb2FkRWxlbXNbaV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoYXV0b0xvYWRFbGVtICYmICFsb2FkZWRTb21ldGhpbmcpe1xuXHRcdFx0XHRcdHVudmVpbEVsZW1lbnQoYXV0b0xvYWRFbGVtKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyA9IHRocm90dGxlKGNoZWNrRWxlbWVudHMpO1xuXG5cdFx0dmFyIHN3aXRjaExvYWRpbmdDbGFzcyA9IGZ1bmN0aW9uKGUpe1xuXHRcdFx0dmFyIGVsZW0gPSBlLnRhcmdldDtcblxuXHRcdFx0aWYgKGVsZW0uX2xhenlDYWNoZSkge1xuXHRcdFx0XHRkZWxldGUgZWxlbS5fbGF6eUNhY2hlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHJlc2V0UHJlbG9hZGluZyhlKTtcblx0XHRcdGFkZENsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5sb2FkZWRDbGFzcyk7XG5cdFx0XHRyZW1vdmVDbGFzcyhlbGVtLCBsYXp5U2l6ZXNDZmcubG9hZGluZ0NsYXNzKTtcblx0XHRcdGFkZFJlbW92ZUxvYWRFdmVudHMoZWxlbSwgcmFmU3dpdGNoTG9hZGluZ0NsYXNzKTtcblx0XHRcdHRyaWdnZXJFdmVudChlbGVtLCAnbGF6eWxvYWRlZCcpO1xuXHRcdH07XG5cdFx0dmFyIHJhZmVkU3dpdGNoTG9hZGluZ0NsYXNzID0gckFGSXQoc3dpdGNoTG9hZGluZ0NsYXNzKTtcblx0XHR2YXIgcmFmU3dpdGNoTG9hZGluZ0NsYXNzID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRyYWZlZFN3aXRjaExvYWRpbmdDbGFzcyh7dGFyZ2V0OiBlLnRhcmdldH0pO1xuXHRcdH07XG5cblx0XHR2YXIgY2hhbmdlSWZyYW1lU3JjID0gZnVuY3Rpb24oZWxlbSwgc3JjKXtcblx0XHRcdHZhciBsb2FkTW9kZSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWxvYWQtbW9kZScpIHx8IGxhenlTaXplc0NmZy5pZnJhbWVMb2FkTW9kZTtcblxuXHRcdFx0Ly8gbG9hZE1vZGUgY2FuIGJlIGFsc28gYSBzdHJpbmchXG5cdFx0XHRpZiAobG9hZE1vZGUgPT0gMCkge1xuXHRcdFx0XHRlbGVtLmNvbnRlbnRXaW5kb3cubG9jYXRpb24ucmVwbGFjZShzcmMpO1xuXHRcdFx0fSBlbHNlIGlmIChsb2FkTW9kZSA9PSAxKSB7XG5cdFx0XHRcdGVsZW0uc3JjID0gc3JjO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgaGFuZGxlU291cmNlcyA9IGZ1bmN0aW9uKHNvdXJjZSl7XG5cdFx0XHR2YXIgY3VzdG9tTWVkaWE7XG5cblx0XHRcdHZhciBzb3VyY2VTcmNzZXQgPSBzb3VyY2VbX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ2ZnLnNyY3NldEF0dHIpO1xuXG5cdFx0XHRpZiggKGN1c3RvbU1lZGlhID0gbGF6eVNpemVzQ2ZnLmN1c3RvbU1lZGlhW3NvdXJjZVtfZ2V0QXR0cmlidXRlXSgnZGF0YS1tZWRpYScpIHx8IHNvdXJjZVtfZ2V0QXR0cmlidXRlXSgnbWVkaWEnKV0pICl7XG5cdFx0XHRcdHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgY3VzdG9tTWVkaWEpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihzb3VyY2VTcmNzZXQpe1xuXHRcdFx0XHRzb3VyY2Uuc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBzb3VyY2VTcmNzZXQpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgbGF6eVVudmVpbCA9IHJBRkl0KGZ1bmN0aW9uIChlbGVtLCBkZXRhaWwsIGlzQXV0bywgc2l6ZXMsIGlzSW1nKXtcblx0XHRcdHZhciBzcmMsIHNyY3NldCwgcGFyZW50LCBpc1BpY3R1cmUsIGV2ZW50LCBmaXJlc0xvYWQ7XG5cblx0XHRcdGlmKCEoZXZlbnQgPSB0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenliZWZvcmV1bnZlaWwnLCBkZXRhaWwpKS5kZWZhdWx0UHJldmVudGVkKXtcblxuXHRcdFx0XHRpZihzaXplcyl7XG5cdFx0XHRcdFx0aWYoaXNBdXRvKXtcblx0XHRcdFx0XHRcdGFkZENsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5hdXRvc2l6ZXNDbGFzcyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCdzaXplcycsIHNpemVzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzcmNzZXQgPSBlbGVtW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NmZy5zcmNzZXRBdHRyKTtcblx0XHRcdFx0c3JjID0gZWxlbVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDZmcuc3JjQXR0cik7XG5cblx0XHRcdFx0aWYoaXNJbWcpIHtcblx0XHRcdFx0XHRwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRcdFx0aXNQaWN0dXJlID0gcGFyZW50ICYmIHJlZ1BpY3R1cmUudGVzdChwYXJlbnQubm9kZU5hbWUgfHwgJycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZmlyZXNMb2FkID0gZGV0YWlsLmZpcmVzTG9hZCB8fCAoKCdzcmMnIGluIGVsZW0pICYmIChzcmNzZXQgfHwgc3JjIHx8IGlzUGljdHVyZSkpO1xuXG5cdFx0XHRcdGV2ZW50ID0ge3RhcmdldDogZWxlbX07XG5cblx0XHRcdFx0YWRkQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmxvYWRpbmdDbGFzcyk7XG5cblx0XHRcdFx0aWYoZmlyZXNMb2FkKXtcblx0XHRcdFx0XHRjbGVhclRpbWVvdXQocmVzZXRQcmVsb2FkaW5nVGltZXIpO1xuXHRcdFx0XHRcdHJlc2V0UHJlbG9hZGluZ1RpbWVyID0gc2V0VGltZW91dChyZXNldFByZWxvYWRpbmcsIDI1MDApO1xuXHRcdFx0XHRcdGFkZFJlbW92ZUxvYWRFdmVudHMoZWxlbSwgcmFmU3dpdGNoTG9hZGluZ0NsYXNzLCB0cnVlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGlzUGljdHVyZSl7XG5cdFx0XHRcdFx0Zm9yRWFjaC5jYWxsKHBhcmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyksIGhhbmRsZVNvdXJjZXMpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoc3Jjc2V0KXtcblx0XHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSgnc3Jjc2V0Jywgc3Jjc2V0KTtcblx0XHRcdFx0fSBlbHNlIGlmKHNyYyAmJiAhaXNQaWN0dXJlKXtcblx0XHRcdFx0XHRpZihyZWdJZnJhbWUudGVzdChlbGVtLm5vZGVOYW1lKSl7XG5cdFx0XHRcdFx0XHRjaGFuZ2VJZnJhbWVTcmMoZWxlbSwgc3JjKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZWxlbS5zcmMgPSBzcmM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoaXNJbWcgJiYgKHNyY3NldCB8fCBpc1BpY3R1cmUpKXtcblx0XHRcdFx0XHR1cGRhdGVQb2x5ZmlsbChlbGVtLCB7c3JjOiBzcmN9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihlbGVtLl9sYXp5UmFjZSl7XG5cdFx0XHRcdGRlbGV0ZSBlbGVtLl9sYXp5UmFjZTtcblx0XHRcdH1cblx0XHRcdHJlbW92ZUNsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5sYXp5Q2xhc3MpO1xuXG5cdFx0XHRyQUYoZnVuY3Rpb24oKXtcblx0XHRcdFx0Ly8gUGFydCBvZiB0aGlzIGNhbiBiZSByZW1vdmVkIGFzIHNvb24gYXMgdGhpcyBmaXggaXMgb2xkZXI6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTc3MzEgKDIwMTUpXG5cdFx0XHRcdHZhciBpc0xvYWRlZCA9IGVsZW0uY29tcGxldGUgJiYgZWxlbS5uYXR1cmFsV2lkdGggPiAxO1xuXG5cdFx0XHRcdGlmKCAhZmlyZXNMb2FkIHx8IGlzTG9hZGVkKXtcblx0XHRcdFx0XHRpZiAoaXNMb2FkZWQpIHtcblx0XHRcdFx0XHRcdGFkZENsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5mYXN0TG9hZGVkQ2xhc3MpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzd2l0Y2hMb2FkaW5nQ2xhc3MoZXZlbnQpO1xuXHRcdFx0XHRcdGVsZW0uX2xhenlDYWNoZSA9IHRydWU7XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRcdFx0aWYgKCdfbGF6eUNhY2hlJyBpbiBlbGVtKSB7XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBlbGVtLl9sYXp5Q2FjaGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgOSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVsZW0ubG9hZGluZyA9PSAnbGF6eScpIHtcblx0XHRcdFx0XHRpc0xvYWRpbmctLTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdHJ1ZSk7XG5cdFx0fSk7XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSBlbGVtIHsgRWxlbWVudCB9XG5cdFx0ICovXG5cdFx0dmFyIHVudmVpbEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbSl7XG5cdFx0XHRpZiAoZWxlbS5fbGF6eVJhY2UpIHtyZXR1cm47fVxuXHRcdFx0dmFyIGRldGFpbDtcblxuXHRcdFx0dmFyIGlzSW1nID0gcmVnSW1nLnRlc3QoZWxlbS5ub2RlTmFtZSk7XG5cblx0XHRcdC8vYWxsb3cgdXNpbmcgc2l6ZXM9XCJhdXRvXCIsIGJ1dCBkb24ndCB1c2UuIGl0J3MgaW52YWxpZC4gVXNlIGRhdGEtc2l6ZXM9XCJhdXRvXCIgb3IgYSB2YWxpZCB2YWx1ZSBmb3Igc2l6ZXMgaW5zdGVhZCAoaS5lLjogc2l6ZXM9XCI4MHZ3XCIpXG5cdFx0XHR2YXIgc2l6ZXMgPSBpc0ltZyAmJiAoZWxlbVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDZmcuc2l6ZXNBdHRyKSB8fCBlbGVtW19nZXRBdHRyaWJ1dGVdKCdzaXplcycpKTtcblx0XHRcdHZhciBpc0F1dG8gPSBzaXplcyA9PSAnYXV0byc7XG5cblx0XHRcdGlmKCAoaXNBdXRvIHx8ICFpc0NvbXBsZXRlZCkgJiYgaXNJbWcgJiYgKGVsZW1bX2dldEF0dHJpYnV0ZV0oJ3NyYycpIHx8IGVsZW0uc3Jjc2V0KSAmJiAhZWxlbS5jb21wbGV0ZSAmJiAhaGFzQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ2ZnLmVycm9yQ2xhc3MpICYmIGhhc0NsYXNzKGVsZW0sIGxhenlTaXplc0NmZy5sYXp5Q2xhc3MpKXtyZXR1cm47fVxuXG5cdFx0XHRkZXRhaWwgPSB0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenl1bnZlaWxyZWFkJykuZGV0YWlsO1xuXG5cdFx0XHRpZihpc0F1dG8pe1xuXHRcdFx0XHQgYXV0b1NpemVyLnVwZGF0ZUVsZW0oZWxlbSwgdHJ1ZSwgZWxlbS5vZmZzZXRXaWR0aCk7XG5cdFx0XHR9XG5cblx0XHRcdGVsZW0uX2xhenlSYWNlID0gdHJ1ZTtcblx0XHRcdGlzTG9hZGluZysrO1xuXG5cdFx0XHRsYXp5VW52ZWlsKGVsZW0sIGRldGFpbCwgaXNBdXRvLCBzaXplcywgaXNJbWcpO1xuXHRcdH07XG5cblx0XHR2YXIgYWZ0ZXJTY3JvbGwgPSBkZWJvdW5jZShmdW5jdGlvbigpe1xuXHRcdFx0bGF6eVNpemVzQ2ZnLmxvYWRNb2RlID0gMztcblx0XHRcdHRocm90dGxlZENoZWNrRWxlbWVudHMoKTtcblx0XHR9KTtcblxuXHRcdHZhciBhbHRMb2FkbW9kZVNjcm9sbExpc3RuZXIgPSBmdW5jdGlvbigpe1xuXHRcdFx0aWYobGF6eVNpemVzQ2ZnLmxvYWRNb2RlID09IDMpe1xuXHRcdFx0XHRsYXp5U2l6ZXNDZmcubG9hZE1vZGUgPSAyO1xuXHRcdFx0fVxuXHRcdFx0YWZ0ZXJTY3JvbGwoKTtcblx0XHR9O1xuXG5cdFx0dmFyIG9ubG9hZCA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRpZihpc0NvbXBsZXRlZCl7cmV0dXJuO31cblx0XHRcdGlmKERhdGUubm93KCkgLSBzdGFydGVkIDwgOTk5KXtcblx0XHRcdFx0c2V0VGltZW91dChvbmxvYWQsIDk5OSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXG5cdFx0XHRpc0NvbXBsZXRlZCA9IHRydWU7XG5cblx0XHRcdGxhenlTaXplc0NmZy5sb2FkTW9kZSA9IDM7XG5cblx0XHRcdHRocm90dGxlZENoZWNrRWxlbWVudHMoKTtcblxuXHRcdFx0YWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgYWx0TG9hZG1vZGVTY3JvbGxMaXN0bmVyLCB0cnVlKTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdF86IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdHN0YXJ0ZWQgPSBEYXRlLm5vdygpO1xuXG5cdFx0XHRcdGxhenlzaXplcy5lbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobGF6eVNpemVzQ2ZnLmxhenlDbGFzcyk7XG5cdFx0XHRcdHByZWxvYWRFbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobGF6eVNpemVzQ2ZnLmxhenlDbGFzcyArICcgJyArIGxhenlTaXplc0NmZy5wcmVsb2FkQ2xhc3MpO1xuXG5cdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXG5cdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXG5cdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VzaG93JywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRpZiAoZS5wZXJzaXN0ZWQpIHtcblx0XHRcdFx0XHRcdHZhciBsb2FkaW5nRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIGxhenlTaXplc0NmZy5sb2FkaW5nQ2xhc3MpO1xuXG5cdFx0XHRcdFx0XHRpZiAobG9hZGluZ0VsZW1lbnRzLmxlbmd0aCAmJiBsb2FkaW5nRWxlbWVudHMuZm9yRWFjaCkge1xuXHRcdFx0XHRcdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdGxvYWRpbmdFbGVtZW50cy5mb3JFYWNoKCBmdW5jdGlvbiAoaW1nKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoaW1nLmNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVudmVpbEVsZW1lbnQoaW1nKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZih3aW5kb3cuTXV0YXRpb25PYnNlcnZlcil7XG5cdFx0XHRcdFx0bmV3IE11dGF0aW9uT2JzZXJ2ZXIoIHRocm90dGxlZENoZWNrRWxlbWVudHMgKS5vYnNlcnZlKCBkb2NFbGVtLCB7Y2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlLCBhdHRyaWJ1dGVzOiB0cnVlfSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRvY0VsZW1bX2FkZEV2ZW50TGlzdGVuZXJdKCdET01Ob2RlSW5zZXJ0ZWQnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcblx0XHRcdFx0XHRkb2NFbGVtW19hZGRFdmVudExpc3RlbmVyXSgnRE9NQXR0ck1vZGlmaWVkJywgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgdHJ1ZSk7XG5cdFx0XHRcdFx0c2V0SW50ZXJ2YWwodGhyb3R0bGVkQ2hlY2tFbGVtZW50cywgOTk5KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcblxuXHRcdFx0XHQvLywgJ2Z1bGxzY3JlZW5jaGFuZ2UnXG5cdFx0XHRcdFsnZm9jdXMnLCAnbW91c2VvdmVyJywgJ2NsaWNrJywgJ2xvYWQnLCAndHJhbnNpdGlvbmVuZCcsICdhbmltYXRpb25lbmQnXS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpe1xuXHRcdFx0XHRcdGRvY3VtZW50W19hZGRFdmVudExpc3RlbmVyXShuYW1lLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYoKC9kJHxeYy8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSkpe1xuXHRcdFx0XHRcdG9ubG9hZCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbmxvYWQpO1xuXHRcdFx0XHRcdGRvY3VtZW50W19hZGRFdmVudExpc3RlbmVyXSgnRE9NQ29udGVudExvYWRlZCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMpO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQob25sb2FkLCAyMDAwMCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihsYXp5c2l6ZXMuZWxlbWVudHMubGVuZ3RoKXtcblx0XHRcdFx0XHRjaGVja0VsZW1lbnRzKCk7XG5cdFx0XHRcdFx0ckFGLl9sc0ZsdXNoKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3R0bGVkQ2hlY2tFbGVtZW50cygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Y2hlY2tFbGVtczogdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyxcblx0XHRcdHVudmVpbDogdW52ZWlsRWxlbWVudCxcblx0XHRcdF9hTFNMOiBhbHRMb2FkbW9kZVNjcm9sbExpc3RuZXIsXG5cdFx0fTtcblx0fSkoKTtcblxuXG5cdHZhciBhdXRvU2l6ZXIgPSAoZnVuY3Rpb24oKXtcblx0XHR2YXIgYXV0b3NpemVzRWxlbXM7XG5cblx0XHR2YXIgc2l6ZUVsZW1lbnQgPSByQUZJdChmdW5jdGlvbihlbGVtLCBwYXJlbnQsIGV2ZW50LCB3aWR0aCl7XG5cdFx0XHR2YXIgc291cmNlcywgaSwgbGVuO1xuXHRcdFx0ZWxlbS5fbGF6eXNpemVzV2lkdGggPSB3aWR0aDtcblx0XHRcdHdpZHRoICs9ICdweCc7XG5cblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCdzaXplcycsIHdpZHRoKTtcblxuXHRcdFx0aWYocmVnUGljdHVyZS50ZXN0KHBhcmVudC5ub2RlTmFtZSB8fCAnJykpe1xuXHRcdFx0XHRzb3VyY2VzID0gcGFyZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzb3VyY2UnKTtcblx0XHRcdFx0Zm9yKGkgPSAwLCBsZW4gPSBzb3VyY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcblx0XHRcdFx0XHRzb3VyY2VzW2ldLnNldEF0dHJpYnV0ZSgnc2l6ZXMnLCB3aWR0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYoIWV2ZW50LmRldGFpbC5kYXRhQXR0cil7XG5cdFx0XHRcdHVwZGF0ZVBvbHlmaWxsKGVsZW0sIGV2ZW50LmRldGFpbCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gZWxlbSB7RWxlbWVudH1cblx0XHQgKiBAcGFyYW0gZGF0YUF0dHJcblx0XHQgKiBAcGFyYW0gW3dpZHRoXSB7IG51bWJlciB9XG5cdFx0ICovXG5cdFx0dmFyIGdldFNpemVFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW0sIGRhdGFBdHRyLCB3aWR0aCl7XG5cdFx0XHR2YXIgZXZlbnQ7XG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXG5cdFx0XHRpZihwYXJlbnQpe1xuXHRcdFx0XHR3aWR0aCA9IGdldFdpZHRoKGVsZW0sIHBhcmVudCwgd2lkdGgpO1xuXHRcdFx0XHRldmVudCA9IHRyaWdnZXJFdmVudChlbGVtLCAnbGF6eWJlZm9yZXNpemVzJywge3dpZHRoOiB3aWR0aCwgZGF0YUF0dHI6ICEhZGF0YUF0dHJ9KTtcblxuXHRcdFx0XHRpZighZXZlbnQuZGVmYXVsdFByZXZlbnRlZCl7XG5cdFx0XHRcdFx0d2lkdGggPSBldmVudC5kZXRhaWwud2lkdGg7XG5cblx0XHRcdFx0XHRpZih3aWR0aCAmJiB3aWR0aCAhPT0gZWxlbS5fbGF6eXNpemVzV2lkdGgpe1xuXHRcdFx0XHRcdFx0c2l6ZUVsZW1lbnQoZWxlbSwgcGFyZW50LCBldmVudCwgd2lkdGgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgdXBkYXRlRWxlbWVudHNTaXplcyA9IGZ1bmN0aW9uKCl7XG5cdFx0XHR2YXIgaTtcblx0XHRcdHZhciBsZW4gPSBhdXRvc2l6ZXNFbGVtcy5sZW5ndGg7XG5cdFx0XHRpZihsZW4pe1xuXHRcdFx0XHRpID0gMDtcblxuXHRcdFx0XHRmb3IoOyBpIDwgbGVuOyBpKyspe1xuXHRcdFx0XHRcdGdldFNpemVFbGVtZW50KGF1dG9zaXplc0VsZW1zW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHR2YXIgZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyA9IGRlYm91bmNlKHVwZGF0ZUVsZW1lbnRzU2l6ZXMpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdF86IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGF1dG9zaXplc0VsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShsYXp5U2l6ZXNDZmcuYXV0b3NpemVzQ2xhc3MpO1xuXHRcdFx0XHRhZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZWRVcGRhdGVFbGVtZW50c1NpemVzKTtcblx0XHRcdH0sXG5cdFx0XHRjaGVja0VsZW1zOiBkZWJvdW5jZWRVcGRhdGVFbGVtZW50c1NpemVzLFxuXHRcdFx0dXBkYXRlRWxlbTogZ2V0U2l6ZUVsZW1lbnRcblx0XHR9O1xuXHR9KSgpO1xuXG5cdHZhciBpbml0ID0gZnVuY3Rpb24oKXtcblx0XHRpZighaW5pdC5pICYmIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUpe1xuXHRcdFx0aW5pdC5pID0gdHJ1ZTtcblx0XHRcdGF1dG9TaXplci5fKCk7XG5cdFx0XHRsb2FkZXIuXygpO1xuXHRcdH1cblx0fTtcblxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0aWYobGF6eVNpemVzQ2ZnLmluaXQpe1xuXHRcdFx0aW5pdCgpO1xuXHRcdH1cblx0fSk7XG5cblx0bGF6eXNpemVzID0ge1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHsgTGF6eVNpemVzQ29uZmlnUGFydGlhbCB9XG5cdFx0ICovXG5cdFx0Y2ZnOiBsYXp5U2l6ZXNDZmcsXG5cdFx0YXV0b1NpemVyOiBhdXRvU2l6ZXIsXG5cdFx0bG9hZGVyOiBsb2FkZXIsXG5cdFx0aW5pdDogaW5pdCxcblx0XHR1UDogdXBkYXRlUG9seWZpbGwsXG5cdFx0YUM6IGFkZENsYXNzLFxuXHRcdHJDOiByZW1vdmVDbGFzcyxcblx0XHRoQzogaGFzQ2xhc3MsXG5cdFx0ZmlyZTogdHJpZ2dlckV2ZW50LFxuXHRcdGdXOiBnZXRXaWR0aCxcblx0XHRyQUY6IHJBRixcblx0fTtcblxuXHRyZXR1cm4gbGF6eXNpemVzO1xufVxuKSk7XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiXG5pbXBvcnQgQXJyb3cgZnJvbSBcIi4uL2NvbXBvbmVudHMvYXJyb3dcIlxuaW1wb3J0IHsgUGFyYWxsYXggfSBmcm9tICdyZWFjdC1wYXJhbGxheCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge29wZW5NZW51fSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJ1xuaW1wb3J0IENsaWVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9jbGllbnRzJ1xuaW1wb3J0IHthZGRDbGFzc1RvQ3Vyc29yLHJlbW92ZUNsYXNzRnJvbUN1cnNvcn0gZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcbmltcG9ydCB7IE1PQklMRV9CUkVBS1BPSU5UIH0gZnJvbSBcIi4uL2NvbmZpZ1wiXG5pbXBvcnQge2xhenlzaXplc30gZnJvbSBcImxhenlzaXplc1wiXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzTW9iaWxlOmZhbHNlLFxuICAgICAgdW5kZXJsaW5lRXhwYW5kOiBmYWxzZSxcbiAgICAgIGJhY2tncm91bmRTdHlsZXM6IHsgdG9wOiBcIjBcIiwgbGVmdDogXCIwXCIgfSxcbiAgICAgIGJhY2tncm91bmRSZWFkeTogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kU2hvdzogZmFsc2UsXG4gICAgICBsb2FkaW5nTG9nb1JlYWR5OiBmYWxzZSxcbiAgICAgIGFuaW1hdGU6IGZhbHNlLFxuICAgICAgbWVudUJ0bkNvbG9yOlwiYmxhY2tcIlxuICAgIH07XG4gICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIHRoaXMucmVsbGF4UmVmID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgICB0aGlzLm5vdFBlcmZvcm1lZEFuaW1hdGlvbiA9IHRydWVcbiAgICB0aGlzLndoaXRlTWVudVNlY3Rpb25zID0gW1JlYWN0LmNyZWF0ZVJlZigpXVxuICB9XG4gIC8vIGhhbmRsZVNjcm9sbCA9ICgpPT57XG4gIC8vICAgZm9yKGxldCBpPTA7aTx0aGlzLndoaXRlTWVudVNlY3Rpb25zLmxlbmd0aDtpKyspe1xuICAvLyAgICAgbGV0IGJvdW5kaW5nVmFscyA9IHRoaXMud2hpdGVNZW51U2VjdGlvbnNbaV0uY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAvLyAgICAgaWYoYm91bmRpbmdWYWxzLnRvcCA8IDAgJiYgKGJvdW5kaW5nVmFscy50b3AgKiAtMSA8IGJvdW5kaW5nVmFscy5oZWlnaHQpKXtcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVudUJ0bkNvbG9yOlwid2hpdGVcIn0pXG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHttZW51QnRuQ29sb3I6XCJibGFja1wifSlcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH1cbiAgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgIHRoaXMucG9zaXRpb25JbWFnZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2lzTW9iaWxlOndpbmRvdy5pbm5lcldpZHRoIDwgTU9CSUxFX0JSRUFLUE9JTlQ/dHJ1ZTpmYWxzZX0pXG4gIH1cbiAgcG9zaXRpb25JbWFnZShjYikge1xuICAgIGxldCBiYWNrZ3JvdW5kU3R5bGVzID0geyBib3R0b206IFwiMHJlbVwiLCBsZWZ0OiBcIi0zMS41JVwiLCB3aWR0aDogXCIyMDglXCIgfTtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA0MDApXG4gICAgICBiYWNrZ3JvdW5kU3R5bGVzID0geyBib3R0b206IFwiMHJlbVwiLCBsZWZ0OiBcIi0zMS41JVwiLCB3aWR0aDogXCIyMDglXCIgfTtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA2NTApXG4gICAgICBiYWNrZ3JvdW5kU3R5bGVzID0geyBib3R0b206IFwiMFwiLCBsZWZ0OiBcIi0yMC41JVwiLCB3aWR0aDogXCIxMjAlXCIgfTtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxMDI0KVxuICAgICAgLy8gYmFja2dyb3VuZFN0eWxlcyA9IHt0b3A6XCItMS41cmVtXCIsbGVmdDpcIi0yMC41JVwiLHdpZHRoOlwiMTIwJVwifVxuICAgICAgLy8gYmFja2dyb3VuZFN0eWxlcyA9IHsgdG9wOiBcIi0wLjVyZW1cIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgICBiYWNrZ3JvdW5kU3R5bGVzID0geyBib3R0b206IFwiMFwiLCBsZWZ0OiBcIi03LjUlXCIgfTtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxMzY2KVxuICAgICAgLy8gYmFja2dyb3VuZFN0eWxlcyA9IHsgdG9wOiBcIi0wLjVyZW1cIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgICBiYWNrZ3JvdW5kU3R5bGVzID0geyBib3R0b206IFwiMFwiLCBsZWZ0OiBcIi03LjUlXCIgfTtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxNDQwKVxuICAgICAgLy8gYmFja2dyb3VuZFN0eWxlcyA9IHsgdG9wOiBcIi0xLjVyZW1cIiwgbGVmdDogXCItNy41JVwiIH07XG4gICAgICBiYWNrZ3JvdW5kU3R5bGVzID0geyBib3R0b206IFwiMFwiLCBsZWZ0OiBcIi03LjUlXCIgfTtcbiAgICAvLyB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGJhY2tncm91bmRTdHlsZXMgfSwgKCkgPT4ge1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIGNiKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5zdGF0ZS5iYWNrZ3JvdW5kUmVhZHkgJiZcbiAgICAgIHRoaXMuc3RhdGUubG9hZGluZ0xvZ29SZWFkeSAmJlxuICAgICAgdGhpcy5ub3RQZXJmb3JtZWRBbmltYXRpb25cbiAgICApIHtcbiAgICAgIHRoaXMucG9zaXRpb25JbWFnZSgpO1xuICAgICAgdGhpcy5ub3RQZXJmb3JtZWRBbmltYXRpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMucHJvcHMub3Blbk1lbnUoZmFsc2UpO1xuICAgICAgLy8gdGhpcy5tb3VzZUV2ZW50cygpXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFuaW1hdGU6IHRydWUgfSwoKT0+e1xuICAgICAgICAgIC8vIHRoaXMucHJvcHMucmVtb3ZlQ2xhc3NGcm9tQ3Vyc29yKFwibGFyZ2VyXCIpICBcbiAgICAgICAgICAvLyB0aGlzLnByb3BzLnJlbW92ZUNsYXNzRnJvbUN1cnNvcihcIndoaXRlXCIpICBcbiAgICAgICAgfSk7XG4gICAgICB9LCA3NTApO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtpc01vYmlsZTp3aW5kb3cuaW5uZXJXaWR0aCA8IE1PQklMRV9CUkVBS1BPSU5UP3RydWU6ZmFsc2V9KVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlUmVzaXplKVxuICAgIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlU2Nyb2xsKVxuICAgIGNvbnN0IGxvYWRpbmdMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbG9hZGluZ0xvZ28uc3JjID0gXCIvaW1hZ2VzL2xvYWRpbmdfbG9nby5wbmdcIjtcbiAgICBsb2FkaW5nTG9nby5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZ0xvZ29SZWFkeTogdHJ1ZSB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBcIi9pbWFnZXMvaG9tZS1jb3Zlci5qcGdcIjtcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJhY2tncm91bmRSZWFkeTogdHJ1ZSB9KTtcbiAgICB9XG4gICAgdGhpcy5wcm9wcy5yZW1vdmVDbGFzc0Zyb21DdXJzb3IoXCJ3aGl0ZVwiKVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5oYW5kbGVSZXNpemUpXG4gICAgLy8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5oYW5kbGVTY3JvbGwpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIFxuLy8gICAgIGZvciBzZW8gcHVycG9zZVxuICAgICAgY29uc3Qgc2NoZW1hRGF0YT17XG5cbiAgICAgIFwiQGNvbnRleHRcIjogXCJodHRwOi8vc2NoZW1hLm9yZ1wiLFxuICAgICAgXCJAdHlwZVwiOiBcInNlcnZpY2VcIixcbiAgICAgIFwibmFtZVwiOiBcIk9wcG9zYWJsZSBUaHVtYnNcIixcbiAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9vcHBvc2FibGUtdGh1bWJzLnZlcmNlbC5hcHAvXCJcbiAgIH1cblxuICAgSlNPTi5zdHJpbmdpZnkoc2NoZW1hRGF0YSlcbiAgICBcbiAgICBcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCBuYXZQb3NpdGlvbj1cImFic29sdXRlXCIgbmF2VGV4dENvbG9yPVwiYmxhY2tcIiBtZW51QnRuQ29sb3I9e3RoaXMuc3RhdGUubWVudUJ0bkNvbG9yfSBwYWdlPVwiaG9tZVwiPlxuICAgICAgICA8SGVhZD5cbiAgPG1ldGEgbmFtZT1cImdvb2dsZS1zaXRlLXZlcmlmaWNhdGlvblwiIGNvbnRlbnQ9XCJmVHA3bG9CekRUQWpYRXV0aUVjbGZzdDRjM3Z0MTN1a3RxV19kQUZUV29JXCIgLz5cbiAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cImJyYW5kIGlkZW50aXR5IGFnZW5jeSwgYnJhbmQgaWRlbnRpdHkgZGVzaWduIGFnZW5jeSwgY29ycG9yYXRlIGlkZW50aXR5IGFnZW5jeSwgYnJhbmQgaWRlbnRpdHksIGJyYW5kaW5nIGRlc2lnbiwgZGlnaXRhbCBtZWRpYSBtYW5hZ2VtZW50LGRpZ2l0YWwgbWVkaWEgYWdlbmN5LCBzb2NpYWwgbWVkaWEgYWdlbmNpZXMsZGlnaXRhbCBtZWRpYSBtYXJrZXRpbmcgY29tcGFuaWVzXCIvPlxuICAgICAgICAgIDx0aXRsZT5CcmFuZCBJZGVudGl0eSBBZ2VuY3kgfCBPcHBvc2FibGUgVGh1bWJzPC90aXRsZT5cbiAgICAgICAgICB7LyogPGgxPk9wcG9zYWJsZSBUaHVtYnM8L2gxPiAqL31cbjxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJPcHBvc2FibGUgVGh1bWJzIHdvcmsgd2l0aCBjb21wYW5pZXMgZm9yIHRoZWlyIGJyYW5kaW5nLiBJZiB5b3UgaGF2ZSBhIG5ldyBicmFuZCB0byBsYXVuY2gsIHdlIGNhbiBoZWxwIHlvdSwgcmlnaHQgZnJvbSBuYW1pbmcgaXQgdG8gZGV2ZWxvcGluZyBpdHMgaWRlbnRpdHkuXCIvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLVZUTUY3MFA3SFdcIj48L3NjcmlwdD5cbiAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2xhenlzaXplcy5taW4uanNcIiBhc3luYz48L3NjcmlwdD5cbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IGBcbiAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICdHLVZUTUY3MFA3SFcnKTtcbiAgICAgICAgICBgLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPiBcblxuIHsvKiBzY2hlbWEgaXMgaW1wbGVtZW50ZWQgKi99XG48c2NyaXB0XG4gICAgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIlxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogSlNPTi5zdHJpbmdpZnkoc2NoZW1hRGF0YSkgfX1cbiAgLz5cbiAgICAgICAgICAgICAgICAgIFxuPC9IZWFkPlxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nTG9nb1JlYWR5ICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGhpcy5zdGF0ZS5hbmltYXRlID8gXCJhbmltYXRlXCIgOiBcIlwifWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXdyYXBwZXJcIiBzdHlsZT17e2hlaWdodDpgJHt0aGlzLnByb3BzLmNvbW1vbi53aW5kb3dIZWlnaHR9cHhgfX0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9hZGluZ19sb2dvLnBuZ1wiIGFsdD0naG9tZWNvdmVyJyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0b3Atc2VjdGlvbi13cmFwcGVyIGJsYWNrLWN1cnNvciAke3RoaXMuc3RhdGUuYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJcIn1gfSBzdHlsZT17eyBoZWlnaHQ6IGAke3RoaXMucHJvcHMuY29tbW9uLndpbmRvd0hlaWdodH1weGAgfX0+XG4gICAgICAgICAgICB7LyogPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL2hvbWUtY292ZXIuanBnXCIgYmdJbWFnZUFsdD1cImhvbWUgY292ZXJcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9XCJcIj4gKi99XG4gICAgICAgICAgICA8aW1nIHN0eWxlPXt0aGlzLnN0YXRlLmJhY2tncm91bmRTdHlsZXN9IHNyYz1cIi9pbWFnZXMvaG9tZS1jb3Zlci5qcGdcIiBjbGFzc05hbWU9e2BiYWNrZ3JvdW5kYH0gcmVmPXt0aGlzLmJhY2tncm91bmRJbWFnZX0gYWx0PSdob21lY292ZXInLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yeXRlbGxlcnMgZnV0dXJhLWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBNRUVUIFRIRSBTVE9SWVRFTExFUlMgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxsbyBoZWx2ZXRpY2EtbmV1ZS1jb25kZW5zZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZWxsb1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsLXNlcnZpY2UgYmlnLWNhc2xvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5kZXBlbmRlbnQ8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdlbmN5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtZG93bi1hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvdyBkb3duXCI+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGxvb2tpbmctZm9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXRleHRcIj48aDE+QnJhbmQgSWRlbnRpdHkgQWdlbmN5PC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDwvUGFyYWxsYXg+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGl0ZS1mYWRlXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWNhdGVnb3JpZXMgdGV4dC1jZW50ZXIgcGFkZGVkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgSW5zaWdodHMgLyBCcmFuZCBJZGVudGl0eSAvIFBhY2thZ2luZyAvIEFkdmVydGlzaW5nIC8gRGlnaXRhbCAvIEdyYXBoaWNzIC8gRmlsbXNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8taXRlbXNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2RkIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL0JpZ0Jhbnlhbi5qcGdcIiBiZ0ltYWdlQWx0PVwiYmlnIGJhbnlhblwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9iaWctYmFueWFuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkJpZyBCYW55YW4gPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPkFuIEl0YWxpYW4gd2luZW1ha2VyLiBBIHBhc3Npb25hdGUgYnJhbmQgdGVhbS4gQW5kIHVzLiBZZWFycyBvZiB0w6p0ZS3DoC10w6p0ZXMgYW5kIHJlc2VhcmNoLWRyaXZlbiBpbnNpZ2h0cyBsZWQgdXMgdG8gcmVjcmVhdGUgdGhlIHBhY2thZ2luZyBhbmQgY29tbXVuaWNhdGlvbiBzdHJhdGVneSBmb3IgQmlnIEJhbnlhbi4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGV2ZW4gbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vbGFuZ29vci5qcGdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9sYW5nb29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkwnYW5nb29yIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5XaW5lIGNhbiBiZSBlbGVnYW50LiBXaW5lIGNhbiBiZSBzb3BoaXN0aWNhdGVkLiBCdXQgd2luZSBhbmQgZnVuPyBIZXJl4oCZcyBob3cgd2UgbWFycmllZCDigJhmdW7igJkgYW5kIGEgbmV3IGJyYW5kIG9mIHdpbmVzIGZyb20gQmlnIEJhbnlhbiwga25vd24gZm9yIGl0cyBwcmVtaXVtIHdpbmVzLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZGQgbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vRW5jaGFudGV1ci5qcGdcIiBiZ0ltYWdlQWx0PVwiZW5jaGFudGV1clwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHMvZW5jaGFudGV1clwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5FbmNoYW50ZXVyIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPkl04oCZcyBGcmVuY2gsIGl04oCZcyByb21hbnRpYyBhbmQgaXTigJlzIHNvIHZlcnkgZmxvcmFsLiBIb3cgY2FuIHdlIG5vdCBmYWxsIGluIGxvdmUgd2l0aCBFbmNoYW50ZXVyPyBXZSBoYXZlIEstZHJhbWEgZmFucyBvbiBvdXIgdGVhbSB3aG8gYWJzb2x1dGVseSBsb3ZlIHRoaXMgYnJhbmQhPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBldmVuIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL2Z5bmQuanBnXCIgYmdJbWFnZUFsdD1cImxhbmdvb3JcIiBzdHJlbmd0aD17MjAwfSBjbGFzc05hbWU9XCJwb3J0Zm9saW8taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2Z5bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+RllORCA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+U2VlZGVkIGluIHRoZSBpZGVhIG9mIHNlbGYtZXhwcmVzc2lvbiwgRllORCBpbnNwaXJlZCB1cyB3aXRoIGl0cyBmdW5jdGlvbmFsIGNsb3RoaW5nIGxpbmVzLiBGcm9tIHN0cmF0ZWd5IHRvIGlkZW50aXR5IGFuZCBicmFuZCBhcmNoaXRlY3R1cmUgZGVzaWduLCB3ZSBoZWxwZWQgYnJpbmcgdGhpcyBicmFuZCB0byBsaWZlLiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2RkIGxhcmdlci1jdXJzb3Igd2hpdGUtY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9DaGFuZHJpa2EzLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2NoYW5kcmlrYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm8td3JhcHBlciBmb3JtYXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tdGl0bGUgbmV1ZnJlaXRcIj5DaGFuZHJpa2EgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPkhlcmXigJlzIGEgYnJhbmQgd2UgYWxsIGdyZXcgdXAgd2l0aC4gQW5kIHlldCwgaXQgbWFuYWdlZCB0byBzdXJwcmlzZSB1cyB3aXRoIGl0cyBzZWNyZXRzLiBXZSBzaGFyZWQgdGhlc2UgbGl0dGxlIG51Z2dldHMgd2l0aCB0aGUgd29ybGQgaW4gb3VyIGNhbXBhaWduLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZXZlbiBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9TYW50b29yLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPVwicG9ydGZvbGlvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy9zYW50b29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPlNhbnRvb3IgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPldobyBkb2VzbuKAmXQgcmVtZW1iZXIgdGhlIGNsYXNzaWMg4oCcbXVtbXnigJ0gYWRzISBJdCBnaXZlcyB1cyBncmVhdCBwcmlkZSB0byB3b3JrIG9uIGNhbXBhaWducyBmb3IgYSBicmFuZCB0aGF04oCZcyBhcyByZWxldmFudCB0b2RheSBhcyBpdCB3YXMgYSBmZXcgZGVjYWRlcyBhZ28uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9kZCBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9Wb2lKZWFucy5wbmdcIiBiZ0ltYWdlQWx0PVwibGFuZ29vclwiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT17YHBvcnRmb2xpby1pdGVtICR7dGhpcy5zdGF0ZS5pc01vYmlsZT9cIndoaXRlLW1lbnUtYnRuXCI6XCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cy92b2ktamVhbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+Vk9JIEplYW5zIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3J0Zm9saW8tZGVzY3JpcHRpb25cIj5UaGUgdmVyeSBpZGVhIG9mIHRoZXNlIGRlbmltcyBpbnNwaXJlZCB1cyEgVk9JIGhhcyBlcmdvbm9taWNhbGx5IGVuZ2luZWVyZWQgZGVuaW1zIHRoYXQgY2FsbGVkIGZvciBlZGd5LCBmYXNoaW9uIGZvcndhcmQgY29tbXVuaWNhdGlvbi4gQW5kIHdlIHJldmVsZWQgaW4gaXQuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGV2ZW4gbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8UGFyYWxsYXggYmdJbWFnZT1cIi9pbWFnZXMvcG9ydGZvbGlvL0ljZWJ1cmcxLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL2ljZWJ1cmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC1pbmZvLXdyYXBwZXIgZm9ybWF0MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLXRpdGxlIG5ldWZyZWl0XCI+SWNlQnVyZyA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdy1yaWdodFwiPjxBcnJvdyBkaXJlY3Rpb249XCJyaWdodFwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+SW50ZW5zZSBjcmF2aW5ncyBmb3IgYnVyZ2VycyBhbmQgc2hha2VzIGZlZCBvdXIgYnJhaW5zIGFzIHdlIHdvcmtlZCBvbiB0aGUgYnJhbmQgaWRlYSBhbmQgaWRlbnRpdHkgZm9yIHRoaXMgVUstYmFzZWQgZ291cm1ldCBidXJnZXIgY2hhaW4uPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9kZCBtaWEtYnktdGFuaXNocSBsYXJnZXItY3Vyc29yIHdoaXRlLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFsbGF4IGJnSW1hZ2U9XCIvaW1hZ2VzL3BvcnRmb2xpby9NaWExLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJsYW5nb29yXCIgc3RyZW5ndGg9ezIwMH0gY2xhc3NOYW1lPXtgcG9ydGZvbGlvLWl0ZW0gJHt0aGlzLnN0YXRlLmlzTW9iaWxlP1wid2hpdGUtbWVudS1idG5cIjpcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzL21pYS1ieS10YW5pc2hxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPk1pYSAtIFRhbmlzaHEgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3ctcmlnaHRcIj48QXJyb3cgZGlyZWN0aW9uPVwicmlnaHRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby1kZXNjcmlwdGlvblwiPlRoZXNlIGZpbG1zIGFyZSBhIGNvbGxlY3Rpb24gb2Ygc3RvcmllcyBvZiBJbmRpYW4gd29tZW4gd2hvIGluc3BpcmUgeW91IHdpdGggdGhlaXIgcmVzaWxpZW5jZSwgY2hhcm0geW91IHdpdGggdGhlaXIgcHJlc2VuY2UgYW5kIGF3ZSB5b3Ugd2l0aCB0aGVpciBhY2hpZXZlbWVudHMuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGV2ZW4gbGFyZ2VyLWN1cnNvciB3aGl0ZS1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhbGxheCBiZ0ltYWdlPVwiL2ltYWdlcy9wb3J0Zm9saW8vR3JhcGhpY3MxLmpwZ1wiIGJnSW1hZ2VBbHQ9XCJncmFwaGljc1wiIHN0cmVuZ3RoPXsyMDB9IGNsYXNzTmFtZT1cInBvcnRmb2xpby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtaW5mby13cmFwcGVyIGZvcm1hdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcnRmb2xpby10aXRsZSBuZXVmcmVpdFwiPkdyYXBoaWNzIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImFycm93LXJpZ2h0XCI+PEFycm93IGRpcmVjdGlvbj1cInJpZ2h0XCIgLz48L3NwYW4+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ydGZvbGlvLWRlc2NyaXB0aW9uXCI+QSBkaWdpdGFsIGFydCBwcm9qZWN0IHRoYXQgbGVkIHVzIHRvIGNyZWF0ZSBlZGd5LCBtb2Rlcm4gZ3JhcGhpY3MgZm9yIGNsb3RoaW5nIGFuZCBtZXJjaGFuZGlzZS48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibm8tY3NzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHBsb3JlLW1vcmUgdGV4dC1jZW50ZXIgcGFkZGVkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicm93c2VcIj5icm93c2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6XCI0LjZyZW1cIn19PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJleHBsb3JlLWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3cgZGlyZWN0aW9uPVwiZG93blwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlcyBwb3NpdGlvbi1yZWxhdGl2ZSBwYWRkZWQtY29udGVudCB3aGl0ZS1jdXJzb3Igd2hpdGUtY3Vyc29yIHdoaXRlLW1lbnUtYnRuXCIgcmVmPXt0aGlzLndoaXRlTWVudVNlY3Rpb25zWzBdfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWhlYWRpbmcgbW9yZS1sZXR0ZXItc3BhY2luZyBmdXR1cmEtbGlnaHQgc2xpZ2h0bHktbGFyZ2VyLXRleHQgeWVsbG93LXRleHRcIj5TRVJWSUNFUzwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtbGlzdHNcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2VydmljZS1pdGVtcyBsaXN0LXN0eWxlLW5vbmUgd2hpdGUtdGV4dCBsYXJnZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBvcHBpbnMtcmVndWxhclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL3Byb2plY3RzJywgcXVlcnk6IHsgZmlsdGVyOiAnaW5zaWdodHMnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGFyZ2VyLWN1cnNvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSW5zaWdodHNcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdicmFuZC1pZGVudGl0eScgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQnJhbmQgSWRlbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ3BhY2thZ2luZycgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUGFja2FnaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdhZHZlcnRpc2luZycgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWR2ZXJ0aXNpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2RpZ2l0YWwnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIERpZ2l0YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwb3BwaW5zLXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9wcm9qZWN0cycsIHF1ZXJ5OiB7IGZpbHRlcjogJ2RpZ2l0YWwnIH0sfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsYXJnZXItY3Vyc29yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEdyYXBoaWNzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicG9wcGlucy1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvcHJvamVjdHMnLCBxdWVyeTogeyBmaWx0ZXI6ICdmaWxtcycgfSx9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxhcmdlci1jdXJzb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsbXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJza2lsbHMgbGlzdC1zdHlsZS1ub25lIHNsaWdodGx5LWxhcmdlci10ZXh0IGZ1dHVyYS1saWdodCB5ZWxsb3ctdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPGxpPkNSRUFUSVZFPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5JTlNJR0hULURSSVZFTjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+Q1VMVFVSQUxMWSBSRUxFVkFOVDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1pbWFnZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zZXJ2aWNlcy1iZy0yLnBuZ1wiIGNsYXNzTmFtZT1cIndpZHRoLTEwMFwiICBhbHQ9J2hvbWVjb3ZlcicvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LW1vYmlsZSBoaWRlLWRlc2t0b3AgdGV4dC1jZW50ZXJcIiBzdHlsZT17e21hcmdpblRvcDpcIjcuMnJlbVwifX0+XG4gICAgICAgICAgICAgICAgPEFycm93IGRpcmVjdGlvbj1cImRvd25cIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8Q2xpZW50cyAvPlxuICAgICAgICAgICAgPGltZyBkYXRhLXNyYz1cIi9pbWFnZXMvd2F2ZS1ibGFjay5naWZcIiBjbGFzc05hbWU9XCJ3aWR0aC0xMDAgd2F2ZSBsYXp5bG9hZFwiIGFsdD0naG9tZWNvdmVyJyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyF0aGlzLnN0YXRlLmxvYWRpbmdMb2dvUmVhZHkgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxhY2stYmdcIj48L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLndoaXRlLWZhZGV7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwcmVtO1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LDI1NSwyNTUsIDEpKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApLCByZ2JhKDI1NSwyNTUsMjU1LCAxKSk7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHJnYmEoMjU1LDI1NSwyNTUsIDEpKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgd2hpdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFycm93LXJpZ2h0e1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucC1pbmZvLXdyYXBwZXI6aG92ZXIgLmFycm93LXJpZ2h0LC5wb3J0Zm9saW8taXRlbTpob3ZlciAuYXJyb3ctcmlnaHR7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDFyZW0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAud2F2ZXtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgLy8gYm90dG9tOiAtNzglO1xuICAgICAgICAgICAgICBib3R0b206MDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1zIGxpIGF7XG4gICAgICAgICAgICAgIGNvbG9yOiNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pdGVtcyBsaSBhOmhvdmVye1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6I0Y5RUQzMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWl0ZW1zIGxpOmhvdmVye1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGluc01lZGl1bUl0YWxpYyxzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucC1pbmZvLXdyYXBwZXJ7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvcm1hdDEgLnAtaW5mb3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICBib3R0b206IDdyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuaGVsbG8gLmNoaWxke1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLnN0b3J5dGVsbGVycyAuY2hpbGR7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuZnVsbC1zZXJ2aWNlIC5jaGlsZHtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC44cztcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAuYW5pbWF0ZSAubG9va2luZy1mb3IgLmNoaWxke1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5leHBsb3JlLW1vcmV7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTo0LjZyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6OHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlLWxpc3RzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXN7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNi41cmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2tpbGxzIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnJlbTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2LjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VydmljZS1pbWFnZXtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICByaWdodDogLTUlO1xuICAgICAgICAgICAgICB0b3A6IC0xJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDQ3JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZXJ2aWNlc3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDojMDAwMDAwO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo4LjhyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjI1cmVtO1xuICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9ydGZvbGlve1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOjhyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cmVtO1xuICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXN7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxN3JlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTUlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTUlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtcyAucm93IC5ldmVue1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOi04cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby10aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6NC42cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtLmZvcm1hdDIgLmltYWdlLXdyYXBwZXIgaW1ne1xuICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1kZXNjcmlwdGlvbntcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ldmVuIC5mb3JtYXQyIC5wb3J0Zm9saW8taW5mb3tcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtYXQyIC5wb3J0Zm9saW8taW5mb3tcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDozcmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nOjAgNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybWF0MSAucG9ydGZvbGlvLWluZm97XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBib3R0b206IDhyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb3JtYXQxe1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMjUlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ldmVuIC5mb3JtYXQxe1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSkgMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvcnRmb2xpby1jYXRlZ29yaWVze1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm90dG9tLXRleHR7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNC41cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjhyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaG9tZS1kb3duLWFycm93e1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NHJlbTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZsb2F0aW5nO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OjEuNHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW5pbWF0ZSAuaG9tZS1kb3duLWFycm93e1xuICAgICAgICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZsb2F0aW5nIHtcbiAgICAgICAgICAgICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsICAwcHgpOyB9XG4gICAgICAgICAgICAgIDY1JSAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNXB4KTsgfVxuICAgICAgICAgICAgICB0byAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTBweCk7IH0gICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3Rvcnl0ZWxsZXJzIHtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS43cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ke3RoaXMucHJvcHMuY29tbW9uLndpbmRvd0hlaWdodCArIDEwMH1weCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9hZGluZy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvYWRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxhY2stYmd7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvYWRpbmctd3JhcHBlciBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxMDBweCk7XG4gICAgICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDU2cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvcC1zZWN0aW9uLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRvcC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWxsbyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmMjA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnJlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MC44O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZ1bGwtc2VydmljZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MTQwNDI7O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgdG9wOiAzcmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAxLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFuaW1hdGUgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMy41cmVtO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAzLjVyZW07XG4gICAgICAgICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0IGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3QgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVuZGVybGluZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMC4xcmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMXJlbTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC43ODUsIDAuMTM1LCAwLjE1LCAwLjg2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0OmhvdmVyIC51bmRlcmxpbmUsXG4gICAgICAgICAgICAudW5kZXJsaW5lLmV4cGFuZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDZyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnJvd3Nle1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOi0xcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICAgICAgICAgICAgLnRleHR7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5oZWxsb3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTZyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmZ1bGwtc2VydmljZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc3Rvcnl0ZWxsZXJze1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDowO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ib3R0b20tdGV4dHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wb3J0Zm9saW8taXRlbXN7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvcnRmb2xpby1pdGVtcyAucm93IC5ldmVue1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubWlhLWJ5LXRhbmlzaHF7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDotNXJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2VydmljZS1saXN0cyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLWhlYWRpbmd7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnNlcnZpY2UtaXRlbXN7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6bm9uZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuc2tpbGxze1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlLWltYWdlIHtcbiAgICAgICAgICAgICAgICAvLyByaWdodDogLTEwJTtcbiAgICAgICAgICAgICAgICAvLyB0b3A6YXV0bztcbiAgICAgICAgICAgICAgICAvLyBib3R0b206IC0xJTtcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogNTclO1xuICAgICAgICAgICAgICAgIC8vIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zZXJ2aWNlc3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo4LjhyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLndoaXRlLWZhZGV7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6M3JlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZnVsbC1zZXJ2aWNle1xuICAgICAgICAgICAgICAgIHRvcDowO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5zdG9yeXRlbGxlcnMge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnBvcnRmb2xpb3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo0cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsb3JlLW1vcmV7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo0cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5leHBsb3JlLWFycm93e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjFyZW07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmJyb3dzZXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOi0ycmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IGNvbW1vbiB9KSB7XG4gIHJldHVybiB7XG4gICAgY29tbW9uLFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtvcGVuTWVudSxhZGRDbGFzc1RvQ3Vyc29yLHJlbW92ZUNsYXNzRnJvbUN1cnNvcn0pKEhvbWUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==