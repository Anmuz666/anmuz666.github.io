<template>
    <div class="Logboday">
        <div class="Loghead">
            <div class="left">
                <ul>
                    <li @click="goto('/pc')" title="回到推荐页">
                        {{ $t('navbar.recommend') }}</li>
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
                <p>Node.js：v14.16.0&emsp;npm：6.14.11<br></p>
                <p style="border-bottom: 1px solid #ededed;"></p>
            </div>
            <div class="main">
                <!--main-->
                <p>1.测试1.0<br>&emsp;更新时间：<time>2024-10-17</time><br>
                </p>
                <ol>
                    <li>PC添加<ins>日志页面</ins></li>
                    <li>移除PC推荐页的<del>日历</del></li>
                    <li>删除<del>kuan-vue-flip-clock</del>组件</li>
                    <li>删除<del>vue-calendar-component</del>组件</li>
                    <li>统一PC页面<strong>导航栏</strong></li>
                    <li>PC添加<ins>vue-particles</ins>，推荐页添加<strong>粒子效果</strong></li>
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
    height: 100%;
    width: 100%;
    background-color: #e6e6e6;
    clear: both;

    .Loghead {
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