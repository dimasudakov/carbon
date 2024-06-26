(function () {
    var _id = "7d9275f627dccc32f84ed30e171b7ed2";
    while (document.getElementById("timer" + _id)) _id = _id + "0";
    document.write("<div id='timer" + _id + "' style='min-width:602px;height:128px;'></div>");
    var _t = document.createElement("script");
    _t.src = "//megatimer.ru/timer/timer.min.js?v=1";
    var _f = function (_k) {
        var l = new MegaTimer(_id, {
            "view": [1, 1, 1, 1],
            "type": {"currentType": "1", "params": {"usertime": true, "tz": "3", "utc": 1709251200000}},
            "design": {
                "type": "circle",
                "params": {
                    "width": "3",
                    "radius": "60",
                    "line": "gradient",
                    "line-color": ["#00e0ff", "#00fa9c"],
                    "background": "opacity",
                    "direction": "direct",
                    "number-font-family": {
                        "family": "Comfortaa",
                        "link": "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size": "60",
                    "number-font-color": "#ffffff",
                    "separator-margin": "15",
                    "separator-on": false,
                    "separator-text": ":",
                    "text-on": true,
                    "text-font-family": {"family": "Arial"},
                    "text-font-size": "12",
                    "text-font-color": "#ffffff"
                }
            },
            "designId": 5,
            "theme": "white",
            "width": 602,
            "height": 128
        });
        if (_k != null) l.run();
    };
    _t.onload = _f;
    _t.onreadystatechange = function () {
        if (_t.readyState == "loaded") _f(1);
    };
    var _h = document.head || document.getElementsByTagName("head")[0];
    _h.appendChild(_t);
}).call(this);