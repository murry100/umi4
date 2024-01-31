export default {
    routes: [
        { path: '/login', component: 'login' },
        {
            path: '/',
            component: '@/layouts/index',
            routes: [
                { path: '/list', component: 'list' },
                { path: '/admin', component: 'admin' },
            ],
        },
    ],
    proxy: {
        '/api': {
            target: 'http://localhost:8080',
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
        }
    }
}
