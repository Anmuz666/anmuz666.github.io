import Vue from 'vue'
import VueI18n from 'vue-i18n' // 引入国际化插件包
import Cookies from 'js-cookie'
import elementZhCnLocale from 'element-ui/lib/locale/lang/zh-CN' // element-ui 简体中文包
import elementZhTwLocale from 'element-ui/lib/locale/lang/zh-TW' // element-ui 繁体中文包
import elementJaLocale from 'element-ui/lib/locale/lang/ja' // element-ui 日语包
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui 英文包
import customZHCN from './zhcn' // 自定义简体中文包
import customZHTW from './zhtw' // 自定义简体中文包
import customJA from './ja' // 自定义英语包
import customEN from './en' // 自定义英语包


Vue.use(VueI18n) // 全局注册国际化包

const messages = {
    zhcn: {
        ...customZHCN,
        ...elementZhCnLocale
    },
    zhtw: {
        ...customZHTW,
        ...elementZhTwLocale
    },
    ja: {
        ...customJA,
        ...elementJaLocale
    },
    en: {
        ...customEN,
        ...elementEnLocale
    }
    
}
export function getLanguage() {
    const chooseLanguage = Cookies.get('language')
    console.log(Cookies.get('language'))
    if (chooseLanguage) return chooseLanguage

    // 如果没有选择语言
    const language = (navigator.language || navigator.browserLanguage).toLowerCase()
    console.log(language)
    const locales = Object.keys(messages)
    for (const locale of locales) {
        if (language.indexOf(locale) > -1) {
            return locale
        }
    }
    return 'zhcn' // 默认语言
}
const i18n = new VueI18n({
    locale: getLanguage(),
    messages
})

export default i18n