const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
}

const response = (statusCode, payload) => {
  return {
    statusCode: statusCode,
    isBase64Encoded: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Credentials': true,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      result: payload
    })
  }  
} 

const parse = (e) => {
  return JSON.parse(e.body)
}

/**
 * will respond ok 200
 * @param {json} body 
 */
const ok = (message) => {
  return response(200, message)
}

const bad = (message) => {
  return response(400, message)
}

/**
 * will respond error
 * @param {json} body 
 */
const error = (message) => {
  if (!message) {
    message = 'Application error'
  }
  return response(500, message)
}

exports.ok = ok
exports.error = error
exports.bad = bad
exports.parse = parse
