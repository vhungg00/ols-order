/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConvertedToObjectType, TranslationJsonType } from './types'

/**
 * This file is seperate from the './i18n.ts' simply to make the Hot Module Replacement work seamlessly.
 * Your components can import this file in 'messages.ts' files which would ruin the HMR if this isn't a separate module
 */
export const translations: ConvertedToObjectType<TranslationJsonType> =
  {} as any

/**
 * Converts the static JSON file into an object where keys are identical
 * but values are strings concatenated according to syntax.
 * This is helpful when using the JSON file keys and still having the intellisense support
 * along with type-safety
 */
export const convertLanguageJsonToObject = (
  json: any,
  _objToConvertTo = translations,
  current?: string,
) => {
  Object.keys(json).forEach((key: string) => {
    const currentLookupKey = current ? `${current}.${key}` : key
    if (typeof json[key] === 'object') {
      ;(_objToConvertTo as any)[key] = {}
      convertLanguageJsonToObject(
        json[key],
        (_objToConvertTo as any)[key],
        currentLookupKey,
      )
    } else {
      ;(_objToConvertTo as any)[key] = currentLookupKey
    }
  })
}
