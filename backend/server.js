const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import CORS middleware

const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS for all requests
app.use(cors());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "achref123",
  database: "robot",
});

// Connect to Database
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
    return;
  }
  console.log("Connected to MySQL database!");
});

// Login Endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Username and password are required" });
  }

  const query =
    "SELECT * FROM users WHERE TRIM(LOWER(username)) = TRIM(LOWER(?)) AND password = ?";
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error("Error executing query:", err.message);
      return res
        .status(500)
        .json({ success: false, error: "Database query error" });
    }
    if (results.length > 0) {
      return res.json({ success: true, message: "Login successful" });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    }
  });
});

// Signup Endpoint
app.post("/signup", (req, res) => {
  const { username, email, password, gender, dob, city } = req.body;

  if (!username || !email || !password || !gender || !dob || !city) {
    return res.status(400).json({
      success: false,
      message:
        "All fields are required",
    });
  }

  // Check if the user already exists
  const checkQuery = "SELECT * FROM users WHERE LOWER(username) = LOWER(?)";
  db.query(checkQuery, [username], (err, results) => {
    if (err) {
      console.error("Error checking user existence:", err.message);
      return res.status(500).json({ error: "Database query error" });
    }
    if (results.length > 0) {
      return res
        .status(409)
        .json({ success: false, message: "Username already exists" });
    }

    // Insert new user into the database
    const insertQuery =
      "INSERT INTO users (username, email, password, gender, dob, city) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(insertQuery, [username, email, password, gender, dob, city], (err) => {
      if (err) {
        console.error("Error inserting user:", err.message);
        return res.status(500).json({ error: "Error inserting user data" });
      }
      return res.json({
        success: true,
        message: "User registered successfully",
      });
    });
  });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
