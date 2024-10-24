<template>
    <Waterfall :list="list">
        <template #item="{ item, url, index }">
            <div class="card">
                <LazyImg class="card_img" :url="url" />
            </div>
        </template>
    </Waterfall>
</template>

<script>
import { LazyImg, Waterfall } from 'vue-waterfall-plugin'
import 'vue-waterfall-plugin/dist/style.css'
export default {
    data() {
        return {
            list: [
                {
                    src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                },
                {
                    src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                }, {
                    src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                }, {
                    src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                },
                {
                    src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                },
                {
                    src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
                 },
                // {
                //     src: "/imgs/20241015172325.jpg",
                // }, {
                //     src: "/imgs/20241015172143.jpg",
                // },
            ]
        };
    },
    components: { LazyImg, Waterfall }, // 组件列表
};
</script>

<style scoped>
.card_img {
    border-radius: 5px;
}
</style>
