import mongoose from 'mongoose'
import User from "../models/User.js";
import Comment from "../models/Comment.js";
import generateId from "../utils/generatedId.js";

module.exports = {

    Query: {

    },
    Mutation: {
        async userCreate(_, {userInput: {firstName, lastName}}) {
            const userId = generateId()
            const createdUser = new User({
                _id: userId,
                firstName: firstName,
                lastName: lastName,
            });

            const res = await createdUser.save();

            return {
                id: res.id,
                ...res._doc
            }
        },

    }
}
