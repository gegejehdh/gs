impor {initializeApp} dari "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
impor * sebagai S dari "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
impor * sebagai A dari "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// GANTI dengan konfigurasi web app Firebase Anda (aman dipublikasikan; keamanan ada di firestore.rules)
const cfg={apiKey:"ISI_API_KEY",authDomain:"ISI_PROJECT_ID.firebaseapp.com",projectId:"ISI_PROJECT_ID",appId:"ISI_APP_ID"};
ekspor const configured=!/^ISI_/.test(cfg.apiKey);
const app = initializeApp(cfg);
ekspor const db = S.getFirestore(app), auth = A.getAuth(app);
ekspor const {collection,doc,getDoc,getDocs,setDoc,addDoc,updateDoc,deleteDoc,query,orderBy,where,serverTimestamp,getCountFromServer}=S;
ekspor const {signInWithEmailAndPassword,signOut,onAuthStateChanged}=A;
ekspor const KELAS=[...Array(11)].map((_,i)=>`X Merdeka ${i+1}`).concat([...Array(11)].map((_,i)=>`XI Merdeka ${i+1}`));
ekspor const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&","<":"<",">":">",'"':""","'":"'"}[c]));
export const compress=(file,max=900,q=.72,type="image/jpeg")=>new Promise((res,rej)=>{const i=new Image();i.onload=()=>{const r=Math.min(1,max/Math.max(i.width,i.height)),c=document.createElement("canvas");c.width=i.width*r;c.height=i.height*r;c.getContext("2d").drawImage(i,0,0,c.width,c.height);res(c.toDataURL(type,q))};i.onerror=()=>rej(Error("Gambar tidak valid"));i.src=URL.createObjectURL(file)});
