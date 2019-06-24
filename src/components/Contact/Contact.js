import React from 'react'

import styles from '../../css/contact.module.css'
import Title from '../Title'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form className={styles.form} action="https://formspree.io/admin@guava.africa" method="POST">
          <div>
            <input type="text" name="name" id="name" className={styles.formControl}  placeholder="john smith"/>
            <input type="email" name="email" id="email" className={styles.formControl}  placeholder="email@email.com"/>
            <textarea name="message" id="message" rows="10" className={styles.formControl}  placeholder="hello there"/>
            <div>
              <input type="submit" value="submit here" className={styles.submit} />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
