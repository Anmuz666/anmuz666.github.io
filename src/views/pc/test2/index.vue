<template>
  <div>
    <h1>WebSocket Client</h1>
    <div id="messages">
      <p v-for="(msg, index) in DATA" :key="index">{{ msg.senderId }}:{{ msg.message }}</p>
    </div>
    <input type="text" v-model="messageInput" @keyup.enter="sendMessage" placeholder="Type a message..." />
    <button @click="sendMessage">Send</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageInput: '',
      DATA: [],
      ws: null,
    };
  },
  mounted() {
    this.connectWebSocket();
  },
  methods: {
    connectWebSocket() {
      const wsUrl = process.env.NODE_ENV === 'development' ? 'ws://localhost:28256' : 'ws://114.55.33.71:28256';
      this.ws = new WebSocket(wsUrl);

      this.ws.onopen = () => {
        console.log('Connected to the WebSocket server');
      };

      // this.ws.onmessage = (event) => {
      //   if (event.data instanceof Blob) {
      //     let reader = new FileReader();
      //     reader.onload = (e) => {
      //       this.DATA.push(JSON.parse(e.target.result));
      //     };
      //     reader.readAsText(event.data); // 以文本形式读取 Blob
      //   } else {
      //     console.log(event.data)
      //     this.DATA.push(JSON.parse(event.data));
      //   }
      // };
      this.ws.onmessage = (event) => {
        let parsedData;
        try {
          parsedData = JSON.parse(event.data);
        } catch (e) {
          console.error('Failed to parse JSON:', e);
          return;
        }

        if (parsedData && parsedData.message && parsedData.message.type === 'Buffer') {
          // Convert Buffer to string using TextDecoder
          const bufferArray = new Uint8Array(parsedData.message.data);
          const textDecoder = new TextDecoder('utf-8');
          const bufferString = textDecoder.decode(bufferArray);
          parsedData.message = bufferString;
        }

        this.DATA.push(parsedData);
        console.log(this.DATA)
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
#messages {
  max-height: 300px;
  overflow-y: auto;
  padding: 10px;
  margin-bottom: 10px;
}

input[type="text"] {
  padding: 5px;
}

button {
  width: 90px;
  padding: 5px;
}
</style>
