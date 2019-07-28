import Translations from '@revisohq/translator-client'
import json from './translations.json'

const l10n = window.top.Econ == null
? { languageCode: 'en-GB' }
: window.top.Econ.require('l10n')

const translations = new Translations(json, 'en-GL')
const textsForCurrentLanguage = translations.getTextsForLanguageCode(l10n.languageCode)

export default textsForCurrentLanguage
