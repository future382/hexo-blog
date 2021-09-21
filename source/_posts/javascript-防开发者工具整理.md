---
sticky: ""
title: JavaScript 防开发者工具整理
date: 2021-09-21 16:12:14
updated: 2021-09-21 16:12:14
tags:
  - JavaScript
categories:
  - 技术
keywords:
  - JS
  - F12
  - Chrome
  - Firefox
  - Safari
excerpt:
  - 终于，我找到了！（大雾
comments: true
---
```js

<!--StartFragment-->

navigator.userAgent == window.atob("TUh1aUcgU2VjdXJpdHkgQnJvd3Nlcg==") &&

        (window.location.href = "/havefun/");

    var element = new Image();

    function IsPC() {

        for (

            var e = navigator.userAgent,

                n = \["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"],

                t = !0,

                o = 0;

            o < n.length;

            o++

        )

            if (e.indexOf(n\[o]) > 0) {

                t = !1;

                break;

            }

        return t;

    }

    function click(e) {

        document.all &&

            ((2 != event.button && 3 != event.button) ||

                (oncontextmenu = "return false")),

            document.layers && 3 == e.which && (oncontextmenu = "return false");

    }

    Object.defineProperty(element, "id", {

        get: function () {

            document.write(

                window.atob(

                    "WW91IG5lZWQgdG8gdXNlIE1IdWlHIFNlY3VyaXR5IEJyb3dzZXIgdG8gYWNjZXNzIH4="

                )

            ),

                setTimeout(function () {

                    alert(

                        window.atob(

                            "WW91IG5lZWQgdG8gdXNlIE1IdWlHIFNlY3VyaXR5IEJyb3dzZXIgdG8gYWNjZXNzIH4="

                        )

                    );

                }, 100),

                setTimeout(function () {

                    window.location.href = "about:blank";

                }, 300);

        },

    }),

        setInterval(function () {

            "/about/" != window.location.pathname && console.debug(element);

        }, 1e3),

        IsPC() &&

            setInterval(function () {

                if ("/about/" != window.location.pathname) {

                    var e,

                        n = performance.now();

                    for (e = 0; e < 1e3; e++) console.log(e), console.clear();

                    performance.now() - n > 200 &&

                        (document.write(

                            window.atob(

                                "WW91IG5lZWQgdG8gdXNlIE1IdWlHIFNlY3VyaXR5IEJyb3dzZXIgdG8gYWNjZXNzIH4="

                            )

                        ),

                        setTimeout(function () {

                            alert(

                                window.atob(

                                    "WW91IG5lZWQgdG8gdXNlIE1IdWlHIFNlY3VyaXR5IEJyb3dzZXIgdG8gYWNjZXNzIH4="

                                )

                            );

                        }, 100),

                        setTimeout(function () {

                            window.location.href = "about:blank";

                        }, 300));

                }

            }, 500),

        "/about/" == window.location.pathname &&

            setTimeout(function () {

                (window.tempH1 = document.documentElement.clientHeight),

                    (window.tempH2 = document.documentElement.clientHeight),

                    (window.onresize = function () {

                        (window.tempH2 = document.documentElement.clientHeight),

                            window.tempH1 != window.tempH2 &&

                                (document.write(

                                    window.atob(

                                        "WW91IG5lZWQgdG8gdXNlIE1IdWlHIFNlY3VyaXR5IEJyb3dzZXIgdG8gYWNjZXNzIH4="

                                    )

                                ),

                                setTimeout(function () {

                                    alert(

                                        window.atob(

                                            "WW91IG5lZWQgdG8gdXNlIE1IdWlHIFNlY3VyaXR5IEJyb3dzZXIgdG8gYWNjZXNzIH4="

                                        )

                                    );

                                }, 100),

                                console.clear());

                    });

            }, 100),

        setInterval(function () {

            (document.onselectstart = function (e) {

                return !1;

            }),

                (document.onselectstart = function (e) {

                    return !1;

                }),

                document.layers && document.captureEvents(Event.MOUSEDOWN),

                (document.onmousedown = click),

                (document.oncontextmenu = new Function("return false;")),

                (document.onkeydown =

                    document.onkeyup =

                    document.onkeypress =

                        function () {

                            if (123 == window.event.keyCode)

                                return (window.event.returnValue = 0);

                        });

        }, 100);

<!--EndFragment-->

```

```js

<!--StartFragment-->

    (function () {

        var re = /x/;

        var i = 0;

        console.log(re);

        re.toString = function () {

            alert("请关闭控制台");

            return '第 ' + (++i) + ' 次打开控制台';

        };

    })();

<!--EndFragment-->

```

```js

<!--StartFragment-->

setInterval(function () {

        check()

    }, 100);

    var check = function () {

        function doCheck(a) {

            if (("" + a / a)\["length"] !== 1 || a % 20 === 0) {

                (function () {}

                    \["constructor"]("debugger")())

            } else {

                (function () {}

                    \["constructor"]("debugger")())

            }

            doCheck(++a)

        }

        try {

            doCheck(0)

        } catch (err) {}

    };

    check()

<!--EndFragment-->

```

```html

<script>

(function(){'use strict';const devtools={isOpen:false,orientation:undefined};const threshold=160;const

    emitEvent=(isOpen,orientation)=>{window.dispatchEvent(new

    CustomEvent('devtoolschange',{detail:{isOpen,orientation}}));};const main=({emitEvents=true}={})=>{const

    widthThreshold=window.outerWidth-window.innerWidth>threshold;const

    heightThreshold=window.outerHeight-window.innerHeight>threshold;const

    orientation=widthThreshold?'vertical':'horizontal';if(!(heightThreshold&&widthThreshold)&&((window.Firebug&&window.Firebug.chrome&&window.Firebug.chrome.isInitialized)||widthThreshold||heightThreshold)){if((!devtools.isOpen||devtools.orientation!==orientation)&&emitEvents){emitEvent(true,orientation);}

    devtools.isOpen=true;devtools.orientation=orientation;}else{if(devtools.isOpen&&emitEvents){emitEvent(false,undefined);}

    devtools.isOpen=false;devtools.orientation=undefined;}};main({emitEvents:false});setInterval(main,500);if(typeof

    module!=='undefined'&&module.exports){module.exports=devtools;}else{window.devtools=devtools;}})();

    </script>

<script>

            window.devtools.isOpen ? alert("yes") : "";

            window.devtools.orientation ? window.devtools.orientation : '';



            window.addEventListener('devtoolschange', event => {

                event.detail.isOpen ? alert("yes") : "";

                event.detail.orientation ? event.detail.orientation : '';

            });

</script>

```

```js

function consoleOpenCallback() {

        alert("您打开了");

    }! function () {

        const handler = setInterval(() => {

            const before = new Date();

            debugger;

            const after = new Date();

            const cost = after.getTime() - before.getTime();

            if (cost > 100) {

                consoleOpenCallback();

                clearInterval(handler)

            }

        }, 1000)

    }();

```

```js

    var width = window.visualViewport.width;

    var height = window.visualViewport.height;

    setInterval(function () {

        var new_width = window.visualViewport.width;

        var new_height = window.visualViewport.height;

        if (new_width < width || new_height < height) {

            eval('!function(){debugger}()')

        }

    }, 800)

```

在  `Firefox 93.0b7 ` `Chrome 93.0.961.52`环境下均有效用。