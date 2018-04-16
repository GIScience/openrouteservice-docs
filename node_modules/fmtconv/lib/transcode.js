/**
 * Created by WindomZ on 17-4-12.
 */
'use strict'

const yaml = require('js-yaml')

/**
 * Transcode JSON to YAML string.
 *
 * @param {string|Object} doc
 * @param {boolean} [compact]
 * @return {string}
 * @api public
 */
function stringJSON2YAML (doc, compact = false) {
  if (!doc || (typeof doc !== 'string' && typeof doc !== 'object')) {
    throw new TypeError('Argument must be a string or object, and not empty: ' + doc)
  }

  let obj = doc
  if (typeof doc === 'string') {
    obj = JSON.parse(doc)
  }

  return yaml.safeDump(obj, compact ? {'flowLevel': 0} : undefined)
}

/**
 * Transcode YAML to JSON string.
 *
 * @param {string} doc
 * @param {boolean} [compact]
 * @return {string}
 * @api public
 */
function stringYAML2JSON (doc, compact = false) {
  if (!doc || typeof doc !== 'string') {
    throw new TypeError('Argument must be a string or object, and not empty: ' + doc)
  }

  let obj = yaml.safeLoad(doc)

  if (!obj || typeof obj !== 'object') {
    throw new TypeError('Argument must be in yaml format: ' + doc)
  }

  return JSON.stringify(obj, undefined, compact ? undefined : 2)
}

/**
 * Transcode JSON to JSON string.
 *
 * @param {string|Object} doc
 * @param {boolean} [compact]
 * @return {string}
 * @api public
 */
function stringJSON2JSON (doc, compact = false) {
  if (!doc || (typeof doc !== 'string' && typeof doc !== 'object')) {
    throw new TypeError('Argument must be a string or object, and not empty: ' + doc)
  }

  let obj = doc
  if (typeof doc === 'string') {
    obj = JSON.parse(doc)
  }

  return JSON.stringify(obj, undefined, compact ? undefined : 2)
}

/**
 * Transcode YAML to YAML string.
 *
 * @param {string} doc
 * @param {boolean} [compact]
 * @return {string}
 * @api public
 */
function stringYAML2YAML (doc, compact = false) {
  if (!doc || typeof doc !== 'string') {
    throw new TypeError('Argument must be a string or object, and not empty: ' + doc)
  }

  let obj = yaml.safeLoad(doc)

  if (!obj || typeof obj !== 'object') {
    throw new TypeError('Argument must be in yaml format: ' + doc)
  }

  return yaml.safeDump(obj, compact ? {'flowLevel': 0} : undefined)
}

module.exports.stringJSON2YAML = stringJSON2YAML
module.exports.stringYAML2JSON = stringYAML2JSON
module.exports.stringJSON2JSON = stringJSON2JSON
module.exports.stringYAML2YAML = stringYAML2YAML
