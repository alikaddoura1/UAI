import Image from "next/image";
import styles from "./page.module.css";

function SignUp() {

  
  return (
    <div className={styles.signupContainer}>
    <form className={styles.signupForm}>
      <h2>Sign Up</h2>
      <div className={styles.formGroup}>
        <label>Email</label>
        <input
          type="email"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Password</label>
        <input
          type="password"
          required
        />
      </div>
      <button type="submit" className={styles.signupButton}>Sign Up</button>
    </form>
  </div>
  );
}

export default function Landing() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          Welcome to UAI
        </h1>
      </div>
        <SignUp> </SignUp>
    </main>
  );
}
