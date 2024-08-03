
// import Cookies from 'universal-cookie';
// import { auth, provider } from "../firebase-config.js";
// import { signInWithPopup } from "firebase/auth";
// const cookies=new Cookies();

// const Auth = () => {
//   const signinWithGoogle = async () => {
//     const result = await signInWithPopup(auth, provider);
//     console.log(result);
//     Cookies.set("auth-token", result.user.refreshToken);
   
//   }

//   return (
//     <div className="auth">
//       <p>Sign In With Google To Continue</p>
//       <button onClick={signinWithGoogle}>Sign in With Google</button>
//     </div>
//   );
// }

// export default Auth;



import Cookies from 'universal-cookie';
import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";

const cookies = new Cookies();

const Auth = (props) => {
  const {setIsAuth}=props;
  const signinWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  }

  return (
    <div className="auth">
      <p>Sign In With Google To Continue</p>
      <button onClick={signinWithGoogle}>Sign in With Google</button>
    </div>
  );
}

export default Auth;
