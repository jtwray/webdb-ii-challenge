const db = require('../../data/dbConfig')
function find() {
    return db('cars').select('id', 'make', 'model');
  }
  
  function findBy(filter) {
    return db('cars').where(filter);
  }
  
  async function add(car) {
    const [id] = await db('cars').insert(car);
  
    return findById(id);
  }
  
  function findById(id) {
    return db('cars')
      .where({ id })
      .first();
  }
   module.exports={ find,findBy,findById,add}