import { InputHTMLAttributes, useState } from "react";

import styles from "./Checkbox.module.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  key: string;
  label: string;
}

export function Checkbox({ key, checked, label }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked((state) => {
      return !state;
    });
  }

  return (
    <div className={styles.round}>
      <input type="checkbox" id={`checkbox-${key}`} checked={isChecked} />
      <span onClick={handleCheck}></span>
      <label
        htmlFor={`checkbox-${key}`}
        className={isChecked ? styles.striked : undefined}
      >
        {label}
      </label>
    </div>
  );
}
