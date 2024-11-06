<template>
    <div class="Logboday">
        <div class="Loghead">
            <div class="left">
                <ul>
                    <li @click="goto('/pc')" title="回到推荐页">
                        {{ $t('NAVBAR.recommend') }}</li>
                </ul>
            </div>
            <div class="center"></div>
            <div class="right">
                <Lang class="lang" title="点击切换语言"></Lang>
            </div>
        </div>
        <div class="Logbody">
            <div class="header">
                <h1 style="border-bottom: 1px solid #ededed;">日志</h1>
                <img v-for="(doc, index) in shieldsList" :key="index" :src="doc.url" style="margin-right:5px">
                <p>部分参考文档:
                    <a v-for="(doc, index) in documentList" :key="index" :href="doc.url" target="_blank">
                        {{ doc.name }}
                    </a>
                </p>
                <a href="https://github.com/Anmuz666/anmuz666.github.io">GitHub仓库</a>
                <p style="border-bottom: 1px solid #ededed;"></p>
            </div>
            <div class="main">
                <!--main-->
                <p>9. 测试1.8<br>&emsp;更新时间：<time>2024-11-06</time><br></p>
                <ol>
                    <li>PC推荐页加入了<strong>偶像联系生第一名的出道视频</strong></li>
                    <li>移动端首页加入了<strong>偶像联系生第一名的出道视频</strong>，临时移除原列表</li>
                </ol>
                <p>8. 测试1.7<br>&emsp;更新时间：<time>2024-11-05</time><br></p>
                <ol>
                    <li>PC添加<strong>页面加载进度条</strong></li>
                </ol>
                <p>7. 测试1.6<br>&emsp;更新时间：<time>2024-11-04</time><br></p>
                <ol>
                    <li>PC搬运<strong>超Q弹跳跃游戏-谁能逃出生天?</strong>小游戏<a href="https://code.juejin.cn/pen/7166586991231008805"
                            target="_blank">原地址传送门</a></li>
                    <li>PC搬运<strong>压扁小鸟</strong>小游戏<a href="https://www.jq22.com/jquery-info17757"
                            target="_blank">原地址传送门</a></li>
                </ol>
                <p>6. 测试1.5<br>&emsp;更新时间：<time>2024-11-01</time><br></p>
                <ol>
                    <li>PC搬运<strong>盖塔楼</strong>小游戏<a href="https://code.juejin.cn/pen/7165883287708270625s"
                            target="_blank">原地址传送门</a></li>
                </ol>
                <p>5. 测试1.4<br>&emsp;更新时间：<time>2024-10-24</time><br></p>
                <ol>
                    <li>添加<strong>vue-waterfall-plugin</strong>组件</li>
                    <li>重构图片仓库页的body部分，图片展示方式改为<ins>瀑布流</ins></li>
                    <li>强化PC端和移动端的分离，添加<strong>路由守卫</strong></li>
                    <li><strong>分离开发环境，生产环境，本地环境</strong></li>
                </ol>

                <p>4. 测试1.3<br>&emsp;更新时间：<time>2024-10-22</time><br></p>
                <ol>
                    <li>PC日志页添加<strong>shields徽章</strong></li>
                    <li>移除<del>字魂鸿鹄九天体</del></li>
                </ol>

                <p>3. 测试1.2<br>&emsp;更新时间：<time>2024-10-21</time><br></p>
                <ol>
                    <li>为了防止刷新404，把路由模式从<strong style="color: green;">history</strong>换成了<strong
                            style="color: green;">hash</strong></li>
                </ol>

                <p>2. 测试1.1<br>&emsp;更新时间：<time>2024-10-18</time><br></p>
                <ol>
                    <li>删除隐藏<del>高德地图测试页</del></li>
                    <li>删除<del>vue-amap</del>和<del>vue-aplayer</del>组件</li>
                    <li>PC导航栏优化<strong>保持置顶</strong></li>
                </ol>

                <p>1. 测试1.0<br>&emsp;更新时间：<time>2024-10-17</time><br></p>
                <ol>
                    <li>PC添加<strong>日志页面</strong></li>
                    <li>移除PC推荐页的<del>日历</del></li>
                    <li>删除<del>kuan-vue-flip-clock</del>和<del>vue-calendar-component</del>组件</li>
                    <li>统一PC页面<ins>导航栏</ins></li>
                    <li>PC添加<strong>vue-particles</strong>，推荐页添加<strong>粒子效果</strong></li>
                    <li>PC推荐页添加<strong>鼠标点击爱心效果</strong></li>
                </ol>

            </div>
            <div class="footer">
                <!--footer-->
                Copyright © 2024 暗木z
                <br><span>Powered by GitHub Pages</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            shieldsList: [
                { url: 'https://img.shields.io/badge/Node.js-v14.16.0-brightgreen' },
                { url: 'https://img.shields.io/badge/npm-6.14.11-brightgreen' },
                { url: 'https://img.shields.io/badge/vue2-2.6.14-brightgreen' },
                { url: 'https://img.shields.io/badge/vueRouter-3.5.1-brightgreen' },
                { url: 'https://img.shields.io/badge/axios-1.6.2-green' },
                { url: 'https://img.shields.io/badge/sass-1.79.5-green' },
                { url: 'https://img.shields.io/badge/sassLoader-8.0.2-green' },
                { url: 'https://img.shields.io/badge/vueI18n-8.22.2-green' },
                { url: 'https://img.shields.io/badge/vue waterfall plugin-3.3.2-green' },
                { url: 'https://img.shields.io/badge/vueParticles-1.0.9-yellow' },
                { url: 'https://img.shields.io/badge/jsCookie-4.2.0-yellow' },
                { url: 'https://img.shields.io/badge/Elementui-2.15.14-yellow' },
                { url: 'https://img.shields.io/badge/echarts-5.4.3-yellow' },
                { url: 'https://img.shields.io/badge/cryptoJs-4.2.0-yellow' },
                { url: 'https://img.shields.io/badge/vuex-3.6.2-lightgrey' },
                { url: 'https://img.shields.io/badge/less-4.2.0-lightgrey' },
                { url: 'https://img.shields.io/badge/jquery-3.5.1-lightgrey' },
                { url: 'https://img.shields.io/badge/animate.css-4.1.1-lightgrey' },
            ],
            documentList: [
                { name: 'HTML', url: 'https://www.runoob.com/html/html-tutorial.html' },
                { name: 'JavaScript', url: 'https://www.runoob.com/js/js-tutorial.html' },
                { name: 'vue2', url: 'https://v2.cn.vuejs.org/v2/guide/' },
                { name: 'Vue Router', url: 'https://router.vuejs.org/zh/guide/' },
                { name: 'vuex', url: 'https://vuex.vuejs.org/zh/guide/' },
                { name: 'axios', url: 'https://www.axios-http.cn/docs/intro' },
                { name: 'element-ui', url: 'https://element.eleme.cn/#/zh-CN/component/layout' },
                { name: 'vue-i18n', url: 'https://vue-i18n.intlify.dev/guide/introduction.html' }
            ]
        };
    },
    components: {},
    created() { },
    mounted() { },
    methods: {
        goto(index) {
            if (this.$route.fullPath !== index) {
                this.$router.push(index);
            } else {
                console.log("目标位置与当前位置相同，跳过导航");
            }
        },
    }
};
</script>
<style lang="scss" scoped>
.Logboday {
    width: 100%;
    background-color: #e6e6e6;
    clear: both;
    color: #4d4d4d;
    -webkit-user-select: none;
    /* Safari 无法选中改文本 */
    -moz-user-select: none;
    /* Firefox 无法选中改文本 */
    -ms-user-select: none;
    /* IE10+/Edge 无法选中改文本 */
    user-select: none;

    /* Standard syntax 无法选中改文本 */

    .Loghead {
        position: sticky; //用于保持元素置顶
        top: 0; //用于保持元素置顶
        z-index: 1; //用于保持元素置顶
        background: #fff;
        width: 100%;
        min-width: 1280px;
        height: 48px;
        line-height: 48px;
        padding: 0 24px;
        margin: 0 auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        box-shadow: 0 2px 6px rgba(100, 100, 100, .15);
        -webkit-user-select: none;
        /* Safari 无法选中改文本 */
        -moz-user-select: none;
        /* Firefox 无法选中改文本 */
        -ms-user-select: none;
        /* IE10+/Edge 无法选中改文本 */
        user-select: none;

        /* Standard syntax 无法选中改文本 */
        .left {
            ul {
                width: auto;
                margin: 0px;
            }

            li {
                position: relative;
                display: inline-block;
                list-style: none;
                font-size: 14px;
                height: 100%;
                padding: 0 10px;
                border-top: 3px solid #fc5531;
                font-weight: 600;
                margin: 0 5px 0 0;
                background-color: transparent;
                background-image: none;
                border-color: transparent;
                color: #1b69b6;
                box-shadow: none;
            }

            li:hover {
                cursor: pointer;
                /* 鼠标移动到上面显示小手 */
                background-color: #4090df !important;
                /* 添加 !important 以确保优先级 */
                color: rgb(250, 250, 250) !important;
                /* 添加 !important 以确保优先级 */
            }

        }

    }

    .Logbody {
        width: 65%;
        min-width: 950px;
        background-color: #fff;
        margin: 0 auto;
        padding: 30px;
        margin-top: 50px;
        margin-bottom: 50px;
        box-shadow: 0 2px 6px rgba(100, 100, 100, .3);
        text-align: left;
        color: #000;
        line-height: 1.7;
        font-size: 14px;

        .header {
            padding-bottom: 5px;
            margin-top: 10px;

            a {
                padding-right: 10px;
                color: #4090df;
            }

            a:hover {
                color: #fc5531;
                cursor: pointer;
            }

            p {
                margin: 10px auto 0;
            }
        }

        .main {
            p {
                margin: 10px auto 0;
            }

            ol {
                margin: 5px auto;
            }

            li {
                margin-bottom: 0em
            }

        }

        .footer {
            color: #686868;
            text-align: center;
            min-height: 15px;
            _height: 15px;
            border-top: 1px solid #ededed;
            margin-top: 50px;
            padding-top: 10px;
            margin-bottom: 10px;
        }

    }

}

.lang {
    color: black;
    padding-right: 40px;
}

.lang:hover {
    color: rgba(78, 76, 76, 0.566);
    cursor: pointer;
}
</style>