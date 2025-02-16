import CompanyModel from "../models/Company";
import connectDB from "../config/db-connector";
import { QueryTypes } from "sequelize";
import bcrypt from "bcrypt";

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

export const findCompanyByEmail = async (email: string) => {
  // Función específica para compañías
  try {
    const company = await CompanyModel.findOne({ where: { email } });
    return company;
  } catch (error) {
    console.error("Error finding company by email:", error);
    throw error;
  }
};

export const passwordMatches = async (
  email: string,
  passwordToCheck: string
): Promise<boolean> => {
  try {
    const company: any = await findCompanyByEmail(email);
    if (!company) {
      return false;
    }
    return await bcrypt.compare(passwordToCheck, company.password);
  } catch (error) {
    console.error("Error comparing passwords:", error);
    return false;
  }
};

export default {
  findAllCompanies,
  saveCompany,
  findById,
  findByIdAndUpdate,
  loginCompany,
  findCompanyByEmail,
  passwordMatches,
};
