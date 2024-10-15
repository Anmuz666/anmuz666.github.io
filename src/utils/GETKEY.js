import CryptoJS from "crypto-js";
export function GETKEY() {
    var DATA, Y, M, D, KEY, encrypted;
    DATA = new Date();
    Y = DATA.getFullYear().toString().slice(-2);;
    M = DATA.getMonth() + 1;
    D = DATA.getDate();
    if (M < 10) {
        M = "0" + M;
    }
    if (D < 10) {
        D = "0" + D;
    }
    KEY = parseInt("1" + D + "" + M + "" + Y);
    // 将密钥转换为UTF-8编码的字节数组
    KEY = CryptoJS.enc.Utf8.parse(KEY);
    // 使用DES算法对数据进行加密
    encrypted = CryptoJS.DES.encrypt(KEY, KEY, {
        iv: "", // 初始化向量为空
        mode: CryptoJS.mode.ECB, // 使用ECB模式
        padding: CryptoJS.pad.Pkcs7 // 使用PKCS7填充方式
    });
    console.log(encrypted.toString().replace(/[^a-zA-Z0-9]/g, '').substring(0, 4));
    return encrypted.toString().replace(/[^a-zA-Z0-9]/g, '').substring(0, 4)
}