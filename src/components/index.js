//获取当前的手机设备类型，获取不到就为空
export function getflag() {
    const flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return flag
}
//获取当前开发环境
export function getNODE_ENV() {
    let NODE_ENV = process.env.NODE_ENV;
    if (process.env.NODE_ENV == "development") {
        //开发环境
    } else if (process.env.NODE_ENV == "production") {
        //生产环境
    } else {
        //本地环境
    }
    return NODE_ENV
}