// src/utils/request.js
import { extend } from 'umi-request';

const request = extend({
    // 在这里添加全局的请求配置
    // 参考文档：https://github.com/umijs/umi-request
    prefix: '/api', // 如果有统一的 API 前缀，可以在这里设置
    timeout: 10000, // 请求超时时间
    errorHandler: (error) => {
        // 全局错误处理
        console.error('Request error:', error);
    },
});

export default request;
