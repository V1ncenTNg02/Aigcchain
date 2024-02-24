import React from 'react'
import Image from 'next/image';
import styles from './FeatureCard.module.css'

interface Props{
  name:string,
  text:string,
  src:string
}

const FeatureCard:React.FC<Props> = ({name,text,src}) => {
  return (
    <div className={styles.featureCard}>
      <Image src = {src} alt = {name} width={500} height={500} className={styles.image}/>
      <div className={styles.text}>
        {text}
      </div>
    </div>
  )
}

export default FeatureCard;

