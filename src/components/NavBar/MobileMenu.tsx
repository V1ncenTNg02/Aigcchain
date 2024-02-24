import React from 'react'
import styles from './MobileMenu.module.css'

const links = [
  {name:'Home',href:'/', dropDown:false},
  {name:'About',href:'/about',dropDown:false},
  {name:'Testnet',href:'/testnet',dropDown:true},
  {name:'Community',href:'/community',dropDown:true},
  {name:'Doc',href:'/Doc', dropDown:false}
]

const Testnet = [
  {name: 'Mint', href : '/'},
  {name:'My NFTs', href:'/'}
]

const Community = [
    {name: 'Twitter', href : '/'},
    {name: 'Discord', href : '/'},
    {name: 'Telegram', href : '/'},
]


function MobileMenu() {

  return (
    <div>
      <div className={styles.menu}>
        <div className={styles.linksContainer}>
          {links.map((link) => (
            <div className={styles.linkWrapper}>
              <div className={styles.link}>{link.name}</div>
              {link.dropDown?(
                link.name === 'Testnet'? (Testnet.map((item)=>(
                  <div className={styles.subLink}>{item.name}</div>
                ))) : (Community.map((item)=>(
                  <div className={styles.subLink}>{item.name}</div>
                )))
              ):null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileMenu;
