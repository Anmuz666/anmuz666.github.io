<template>
    <div style="height: 100%;background-color:black">
        <div style="width:100%;height: 40px;background-color:#292961;position:sticky;top:0;z-index:1;">

            <div style="width: calc(100% - 310px);height:100%; margin: 0px auto;text-align: left;">

                <!-- <a href="/pc" class="AheadListButton">
                    <button class="headListButton"> {{ $t('navbar.recommend') }}</button>
                </a>gitHub用不来呀
                <a href="/picWarehouse">
                    <button class="headListButton" @click="goto()"> {{ $t('navbar.ImageRepository') }}</button>
                </a> -->
                <a class="AheadListButton">
                    <button class="headListButton" @click="goto('/pc')"> {{ $t('navbar.recommend') }}</button>
                </a>
                <a>
                    <button class="headListButton" @click="goto('/picWarehouse')"> {{ $t('navbar.ImageRepository')
                        }}</button>
                </a>
                <Lang class="right-menu-item" style=" position: absolute;right: 160px;top:10px;color:white"></Lang>
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
.AheadListButton {
    color: currentColor;
}

.headListButton {
    font-weight: 600;
    height: 100%;
    margin: 0 5px 0 0;
    background-color: transparent;
    background-image: none;
    border-color: transparent;
    color: #1b69b6;
    box-shadow: none;
}

.headListButton:hover {
    background-color: #4090df !important;
    /* 添加 !important 以确保优先级 */
    color: rgb(250, 250, 250) !important;
    /* 添加 !important 以确保优先级 */
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
</style>