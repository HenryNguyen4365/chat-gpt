import Head from "next/head";
import styles from "./index.module.css";
import SideBar from "./components/SideBar";
import Form from "./components/Form";
export default function Home() {
  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>
      <SideBar />
      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>Translate your sentence</h3>
        {/* <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter an animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form> */}
        <Form />
      </main>
    </div>
  );
}
