import Input from 'antd/lib/input/Input';
import React, {ChangeEvent, KeyboardEvent, memo, useState} from "react";
import {DownOutlined} from "@ant-design/icons";

type AddItemFormType = {
  addItem: (title: string) => void
}
export const AddItemForm: React.FC<AddItemFormType> = memo(({addItem}) => {
  const [title, setTitle] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const addItemHandle: () => void = () => {
    if (title.trim() !== '') {
      addItem(title)
      setTitle('')
    } else {
      setError('Title is required')
    }
  }

  const onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    setTitle(e.currentTarget.value)
  }

  const onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void = (e) => {
    if (error !== null) {
      setError(null)
    }
    if (e.key === "Enter") {
      addItemHandle()
      setTitle('')
    }
  }

  return (
    <Input
      autoFocus
      prefix={<DownOutlined style={{color: 'grey'}}/>}
      status={!!error ? 'error' : undefined}
      placeholder={!!error ? 'enter the task, please' : 'What needs to be done?'}
      value={title}
      onChange={onChangeHandler}
      onKeyPress={onKeyPressHandler}
    />
  )
})