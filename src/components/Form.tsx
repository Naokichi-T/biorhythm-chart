import { StateUpdater, useCallback } from "preact/hooks";
import "./Form.css";

type FormProps = {
  birthDate: string;
  setBirthDate: StateUpdater<string>;
  targetDate: string;
  setTargetDate: StateUpdater<string>;
  allowSave: boolean;
  setAllowSave: StateUpdater<boolean>;
};

export const Form = (props: FormProps) => {
  const { birthDate, setBirthDate, targetDate, setTargetDate, allowSave, setAllowSave } = props;

  const handleInputBirthDate = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    setBirthDate(target.value);
  }, []);

  const handleInputTargetDate = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    setTargetDate(target.value);
  }, []);

  const handleSave = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    setAllowSave(target.checked);
  }, []);

  return (
    <form>
      <table>
        <tr>
          <th>
            <label htmlFor="birthDate">誕生日</label>
          </th>
          <td>
            <input type="date" id="birthDate" defaultValue={birthDate} onInput={(e) => handleInputBirthDate(e)} />
          </td>
          <th>
            <input type="checkbox" id="save" defaultChecked={allowSave} onInput={(e) => handleSave(e)} />
          </th>
          <td class="checkbox-label">
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
    </form>
  );
};
