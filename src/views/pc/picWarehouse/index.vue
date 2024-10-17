<template>
    <div style="height: 100%;width:100%;background-color:#1e2227">
        <div class="header">
            <div class="left">
                <ul>
                    <li @click="goto('/pc')" title="回到推荐页">
                        {{ $t('navbar.recommend') }}</li>
                    <li style=" border-top: 3px solid #fc5531;" @click="goto('/picWarehouse')" title="你已经再图片仓库了">
                        {{ $t('navbar.ImageRepository') }}</li>
                </ul>
            </div>
            <div class="center"></div>
            <div class="right">
                <Lang class="lang" title="点击切换语言"></Lang>
            </div>
        </div>
        <div style="width:100%;">
            <div style="width: calc(100% - 310px); margin: 0px auto;margin-top:10px" class="grid-container">
                <el-image v-for="item in items" :key="item.id" class="grid-item"
                    style="display:inline-block;margin-right:6px" :src="item.url" :fit="'cover'"></el-image>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            items: [

            ],
        };
    },
    components: {},
    created() {
        this.getHomelist()
    },
    mounted() {


    },
    methods: {
        goto(index) {
            if (this.$route.fullPath !== index) {
                this.$router.push(index);
            } else {
                console.log("目标位置与当前位置相同，跳过导航");
            }
        },
        getHomelist() {
            axios.get("/JSON/picWarehouse/20241015.json").then(res => {
                this.items = res.data.data;
                console.log(res.data.data);
            });
        },

    }
};
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    min-width: 1280px;
    height: 48px;
    line-height: 48px;
    padding: 0 24px;
    margin: 0 auto;
    background: #292961;
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

.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
}

.grid-item {
    background-color: #f1f1f1;

    text-align: center;
}

.lang {
    color: #a8a8cd;
    padding-right: 40px;
}

.lang:hover {
    color: #d2d2fe;
    cursor: pointer;
}
</style>