<template>
    <div>
        <h1>WebSocket Client</h1>
        <div id="messages"></div>
        <input type="text" v-model="messageInput" placeholder="Type a message..." />
        <button @click="sendMessage">Send</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messageInput: '',
            ws: null,
        };
    },
    mounted() {
        this.connectWebSocket();
    },
    methods: {
        connectWebSocket() {
            if(process.env.NODE_ENV=='development'){
                this.ws = new WebSocket('ws://localhost:28256');
            }else{
                this.ws = new WebSocket('ws://114.55.33.71:28256');
            }
            

            this.ws.onopen = () => {
                console.log('Connected to the WebSocket server');
            };

            this.ws.onmessage = (event) => {
                const messages = document.getElementById('messages');
                if (event.data instanceof Blob) {
                    // 如果 event.data 是 Blob 对象
                    let reader = new FileReader();
                    reader.onload = (e) => {
                        // 当文件读取完成时，将内容添加到 messages 中
                        messages.innerHTML += `<p>${e.target.result}</p>`;
                    };
                    reader.readAsText(event.data); // 以文本形式读取 Blob
                } else {
                    // 如果 event.data 不是 Blob 对象，直接添加
                    messages.innerHTML += `<p>${event.data}</p>`;
                }
            };

            this.ws.onclose = () => {
                console.log('Disconnected from the WebSocket server');
            };

            this.ws.onerror = (error) => {
                console.error('WebSocket error:', error);
            };
        },
        sendMessage() {
            if (this.ws && this.ws.readyState === WebSocket.OPEN) {
                this.ws.send(this.messageInput);
                this.messageInput = '';
            } else {
                console.error('WebSocket is not open.');
            }
        },
    },
};
</script>

<style scoped>
/* Add your styles here */
</style>