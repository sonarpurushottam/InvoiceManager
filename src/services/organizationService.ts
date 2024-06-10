import Organization from "../models/organizationModel";

const createOrganization = async (data: any) => {
  return Organization.create(data);
};

const getOrganizations = async () => {
  return Organization.findAll();
};

const getOrganizationById = async (id: number) => {
  return Organization.findByPk(id);
};

const updateOrganization = async (id: number, data: any) => {
  const organization = await Organization.findByPk(id);
  if (organization) {
    return organization.update(data);
  }
  throw new Error("Organization not found");
};

const deleteOrganization = async (id: number) => {
  const organization = await Organization.findByPk(id);
  if (organization) {
    return organization.destroy();
  }
  throw new Error("Organization not found");
};

export const organizationService = {
  createOrganization,
  getOrganizations,
  getOrganizationById,
  updateOrganization,
  deleteOrganization,
};
