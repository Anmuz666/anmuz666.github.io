import request from '@/utils/request'

//游戏大厅图片列表
export function getGameLobbyList() {
    return request({
        url: '/api/gameLobby/getlist',
        method: 'get',
    })
}