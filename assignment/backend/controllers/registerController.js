const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../db/dbconfig');

const registerUser = (req, res) => {
  const { name, mobileNumber, email, password } = req.body;

  // hash the password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).json({ error: 'Error registering user' });
    }

    // check email alredy exists
    connection.query('SELECT * FROM register WHERE email=?',
      [email],
      (error, results) => {
        if (error) {
          console.error('Error checking if email exists:', error);
          return res.status(500).json({ error: 'Error registering user' });

        }
        if (results.length > 0) {
          return res.status(409).json({ error: 'Email already registered' });
        }
      }
    )
    // if email does not exist
    connection.query('INSERT INTO register (name, mobileNumber,email,password) VALUES (?, ?, ?, ?)',
      [name, mobileNumber, email, hash],
      (error, results) => {
        if (error) {
          console.error('Error registering user:', error);
          res.status(500).json({ error: 'Error registering user' });
          return;
        }
        console.log('User registered successfully:', results);
        res.status(200).json({ message: 'User registered successfully' });
      }
    );
  })
};



//**************************************** */
const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Retrieve user from database based on email
  connection.query("SELECT * FROM task.register WHERE `email` = ?", [email], (error, results) => {
    if (error) {
      console.error('Error logging in user:', error);
      return res.status(500).json({ error: 'Error logging in user' });
    }
    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const user = results[0];
    // Compare provided password with the hashed password from the database
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.error('Error comparing passwords:', err);
        return res.status(500).json({ error: 'Error logging in user' });
      }
      if (result) {
         // Passwords match, generate JWT
        const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });

        // Set JWT in session
        req.session.token = token;

        // Send the JWT along with the response
         

        // Passwords match, login successful
        return res.status(200).json({ message: 'Login successful', user,token });
      } else {
        // Passwords don't match, login failed
        return res.status(401).json({ error: 'Invalid email or password' });
      }
    });
  });
};




//fetch data
const edit = (req, res) => {
  const q = "select * from task.register";
  connection.query(q, (error, data) => {
    if (error) {
      return res.json(error);
    }
    return res.json(data);
  });
}

//details user
const userDetails = (req, res) => {
  const id = req.params.id;
  connection.query("SELECT * FROM task.register WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
};

//Delete
const Delete = (req, res) => {
  const userId = req.params.id;
  console.log(userId)
  const q = " DELETE FROM task.register WHERE id = ? ";

  connection.query(q, [userId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
};


//Update

const Update = (req, res) => {
  const id = req.params.id;
  const { name, mobileNumber, email } = req.body;
  const q = "UPDATE task.register SET name= ?, mobileNumber= ?, email= ? WHERE id = ?";

  connection.query(q, [name, mobileNumber, email, id], (err, data) => {
    if (err) {
      console.error('Error updating register:', err);
      res.status(500).send('Error updating register');
      return;
    }
    console.log('Register updated successfully');
    res.send('Register updated successfully');
  });
};
module.exports = { registerUser, loginUser, edit, Delete, Update, userDetails };