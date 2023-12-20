"use client";
import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';
import { FaAndroid } from 'react-icons/fa';

export default function Home() {

  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true);
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {isClicked ? <p>Check Back later, The app is under construction</p> : <button className="btn btn-primary" onClick={handleClick}>
            <FaAndroid className="m-2" />
              Download Mobile Doctor app
          </button>
          }

        <div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/logo.png"
              alt="first star Logo"
              className={styles.vercelLogo}
              width={180}
              height={37}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Star Consults Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <p className="container text-center">
        "Discover a new era of healthcare with our Mobile Doctor app! We provide comprehensive medical services and expert consultations, bringing the hospital to your fingertips. Experience the convenience of an online hospital where quality care meets modern technology. Your well-being is our priority."</p>

      <div className={styles.grid}>
        <a
          href="/"
          className={styles.card}

        >
          <h2>
            About First Star Consult <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about First Star Consult.</p>
        </a>

        <a
          href="/"
          className={styles.card}


        >
          <h2>
            Mobile Doctor App Andriod <span>-&gt;</span>
          </h2>
          <p>Learn about Mobile Doctor App andriod</p>
        </a>

        <a
          href="/"
          className={styles.card}

        >
          <h2>
            Services <span>-&gt;</span>
          </h2>
          <p>Explore our services</p>
        </a>

        <a
          href="/"
          className={styles.card}

        >
          <h2>
            Partners <span>-&gt;</span>
          </h2>
          <p>
            Learn about our partners.
          </p>
        </a>
      </div>
    </main>
  )
}
