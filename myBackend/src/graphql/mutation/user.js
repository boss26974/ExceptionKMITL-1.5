import { UserTC } from "../../models/user";

export const createUser = UserTC.mongooseResolvers.createOne()
export const updateUser = UserTC.mongooseResolvers.updateById()