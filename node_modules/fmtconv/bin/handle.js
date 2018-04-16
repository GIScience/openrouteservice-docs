/**
 * Created by WindomZ on 17-4-12.
 */
'use strict'

const path = require('path')

const fmtconv = require('../lib/fmtconv')

function * handle (param) {
  if (!param.input) {
    throw new TypeError('Argument must be a file path: ' + param.input)
  }

  let ext = path.extname(param.input).toLowerCase()
  if (ext !== '.yaml' && ext !== '.yml' && ext !== '.json') {
    throw new TypeError('File extension must be ".yaml" or ".yml" or ".json", instead of "' + ext + '"')
  }

  if (!param.output) {
    param.output = path.join(path.dirname(param.input),
      path.basename(param.input, ext) + '.fmtconv' + ext)
  } else {
    let ext = path.extname(param.output).toLowerCase()
    if (ext !== '.yaml' && ext !== '.yml' && ext !== '.json') {
      throw new TypeError('File extension must be ".yaml" or ".yml" or ".json", instead of "' + ext + '"')
    }
  }

  fmtconv(param.input, param.output, param.compact)
}

module.exports = param => new Promise(resolve => {
  handle(param).next()
  resolve()
})
