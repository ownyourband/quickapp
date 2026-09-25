export function getConnectionState(connection) {
  return new Promise((resolve, reject) => {
    connection.getReadyState({
      success: ({ status }) => {
        if (status === 1) {
          resolve("Connected");
        } else if (status === 2) {
          resolve("Disconnected");
        } else {
          resolve(`Unknown (${status})`);
        }
      },
      fail: (message, code) => {
        reject(new Error(`${code}: ${message}`));
      },
    });
  });
}

export function sendMessage(connection, message) {
  return new Promise((resolve, reject) => {
    connection.send({
      data: { message },
      success: () => {
        resolve();
      },
      fail: (errorMessage, code) => {
        reject(new Error(`${code}: ${errorMessage}`));
      },
    });
  });
}
