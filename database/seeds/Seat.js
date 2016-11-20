'use strict'

const Seat = use('App/Model/Seat')

class SeatSeeder {
  * run () {
    const seatNames = [
      '1A', '1B', '1C', '1D', '1E', '1F',
      '2A', '2B', '2C', '2D', '2E', '2F',
      '3A', '3B', '3C', '3D', '3E', '3F',
      '4A', '4B', '4C', '4D', '4E', '4F',
      '5A', '5B', '5C', '5D', '5E', '5F',
      '6A', '6B', '6C', '6D', '6E', '6F',
      '7A', '7B', '7C', '7D', '7E', '7F',
      '8A', '8B', '8C', '8D', '8E', '8F'
    ]

    for (let seatName of seatNames) {
      const seat = new Seat()
      seat.helynev = seatName

      yield seat.save()
    }
  }
}

module.exports = SeatSeeder
