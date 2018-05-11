/**
 * Server Mutation Query
 */

'use strict';

import gql from 'graphql-tag';

export const addUser = gql`
  mutation addUser(
    $firstName: String!,
    $lastName: String,
    $address: String,
    $city: String,
    $state: String,
    $email: String,
    $gender: String
  ) {
    addUser(
      firstName: $firstName,
      lastName: $lastName,
      address: $address,
      city: $city,
      state: $state,
      email: $email,
      gender: $gender
    ) {
      id
      firstName
      lastName
      address
      city
      state
      email
      gender
    }
  }`;

export const Users = gql`
  query {
    users{
      id
      firstName
      lastName
      address
      city
      state
      email
      gender
    }
  }`;

export const removeUser = gql`
  mutation removeUser($id: String!) {
    removeUser(id: $id) {
      id
      firstName
      lastName
      address
      city
      state
      email
      gender
    }
  }`;

export const updateUser = gql`
  mutation updateUser(
    $id: String!,
    $firstName: String,
    $lastName: String,
    $address: String,
    $city: String,
    $state: String,
    $email: String,
    $gender: String
  ) {
    updateUser(
      id: $id,
      firstName: $firstName,
      lastName: $lastName,
      address: $address,
      city: $city,
      state: $state,
      email: $email,
      gender: $gender
    ) {
      id
      firstName
      lastName
      address
      city
      email
      gender
    }
  }`;
