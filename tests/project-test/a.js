// @flow

import 'path'

import fs, { readFileSync, readFile as readFileAsync } from 'fs'

import d from './c/d.js'

// $Ignore
import Utilities from 'Utilities'
// $Ignore
import UtilitiesRelativePath from 'UtilitiesRelativePath'
// $Ignore
import utilityA from 'Utilities/utilityA'
// $Ignore
import templates from 'Templates'
// $Ignore
import templatesMain from 'TemplatesMain'
// $Ignore, this is a webpack resolve error
import TemplatesMainJS from 'TemplatesMain/main.js'
// $Ignore
import MyPath from 'MyPath'

const fs1 = require('fs'),
  b_folder_e = require('./e/b'),
  {d1, d2} = require('./c/d.js')

module.exports = {}