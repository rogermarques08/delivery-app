const AdminService = require('../services/AdminService');

const adminRemove = async (req, res) => {
  try {
    const { id } = req.params;
    await AdminService.adminRemove(id);
    return res.status(204).end();
  } catch (e) {
    return res.status(500).json({ message: 'internal error', error: e.message });
  }
};

module.exports = {
  adminRemove,
};