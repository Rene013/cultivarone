(function( $ ) {
         'use strict';
         var bandwidthUTM = (function() {

         var clearCookies, config, deleteCookie, getCookie, getURLParameters, hasCookies, hasURLParameters, isNumber, setCookie, setUTMCookies, stringIsNotEmpty, writeURLParametersToCookies;

         config = {
             domain: 'bandwidth.com',
             expire: 90,
             utms: ['utm_campaign', 'utm_content', 'utm_term', 'utm_medium', 'utm_source']
         };

         stringIsNotEmpty = function _stringIsNotEmpty(string) {
             return (string !== null && string !== undefined && typeof string === 'string' && string.length > 0);
         };


         isNumber = function _isNumber(value) {
             return typeof value === 'number' && isFinite(value);
         };

         deleteCookie = function _deleteCookie(name) {
             if (stringIsNotEmpty(name)) {
                 setCookie(name, '', -1, config.domain);
             }
         };

         getCookie = function _getCookie(name) {
             if (stringIsNotEmpty(name)) {
                 var cookies, i, x, y;

                 cookies = document.cookie.split(';');
                 x = document.cookie.split(';');
                 y = document.cookie.split(';');

                 for (i = 0; i < cookies.length; i += 1) {
                     x = cookies[i].substr(0, cookies[i].indexOf('='));
                     y = cookies[i].substr(cookies[i].indexOf('=') + 1);
                     x = x.replace(/^\s+|\s+$/g, '');

                     if (x === name) {
                         return decodeURIComponent(y);
                     }
                 }
             }
         };

         setCookie = function _setCookie(name, val, days, domain) {
             var date, expires;

             if (stringIsNotEmpty(name)) {
                 if (isNumber(days) && days > 0) {
                     date = new Date();
                     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                     expires = '; expires=' + date.toGMTString();
                 } else {
                     expires = '; expires=' + new Date(0).toGMTString();
                 }
             }

             document.cookie = name + '=' + encodeURIComponent(val) + expires + '; path=/; domain=' + domain;
         };

         getURLParameters = function _getURLParameters() {
             // access the parameters via the returned object:
             // params.abc;

             var i, nv, params, parts;

             params = {};

             if (location.search) {
                 parts = location.search.substring(1).split('&');

                 for (i = 0; i < parts.length; i += 1) {
                     nv = parts[i].split('=');
                     if (nv[0]) {
                         params[nv[0]] = nv[1] || true;
                     }
                 }
             }

             return params;
         };

         hasURLParameters = function _hasURLParameters(urlParams) {
             var parameters = false;

             config.utms.forEach(function(element, index, array) {
                 if (stringIsNotEmpty(urlParams[element])) {
                     parameters = true;
                 }
             });

             return parameters;
         };

         hasCookies = function _hasCookies() {
             var cookies = false;

             config.utms.forEach(function(element, index, array) {
                 if (stringIsNotEmpty(getCookie(element))) {
                     cookies = true;
                 }
             });

             return cookies;
         };

         writeURLParametersToCookies = function _writeURLParametersToCookies(urlParams) {
             // set cookie corresponding to each URL paramater
             config.utms.forEach(function(element, index, array) {
                 if (stringIsNotEmpty(urlParams[element])) {
                     setCookie(element, urlParams[element], config.expire, config.domain);
                 }
             });
         };

         clearCookies = function _clearCookies() {
             // Null out the existing campaign cookies
             config.utms.forEach(function(element, index, array) {
                 setCookie(element, '', -1, config.domain);
             });
         };


         if (!String.prototype.includes) {
             String.prototype.includes = function(search, start) {
                 'use strict';
                 if (typeof start !== 'number') {
                     start = 0;
                 }

                 if (start + search.length > this.length) {
                     return false;
                 } else {
                     return this.indexOf(search, start) !== -1;
                 }
             };
         }

         setUTMCookies = function _setUTMCookies() {
             var oldReferral,
                 newReferral,
                 urlParams;

             urlParams = {};


             oldReferral = getCookie('referrer');
             newReferral = document.referrer;
             urlParams = getURLParameters();

             if (stringIsNotEmpty(oldReferral)) {
                 if (oldReferral !== newReferral) {
                     // Ignore self-referrals
                     if (stringIsNotEmpty(document.referrer) && ((document.referrer).includes('bandwidth') !== true)) {
                         // referrer
                         setCookie('referrer', document.referrer, config.expire, config.domain);
                         if (hasURLParameters(urlParams)) {
                             clearCookies();
                             writeURLParametersToCookies(urlParams);
                         } else {
                             if (hasCookies()) {
                                 clearCookies();
                             } else {
                                 writeURLParametersToCookies(urlParams);
                             }
                         }

                     } else {
                         // no referrer
                         // deleteCookie('referrer');
                     }
                 }
             } else {
                 if (stringIsNotEmpty(document.referrer) && ((document.referrer).includes('bandwidth') !== true)) {
                     setCookie('referrer', document.referrer, config.expire, config.domain);
                 }
                 if (hasURLParameters(urlParams)) {
                     clearCookies();
                     writeURLParametersToCookies(urlParams);
                 } else {
                     if (hasCookies()) {
                         //    clearCookies();
                     } else {
                         //    writeURLParametersToCookies(urlParams);
                     }
                 }
             }
         };

         return Object.freeze({
             setUTMCookies: setUTMCookies
         });
     }());


     bandwidthUTM.setUTMCookies();

     if (typeof MktoForms2 !== 'undefined' && $.isPlainObject(MktoForms2) === true) {
         MktoForms2.whenReady(function(form) {

             var getCookie, stringIsNotEmpty;

             stringIsNotEmpty = function _stringIsNotEmpty(string) {
                 return (string !== null && string !== undefined && typeof string === 'string' && string.length > 0);
             };

             getCookie = function _getCookie(name) {
                 if (stringIsNotEmpty(name)) {
                     var cookies, i, x, y;

                     cookies = document.cookie.split(';');
                     x = document.cookie.split(';');
                     y = document.cookie.split(';');

                     for (i = 0; i < cookies.length; i += 1) {
                         x = cookies[i].substr(0, cookies[i].indexOf('='));
                         y = cookies[i].substr(cookies[i].indexOf('=') + 1);
                         x = x.replace(/^\s+|\s+$/g, '');

                         if (x === name) {
                             return decodeURIComponent(y);
                         }
                     }
                 }
             };


             $("form.mktoForm input[name=utm_term__c]").val(getCookie('utm_term'));
             $("form.mktoForm input[name=utm_content__c]").val(getCookie('utm_content'));
             $("form.mktoForm input[name=utm_source__c]").val(getCookie('utm_source'));
             $("form.mktoForm input[name=utm_medium__c]").val(getCookie('utm_medium'));
             $("form.mktoForm input[name=utm_campaign__c]").val(getCookie('utm_campaign'));
             $("form.mktoForm input[name=utm_Referrer__c]").val(getCookie('referrer'));
         });
     }
})( jQuery );
