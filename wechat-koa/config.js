const mysqlConfig = {
  host: process.env.DATABASE_HOST || '127.0.0.1',
  port: 3306,
  database: 'db',
  user: 'root',
  password: 'huangyunda',
};

const messageConfig = {
  default: '功能暂不支持',
  error: '未知错误',
  birthday: {
    formatError: '格式错误',
    updateSuccess: '更新成功',
    update: '更新生日',
    get: '查看生日',
  }
}

module.exports = {
  mysqlConfig,
  messageConfig,
}