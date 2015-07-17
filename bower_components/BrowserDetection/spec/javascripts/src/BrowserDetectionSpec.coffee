knownBrowser = [
  ["Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko/20100101 Firefox/12.0;", "Internet Explorer", "11.0", 11],
  ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36", "Chrome", "29.0.1547.57", 29],
  ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:23.0) Gecko/20100101 Firefox/23.0", "Firefox", "23.0", 23],
  ["Opera/9.80 (Macintosh; Intel Mac OS X 10.8.4) Presto/2.12.388 Version/12.16", "Opera", "12.16", 12],
  ["Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/536.30.1 (KHTML, like Gecko) Version/6.0.5 Safari/536.30.1", "Safari", "6.0.5", 6],
  ["Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1;", "Internet Explorer", "10.0", 10]
]

describe "Browser Detection", ->

  it "register itself", ->
    expect(BrowserDetection).toBeDefined()

  for browser in knownBrowser

    do (browser)->

      it "detects #{browser[1]} #{browser[2]}", ->
        BrowserDetection.setAgent browser[0]
        expect(BrowserDetection.name()).toBe browser[1]
        expect(BrowserDetection.version()).toBe browser[2]
        expect(BrowserDetection.major()).toBe browser[3]

      it "responds to match() for #{browser[1]} #{browser[2]}", ->
        BrowserDetection.setAgent browser[0]
        expect(BrowserDetection.match([{name: browser[1], version: browser[3]}])).toBe true
        expect(BrowserDetection.match([{name: browser[1]}])).toBe true
        expect(BrowserDetection.match([{name: browser[1], version: browser[3]+0.1}])).toBe false
