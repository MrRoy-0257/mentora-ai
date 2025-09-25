# mentora-ai read me file
# Mentora AI




Mentora AI is an **AI-powered academic assistant** that helps students and educators by providing:

- AI Chatbot for answering questions.
- Automatic quiz generation from content.
- Summarization of PDF and DOCX files.
- User authentication (register/login).

---

## 📂 Project Structure

mentora-ai/
├── client/ # React frontend
├── server/ # Node.js/Express backend
│ ├── routes/ # API routes
│ ├── controllers/ # Auth & backend logic
│ └── services/ # AI service integration
├── .env # Environment variables (not pushed)
└── README.md


---

## ⚙️ Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **AI:** OpenRouter (gpt-4o-mini / deepseek-r1-0528)
- **File Parsing:** PDF & DOCX (pdf-parse, mammoth)
- **Authentication:** JWT & bcrypt

---

## 🚀 Features

1. **AI Chatbot**
   - Send prompts to AI and receive answers in clear English.

2. **Quiz Generation**
   - Generate 10 multiple-choice questions from any text content.

3. **Summarization**
   - Summarizes academic PDF or Word documents into clear points.

4. **Authentication**
   - Register and login users securely.

---
## 🖼 Image Generation (Work in Progress)

I am currently working on adding an **AI-powered Image Generation** feature to Mentora AI.  
- Status: **60% completed**  
- This feature will allow users to generate images based on text prompts directly within the app.  
- Once completed, it will integrate seamlessly with the existing AI chat interface.

Stay tuned for updates! 🚀


## 💻 Setup Instructions

1. **Clone repository**
```bash
git clone https://github.com/MrRoy-0257/mentora-ai
cd mentora-ai

Install backend dependencies

cd server
npm install

Install frontend dependencies

cd ../client
npm install
Add environment variables


Create a .env in server/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
USE_OPENROUTER=true
OPENROUTER_API_KEY=your_personal_key_here


Run the backend

cd server
npm run dev


Run the frontend

cd client
npm start

Open http://localhost:3000
 to see Mentora AI in action.
