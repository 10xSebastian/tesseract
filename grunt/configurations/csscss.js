module.exports = {
  options: {
    bundleExec: true,
    failWhenDuplicates: true,
    ignoreProperties: '',
    ignoreSelectors: [
      '.hide-on-small',
      '.hide-on-medium',
      '.hide-on-large',
      '.show-on-small',
      '.show-on-medium',
      '.show-on-large',
      '.display-block-on-small',
      '.display-block-on-medium',
      '.display-block-on-large',
      '.break-on-small',
      '.break-on-medium',
      '.break-on-large'
    ],
    minMatch: 1,
    outputJson: true
  },
  serve: {
    src: ['.tmp/tesseract.css']
  }
};


