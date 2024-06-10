import  Customer  from "../models/customerModel";

const createCustomer = async (data: any) => {
  return Customer.create(data);
};

const getCustomers = async () => {
  return Customer.findAll();
};

const getCustomerById = async (id: number) => {
  return Customer.findByPk(id);
};

const updateCustomer = async (id: number, data: any) => {
  const customer = await Customer.findByPk(id);
  if (customer) {
    return customer.update(data);
  }
  throw new Error("Customer not found");
};

const deleteCustomer = async (id: number) => {
  const customer = await Customer.findByPk(id);
  if (customer) {
    return customer.destroy();
  }
  throw new Error("Customer not found");
};

export const customerService = {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
