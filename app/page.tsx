"use client";

import { useState } from "react";
import styles from "./login.module.css";

/* Icons */
const UserIcon = () => <span className={styles.icon}>👤</span>;
const LockIcon = () => <span className={styles.icon}>🔒</span>;

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.container}>
      
      {/* Background */}
      <div className={styles.background}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 380"
          preserveAspectRatio="none"
        >
          <path
            d="M560 0 C560 0 630 110 605 200 C580 295 680 380 680 380 L1200 380 L1200 0Z"
            fill="#2980B9"
            opacity="0.55"
          />
          <path
            d="M520 0 C520 0 595 115 568 210 C542 305 650 380 650 380 L1200 380 L1200 0Z"
            fill="#3498DB"
            opacity="0.28"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.leftInner}>
            <h1>Welcome Back 👋</h1>
            <p>Track, manage, and control everything from one place.</p>

            <div className={styles.stats}>
              <div>
                <h3>12K+</h3>
                <span>Tasks</span>
              </div>
              <div>
                <h3>98%</h3>
                <span>Uptime</span>
              </div>
              <div>
                <h3>340</h3>
                <span>Users</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.card}>
            <h2>Sign In</h2>
            <p className={styles.sub}>Enter your credentials</p>

            {/* Username */}
            <div className={styles.inputBox}>
              <UserIcon />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className={styles.inputBox}>
              <LockIcon />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  /* Eye OFF */
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M3 3L21 21" stroke="currentColor" strokeWidth="2"/>
                    <path
                      d="M10.5 10.5A3 3 0 0013.5 13.5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M2 12C4.5 7 8 5 12 5c1.5 0 3 .3 4.3.9M22 12c-2.5 5-6 7-10 7-1.5 0-3-.3-4.3-.9"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                ) : (
                  /* Eye ON */
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M2 12C4.5 7 8 5 12 5s7.5 2 10 7c-2.5 5-6 7-10 7s-7.5-2-10-7z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
              </button>
            </div>

            <button className={styles.button}>
              Sign In →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}