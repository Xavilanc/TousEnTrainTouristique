const AbstractManager = require("./AbstractManager");

class ContactManager extends AbstractManager {
  constructor() {
    super({ table: "contact" });
  }

  insert(contact) {
    return this.connection.query(
      `insert into ${this.table} (name, email, message, created_on, updated_on) values (?, ?, ?, ?, ?)`,
      [
        contact.name,
        contact.email,
        contact.message,
        contact.created_on,
        contact.updated_on,
      ]
    );
  }

  update(contact) {
    return this.connection.query(
      `update ${this.table} set name = ?, email = ?, message = ?, created_on = ?, updated_on = ? where id = ?`,
      [
        contact.name,
        contact.email,
        contact.message,
        contact.created_on,
        contact.updated_on,
        contact.id,
      ]
    );
  }
}
module.exports = ContactManager;
