import { Dayjs } from "dayjs";
import { Fragment, FunctionComponent } from "react";
import DateCell from "./DateCell";

export type MonthViewProps = {
  month: Dayjs[][];
};

const MonthView: FunctionComponent<MonthViewProps> = ({ month }) => {
  return  (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, x) => (
        <Fragment key={`row-${x}`}>
          {row.map((col, y) => (
            <DateCell date={col} key={`col-${y}`} rowIdx={x}/>
          ))}
        </Fragment>
      ))}
    </div>
  )
};

export default MonthView;
