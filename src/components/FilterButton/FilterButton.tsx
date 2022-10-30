import React from 'react';
import Button from "antd/lib/button";
import {FilterValuesType} from "../../app/App";
import s from './FilterButton.module.css'

export type FilterButtonType = {
  changeFilter: (filter: FilterValuesType) => void
  removeIsDoneTask: () => void
}

const filterButtonValues:FilterValuesType[]  = ['all', 'active', 'completed']

export const FilterButton: React.FC<FilterButtonType> = ({changeFilter, removeIsDoneTask}) => {
  const onFilterButtonClickHandler: (filter: FilterValuesType) => void = (filter) => {
    changeFilter(filter)
  }

  const onClickRemove = () => {
    removeIsDoneTask()
  }
  return (
    <div className={s.wrapper}>
      {filterButtonValues.map((filter, index) => <div key={index}
                                                      className={s.buttonGroup}
      >
        <Button className={s.btn} onClick={() => onFilterButtonClickHandler(filter)}
        >{filter}</Button>
      </div>)}
      <Button className={s.btn} onClick={onClickRemove}>clear completed</Button>
    </div>
  )
};