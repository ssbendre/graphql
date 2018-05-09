var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var UserType = require('../types/user');
var UserModel = require('../../models/user');

exports.update = {
  type: UserType.userType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString
    },
    phone: {
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
    return UserModel.findByIdAndUpdate(
      params.id,
      { $set: { name: params.name, address: params.address, phone: params.phone, email: params.email, gender: params.gender } },
      { new: true }
    )
      .catch(err => new Error(err));
  }
}

