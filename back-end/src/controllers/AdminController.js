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

const getAllUsers = async (_req, res) => {
  const findAll = await AdminService.getAllUsers();
  return res.status(200).json(findAll);
};

module.exports = {
  adminRemove,
  getAllUsers,
};