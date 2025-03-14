### **Flash-POS Backend**
🚀 **Overview**  
The **Flash-POS Backend** serves as the core API for the **Flash-POS system**, a **Point-of-Sale (POS) application**. It manages **recipes, ingredients, allergens, and dietary tags** using **Node.js, Express, and PostgreSQL**.

---

## 📌 **Features**
✅ **Recipe Management**  
   - Fetch recipes along with **ingredients, allergens, and dietary tags**  
✅ **Ingredient Management**  
   - Fetch ingredient details, including **allergen and dietary tag associations**  
✅ **PostgreSQL Database Integration**  
   - Uses **Prisma ORM** to manage database interactions  
✅ **CORS Enabled**  
   - Supports frontend communication with proper security configurations  

---

## 📌 **Installation & Setup**
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/yourusername/flash-pos-backend.git
cd flash-pos-backend
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Set Up Environment Variables**  
Create a `.env` file in the root directory and add:
```
DATABASE_URL=postgres://your_user:your_password@localhost:5432/your_database
PORT=5001
```
Replace the values with your actual PostgreSQL credentials.

### 4️⃣ **Start the Development Server**
```sh
npm run dev
```
The server will run on:  
📍 **http://localhost:5001**

---

## 📌 **API Endpoints**
### 🔹 **Recipes**
#### **Fetch All Recipes**
**Request:**  
```http
GET /api/recipes
```
**Response Example:**
```json
[
    {
        "name": "Pesto Pasta",
        "subDivisionId": 3,
        "version": 1,
        "id": 1,
        "RecipeIngredient": [
            {
                "amount": 100,
                "ingredientId": 1,
                "recipeId": 1,
                "ingredient": {
                    "id": 1,
                    "name": "Pesto",
                    "unit": "g",
                    "metricValue": 100,
                    "ingredientAllergens": [],
                    "ingredientDietaryTags": [
                        {
                            "dietaryTagId": 2,
                            "ingredientId": 1,
                            "dietaryTag": {
                                "id": 2,
                                "name": "Vegetarian"
                            }
                        }
                    ]
                }
            }
        ],
        "recipeAllergens": [
            {
                "recipeId": 1,
                "allergenId": 1,
                "allergen": {
                    "id": 1,
                    "name": "Gluten"
                }
            }
        ],
        "recipeDietaryTags": [
            {
                "recipeId": 1,
                "dietaryTagId": 2,
                "dietaryTag": {
                    "id": 2,
                    "name": "Vegetarian"
                }
            }
        ]
    }
]
```

---

### 🔹 **Ingredients**
#### **Fetch All Ingredients**
**Request:**  
```http
GET /api/ingredients
```
**Response Example:**
```json
[
    {
        "id": 1,
        "name": "Pesto",
        "unit": "g",
        "metricValue": 100,
        "ingredientAllergens": [],
        "ingredientDietaryTags": [
            {
                "dietaryTagId": 2,
                "dietaryTag": {
                    "id": 2,
                    "name": "Vegetarian"
                }
            }
        ]
    }
]
```

---

### 🔹 **Allergens**
#### **Fetch All Allergens**
**Request:**  
```http
GET /api/allergens
```
**Response Example:**
```json
[
    {
        "id": 1,
        "name": "Gluten"
    },
    {
        "id": 2,
        "name": "Dairy"
    }
]
```

---

### 🔹 **Dietary Tags**
#### **Fetch All Dietary Tags**
**Request:**  
```http
GET /api/dietary-tags
```
**Response Example:**
```json
[
    {
        "id": 1,
        "name": "Vegan"
    },
    {
        "id": 2,
        "name": "Vegetarian"
    }
]
```

---

## 📌 **Project Structure**
```
Backend/
│── src/
│   ├── controllers/      # Handles API logic
│   ├── routes/           # Defines API endpoints
│   ├── utils/            # Utility functions
│   ├── prisma/           # Database schema and migrations
│── .env                  # Environment variables
│── package.json          # Dependencies & scripts
│── server.ts             # Express server setup
```

---

## 📌 **Contributing**
Contributions are welcome! To contribute:  
1. **Fork** the repo  
2. **Clone** your fork:  
   ```sh
   git clone https://github.com/yourusername/flash-pos-backend.git
   ```
3. **Create a feature branch:**  
   ```sh
   git checkout -b feature-branch
   ```
4. **Commit & push your changes:**  
   ```sh
   git commit -m "Add new feature"
   git push origin feature-branch
   ```
5. **Open a Pull Request** 🚀  

---

### ✅ **Next Steps**
- Implement **authentication** for protected routes 🔐  
- Add **user management** 📋  
- Implement **stock tracking** 📊  

---

### 🚀 **Flash-POS Backend API is ready!**  






