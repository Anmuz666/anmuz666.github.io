import axios from 'axios'
import { CONSOLE_PUBLIC_URL } from "@/api/publicUrl.js"
// 创建axios实例
const service = axios.create({
  baseURL: CONSOLE_PUBLIC_URL,
  // 超时
  timeout: 10000
})

export default service