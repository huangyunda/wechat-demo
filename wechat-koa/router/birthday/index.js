const chineseLunar = require("chinese-lunar");
const pool = require('../../pool');

async function getAllBirthday(ctx) {
  let items = await pool.query('SELECT * FROM birthday');
  items = items.map(({ name, lunarDate }) => {
    const [month, day] = lunarDate.split('-');
    const year = new Date().getFullYear();
    return { name, lunarDate, solarDate: chineseLunar.lunarToSolar({ year, month, day }).toISOString().split('T')[0] };
  });
  ctx.body = { success: true, data: items };
}

module.exports = { getAllBirthday };
