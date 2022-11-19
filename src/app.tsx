import { useState } from "preact/hooks";
import dayjs from "dayjs";
import { Form } from "./components/Form";
import "./app.css";
import { BiorhythmChart } from "./components/BiorhythmChart";

export function App() {
  const [birthDate, setBirthDate] = useState("2000-01-01");
  const [targetDate, setTargetDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [allowSave, setAllowSave] = useState(false);

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
        <BiorhythmChart {...chartProps} />
        <Form {...formProps} />
      </main>
    </>
  );
}
