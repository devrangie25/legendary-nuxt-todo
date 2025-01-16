// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: 'AIzaSyAKaYJzH8JHbhTi_qr5eIv41KfL5xVjfLQ',
    authDomain: 'nuxt3-todo-app.firebaseapp.com',
    projectId: 'nuxt3-todo-app',
    storageBucket: 'nuxt3-todo-app.firebasestorage.app',
    messagingSenderId: '1025295701214',
    appId: '1:1025295701214:web:ffcc3594f96e8f93b49e4f',
    measurementId: 'G-WB6TT9T37V',
  }
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  return {
    provide: {
      firebaseApp: app,
      db
    }
  }
})

/**
 * To access the providers in this plugin, use const { $db, $firebaseApp } = useNuxtApp()
 */
