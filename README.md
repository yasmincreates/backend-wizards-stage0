# Backend Wizards Stage 0 - Profile Endpoint

A RESTful API that returns profile information with dynamic cat facts.

## 👤 Author

**Yasmin Abdulrahman**  
Email: yasminabdulrahman04@gmail.com  
Stack: Node.js/Express

## 📋 About

This project creates a simple API endpoint that:

- Returns my profile information
- Fetches random cat facts from an external API
- Provides dynamic timestamps in ISO 8601 format

## 🚀 API Endpoint

### GET /me

Returns profile information with a random cat fact.

**Response Example:**

```json
{
  "status": "success",
  "user": {
    "email": "yasminabdulrahman04@gmail.com",
    "name": "Yasmin Abdulrahman",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T14:30:00.000Z",
  "fact": "Cats sleep 70% of their lives."
}
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Local Installation

1. **Clone the repository:**

```bash
git clone <your-repo-url>
cd backend-wizards-stage0
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the server:**

```bash
npm start
```

4. **Test the endpoint:**
   Open your browser or use curl:

```bash
curl http://localhost:3000/me
```

## 📦 Dependencies

- **express**: Web framework for Node.js
- **axios**: HTTP client for making API requests
- **cors**: Enable Cross-Origin Resource Sharing

## 🌐 Deployment

This app can be deployed to Render (free version)

## 🧪 Testing

Test the endpoint locally:

```bash
curl http://localhost:3000/me
```

## 📝 Features

✅ Dynamic timestamp generation  
✅ External API integration (Cat Facts API)  
✅ Error handling with fallback  
✅ CORS enabled  
✅ Clean JSON responses

## 🤝 Contributing

This is a learning project for Backend Wizards Stage 0.

## 📄 License

MIT
