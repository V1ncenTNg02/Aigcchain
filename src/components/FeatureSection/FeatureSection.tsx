import React from 'react'
import FeatureCard from './FeatureCard'
import styles from './FeatureSection.module.css'

const Features = [
  {name:'Automation', text:'Automating tasks that are repetitive or time-consuming, such as content creation.', src: '/assets/Feature1.png'},
  {name: 'Safeguards', text:'Mitigating AI risks through ownership control and authorization with smart contracts.', src:'/assets/Feature2.png'},
  {name:'Personalize', text:'Deliver personalized and relevant content to users, such as images for advertisements and picture books', src:'/assets/Feature3.png'},
  {name: 'Efficient', text:'Improving the efficiency and accuracy of systems, such as automated customer service and user engagement.', src:'/assets/Feature4.png'}
]

function FeatureSection() {
  return (

    <div className={styles.container}>
      <div className={styles.featureSection}>
        <div className={styles.title}>Responsible, Trustworthy, and Ethical AI Solution</div>
        <div className={styles.description}>Save time and make better decisions with AI-generated content, and discover new ideas and possibilities.</div>
        <div className={styles.cardsContainer}>
          {Features.map((feature, index) => (
            <FeatureCard name = {feature.name} text = {feature.text} src = {feature.src} key = {index}/>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default FeatureSection;