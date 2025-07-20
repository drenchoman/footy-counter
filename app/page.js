import Image from 'next/image';
import styles from './page.module.css';
import Counter from './counter';

const people = [
  'Oscar',
  'Viddy',
  'Liam',
  'Darrin',
  'Adrian',
  'Garcky',
  'Hamish',
  'Praj',
  'Other',
];

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Goal Tally</h1>
      <main className={styles.main}>
        {people.map((person, i) => (
          <Counter key={i} name={person} />
        ))}
      </main>
    </div>
  );
}
