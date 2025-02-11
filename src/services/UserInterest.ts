import UserInterestModel from "../models/UserInterest";
import UserModel from "../models/User";
import InterestModel from "../models/Interest";
import connectDB from "../config/db-connector";
import { QueryTypes } from "sequelize";


export const createUserInterest = async (userId: string, interestId: string) => {
  const userInterest = await UserInterestModel.create({
    userId,
    interestId,
  });
  return userInterest;
};

export const findAllInterestsByUserId = async (userId: string) => {
    const query = `
    SELECT interests.*
    FROM interests INNER JOIN "userInterest" ON interests.id = "userInterest"."interestId"
    WHERE "userInterest"."userId" = :userId
    `;
    const interests = await connectDB.query(query, {
        replacements: { userId },
        type: QueryTypes.SELECT,
    });
    if (!interests.length) {
        throw new Error("No interests found for the given user ID");
    }
        return interests;
    };
