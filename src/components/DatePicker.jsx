import DatePicker from "react-mobile-datepicker";

export const DatePicker = (props) => {
  const { isOpen, setIsOpen, date, handleSelect } = props;

  return <DatePicker value={new Date(date)} isOpen={isOpen} onSelect={(date) => handleSelect(date)} onCancel={() => setIsOpen(false)} />;
};
