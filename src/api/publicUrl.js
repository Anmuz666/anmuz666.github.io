// 更具不同环境，设置不同的后台路径
const CONSOLE_PUBLIC_URL = process.env.NODE_ENV === "production" ? "http://114.55.33.71:4000" : process.env.NODE_ENV === "development " ? "http://localhost:4000" : process.env.NODE_ENV === "test" ? "http://localhost:4000" : "http://localhost:4000";
export { CONSOLE_PUBLIC_URL }
