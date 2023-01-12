import { useState } from "react";
import myJson from "../utils/languageList.json" assert { type: "json" };

import styles from "../index.module.css";

export default function Form() {
  //   const languageList = JSON.parse(myJson);
  const [result, setResult] = useState();
  const [textInput, setTextInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("");
  async function onhandleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/correctEng", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: textInput, language: language }),
      });
      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      setLoading(false);
      const result = data.result.split("\n");
      setResult(result[result.length - 1]);
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <form onSubmit={onhandleSubmit}>
      <div style={{ display: "flex" }}>
        <input
          aria-expanded="true"
          type="text"
          name="text"
          placeholder="Type sentence"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <select
          id="lang"
          className={styles.select}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {myJson.map((item, key) => (
            <option value={item.language} key={key}>
              {item.language}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Get answer" />
      {loading ? (
        <div className={styles.container}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <div className={styles.result}>{result}</div>
      )}
    </form>
  );
}
