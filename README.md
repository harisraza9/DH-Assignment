# Dunhumby Product Management App

This project is a **full-stack** product management system with a **C# ASP.NET Core backend** and a **React frontend**. It allows users to register and view products, visualize stock quantities per category, and track newly added products using interactive charts.

---

## **Table of Contents**
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Database Setup](#database-setup)
- [API Documentation](#api-documentation)
- [Dockerization](#dockerization)
- [Troubleshooting](#troubleshooting)

---

## **Features**
Register new products  
View product details in a **data table**  
Interactive **charts** for stock visualization  
RESTful API with **CRUD operations**  
Uses **SQL Server Express (LocalDB)** for embedded database  
**Dockerized** backend and frontend  

---

## **Technologies Used**
### **Backend (ASP.NET Core)**
- **C# .NET 8.0**
- **Entity Framework Core**
- **SQL Server Express (LocalDB)**
- **Swagger (API Documentation)**
- **Docker for containerization**

### **Frontend (React)**
- **React.js**
- **Chart.js + react-chartjs-2**
- **Axios for API calls**
- **Bootstrap (for UI styling)**

---

## **Backend Setup (ASP.NET Core)**

1. Clone the Repository provided

2. Configure Connection String

Open appsettings.json and update the connection string:

"ConnectionStrings": {
  "DefaultConnection": "Server=(localdb)\\MSSQLLocalDB;Database=ProductApiDb;Trusted_Connection=True;"
}

3. Run Migrations

dotnet ef migrations add InitialCreate
dotnet ef database update

4. Run the Backend API

dotnet run

## **Frontend Setup (React)**


1. Navigate to the Frontend Directory

cd ../Frontend

2. Install Dependencies

npm install

3. Configure API Endpoint

Open src/services/api.js and ensure the correct backend URL is set:

const API_BASE_URL = "https://localhost:7265/api/products";

4. Start the React Application

npm start

The frontend will run at: http://localhost:3000/

## **Database Setup**

This project uses SQL Server Express (LocalDB) for easy local storage.

Check If LocalDB is Installed

Run:

sqllocaldb info

If not installed, install SQL Server Express:

Download from: Microsoft SQL Server Express

Check the Database Location

By default, the database file (ProductApiDb.mdf) is located in:

%USERPROFILE%\AppData\Local\Microsoft\Microsoft SQL Server Local DB\Instances\MSSQLLocalDB

View the Database

Use SQL Server Management Studio (SSMS) and connect to:

(localdb)\MSSQLLocalDB

Then open ProductApiDb to view tables.

## **API Documentation (Swagger)**

After running the backend, access Swagger at:

https://localhost:7265/swagger/index.html

Available API Endpoints

#Method

#Endpoint

#Description

POST

/api/products

Add a new product

GET

/api/products

Retrieve all products

GET

/api/products/{id}

Get a product by ID

Example POST Request:

{
  "category": "Electronics",
  "name": "Laptop",
  "productCode": "LAP123",
  "price": 1500.00,
  "sku": "ELEC-123",
  "stockQuantity": 50
}
