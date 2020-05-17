const { validateReq } = require('../../src/lib/validateEquipment')

describe('Validate Equipment Test', () => {
  it('should be a valid request', async () => {
    const result = await validateReq({
        "model": "teste",
        "category": "cartucho",
        "ppm": 2000,
        "wifi": true,
        "consume": 2000
    })
    expect(result).toBe(true);
  });
});
