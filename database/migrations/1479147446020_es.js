'use strict'

const Schema = use('Schema')

class EsTableSchema extends Schema {

  up () {
    this.create('es', (table) => {
      table.increments()
      table.date('datum')
      table.datetime('ido')
      table.integer('terem').unsigned()
      table.integer('film_id').unsigned().references('id').inTable('films')
      table.timestamps()
    })
  }

  down () {
    this.drop('es')
  }

}

module.exports = EsTableSchema
