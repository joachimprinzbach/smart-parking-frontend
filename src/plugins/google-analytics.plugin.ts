const firebaseConfig = {
  apiKey: "AIzaSyD0w86295bfBm9RmLA6DBcAhpwwF4Qzjcg",
  authDomain: "test-smart-parking-ch.firebaseapp.com",
  databaseURL: "https://test-smart-parking-ch.firebaseio.com",
  projectId: "test-smart-parking-ch",
  storageBucket: "test-smart-parking-ch.appspot.com",
  messagingSenderId: "467145986664",
  appId: "1:467145986664:web:b7177ed9e49bb708ed21dd",
  measurementId: "G-DJ0CT3BQN3",
}
// Initialize Firebase
const firebase = (window as any).firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()
