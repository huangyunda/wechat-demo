const sha1 = require('crypto-js/sha1');
const { wechatConfig } = require('../../user');

function verifyFromWeChat(ctx) {
  const { signature, timestamp, nonce, echostr } = ctx.request.query;
  const arr = [wechatConfig.token, timestamp, nonce].sort();
  const shaStr = sha1(arr.join('')).toString();
  ctx.body = shaStr === signature ? echostr : '';
}

module.exports = { verifyFromWeChat };
