'use strict'

const Lucid = use('Lucid')

class E extends Lucid {
    filmek () {
        return this.belongsTo('App/Model/Film')
    }
}

module.exports = E
