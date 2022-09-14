const AbstractManager = require("./AbstractManager");

class ContactManager extends AbstractManager {
  constructor() {
    super({ table: "contact" });
  }

  insert(contact) {
    return this.connection.query(
      `insert into ${this.table} (subject, mail, message, created_on) values ( ?, ?, ?, ?)`,
      [contact.subject, contact.mail, contact.message, contact.created_on]
    );
  }

  update(contact) {
    return this.connection.query(
      `update ${this.table} set subject = ?, mail = ?, message = ?, created_on = ? where id = ?`,
      [
        contact.subject,
        contact.mail,
        contact.message,
        contact.created_on,
        contact.id,
      ]
    );
  }
}
module.exports = ContactManager;
