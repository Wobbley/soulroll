/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
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
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rolls {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRoll = /* GraphQL */ `
  query GetRoll($id: ID!) {
    getRoll(id: $id) {
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
export const listRolls = /* GraphQL */ `
  query ListRolls(
    $filter: ModelRollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const rollsByRoom = /* GraphQL */ `
  query RollsByRoom(
    $roomId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rollsByRoom(
      roomId: $roomId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
