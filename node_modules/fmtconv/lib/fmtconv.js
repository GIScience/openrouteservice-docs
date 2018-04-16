/**
 * Created by WindomZ on 17-4-12.
 */
'use strict'

const converter = require('./converter')
const transcode = require('./transcode')

module.exports = converter.fmtconv

module.exports.stringJSON2YAML = transcode.stringJSON2YAML
module.exports.stringYAML2JSON = transcode.stringYAML2JSON
module.exports.stringJSON2JSON = transcode.stringJSON2JSON
module.exports.stringYAML2YAML = transcode.stringYAML2YAML
