# Tutorial: running Green Wheels on your computer

## Part 1: Requirements

| Tool | Why |
|---|---|
| Node.js 18 or newer | Runs the backend |
| MySQL 8 (or MariaDB, XAMPP, WAMP) | Stores the user accounts |
| A web browser | Opens the website |

## Part 2: Download and install

```bash
git clone https://github.com/achrefslim/Greenwheels.git
cd Greenwheels
npm install
```

`npm install` downloads Express, mysql2, CORS, body parser and dotenv into `node_modules`.

## Part 3: Create the database

**Option A, command line:**

```bash
mysql -u root -p < database/schema.sql
```

**Option B, phpMyAdmin (XAMPP or WAMP):** open phpMyAdmin, click **Import**, choose `database/schema.sql` and click **Go**.

This creates the database `robot` and the table `users` with the columns `username`, `email`, `password`, `gender`, `dob` and `city`.

## Part 4: Configure the connection

Copy `.env.example` to `.env` and fill it:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=robot
PORT=3000
```

The `.env` file is ignored by git, so your password never goes to GitHub.

## Part 5: Start the backend

```bash
npm start
```

You should see:

```
Server is running on http://localhost:3000
Connected to MySQL database!
```

If you see `Database connection failed`, check the values in `.env` and that MySQL is running.

## Part 6: Use the website

1. Open `frontend/login.html` in your browser (double click it, or use the Live Server extension of VS Code).
2. Click **SIGN UP**, fill in the form and create an account.
3. Sign in with your username and password. You are sent to the home page.
4. Use the menu (☰) to visit the pages:

| Page | What to try |
|---|---|
| Find your robot | Each time you open it, the robot appears at a new place in Tunisia |
| Robot road | A road line is drawn on the map of Tunisia |
| Report garbage | Fill the form and add a photo |
| About the robot | Watch the video and read how the robot collects garbage |
| Contact | Send a message |

## Part 7: Test the API without the website

With the server running:

```bash
curl -X POST http://localhost:3000/signup -H "Content-Type: application/json" -d "{\"username\":\"test\",\"email\":\"test@example.com\",\"password\":\"1234\",\"gender\":\"male\",\"dob\":\"2000-01-01\",\"city\":\"Tunis\"}"
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d "{\"username\":\"test\",\"password\":\"1234\"}"
```

## Part 8: Troubleshooting

| Problem | Solution |
|---|---|
| `Cannot find module 'express'` | Run `npm install` |
| `Database connection failed` | Start MySQL and check `.env` |
| `ER_BAD_DB_ERROR` | Run `database/schema.sql` first |
| Login button does nothing | The backend must be running on port 3000. Open the browser console (F12) to see the error |
| `Username already exists` | Choose another username |
