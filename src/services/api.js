import request from '@/utils/request';

export async function login(data) {
    return request.post('/user/login', {
        data: data
    });
}
