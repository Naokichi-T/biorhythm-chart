import { useState } from "preact/hooks";
import dayjs from "dayjs";
import { Form } from "./components/Form";
import "./app.css";
import { BiorhythmChart } from "./components/BiorhythmChart";

const localBirthDate = localStorage.getItem("birthDate");

export function App() {
  const [birthDate, setBirthDate] = useState("2000-01-01");
  const [targetDate, setTargetDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [allowSave, setAllowSave] = useState(false);

  if (localBirthDate) {
    setBirthDate(localBirthDate);
    setAllowSave(true);
  }

  const chartProps = {
    birthDate,
    targetDate,
  };

  const formProps = {
    birthDate,
    setBirthDate,
    targetDate,
    setTargetDate,
    allowSave,
    setAllowSave,
  };

  return (
    <>
      <header>バイオリズムチャート</header>
      <main>
        {birthDate && targetDate && <BiorhythmChart {...chartProps} />}
        <Form {...formProps} />
        <small>
          ※バイオリズムはあくまで疑似科学です。（
          <a href="https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%82%AA%E3%83%AA%E3%82%BA%E3%83%A0" target="_blank" rel="noreferrer noopener">
            Wikipedia
          </a>
          ）
        </small>
      </main>
    </>
  );
}
