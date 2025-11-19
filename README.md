# 🌿 GreenNest – Indoor Plant Care & Store

A single-page React web app for plant lovers to explore, buy, and learn how to care for indoor plants.

---

## 🚀 Live Demo
🔗 [Live Site Link](https://greennest-2feeb.web.app/)

## 💻 GitHub Repository
🔗 [GitHub Repo Link](https://github.com/programming-hero-web-course2/b12-a9-firesheild-rakib-hossain32)

---

## 🌱 Features
- Firebase Authentication (Signup, Login, Google Login, Forgot Password)
- Protected Routes for plant details & profile page
- JSON data for plant listings
- Responsive & calming UI design
- Profile Update using `updateProfile()`
- Password show/hide toggle
- Toast notifications for actions

---

## 🪴 JSON Data Example
```json
{
  "plantId": 1,
  "plantName": "Snake Plant",
  "category": "Air Purifier",
  "price": 18,
  "rating": 4.8,
  "availableStock": 10,
  "careLevel": "Easy",
  "description": "A hardy plant that purifies indoor air and thrives in low light.",
  "image": "https://i.postimg.cc/example.png",
  "providerName": "UrbanGreen Studio"
}
```



## 🔥 Technologies Used
- React + React Router
- Firebase Authentication
- Tailwind CSS
- Framer Motion
- React Toastify

---



## 📂 Project Structure
src/
┣ components/
┣ pages/
┣ context/
┣ firebase/
┣ layout/
┣ assets/
┗ main.jsx


---

## Dependencies
Add package.json
```bash
"dependencies": {
    "@tailwindcss/vite": "^4.1.15",
    "daisyui": "^5.3.7",
    "firebase": "^12.4.0",
    "lucide-react": "^0.546.0",
    "motion": "^12.23.24",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-icons": "^5.5.0",
    "react-loading-indicators": "^1.0.1",
    "react-router": "^7.9.4",
    "react-toastify": "^11.0.5",
    "tailwindcss": "^4.1.15"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "vite": "^7.1.7"
  }
