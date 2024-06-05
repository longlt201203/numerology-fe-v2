import ReactDatePicker, { DatePickerProps as ReactDatePickerProps } from "react-date-picker";

export type DateValuePiece = Date | null;
export type DateValue = DateValuePiece | [DateValuePiece, DateValuePiece];

export interface DatePickerProps extends ReactDatePickerProps {
    label?: string;
}

export default function DatePicker(props: DatePickerProps) {
    return (
        <div className="flex flex-col border-b">
            {props.label && <label htmlFor="" className="text-sm text-gray-500 font-opensans">{props.label}</label>}
            <ReactDatePicker {...props} format="dd/MM/yyyy" />
        </div>
    )
}