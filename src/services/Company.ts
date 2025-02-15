import CompanyModel from "../models/Company";
import connectDB from "../config/db-connector";
import { QueryTypes } from "sequelize";

export const findAllCompanies = async () => {
  const companies = await CompanyModel.findAll();
  return companies;
};

export const saveCompany = async (company: any) => {
  const newCompany = CompanyModel.build(company);
  await newCompany.save();
  return newCompany;
};

export const findById = async (id: string) => {
  const company = await CompanyModel.findOne({
    where: {
      id,
    },
  });
  return company;
};

export const findByIdAndUpdate = async (id: string, body: any) => {
  const company = await CompanyModel.update(body, {
    where: {
      id,
    },
  });
  return company;
};

export const loginCompany = async (email: string) => {
  const company = await CompanyModel.findOne({
    where: {
      email,
    },
  });
  return company;
};

export default {
  findAllCompanies,
  saveCompany,
  findById,
  findByIdAndUpdate,
  loginCompany,
};
