import dayjs from "dayjs";
import { StateUpdater, useCallback, useState } from "preact/hooks";
import DatePicker from "react-mobile-datepicker";
// import "react-mobile-datepicker-ts/dist/main.css";
// import { DatePicker } from "./DatePicker";
import classes from "./Form.module.css";

type FormProps = {
  birthDate: string;
  setBirthDate: StateUpdater<string>;
  targetDate: string;
  setTargetDate: StateUpdater<string>;
  allowSave: boolean;
  setAllowSave: StateUpdater<boolean>;
};

type DatePickerProps = {
  isOpen: boolean;
  setIsOpen: StateUpdater<boolean>;
  date: string;
  handleSelect: (date: Date) => void;
};

// const CustomizedDatePicker = (props: DatePickerProps) => {
//   const { isOpen, setIsOpen, date, handleSelect } = props;

//   return (
//       <DatePicker value={new Date(date)} isOpen={isOpen} onSelect={(date: Date) => handleSelect(date)} onCancel={()=>setIsOpen(false)} />
//   );
// };

const formatDate = (date: Date) => {
  return dayjs(date).format("YYYY/MM/DD");
};

export const Form = (props: FormProps) => {
  const { birthDate, setBirthDate, targetDate, setTargetDate, allowSave, setAllowSave } = props;
  const [datePickerMode, setDatePickerMode] = useState<"birthDate" | "targetDate">("birthDate");

  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = useCallback((date: any) => {
    setDate(date);
    setIsOpen(false);
  }, []);

  const handleInputBirthDate = useCallback(
    (e: Event) => {
      const target = e.target as HTMLInputElement;
      setBirthDate(target.value);
      if (allowSave) {
        localStorage.setItem("birthDate", target.value);
      }
    },
    [allowSave]
  );

  const handleSelectBirthDate = useCallback(
    (date: Date) => {
      const dateStr = formatDate(date);
      setBirthDate(dateStr);
      if (allowSave) {
        localStorage.setItem("birthDate", dateStr);
      }
      setIsOpen(false);
    },
    [allowSave]
  );

  // const handleSelectBirthDate = () => console.log(date);

  const handleInputTargetDate = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    setTargetDate(target.value);
  }, []);

  const handleSave = useCallback(
    (e: Event) => {
      const target = e.target as HTMLInputElement;
      setAllowSave(target.checked);
      if (target.checked) {
        localStorage.setItem("birthDate", birthDate);
      } else {
        localStorage.removeItem("birthDate");
      }
    },
    [birthDate]
  );

  // const birthDatePickerProps = {
  //   isOpen,
  //   date: date,
  //   onSelect: handleSelectBirthDate,
  // };

  let datePickerProps = {
    isOpen,
    setIsOpen,
    date: birthDate,
    handleSelect: handleSelectBirthDate,
  };

  return (
    <form class={classes.form}>
      <table>
        <tr>
          <th>
            <label htmlFor="birthDate">誕生日</label>
          </th>
          <td>
            {/* <input type="date" id="birthDate" defaultValue={birthDate} onInput={(e) => handleInputBirthDate(e)} /> */}
            <input type="button" value={birthDate} />
          </td>
          <th>
            <input type="checkbox" id="save" defaultChecked={allowSave} onInput={(e) => handleSave(e)} />
          </th>
          <td class={classes.checkboxLabel}>
            <label htmlFor="save">保存する</label>
          </td>
        </tr>
        <tr>
          <th>
            <label htmlFor="targetDate">基準日</label>
          </th>
          <td>
            <input type="date" id="targetDate" defaultValue={targetDate} onInput={(e) => handleInputTargetDate(e)} />
          </td>
        </tr>
      </table>
      <input type="button" value={birthDate} onClick={() => setIsOpen(true)} />
      <DatePicker value={date} isOpen={isOpen} onSelect={(date: any) => handleSelect(date)} onCancel={() => setIsOpen(false)} />
      {/* <DatePicker {...datePickerProps} /> */}
    </form>
  );
};
