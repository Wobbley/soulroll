/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onRollByRoomId = /* GraphQL */ `
  subscription OnRollByRoomId($roomId: ID!) {
    onRollByRoomId(roomId: $roomId) {
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
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
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
export const onCreateRoll = /* GraphQL */ `
  subscription OnCreateRoll {
    onCreateRoll {
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
export const onUpdateRoll = /* GraphQL */ `
  subscription OnUpdateRoll {
    onUpdateRoll {
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
export const onDeleteRoll = /* GraphQL */ `
  subscription OnDeleteRoll {
    onDeleteRoll {
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
