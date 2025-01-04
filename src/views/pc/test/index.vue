<template>
    <!-- <Waterfall :list="list">
        <template #item="{ item, url, index }">
            <div class="card">
                <LazyImg class="card_img" :url="url" />
            </div>
        </template>
</Waterfall> -->

    <div>
        <!-- <img src="http://127.0.0.1:4000/images/20241015172143.jpg" alt="" style="height:40px;width:40px"> -->
    </div>
</template>

<script>
// import {list} from "@/api/gouchuang/test.js"
// import { LazyImg, Waterfall } from 'vue-waterfall-plugin'
import 'vue-waterfall-plugin/dist/style.css'
export default {
    data() {
        return {
            options: {
                enableHighAccuracy: true,
                maximumAge: 1000
            }
            // list: [
            // {
            //     src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            // },
            // {
            //     src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            // }, {
            //     src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            // }, {
            //     src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            // },
            // {
            //     src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            // },
            // {
            //     src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            //  },
            // {
            //     src: "/imgs/20241015172325.jpg",
            // }, {
            //     src: "/imgs/20241015172143.jpg",
            // },
            // ]
        };
    },
    // components: { LazyImg, Waterfall }, // 组件列表

    created() {
        console.log(navigator)
        if (navigator.geolocation) {
            // 走到这里说明，浏览器支持geolocation，参数里有两个回调函数，一个是定位成功后的处理操作，一个是定位失败后的处理操作，另外一个参数没有研究过
            navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError, this.options);
        } else {
            // 否则浏览器不支持geolocation
            alert('您的浏览器不支持地理位置定位！');
        }

        // list().then(res=>{
        //    this.list= res.data
        //     console.log(res)
        // })
    },
    methods: {
        // 第一步获取定位成功返回的经纬度数据，然后结合百度那边提供的接口进行具体位置的转换，最后还有一个数据提交的方法，要跟自己的业务操作了
        onSuccess(position) {
            // 返回用户位置
            // 经度
            var longitude = position.coords.longitude;
            // 纬度
            var latitude = position.coords.latitude;
            alert('您的当前地址的经纬度：经度' + longitude + '，纬度' + latitude);
            // 这里后面可以写你的后续操作了
            // handleData(longitude, latitude);
        },
        onError(error) {
            switch (error.code) {
                case 1:
                    alert("位置服务被拒绝！");
                    break;
                case 2:
                    alert("暂时获取不到位置信息！");
                    break;
                case 3:
                    alert("获取信息超时！");
                    break;
                case 4:
                    alert("未知错误！");
                    break;
            }
            // // 这里后面可以写你的后续操作了，下面的经纬度是天安门的具体位置
            // // 经度
            // var longitude = 39.9151;
            // // 纬度
            // var latitude = 116.4041;
            // handleData(longitude, latitude);
        }
    }
};
</script>

<style scoped>
.card_img {
    border-radius: 5px;
}
</style>
