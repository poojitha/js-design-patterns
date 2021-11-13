let instance;
class DB {
  constructor(dbName, username, password) {
    if (!instance) {
      this.dbName = dbName;
      this.username = username;
      this.password = password;
      instance = this;
    }
    return instance;
  }
}

export { DB as default };
