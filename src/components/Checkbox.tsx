import { InputHTMLAttributes, useState } from "react";

import styles from "./Checkbox.module.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  key: string;
}

export function Checkbox({ key, checked }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked((state) => {
      return !state;
    });
  }

  return (
    <div className={styles.round}>
      <input
        type="checkbox"
        id={`checkbox-${key}`}
        checked={isChecked}
        onChange={handleCheck}
      />
      <label htmlFor={`checkbox-${key}`}></label>
    </div>
  );
}
