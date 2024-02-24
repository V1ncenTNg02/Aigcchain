import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="border-t-[2px]
    border-gray-200
    border-opacity-60 w-full">
      <div className={styles.footer}>
        <div className={styles.logoContainer}>
          <Image src="/assets/FooterLogo.svg" alt="logo" width={100} height={100} />
          <p className={styles.logoText}>The intersection of the real world and the metaverse</p>
        </div>
        <div className={styles.links}>
          <div className={styles.link}>Terms of Service</div>
          <div className={styles.link}> Contact us</div>
        </div>
      </div>
    </div>
    
  )
}
