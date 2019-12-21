var aws = require("aws-sdk")
var dynamo = new aws.DynamoDB()

/**
 * insert a payload into a table
 */
const insert = async (table, payload) => {
  var params = {
    TableName: table,
    Item: mapper(payload),
    ReturnValues: "ALL_OLD"
  }
  return await dynamo.putItem(params).promise()
}

const get = async (table, key, value) => {
  var params = {
    Key: {
      key: {
        S: value
      }
    },
    TableName: table
  }
  return await dynamo.getItem(params).promise()
}

/**
 * will map the function to a dynamo object
 */
const mapper = (payload) => {
  return aws.DynamoDB.Converter.marshall(payload)
}

exports.insert = insert
exports.get = get