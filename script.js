// 🔹 Firebase config
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV_IlYBZXis9EzNIZyWYAnqYai9HzO-Ss",
  authDomain: "car-tracker-ce449.firebaseapp.com",
  projectId: "car-tracker-ce449",
  storageBucket: "car-tracker-ce449.firebasestorage.app",
  messagingSenderId: "607425956340",
  appId: "1:607425956340:web:f3a96920c9b1dfad5811a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

db.collection("cars").get()
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const carsDiv = document.getElementById("cars");

// 🔹 Загрузка автомобилей
async function loadCars() {
  carsDiv.innerHTML = "";
  try {
    const snapshot = await db.collection("cars").get();
    snapshot.forEach(doc => {
      const c = doc.data();
      carsDiv.innerHTML += `
        <div class="car">
          <h3>${c.name}</h3>
          <img src="${c.image}" alt="${c.name}">
          <p>${c.desc}</p>
          <b>${c.status}</b>
        </div>
      `;
    });
  } catch(e) {
    console.error("Ошибка загрузки авто: " + e.message);
  }
}

carsDiv.innerHTML += `
  <div class="car">
    <h3>${c.name || ''}</h3>
    <img src="${c.image || 'https://via.placeholder.com/200'}">
    <p>${c.desc || ''}</p>
    <b class="${statusClass}">${c.status}</b>
  </div>
`;
async function loadCars() {
  carsDiv.innerHTML = "";
  const snapshot = await getDocs(collection(db, "cars"));
  snapshot.forEach(doc => {
    const c = doc.data();

    carsDiv.innerHTML += `
      <div class="car">
        <h3>${c.name || ''}</h3>
        <img src="${c.image || 'https://via.placeholder.com/200'}">
        <p>${c.desc || ''}</p>
        <b class="${statusClass}">${c.status}</b>
      </div>
    `;
  });
}
async function loadCars() {
  carsDiv.innerHTML = "";
  const snapshot = await getDocs(collection(db, "cars"));

  snapshot.forEach(doc => {
    const c = doc.data();

    carsDiv.innerHTML += `
      <div class="car">
        <h3>${c.name || ''}</h3>
        <img src="${c.image || 'https://via.placeholder.com/200'}">
        <p>${c.desc || ''}</p>
        <b class="${statusClass}">${c.status}</b>
      </div>
    `;
  });
let statusClass = '';
if (c.status.toLowerCase().includes('баг') || c.status.toLowerCase().includes('ошибка')) statusClass = 'status-bug';
else if (c.status.toLowerCase().includes('разработ')) statusClass = 'status-dev';
else if (c.status.toLowerCase().includes('готов')) statusClass = 'status-ready';
}
// 🔹 Загружаем авто при старте
loadCars();