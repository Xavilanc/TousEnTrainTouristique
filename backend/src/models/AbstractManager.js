class AbstractManager {
  constructor({ table }) {
    this.table = table;
  }

  // Le Abstract manager est la pour les fonctions générique à toute les routes.
  // Il devrait ne pas être modifier
  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

  setConnection(connection) {
    this.connection = connection;
  }
}

module.exports = AbstractManager;
