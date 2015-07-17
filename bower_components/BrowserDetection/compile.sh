#!/bin/bash
coffee --output ./ --compile ./src/browser-detection.coffee &&
coffee --output ./spec/javascripts --compile ./spec/javascripts/src/BrowserDetectionSpec.coffee
exit