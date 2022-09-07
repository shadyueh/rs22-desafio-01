import { useState } from "react";
import { Circle, CheckCircle } from "phosphor-react";

import styles from "./Checkbox.module.css";

interface CheckboxProps {
  size?: number;
  checked?: boolean;
}

Checkbox.defaultProps = {
  size: 16,
  checked: false,
};

export function Checkbox({ size, checked }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.checkbox} onClick={handleCheck}>
      {isChecked ? (
        <CheckCircle size={size} className={styles.checked} weight="fill">
          <circle cx="128" cy="128" r="96" fill="white" />
        </CheckCircle>
      ) : (
        <Circle size={size} className={styles.unchecked} />
      )}
    </div>
  );
}
