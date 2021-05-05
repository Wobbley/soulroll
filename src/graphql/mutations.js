/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
      id
      rolls {
        items {
          id
          roomId
          dice
          diceAmount
          diceSize
          name
          successThreshold
          successes
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
      id
      rolls {
        items {
          id
          roomId
          dice
          diceAmount
          diceSize
          name
          successThreshold
          successes
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
      id
      rolls {
        items {
          id
          roomId
          dice
          diceAmount
          diceSize
          name
          successThreshold
          successes
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRoll = /* GraphQL */ `
  mutation CreateRoll(
    $input: CreateRollInput!
    $condition: ModelRollConditionInput
  ) {
    createRoll(input: $input, condition: $condition) {
      id
      roomId
      dice
      diceAmount
      diceSize
      name
      successThreshold
      successes
      createdAt
      updatedAt
    }
  }
`;
export const updateRoll = /* GraphQL */ `
  mutation UpdateRoll(
    $input: UpdateRollInput!
    $condition: ModelRollConditionInput
  ) {
    updateRoll(input: $input, condition: $condition) {
      id
      roomId
      dice
      diceAmount
      diceSize
      name
      successThreshold
      successes
      createdAt
      updatedAt
    }
  }
`;
export const deleteRoll = /* GraphQL */ `
  mutation DeleteRoll(
    $input: DeleteRollInput!
    $condition: ModelRollConditionInput
  ) {
    deleteRoll(input: $input, condition: $condition) {
      id
      roomId
      dice
      diceAmount
      diceSize
      name
      successThreshold
      successes
      createdAt
      updatedAt
    }
  }
`;
