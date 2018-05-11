
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var UserType = require('../types/user');
var UserModel = require('../../models/user');

exports.add = {
  type: UserType.userType,
  args: {
    firstName: {
      type: GraphQLString
    },
    lastName: {
      type: GraphQLString
    },
    address: {
      type: GraphQLString
    },
    city: {
      type: GraphQLString
    },
    state: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    gender: {
      type: GraphQLString
    }
  },
  resolve(root, params) {
    const uModel = new UserModel(params);
    const newUser = uModel.save();
    console.log('params', newUser);
    
    if (!newUser) {
      throw new Error('Error');
    }
    return newUser
  }
}