import { useEffect, useState } from 'react';
import styles from '../styles/spinner.module.css';

const steps = ['Looking for movies...', 'Popping the corn...', 'Pouring the drinks...', 'Scooping the candy...', 'Buying the tickets...'];
let rnd = Math.floor(Math.random() * steps.length);

export default function Spinner() {
  const [msg, setMsg] = useState(steps[rnd]);

  useEffect(() => {
    let rnd = Math.floor(Math.random() * steps.length);
    setTimeout(() => {
      console.log(steps[rnd]);
      setMsg(steps[rnd]);
    }, 300);
  }, [msg]);

  return (
    <div className={styles.spinner}>
      <p>{msg}</p>
    </div>
  );
}
