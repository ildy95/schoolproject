'use strict'

const Schema = use('Schema')

class SeatsTableSchema extends Schema {

  up () {
    this.create('seats', (table) => {
      table.increments()
      table.string('helynev', 80).notNullable().unique()
      table.integer('eloadas_id').unsigned().references('id').inTable('es')
      table.boolean('foglalt').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('seats')
  }

}

module.exports = SeatsTableSchema
