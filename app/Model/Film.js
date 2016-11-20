'use strict'

const Lucid = use('Lucid')

class Film extends Lucid {
  static scopeActive (builder) {
    builder.where('deleted', 0)
  }
   eloadasok () {
    return this.hasMany('App/Model/Eloadas')
  }

  filmek () {
        return this.belongsTo('App/Model/Film')
    }
}

module.exports = Film
