/*

Browser Detection

This script provides browser detection functionalities
it also provides a "match" function to either match a certain browser or an array of browsers

Here are some examples of userAgent outputs

  InternetExplorer
    Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko/20100101 Firefox/12.0;
    Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1;
    Mozilla/5.0 (Windows; U; MSIE 9.0; WIndows NT 9.0; en-US))
    Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0;)
    Mozilla/5.0 (Windows; U; MSIE 7.0; Windows NT 6.0; en-US)
    Mozilla/4.0(compatible; MSIE 7.0b; Windows NT 6.0)

  FireFox
    Mozilla/5.0 (Windows NT 6.1; WOW64; rv:6.0a2) Gecko/20110613 Firefox/6.0a2
    Mozilla/5.0 (X11; Linux i686; rv:6.0) Gecko/20100101 Firefox/6.0
    Mozilla/5.0 (X11; Linux i686 on x86_64; rv:5.0a2) Gecko/20110524 Firefox/5.0a2
    Mozilla/5.0 (X11; U; Linux i586; de; rv:5.0) Gecko/20100101 Firefox/5.0
    Mozilla/5.0 (X11; U; Linux i686; pl-PL; rv:1.9.0.2) Gecko/20121223 Ubuntu/9.25 (jaunty) Firefox/3.8

  Chrome
    Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.6 (KHTML, like Gecko) Chrome/16.0.897.0 Safari/535.6
    Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.860.0 Safari/535.2
    Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.1 (KHTML, like Gecko) Ubuntu/11.04 Chromium/14.0.825.0 Chrome/14.0.825.0 Safari/535.1
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_3) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.32 Safari/535.1
    Mozilla/5.0 (X11; CrOS i686 12.433.109) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/12.0.742.93 Safari/534.30

  Safari
    Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1
    Mozilla/5.0 (Windows; U; Windows NT 6.1; sv-SE) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4
    Mozilla/5.0 (X11; U; Linux x86_64; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/531.2+
    Mozilla/5.0 (Windows; U; Windows NT 5.1; cs-CZ) AppleWebKit/525.28.3 (KHTML, like Gecko) Version/3.2.3 Safari/525.29

  Opera
    Opera/9.80 (Windows NT 6.1; U; es-ES) Presto/2.9.181 Version/12.00
    Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50
    Opera/9.80 (X11; Linux x86_64; U; pl) Presto/2.7.62 Version/11.00
    Opera/9.80 (Windows NT 6.1; U; pl) Presto/2.6.31 Version/10.70
    Opera/9.80 (X11; Linux x86_64; U; en) Presto/2.2.15 Version/10.00
    Opera/9.70 (Linux ppc64 ; U; en) Presto/2.2.1
    Opera/9.50 (X11; Linux x86_64; U; pl)
*/


(function() {
  window.BrowserDetection = {
    detectChromeVersion: function() {
      return this.getAgent().match(/Chrome\/\d*\.*\d*\.*\d*\.*\d*/).join().replace(/Chrome\//, "");
    },
    detectFirefoxVersion: function() {
      return this.getAgent().match(/Firefox\/\d*\.*\d*/).join().replace(/Firefox\//, "");
    },
    detectSafariVersion: function() {
      return this.getAgent().match(/Version\/\d*\.*\d*\.*\d*/).join().replace(/Version\//, "");
    },
    detectIEVersion: function() {
      if (this.getAgent().match(/Windows.*?rv:.*?\) like Gecko?/)) {
        return this.getAgent().match(/rv:\d+\.\d+/).join().replace(/rv:/, '');
      } else {
        return this.getAgent().match(/MSIE \d*\.*\d*/).join().replace(/MSIE /, "");
      }
    },
    detectOperaVersion: function() {
      var match;
      if ((match = this.getAgent().match(/Version\/\d+\.\d+/)) != null) {
        return match.join().replace(/Version\//, "");
      } else {
        return this.getAgent().match(/Opera\/\d+.\d+/).join().replace(/Opera\//, "");
      }
    },
    getAgent: function() {
      var _ref;
      return (_ref = this.agent) != null ? _ref : navigator.userAgent;
    },
    match: function(browsers) {
      var browser, result, supported, _i, _len,
        _this = this;
      if (!(browsers instanceof Array)) {
        browsers = Array(browsers);
      }
      result = false;
      for (_i = 0, _len = browsers.length; _i < _len; _i++) {
        browser = browsers[_i];
        supported = browser.name.toLowerCase() === BrowserDetection.name().toLowerCase() && ((browser.version == null) || (function() {
          return BrowserDetection.major() >= Number(browser.version);
        })());
        if (supported) {
          result = true;
        }
      }
      return result;
    },
    major: function() {
      var _ref;
      return parseFloat(((_ref = this.version()) != null ? _ref : "0.0").split('.')[0]);
    },
    name: function() {
      if (this.getAgent().match(/Chrome\/\d*\.*\d*\.*\d*\.*\d*/)) {
        return "Chrome";
      }
      if (this.getAgent().match(/Firefox\/\d*\.*\d*/) && !this.getAgent().match(/like Gecko/)) {
        return "Firefox";
      }
      if (this.getAgent().match(/Version\/\d*\.*\d*\.*\d* Safari/)) {
        return "Safari";
      }
      if (this.getAgent().match(/MSIE \d*\.*\d*/) || this.getAgent().match(/Windows.*?rv:.*?\) like Gecko?/)) {
        return "Internet Explorer";
      }
      if (this.getAgent().match(/^Opera/)) {
        return "Opera";
      }
      return "UKNOWN";
    },
    setAgent: function(agent) {
      return this.agent = agent;
    },
    version: function() {
      if (this.name() === "Chrome") {
        return this.detectChromeVersion();
      }
      if (this.name() === "Firefox") {
        return this.detectFirefoxVersion();
      }
      if (this.name() === "Safari") {
        return this.detectSafariVersion();
      }
      if (this.name() === "Internet Explorer") {
        return this.detectIEVersion();
      }
      if (this.name() === "Opera") {
        return this.detectOperaVersion();
      }
    }
  };

}).call(this);