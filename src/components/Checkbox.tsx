import { InputHTMLAttributes, useState } from "react";

import styles from "./Checkbox.module.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export function Checkbox({ id, label }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked((state) => {
      return !state;
    });
  }

  return (
    <div className={styles.round}>
      <input type="checkbox" id={`checkbox-${id}`} checked={isChecked} readOnly/>
      <span onClick={handleCheck}></span>
      <label
        htmlFor={`checkbox-${id}`}
        className={isChecked ? styles.striked : undefined}
      >
        {label}
      </label>
    </div>
  );
}
