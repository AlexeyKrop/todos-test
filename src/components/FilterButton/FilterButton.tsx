import React, {useState} from 'react';
import Button from "antd/lib/button";
import {FilterValuesType} from "../../app/App";
import s from './FilterButton.module.css'

export type FilterButtonType = {
  changeFilter: (filter: FilterValuesType) => void
}
export const FilterButton: React.FC<FilterButtonType> = ({changeFilter}) => {
  const [filterButtonValues, setFilterButtonValues] = useState<FilterValuesType[]>(['all', 'active', 'completed', 'clear completed'])
  const onFilterButtonClickHandler: (filter: FilterValuesType) => void = (filter) => {
    changeFilter(filter)
  }
  return (
    <div className={s.wrapper}>
      {filterButtonValues.map((filter, index) => <div key={index}
                                                      className={s.buttonGroup}
      >
        <Button className={s.btn} onClick={() => onFilterButtonClickHandler(filter)}
        >{filter}</Button>
      </div>)}
    </div>
  )
};