var client = require('scp2');
var serverConfig = {
    host: '172.17.6.19',
    username: 'root',
    password: 'vm09#ops.fm',
    // path: '/mnt/lizhi_static/public/sfestival/static/'
    path: '/mnt/lizhi_static/public/sfestival/docker1/static/'
}
client.scp('./production/static/', serverConfig, (err) => {
    if (!err) {
        console.log('发布成功');
    }
})