# Lambda utilities https://github.com/rasensio/lambdas

## Install

```shell
npm install @rasensio/lambda
```

## DynamoDB

This utility will infer the payload type using the dynamo marshalling function

```javascript
const {dynamo} = require('@rasensio/lambda')

exports.handler = async (event) => {
  let payload = {
    name: 'Rodrigo Asensio',
    twitter: "@rasensio",
    location: 'Barcelona, Spain'
  }
  const response = await dynamo.insert("MyTable", payload)
}
```

## API Gateway

Utilities to parse the body and answer a response including CORS

### Body parsing

```javascript
const {api} = require('@rasensio/lambda')

exports.handler = async (event) => {
  // parse the body to json
  let jsonBody = api.json(event)
  // now get the values
  let twitterHandle = jsonBody.twitter
}
```

### Responses

```javascript
const {api} = require('@rasensio/lambda')

exports.handler = async (event) => {
  // parse the body to json
  let jsonBody = api.json(event)
  // now get the values
  let twitterHandle = jsonBody.twitter
  if (!twitterHandle) {
    // return 400
    return api.bad("enter a value")
  } else {
    // do stuff
    // return 200
    return api.ok("Thank you!")
  }
}
```

## Validation

```javascript
const {api, validation} = require('@rasensio/lambda')

exports.handler = async (event) => {
  // parse the body to json
  let jsonBody = api.json(event)
  // now get the values
  let email = jsonBody.email
  if (!validation.email(email)) {
    // return 400
    return api.bad("enter a valid email")
  } else {
    // do stuff
    // return 200
    return api.ok("Thank you!")
  }
}
```
