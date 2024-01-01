import Link from 'next/link';
import React from 'react';
import styles from './MiniHeader.module.css';  // Update the path based on your actual file structure
import Image from 'next/image';

function MiniHeader() {
  return (
    <div className={styles.main}>
      <div className={styles.links}>
        <a href='#' className={styles.first}>Your can reach us through</a>
        <a href='#'>+91-984-5825982</a>
        <a href='#'>+91-996-4689921</a>
        <a href='#'>sales@cumulations.com</a>
      </div>
      <div>
        <div className={styles['social-icons']}>
          <a href="#">
            <img src="/images/Facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/images/Twitter.png" alt="" />
          </a>
          <a href="#">
            <img src="/images/Linkedin.png" alt="" />
          </a>
          <a href="#">
            <img src="/images/Youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MiniHeader;
