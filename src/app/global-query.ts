/**
 * Server Mutation Query
 */

'use strict';

import gql from 'graphql-tag';

export const addUser = gql`
  mutation addUser($name: String!, $address: String, $phone: String, $email: String, $gender: String) {
    addUser(name: $name, address: $address, phone: $phone, email: $email, gender: $gender) {
      id
      name
      address
      phone
      email
      gender
    }
  }`;

export const Users = gql`
  query {
    users{
      id
      name
      address
      phone
      email
      gender
    }
  }`;

export const removeUser = gql`
  mutation removeUser($id: String!) {
    removeUser(id: $id) {
      id
      name
      address
      phone
      email
      gender
    }
  }`;

export const updateUser = gql`
  mutation updateUser($id: String!, $name: String, $address: String, $phone: String, $email: String, $gender: String) {
    updateUser(id: $id, name: $name, address: $address, phone: $phone, email: $email, gender: $gender) {
      id
      name
      address
      phone
      email
      gender
    }
  }`;