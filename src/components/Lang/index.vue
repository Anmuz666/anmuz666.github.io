<template>
    <el-dropdown trigger="click" @command="changeLanguage">
        <div>
            {{ $t('navbar.systemLanguage') }}
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zhcn" :disabled="'zhcn' === $i18n.locale">简体中文</el-dropdown-item>
            <el-dropdown-item command="zhtw" :disabled="'zhtw' === $i18n.locale">繁體中文</el-dropdown-item>
            <el-dropdown-item command="ja" :disabled="'ja' === $i18n.locale">日本語</el-dropdown-item>
            <el-dropdown-item command="en" :disabled="'en' === $i18n.locale">English</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
import Cookies from 'js-cookie';
export default {
    computed: {
        language() {
            return this.$store.getters.language
        }
    },
    methods: {
        changeLanguage(lang) {
            this.$i18n.locale = lang // 设置给本地的i18n插件
            Cookies.set('language',lang);
            // this.$store.dispatch('app/setLanguage', lang)
            // this.$message.success('切换多语言成功')
        }
    }
}
</script>