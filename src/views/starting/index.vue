<template >
  <div class="body">
    <div class="content">
      <h1>欢迎来到苟创中学</h1>
      <p>GouChuang Middle School NingBo Branch</p>
      <span>
        <router-link to="/home">进入</router-link>
      </span>
    </div>
  </div>
</template>
  
<script>
export default {};
</script>
  
<style scoped>
.body {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  color: #fff;
  text-align: center;
  z-index: 1;
}

a {
  text-decoration: none;
}
</style>