import { useState } from 'react';
import { Button } from 'src/ui/button/Button';
import { Select } from 'src/ui/select/Select';
import {
  fontFamilyOptions,
  fontColors,
  backgroundColors,
  contentWidthArr,
  fontSizeOptions,
  ArticleStateType,
  OptionType,
} from 'src/constants/articleProps';
import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

interface Props {
  initialState: ArticleStateType;
  isSidebarOpen: boolean;
  onApply: (state: ArticleStateType) => void;
  onReset: () => void;
}

const ArticleParamsForm: React.FC<Props> = ({ initialState, isSidebarOpen, onApply, onReset }) => {
  const [formState, setFormState] = useState<ArticleStateType>(initialState);

  const handleChange = (key: keyof ArticleStateType, value: OptionType) => {
    console.log('Изменение состояния:', { [key]: value });
    setFormState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleApply = () => {
    console.log('Применение нового состояния:', formState);
    onApply(formState);
  };

  const handleReset = () => {
    console.log('Сброс к начальному состоянию:', initialState);
    setFormState(initialState);
    onReset();
  };

  // Адаптируем fontSizeOptions под тип OptionType и фильтруем для каждого Select
  const fontSizeOptionsCustom: OptionType[] = [
    { label: '15px', value: '15px', title: 'Размер 15px', className: 'font-size-15' },
    { label: '25px', value: '25px', title: 'Размер 25px', className: 'font-size-25' },
    { label: '35px', value: '35px', title: 'Размер 35px', className: 'font-size-35' },
  ];

  return (
    <aside className={clsx(styles.container, { [styles.container_open]: isSidebarOpen })}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()} onClick={(e) => e.stopPropagation()}>
        <div className={styles.formContent}>
          <h2>ЗАДАЙТЕ ПАРАМЕТРЫ</h2>
          <div className={styles.formGroup}>
            <Select
              title="Шрифт"
              selected={formState.fontFamilyOption}
              options={fontFamilyOptions}
              onChange={(value) => handleChange('fontFamilyOption', value)}
              placeholder="Выберите шрифт"
            />
          </div>
          <div className={styles.formGroup}>
            <Select
              title="РАЗМЕР ШРИФТА"
              selected={formState.fontSizeOption}
              options={fontSizeOptionsCustom}
              onChange={(value) => handleChange('fontSizeOption', value)}
              placeholder="Выберите размер"
            />
          </div>
          <div className={styles.formGroup}>
            <Select
              title="Цвет шрифта"
              selected={formState.fontColor}
              options={fontColors}
              onChange={(value) => handleChange('fontColor', value)}
              placeholder="Выберите цвет шрифта"
            />
          </div>
          <div className={styles.formGroup}>
            <Select
              title="Цвет фона"
              selected={formState.backgroundColor}
              options={backgroundColors}
              onChange={(value) => handleChange('backgroundColor', value)}
              placeholder="Выберите цвет фона"
            />
          </div>
          <div className={styles.formGroup}>
            <Select
              title="Ширина контента"
              selected={formState.contentWidth}
              options={contentWidthArr}
              onChange={(value) => handleChange('contentWidth', value)}
              placeholder="Выберите ширину"
            />
          </div>
          <div className={styles.bottomContainer}>
            <Button title="СБРОСИТЬ" htmlType="button" type="clear" onClick={handleReset} />
            <Button title="ПРИМЕНИТЬ" htmlType="button" type="apply" onClick={handleApply} />
          </div>
        </div>
      </form>
    </aside>
  );
};

export default ArticleParamsForm;