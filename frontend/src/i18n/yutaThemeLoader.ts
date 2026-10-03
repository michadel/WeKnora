// Yuta 主題外部翻譯載入器
// 這個檔案是外加的，不會修改核心 i18n 檔案
// 在 i18n 初始化後呼叫此函式來合併 Yuta 主題翻譯

import type { MessageTree } from 'vue-i18n'

// 各語系的外部翻譯
import { yutaThemeTranslations as zhTW } from './locales/yuta-zh-TW.ts'
import { yutaThemeTranslations as zhCN } from './locales/yuta-zh-CN.ts'
import { yutaThemeTranslations as enUS } from './locales/yuta-en-US.ts'
import { yutaThemeTranslations as jaJP } from './locales/yuta-ja-JP.ts'
import { yutaThemeTranslations as koKR } from './locales/yuta-ko-KR.ts'
import { yutaThemeTranslations as ruRU } from './locales/yuta-ru-RU.ts'

const yutaTranslations: Record<string, MessageTree> = {
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  'en-US': enUS,
  'ja-JP': jaJP,
  'ko-KR': koKR,
  'ru-RU': ruRU
}

/**
 * 深層合併兩個物件
 */
function deepMerge<T extends Record<string, unknown>>(base: T, patch: Record<string, unknown>): T {
  const result = { ...base }
  for (const key of Object.keys(patch)) {
    const value = patch[key]
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      const baseValue = base[key]
      if (baseValue && typeof baseValue === 'object' && !Array.isArray(baseValue)) {
        result[key] = deepMerge(baseValue as Record<string, unknown>, value as Record<string, unknown>) as T[Extract<keyof T, string>]
      } else {
        result[key] = value as T[Extract<keyof T, string>]
      }
    } else {
      result[key] = value as T[Extract<keyof T, string>]
    }
  }
  return result
}

/**
 * 將 Yuta 主題翻譯合併到 i18n 實例中
 * 在 i18n 初始化後呼叫此函式
 */
export function loadYutaThemeTranslations(i18nInstance: any): void {
  if (!i18nInstance || !i18nInstance.global) {
    console.warn('[Yuta Theme] i18n instance not available')
    return
  }

  const locale = i18nInstance.global.locale?.value || i18nInstance.global.locale || 'zh-CN'
  const yutaTranslationsForLocale = yutaTranslations[locale]

  if (!yutaTranslationsForLocale) {
    console.warn(`[Yuta Theme] No translations found for locale: ${locale}`)
    return
  }

  // 合併翻譯到當前 locale
  const currentMessages = i18nInstance.global.messages.value?.[locale] || {}
  const merged = deepMerge(currentMessages, yutaTranslationsForLocale)
  
  if (i18nInstance.global.messages.value) {
    i18nInstance.global.messages.value[locale] = merged
  }

  console.log(`[Yuta Theme] Loaded translations for locale: ${locale}`)
}

/**
 * 檢查是否已載入 Yuta 主題翻譯
 */
export function isYutaThemeLoaded(locale: string): boolean {
  return !!yutaTranslations[locale]
}

// 列出所有支援的語系
export const SUPPORTED_YUTA_LOCALES = Object.keys(yutaTranslations)
