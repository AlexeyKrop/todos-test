import React from 'react';
import Button from "antd/lib/button";
import {FilterValuesType} from "../../app/App";
import s from './FilterButton.module.css'

export type FilterButtonType = {
  changeFilter: (filter: FilterValuesType) => void
}

const filterButtonValues:FilterValuesType[]  = ['all', 'active', 'completed', 'clear completed']

export const FilterButton: React.FC<FilterButtonType> = ({changeFilter}) => {
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