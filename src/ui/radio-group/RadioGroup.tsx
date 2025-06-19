import React from 'react';
import { OptionType } from 'src/constants/articleProps';
import styles from './RadioGroup.module.scss';
import clsx from 'clsx';

interface RadioGroupProps {
  title: string;
  selected: OptionType | null;
  options: OptionType[];
  onChange: (value: OptionType) => void;
  name: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ title, selected, options, onChange, name }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.group}>
        {options.map((option) => {
          const id = `${name}-${option.value}`;
          return (
            <div key={option.value} className={styles.item} data-selected={selected?.value === option.value}>
              <input
                type="radio"
                id={id}
                name={name}
                value={option.value}
                checked={selected?.value === option.value}
                onChange={() => onChange(option)}
                className={styles.input}
              />
              <label
                htmlFor={id}
                className={clsx(styles.label, { [styles.selected]: selected?.value === option.value })}
              >
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
