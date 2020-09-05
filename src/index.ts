#!/usr/bin/env node
import exportFile, { config, Config } from './logic'
import options from './params'

const {
  path = config.path,
  singleFile = config.singleFile,
  folder = config.folder,
  outputFileName = config.outputFileName
} = options

exportFile({path, singleFile, folder, outputFileName} as Config)