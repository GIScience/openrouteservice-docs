/**
 * Created by WindomZ on 17-4-12.
 */
'use strict'

const path = require('path')
const fs = require('fs')

const transcode = require('./transcode')

/**
 * Convert between JSON and YAML format files.
 *
 * @param {string} input
 * @param {string} output
 * @param {boolean} [compact]
 * @api public
 */
function fmtconv (input, output, compact = false) {
  if (!input) {
    throw new TypeError('"input" argument must be a file path')
  } else if (!output) {
    throw new TypeError('"output" argument must be a file path')
  }

  let extInput = path.extname(input).toLowerCase()
  if (extInput !== '.yaml' && extInput !== '.yml' && extInput !== '.json') {
    throw new TypeError('"input" file extension must be ".yaml" or ".yml" or ".json"')
  }

  let extOutput = path.extname(output).toLowerCase()
  if (extOutput !== '.yaml' && extOutput !== '.yml' && extOutput !== '.json') {
    throw new TypeError('"output" file extension must be ".yaml" or ".yml" or ".json"')
  }

  fs.accessSync(input, fs.R_OK)

  let doc = '' + fs.readFileSync(input)

  switch (extInput) {
    case '.yaml':
    case '.yml':
      switch (extOutput) {
        case '.json':
          fs.writeFileSync(output, transcode.stringYAML2JSON(doc, compact), null)
          break
        default:
          fs.writeFileSync(output, transcode.stringYAML2YAML(doc, compact), null)
          break
      }
      break
    case '.json':
      switch (extOutput) {
        case '.yaml':
        case '.yml':
          fs.writeFileSync(output, transcode.stringJSON2YAML(doc, compact), null)
          break
        default:
          fs.writeFileSync(output, transcode.stringJSON2JSON(doc, compact), null)
          break
      }
      break
  }
}

module.exports.fmtconv = fmtconv
