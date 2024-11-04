<template>
    <div style="height: 100%;width:100%;background-color:#f0eef5">
        <div class="header">
            <div class="left">
                <ul>
                    <li @click="goto('/pc')" title="回到推荐页">{{ $t('NAVBAR.recommend') }}</li>
                    <li style=" border-top: 3px solid #fc5531;" @click="goto('/GameLobby')" title="你已经在游戏大厅了"
                        v-if="this.NODE_ENV == 'development'"> {{ $t('NAVBAR.GameLobby') }}</li>
                    <li @click="goto('/picWarehouse')" title="这里是赛博丹炉房">{{ $t('NAVBAR.Gallery') }}</li>
                </ul>
            </div>
            <div class="center"></div>
            <div class="right">
                <Lang class="lang" title="点击切换语言"></Lang>
            </div>
        </div>
        <div class="pcBody">
            <div class="grid-container">
                <div v-for="(item, index) in GAMELIST" :key="index" class="grid-item"  @click="gotoplay(item.htmlUrl)">
                    <img alt="nothing" v-if="typeof item === 'object' && item.imgUrl &&item.side=='outside'"
                    :src="cleanedImgUrl(item.imgUrl)">
                    <img alt="nothing" v-if="typeof item === 'object' && item.imgUrl &&item.side=='inside'"
                    :src="item.imgUrl">
                    <p v-if="typeof item === 'object'">{{ item.gameName }}</p>
                </div>
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
import axios from "axios";
export default {
    data() {
        return {
            NODE_ENV: "",
            GAMELIST: []
        };
    },
    components: {},
    created() {
        //获取开发环境
        this.NODE_ENV = process.env.NODE_ENV
        this.getGAMELIST()
    },
    mounted() { },
    methods: {
        goto(index) {
            if (this.$route.fullPath !== index) {
                this.$router.push(index);
            } else {
                console.log("目标位置与当前位置相同，跳过导航");
            }
        },
        getGAMELIST() {
            axios.get("/JSON/GameLobby/20241104.json").then(res => {
                this.GAMELIST = res.data.data;
            });
        },
        cleanedImgUrl(index){
            let url='https://images.weserv.nl/?url=' + index.replace(/^https?:\/\//, '');
            return url
        },
        gotoplay(index) {
            window.open("GAME/" + index + "/index.html")
        }
    }
};
</script>

<style lang="scss" scoped>
.header {
    // position: sticky; //用于保持元素置顶
    // top: 0; //用于保持元素置顶
    // z-index: 1; //用于保持元素置顶
    background: #fff;
    z-index: 3;
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

.pcBody {
    position: relative;
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
}

.lang {
    color: black;
    padding-right: 40px;
}

.lang:hover {
    color: rgba(78, 76, 76, 0.566);
    cursor: pointer;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    /* 6 columns with equal width */
    gap: 10px;
    /* Space between the grid items */
}

.grid-item {
    border-radius: 10px;
    background-color: #ffffff;
    padding: 10px 20px 0px 20px;
    text-align: center;
    border: 1px solid #ccc;
    transition: background-color 0.3s ease, transform 0.3s ease;

    img {
        width: 100%;
        aspect-ratio: 1 / 1;
        display: inline-block;
        object-fit: cover;
        border-radius: 20px
    }

    p {
        padding: 0;
        margin: 0;
        font-size: 20px;
        font-family: 'Comfortaa', cursive
    }
}

.grid-item:hover {
    background-color: #ececec;
    cursor: pointer;
    transform: scale(1.05);
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
</style>