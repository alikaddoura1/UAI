'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import axios from 'axios';

function SignUp() {

  const [email, setEmail] = useState("jonaddam@gmail.com")
  const [password, setPassword] = useState("")

  const handleSignup = async (e) =>{
    e.preventDefault();
 
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
        <h1>
          ...
        </h1>
        <h2 className = {styles.title}>
          Welcome to UAI
        </h2>
   
      </div>
      <SignUp> </SignUp>

      <div className={styles.grid}>
        
        <a></a>
       

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about UAI and its application and uses!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Login <span>-&gt;</span>
          </h2>
          <p>Already have an account?</p>
        </a>

       
      </div>
        
    </main>
  );
}
