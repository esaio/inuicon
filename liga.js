/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'diff': '&#xe904;',
            'plus-minus': '&#xe904;',
            'watch': '&#xe905;',
            'single-window': '&#xe906;',
            'dual-window': '&#xe907;',
            'presentation': '&#xe900;',
            'clipboard': '&#xe901;',
            'ellipsis': '&#xe902;',
            'copy': '&#xe903;',
            'medicine': '&#xe60c;',
            'piyo': '&#xe608;',
            'lgtm': '&#xe608;',
            'egg': '&#xe609;',
            'wip': '&#xe609;',
            'esa': '&#xe60a;',
            'tori': '&#xe60a;',
            'toriatama': '&#xe60a;',
            'torihome': '&#xe60b;',
            'nena': '&#xe605;',
            'kusonemi': '&#xe605;',
            'suya': '&#xe605;',
            'fish': '&#xe601;',
            'sakana': '&#xe601;',
            'iwashi': '&#xe601;',
            'fishbone': '&#xe602;',
            'shachihoko': '&#xe603;',
            'shrimp': '&#xe604;',
            'ebi': '&#xe604;',
            'hone': '&#xe600;',
            'bone': '&#xe600;',
            'mola': '&#xe000;',
            'footprint': '&#xe001;',
            'inu': '&#xe001;',
            'niku': '&#xe606;',
            'meat': '&#xe606;',
            'pplog': '&#xe607;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
