exports.handler = function(event, context, callback) {
  console.log("Event:", event);
  console.log("Context:", context);

  return callback(null, {
    statusCode: 200,
    body: 'Hello, World"'
  });
};