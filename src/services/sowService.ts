import Sow from "../models/sowModel";

const createSow = async (data: any) => {
  return await Sow.create(data);
};

const getAllSows = async () => {
  return await Sow.findAll();
};

const getSowById = async (id: string) => {
  return await Sow.findByPk(id);
};

const updateSow = async (id: string, data: any) => {
  const sow = await Sow.findByPk(id);
  if (sow) {
    return await sow.update(data);
  }
  return null;
};

const deleteSow = async (id: string) => {
  const sow = await Sow.findByPk(id);
  if (sow) {
    await sow.destroy();
    return true;
  }
  return false;
};

export default {
  createSow,
  getAllSows,
  getSowById,
  updateSow,
  deleteSow,
};
