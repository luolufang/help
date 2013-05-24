function webkc_trim(a) {
	return a != null ? a.replace(/(^\s*)|(\s*$)/g, "") : a
} (function() {
	var a = navigator.appVersion.indexOf("MSIE") != -1,
	b = /webkit\/(\d+)/i.test(navigator.userAgent) && RegExp.$1 < 525,
	c = [],
	d = function() {
		for (var a = 0; a < c.length; a++) c[a]()
	},
	e = document;
	e.webkc_ready = function(f) {
		if (!a && !b && e.addEventListener) return e.addEventListener("DOMContentLoaded", f, !1);
		if (c.push(f) > 1) return;
		if (a)(function() {
			try {
				e.documentElement.doScroll("left"),
				d()
			} catch(a) {
				setTimeout(arguments.callee, 0)
			}
		})();
		else if (b) var g = setInterval(function() { / ^(loaded | complete) $ / .test(e.readyState) && (clearInterval(g), d())
		},
		0)
	}
})(),
document.onclick = function(a) {
	var b = a || window.event,
	c = b.target ? b.target: b.srcElement,
	d = webkc_trim(c.getAttribute("href"));

	if (d != null && d.indexOf("http://kuai.xunlei.com/s/") == 0) return ! 1;
	if (d != null && d.indexOf("http://kuai.xunlei.com/d/") == 0) return ! 1
},
create_kc_fu = function() {
	kc_is_mouse_down = !1;
	var a = document.body.offsetWidth;
	a = (a - 704) / 2,
	a < 0 && (a = 0),
	kc_div_left = a,
	kc_div_top = "200",
	kc_div = document.getElementById("KC_DIV_F");
	if (!kc_div) {
		kc_div = document.createElement("div"),
		kc_div.id = "KC_DIV_F",
		kc_div.style.display = "none",
		kc_div.style.left = kc_div_left + "px";
		if (navigator.appVersion.indexOf("MSIE 6") != -1) {
			var b = parseInt(document.documentElement.scrollTop) + parseInt(kc_div_top);
			kc_div.style.top = b + "px",
			kc_div.style.position = "absolute"
		} else kc_div.style.top = kc_div_top + "px",
		kc_div.style.position = "fixed";
		kc_div.style.background = "transparent",
		kc_div.style.zIndex = "9999",
		navigator.appVersion.indexOf("MSIE 6") != -1 ? kc_iframe = document.createElement('<iframe frameborder="0" scrolling="no" width="553" height="390" src="">') : (kc_iframe = document.createElement("iframe"), kc_iframe.frameBorder = 0, kc_iframe.scrolling = "no", kc_iframe.width = 553, kc_iframe.height = 390, kc_iframe.src = ""),
		kc_tuo_div = document.createElement("div"),
		kc_tuo_div.id = "KC_TUO_DIV",
		kc_tuo_div.style.position = "absolute",
		kc_tuo_div.style.top = 0,
		kc_tuo_div.style.left = "80px",
		kc_tuo_div.style.width = "427px",
		kc_tuo_div.style.height = "33px",
		kc_tuo_div.style.cursor = "move",
		kc_tuo_div.style.zIndex = "9999",
		kc_tuo_div.onmousedown = function(a) {
			var b = a || window.event;
			return dx = b.clientX,
			dy = b.clientY,
			sx = parseInt(kc_div.style.left),
			sy = parseInt(kc_div.style.top),
			kc_is_mouse_down || (kc_is_mouse_down = !0),
			!1
		},
		kc_close_div = document.createElement("div"),
		kc_close_div.id = "KC_CLOSE_DIV",
		kc_close_div.title = "\u5173\u95ed",
		kc_close_div.style.position = "absolute",
		kc_close_div.style.top = 0,
		kc_close_div.style.right = 0,
		kc_close_div.style.width = "42px",
		kc_close_div.style.height = "33px",
		kc_close_div.style.cursor = "pointer",
		kc_close_div.style.zIndex = "9999",
		kc_close_div.onclick = function() {
			kc_iframe.src = "",
			kc_iframe.attachEvent ? kc_iframe.detachEvent("onload", iframe_on) : kc_iframe.onload = "",
			kc_youhao_div.style.display = "",
			kc_div.style.display = "none"
		},
		kc_youhao_div = document.createElement("div"),
		kc_youhao_div.id = "KC_YOUHAO_DIV",
		kc_youhao_div.style.position = "absolute",
		kc_youhao_div.style.top = 0,
		kc_youhao_div.style.left = 0,
		kc_youhao_div.style.width = "553px",
		kc_youhao_div.style.height = "390px",
		kc_youhao_div.style.backgroundColor = "transparent",
		kc_youhao_div.style.zIndex = "99999",
		kc_youhao_div.innerHTML = "<div style='margin:0 auto;margin-top:150px;color:red;width:250px;font-size:20px;position: relative;'><img src='http://img.kuai.xunlei.com/img/v2/loading2.gif'><div style='width:250px;height:50px;position: absolute;top:4px;left:40px;font-size: 17px;'>\u6b63\u5728\u52aa\u529b\u52a0\u8f7d...</div></div>",
		kc_div.appendChild(kc_close_div),
		kc_div.appendChild(kc_youhao_div),
		kc_div.appendChild(kc_tuo_div),
		kc_div.appendChild(kc_iframe);
		try {
			document.body.appendChild(kc_div)
		} catch(c) {}
	}
	iframe_on = function() {
		kc_youhao_div.style.display = "none"
	};
	var d = document.getElementsByTagName("a"),
	e = d.length;
	for (var f = 0; f < e; f++) {
		var g = webkc_trim(d[f].getAttribute("href"));
		if (g != null && g.indexOf("http://kuai.xunlei.com/d/") == 0) {
			var h = d[f].innerHTML;
			h.indexOf("kuai.xunlei.com/d/") != -1 && (d[f].innerHTML = "\u8fc5\u96f7\u4e0b\u8f7d")
		}
	}
	var i = function() {
		kc_iframe.attachEvent ? kc_iframe.attachEvent("onload", iframe_on) : kc_iframe.onload = iframe_on;
		if (navigator.appVersion.indexOf("MSIE 6") != -1) {
			var a = parseInt(document.documentElement.scrollTop) + parseInt(kc_div_top);
			kc_div.style.top = a + "px"
		}
		kc_div.style.display = "",
		document.onmouseup = function() {
			return kc_is_mouse_down && (kc_is_mouse_down = !1),
			!1
		},
		document.onmousemove = function(a) {
			var b = a || window.event;
			if (kc_is_mouse_down) return kc_div_left = b.clientX - (dx - sx),
			kc_div.style.left = kc_div_left + "px",
			navigator.appVersion.indexOf("MSIE 6") != -1 ? (kc_div_top_6 = b.clientY - (dy - sy), kc_div.style.top = kc_div_top_6 + "px") : (kc_div_top = b.clientY - (dy - sy), kc_div.style.top = kc_div_top + "px"),
			!1
		}
	};
	document.onclick = function(a) {
		var b = a || window.event,
		c = b.target ? b.target: b.srcElement,
		d = c.parentNode,
		e = c.parentNode.parentNode,
		f = "";
		c.nodeName == "A" ? f = c: d.nodeName == "A" ? f = d: e.nodeName == "A" && (f = e);
		if (f == "") return;
		var g = webkc_trim(f.getAttribute("href"));
		if (g != null && g.indexOf("http://kuai.xunlei.com/s/") == 0) {
			kc_youhao_div.style.display = "";
			var h = g.substr(25);
			return kc_iframe.src = "http://kuai.xunlei.com/downloading_layout.html?s=" + h,
			i(),
			!1
		}
		if (g != null && g.indexOf("http://kuai.xunlei.com/d/") == 0) {
			kc_youhao_div.style.display = "";
			var h = g.substr(25);
			return kc_iframe.src = "http://kuai.xunlei.com/downloading_layout.html?d=" + h,
			i(),
			!1
		}
	}
},
document.webkc_ready(function() {
	create_kc_fu()
});