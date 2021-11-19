// eslint-disable-next-line @typescript-eslint/no-var-requires
const StyleDictionary = require('style-dictionary')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('./designTokensConfig.json')

const StyleDictionaryExtended = StyleDictionary.extend(baseConfig)

StyleDictionaryExtended.buildAllPlatforms()
