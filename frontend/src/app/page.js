'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

function SignUp() {

  const [email, setEmail] = useState("jonaddam@gmail.com")
  const [password, setPassword] = useState("")

  const handleSignup = (e) =>{
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    
    /*
    ill do this later lol
    */
    
  }

  return (
    <div className={styles.signupContainer}>
    <form className={styles.signupForm} onSubmit={handleSignup}>

      <h2>Sign Up</h2>

      <div className={styles.formGroup}>
        <label>Email</label>
        <input
          type="email"
          required
          onChange = {e => setEmail(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Password</label>
        <input
          type="password"
          required
          onChange = {e => setPassword(e.target.value)}
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
        <h1 className = {styles.title}>
          Welcome to UAI
        </h1>
      </div>
        <SignUp> </SignUp>
        <p>Already have an account? Login</p>
    </main>
  );
}
