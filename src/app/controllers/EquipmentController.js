const Equipment = require('../models/Equipment');
const { validateReq } = require('../../lib/validateEquipment');

class EquipmentController {

  async index(req, res) {
    try {
      const equipments = await Equipment.findAll();
      return res.send(equipments);

    } catch(e) {
      return res.status(500).json({ 
        message: 'Something went Wrong',
        error: e,
      })
    }
  }

  async search(req, res) {
    try {

      const { id } = req.params;
  
      const equipment = await Equipment.findOne({ where: { id } })
      
      if(!equipment) return res.status(404).json({ message: 'Equipment Not Found' })
  
      return res.json(equipment);
    } catch(e) {
      return res.status(500).json({ 
        message: 'Something went Wrong',
        error: e,
      })
    }

  }

  async store(req, res) {
    try {
      const body = req.body;

      if(!(await validateReq(body))) return res.status(400).json({ message: 'Data Invalid' });
      const newEquipment = await Equipment.create(body);
  
      return res.json(newEquipment);
    } catch(e) {
      return res.status(500).json({ 
        message: 'Something went Wrong',
        error: e,
      })
    }
  }
  
  async update(req, res) {
    const body = req.body;

    try {
      const equipment = await Equipment.findOne({ where: { id: body.id } })
      
      if(!equipment) return res.status(404).json({ message: 'Equipment Not Found' })
      await equipment.update({
        ...equipment,
        ...body
      })
      return res.json({message: 'Equipment Successfully updated'});

    } catch(e) {
      return res.status(500).json({ 
        message: 'Something went Wrong',
        error: e,
      })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.body;
  
      const equipment = await Equipment.findOne({ where: { id } })
      
      if(!equipment) return res.status(404).json({ message: 'Equipment Not Found' })
  
      await equipment.destroy();
      return res.json({message: 'Equipment Successfully deleted'});
    } catch(e) {
      return res.status(500).json({ 
        message: 'Something went Wrong',
        error: e,
      })
    }
  }

}

module.exports = new EquipmentController();