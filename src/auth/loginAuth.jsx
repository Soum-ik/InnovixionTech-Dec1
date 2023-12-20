import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "./firebase";
import { createContext, useContext, useState } from "react";
const Auth_context = createContext();
export function useAuth() {
  return useContext(Auth_context);
}

export default function AuthProvider({ children }) {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const [user, setUser] = useState(null);
  const googleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user.displayName);
    } catch (err) {
      console.log(err);
    }
  };
  const value = { user, googleAuth };
  return (
    <Auth_context.Provider value={value}>{children}</Auth_context.Provider>
  );
}
