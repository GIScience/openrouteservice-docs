# fmtconv

[![Greenkeeper badge](https://badges.greenkeeper.io/WindomZ/fmtconv.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/WindomZ/fmtconv.svg?branch=master)](https://travis-ci.org/WindomZ/fmtconv)
[![Coverage Status](https://coveralls.io/repos/github/WindomZ/fmtconv/badge.svg?branch=master)](https://coveralls.io/github/WindomZ/fmtconv?branch=master)
[![Dependency](https://david-dm.org/WindomZ/fmtconv.svg)](https://david-dm.org/WindomZ/fmtconv)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com/)
[![License](https://img.shields.io/badge/license-Apache-green.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)

> Convert between **JSON** and **YAML** format files.

[![NPM](https://nodei.co/npm/fmtconv.png)](https://nodei.co/npm/fmtconv/)

[![fmtconv](https://img.shields.io/npm/v/fmtconv.svg)](https://www.npmjs.com/package/fmtconv)
[![status](https://img.shields.io/badge/status-stable-green.svg)](https://www.npmjs.com/package/fmtconv)

## Features

- [x] _Support_ **JSON**/**YAML** format files.
- [x] _Convert_ with **JSON**/**YAML** format files.
- [x] _Transcode_ with **JSON**/**YAML** format strings.

## Installation

### CLI executable

```bash
npm install -g fmtconv
```

### API install

```bash
npm install --save fmtconv
```

## CLI Usage

```bash
$ fmtconv -h

  Usage: fmtconv [-h] [-v] [-c] [-o file] <-i file | file>

  Convert between JSON and YAML format files.

  Options:

    -h, --help           output usage information
    -V, --version        output the version number
    -o, --output <file>  output a JSON/YAML file
    -i, --input <file>   input a JSON/YAML file
    -c, --compact        compact JSON/YAML format string
    --debug              debug mode, such as print error tracks
```

## API Usage

Here we cover the most 'useful' methods.

```javascript
const fmtconv = require('fmtconv')
```

### fmtconv (input:string, output:string)

> Convert between JSON and YAML format files.

The first string sets an input file path, 
the second string sets an output file path.

### .stringJSON2YAML (content:string)

> Transcode JSON to YAML string.

### .stringYAML2JSON (content:string)

> Transcode YAML to JSON string.

## License

The [Apache License 2.0](https://github.com/WindomZ/fmtconv/blob/master/LICENSE)
