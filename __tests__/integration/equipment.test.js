const request = require('supertest');
const app = require('../../src/app');

describe('Equipment', () => {
  it('should be able to create a new Equipment', async () => {
      const response = await request(app)
      .post('/equipment')
      .send({
        id: 1,
        model: "teste",
        category: "cartucho",
        ppm: 2000,
        wifi: true,
        consume: 2000
      });
      expect(response.body).toHaveProperty('id');
  });
  it('should be able to get all Equipments', async () => {
      const response = await request(app)
      .get('/equipment');
      expect(Array.isArray(response.body)).toBe(true);
  });
  it('should be able to get one Equipment', async () => {
      const response = await request(app)
      .get('/equipment/1')
      expect(response.body).toHaveProperty('id');
  });
  it('should be able to update an Equipment', async () => {
      const response = await request(app)
      .put('/equipment')
      .send({
        id: 1,
        model: "impressora2"
      })
      expect(response.status === 200).toBe(true);
  });
  it('should be able to delete an Equipment', async () => {
      const response = await request(app)
      .delete('/equipment')
      .send({ id: 1})
      expect(response.status === 200).toBe(true);
  });
});