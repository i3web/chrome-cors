#!/usr/bin/env node

require('chrome-launcher').launch({
  chromeFlags: ['--disable-web-security'],
});