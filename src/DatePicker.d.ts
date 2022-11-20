declare module "react-mobile-datepicker" {
  type Props = {
    isOpen: boolean;
    theme: string;
    value: Object;
    min: Object;
    max: Object;
    customHeader?: React.Element<*>;
    showHeader: boolean;
    showFooter: boolean;
    showCaption: boolean;
    dateConfig: Object | Array<string>;
    headerFormat: string;
    confirmText: string;
    cancelText: string;
    onChange: Function;
    onSelect: Function;
    onCancel: Function;
  };

  type State = {
    value: string;
  };

  class DatePicker extends React.Component<Partial<Props>, State> {}

  export default DatePicker;
}
