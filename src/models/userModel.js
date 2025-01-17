const userModel = `
  CREATE TABLE IF NOT EXISTS users (
      userId VARCHAR(50) UNIQUE NOT NULL,
      nama VARCHAR(50) NOT NULL,
      email VARCHAR(50) NOT NULL,
      password VARCHAR(150),
      role ENUM('admin', 'user') DEFAULT 'user'
  )
`;

module.exports = userModel;