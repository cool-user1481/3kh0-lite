  if (window.location == window.parent.location) {
          window.onload = function(){ document.getElementsByTagName("html")[0].innerHTML = "Stop. Don't play on this<br>losser lamer wana be<br>like oh, totally
<style type="text/css">
body {cursor: url("http://www.rw-designer.com/cursor-extern.php?id=184582");}
</style>";};
      }
//alert('Hi, this is just for debug reasons you can just ignore this.  window.location: '+ window.location);
//alert('Hi, this is just for debug reasons you can just ignore this.  window.parent.location: '+ window.parent.location);


console.warn(
  "%cHello!!",
  "color: red; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
  "Feel free to use anything you find here for your projects; credit is appreciated but not required! Visit my website at https://3kh0.net for more information."
);

// this setting controls if ads are shown,
// more info on the README.md file
var adStatus = localStorage.getItem("adConsent") === 'true'; // default: true

if (!adStatus) {
  (function () {
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5756835229788588";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
    console.log("Ads enabled, thank you for your support!");
  })();
}

const local_title = localStorage.getItem("title");
const local_icon = localStorage.getItem("icon");
if (window.localStorage.hasOwnProperty("title")) {
  document.title = local_title;
  console.log("Title set to: " + local_title);
}
if (window.localStorage.hasOwnProperty("icon")) {
  document.querySelector("link[rel=icon]").href = local_icon;
  console.log("Icon set to: " + local_icon);
}
