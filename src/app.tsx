import { useState } from "preact/hooks";
import dayjs from "dayjs";
import { Form } from "./components/Form";
import "./app.css";

export function App() {
  const [birthDate, setBirthDate] = useState("2020-01-01");
  const [targetDate, setTargetDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [allowSave, setAllowSave] = useState(false);

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
        <Form {...formProps} />
      </main>
    </>
  );
}
