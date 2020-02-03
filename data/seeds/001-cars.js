
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { make: 'tesla',     model: 'CYBRTRK',     mileage: 000007, vin: '5YJRCAE44GFF00002', transmission_type: 'TRI MOTOR AWD',                    title_status: 'CLEAN' },
        { make: "Maserati",  model: "Biturbo",     mileage: 577140, vin: "SCBBR93W978768531", transmission_type: "automatic[rear]",                  title_status: "lien" },
        { make: "Toyota",    model: "MR2",         mileage: 473226, vin: "2C4RDGBG9ER710011", transmission_type: "automatic[awd]",                   title_status: "clean" },
        { make: "Chevrolet", model: "Colorado",    mileage: 947032, vin: "YV126MFD3F2416530", transmission_type: "automatic[awd[tesla[DUALmotor]]]", title_status: "salvage" },
        { make: "Ford",      model: "Focus",       mileage: 320737, vin: "3C6TD5NT5CG157175", transmission_type: "automatic[awd[tesla[DUALmotor]]]", title_status: "salvage" },
        { make: "BMW",       model: "X5",          mileage: 510341, vin: "3D7JB1EP9BG274103", transmission_type: "manual-6",                         title_status: "clean" },
        { make: "Mercury",   model: "Marquis",     mileage: 043542, vin: "5N1AR2MM4FC124505", transmission_type: "manual-3",                         title_status: "clean" },
        { make: "Pontiac",   model: "Bonneville",  mileage: 718503, vin: "1GYS4RKJ7FR347668", transmission_type: "manual-4",                         title_status: "clean" },
        { make: "Pontiac",   model: "Fiero",       mileage: 217893, vin: "KNAFZ6A38F5676698", transmission_type: "manual-6",                         title_status: "clean" },
        { make: "Suzuki",    model: "SJ",          mileage: 808362, vin: "1N4AL3AP8EC657536", transmission_type: "manual-5",                         title_status: "clean" },
        { make: "GMC",       model: "Savana 1500", mileage: 288249, vin: "WA1AY74L59D775386", transmission_type: "automatic[awd]",                   title_status: "salvage" }

      ]);
    });
};
