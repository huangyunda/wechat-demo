const { verifyFromWeChat } = require('./wechat');

const routes = [
  { method: 'get', path: '/verifyFromWeChat', fn: verifyFromWeChat },
];

module.exports = routes;
