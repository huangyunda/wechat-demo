const { verifyFromWeChat } = require('./wechat');
const { getAllBirthday } = require('./birthday');

const routes = [
  { method: 'get', path: '/verifyFromWeChat', fn: verifyFromWeChat },
  { method: 'get', path: '/getAllBirthday', fn: getAllBirthday },
];

module.exports = routes;
