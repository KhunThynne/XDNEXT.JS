import { graphql } from "../generates";

export const GetUserPreference = graphql(`
  query GetUserPreference($where: UserPreference_where) {
    UserPreferences(where: $where) {
      docs {
        id
        setting
        createdAt
        updatedAt
        user {
          id
        }
      }
    }
  }
`);

export const CreateUserPreference = graphql(`
  mutation CreateUserPreference($data: mutationUserPreferenceInput!) {
    createUserPreference(data: $data) {
      id
      setting
      user {
        id
      }
    }
  }
`);

export const UpdateUserPreference = graphql(`
  mutation UpdateUserPreference($id: Int!, $data: mutationUserPreferenceUpdateInput!) {
    updateUserPreference(id: $id, data: $data) {
      id
      setting
    }
  }
`);

export const DeleteUserPreference = graphql(`
  mutation DeleteUserPreference($id: Int!) {
    deleteUserPreference(id: $id) {
      id
    }
  }
`);
