(function () {
    var _id = "a302361d958b8a6f161765015e8388cd";
    while (document.getElementById("timer" + _id)) _id = _id + "0";
    document.write("<div id='timer" + _id + "' style='min-width:308px;height:68px;'></div>");
    var _t = document.createElement("script");
    _t.src = "//megatimer.ru/timer/timer.min.js?v=1";
    var _f = function (_k) {
        var l = new MegaTimer(_id, {
            "view": [1, 1, 1, 1],
            "type": {"currentType": "1", "params": {"usertime": true, "tz": "3", "utc": 1709251200000}},
            "design": {
                "type": "circle",
                "params": {
                    "width": "5",
                    "radius": "28",
                    "line": "gradient",
                    "line-color": ["#00e0ff", "#00fa9c"],
                    "background": "opacity",
                    "direction": "direct",
                    "number-font-family": {
                        "family": "Comfortaa",
                        "link": "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size": "19",
                    "number-font-color": "#ffffff",
                    "separator-margin": "6",
                    "separator-on": false,
                    "separator-text": ":",
                    "text-on": true,
                    "text-font-family": {"family": "Arial"},
                    "text-font-size": "12",
                    "text-font-color": "#ffffff"
                }
            },
            "designId": 5,
            "theme": "black",
            "width": 308,
            "height": 68
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