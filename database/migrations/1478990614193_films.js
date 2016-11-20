'use strict'

const Schema = use('Schema')

class FilmsTableSchema extends Schema {

  up () {
    this.create('films', (table) => {
      table.increments()
      table.string('cim').notNullable()
      table.string('mufaj').notNullable()
      table.integer('hossz').unsigned()
      table.integer('korhatar').unsigned()
      table.string('rendezo').notNullable()
      table.text('leiras').notNullable()
      table.boolean('szinkronizalt').defaultTo(true)

      //table.integer('user_id').unsigned().references('id').inTable('users')
      //table.integer('category_id').unsigned().references('id').inTable('categories')
      table.timestamps()
    })
  }

  down () {
    this.drop('films')
  }

}

module.exports = FilmsTableSchema
