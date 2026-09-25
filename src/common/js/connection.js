export function getConnectionState(connection) {
  let connectionState = "disconnected";
  console.log("the passed connection object:", connection);

  connection.getReadyState({
    success: (status) => {
      console.log("connection success object", status);
      connectionState = status;
    },
    fail: (message, code) => {
      console.log("connection fail object", message, code);
      connectionState = `BALL EXPOLOSTION: ${code}: ${message}`;
    },
  });
  console.log("connection state object", connectionState);

  return connectionState;
}
export function sendMessage(connection, message) {
  console.log("got connection object in sendMessage:", connection);
  console.log("message to send:", message);
  connection.send({
    data: {
      str: "test",
      num: 123,
      message: message,
    },
    success: () => {
      console.log(`handling success`);
    },
    fail: (data, code) => {
      console.log(
        `handling fail, errMsg = ${data.data}, errCode = ${data.code}`,
      );
    },
  });
}
