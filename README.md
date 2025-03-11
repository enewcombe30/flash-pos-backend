# Flash-POS Backend

This is the backend for the **Flash-POS** system, a point-of-sale application. It provides authentication, user management, and recipe data using **Node.js, Express, PostgreSQL, and JWT authentication**.

## **🚀 Features**
- **User Authentication** (JWT-based login system using passcodes)
- **Recipe Management** (CRUD operations for recipes)
- **User Management** (Fetching user data)
- **PostgreSQL Database Integration**
- **CORS Enabled** for frontend communication

---

## **📌 Installation & Setup**

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/flash-pos-backend.git
cd flash-pos-backend
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the root directory and add:
```sh
DATABASE_URL=postgres://your_user:your_password@localhost:5432/your_database
PORT=5001
JWT_SECRET=your_secret_key
```

Replace the values with your actual **PostgreSQL credentials**.

### **4️⃣ Start the Development Server**
```sh
npm run dev
```
The server will run on **`http://localhost:5001`**.

---

## **📌 API Endpoints**

### **🔹 Authentication**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/auth/login` | Logs in a user using a passcode (returns JWT) |

#### **Example Login Request (POST /api/auth/login)**
```json
{
  "passcode": "123"
}
```
#### **Response:**
```json
{
  "token": "your_jwt_token_here"
}
```

---

### **🔹 Users**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET` | `/api/users` | Fetches all users (Requires JWT) |

#### **Example Users Request (GET /api/users)**
**Headers:**
```
Authorization: Bearer your_jwt_token_here
```
#### **Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "role": "admin"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "role": "user"
  }
]
```

---

### **🔹 Recipes**
| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET` | `/api/recipes` | Fetches all recipes (Requires JWT) |

#### **Example Recipe Request (GET /api/recipes)**
**Headers:**
```
Authorization: Bearer your_jwt_token_here
```
#### **Response:**
```json
[
  {
    "id": 1,
    "name": "Spaghetti Bolognese",
    "ingredients": "Tomato, Beef, Pasta",
    "steps": "Cook pasta, prepare sauce..."
  }
]
```




