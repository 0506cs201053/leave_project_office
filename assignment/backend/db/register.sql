-- db/createTable.sql
CREATE TABLE IF NOT EXISTS register (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  mobileNumber VARCHAR(15) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);
