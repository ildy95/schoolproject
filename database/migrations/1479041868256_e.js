'use strict'

const Schema = use('Schema')

class ETableSchema extends Schema {

  up () {
    this.create('e', (table) => {
      table.increments()
      table.date('datum')
      table.datetime('ido')
      table.integer('terem').unsigned()
      table.integer('film_id').unsigned().references('id').inTable('films')
      table.timestamps()
    })
  }

  down () {
    this.drop('e')
  }

}

module.exports = ETableSchema
