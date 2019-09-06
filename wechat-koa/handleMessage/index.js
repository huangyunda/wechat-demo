const pool = require('./pool');
const { messageConfig } = require('../config');

async function handleMessage(message) {
  console.log(message);
  const { Content } = message;
  if (Content) {
    const { update, get } = messageConfig.birthday;
    if (Content.startsWith(update)) {
      return await handleUpdateBirthday(Content);
    } else if (Content.startsWith(get)) {
      return await handleGetBirthday();
    } else {
      return messageConfig.default;
    }
  } else {
    return messageConfig.default;
  }
}

async function handleUpdateBirthday(content) {
  let res = '';
  const [, name, day] = content.split(' ').filter(x => !!x);
  if (!name || !day || !/^\d{1,2}-\d{1,2}$/.test(day)) {
    res = messageConfig.birthday.formatError;;
  } else {
    try {
      await pool.query('REPLACE INTO birthday(name, day) VALUES(?, ?)', [name, day]);
      res = messageConfig.birthday.updateSuccess;
    } catch (e) {
      console.log('error', e);
      res = messageConfig.error;
    }
  }
  return res;
}

async function handleGetBirthday() {
  let res = '';
  try {
    const results = await pool.query('SELECT * FROM birthday');
    results.forEach(({ name, day }, index) => {
      res += `${name} ${day}`
      if (index < results.length - 1) res += '\n';
    });
  } catch (e) {
    console.log('error', e);
    res = messageConfig.error;
  }
  return res;
}

module.exports = handleMessage;