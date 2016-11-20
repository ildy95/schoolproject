'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('felhasznalonev', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('jelszo', 60).notNullable()
      table.string('nev')
      table.boolean('admin').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UserSchema

