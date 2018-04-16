#!/usr/bin/env node
'use strict'

const program = require('commander')

const handle = require('./handle')

let noArgs = true

program
  .version(require('../package.json').version)
  .usage('[-h] [-v] [-c] [-o file] <-i file | file>')
  .description('Convert between JSON and YAML format files.')
  .option('-o, --output <file>', 'output a JSON/YAML file', /^.+\.(json|yaml|yml)$/gi, null)
  .option('-i, --input <file>', 'input a JSON/YAML file', /^.+\.(json|yaml|yml)$/gi, null)
  .option('-c, --compact', 'compact JSON/YAML format string', null, null)
  .option('--debug', 'debug mode, such as print error tracks', null, null)
  .action((file, options) => {
    noArgs = false

    if (!options.input) {
      options.input = file
    }
    handling(options)
  })

program.parse(process.argv)

if (noArgs) {
  if (program.opts().input) {
    handling(program.opts())
  } else {
    program.outputHelp()
  }
}

function handling (options) {
  handle({
    input: options.input || '',
    output: options.output || '',
    compact: options.compact
  }).catch(e => {
    console.error(program.opts().debug ? e : e.message)
  })
}
