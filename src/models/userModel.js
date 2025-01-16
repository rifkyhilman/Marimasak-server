const userSchema = `
  CREATE TABLE IF NOT EXISTS users (
      userId VARCHAR(50) UNIQUE NOT NULL,
      nama VARCHAR(50) NOT NULL,
      email VARCHAR(50) NOT NULL,
      password VARCHAR(50)
  )
`;

module.exports = userSchema;