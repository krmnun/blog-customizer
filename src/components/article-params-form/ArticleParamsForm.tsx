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
    setFormState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleApply = () => {
    onApply(formState);
  };

  const handleReset = () => {
    setFormState(initialState);
    onReset();
  };

  return (
    <aside className={clsx(styles.container, { [styles.container_open]: isSidebarOpen })}>
      <form className={styles.form} onClick={(e) => e.stopPropagation()}>
        <Select
          label="Шрифт"
          selected={formState.fontFamilyOption}
          options={fontFamilyOptions}
          onChange={(value) => handleChange('fontFamilyOption', value)}
        />
        <Select
          label="Цвет текста"
          selected={formState.fontColor}
          options={fontColors}
          onChange={(value) => handleChange('fontColor', value)}
        />
        <Select
          label="Цвет фона"
          selected={formState.backgroundColor}
          options={backgroundColors}
          onChange={(value) => handleChange('backgroundColor', value)}
        />
        <Select
          label="Ширина контента"
          selected={formState.contentWidth}
          options={contentWidthArr}
          onChange={(value) => handleChange('contentWidth', value)}
        />
        <Select
          label="Размер шрифта"
          selected={formState.fontSizeOption}
          options={fontSizeOptions}
          onChange={(value) => handleChange('fontSizeOption', value)}
        />
        <div className={styles.bottomContainer}>
          <Button title="Сбросить" htmlType="reset" type="clear" onClick={handleReset} />
          <Button title="Применить" htmlType="submit" type="apply" onClick={handleApply} />
        </div>
      </form>
    </aside>
  );
};

export default ArticleParamsForm;