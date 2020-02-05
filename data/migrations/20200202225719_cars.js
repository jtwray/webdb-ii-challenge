
exports.up = function (knex) {
    return knex.schema.createTable('cars', cars => {
        cars.increments();

        cars.varchar('make', 128).notNullable()
        cars.varchar('model', 128).notNullable()
        cars.integer('mileage', 128).notNullable()
        cars.varchar('vin', 17).notNullable().unique().index()
        cars.varchar('transmission_type', 16)
        cars.varchar('title_status', 24)

    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("cars")

};