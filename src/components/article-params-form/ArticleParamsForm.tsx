import { useState } from 'react';
import { Button } from 'src/ui/button/Button';
import { RadioGroup } from 'src/ui/radio-group/RadioGroup';
import { Select } from 'src/ui/select/Select';
import {
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
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

const fontSizeOptionsCustom = [
	{ label: '18px', value: '18px', title: '18px', className: '' },
	{ label: '25px', value: '25px', title: '25px', className: '' },
	{ label: '38px', value: '38px', title: '38px', className: '' },
];

const normalizeFontSizeOption = (
	value: string | OptionType | null
): OptionType => {
	if (!value) {
		return fontSizeOptionsCustom[0];
	}
	if (typeof value === 'string') {
		return (
			fontSizeOptionsCustom.find((opt) => opt.value === value) ||
			fontSizeOptionsCustom[0]
		);
	}
	return value;
};

const ArticleParamsForm: React.FC<Props> = ({
	initialState,
	isSidebarOpen,
	onApply,
	onReset,
}) => {
	const [formState, setFormState] = useState<ArticleStateType>({
		...initialState,
		fontSizeOption: normalizeFontSizeOption(initialState.fontSizeOption),
	});

	const [isFormChanged, setIsFormChanged] = useState(false);

	const handleChange = (key: keyof ArticleStateType, value: OptionType) => {
		setFormState((prev) => {
			const newState = { ...prev, [key]: value };
			setIsFormChanged(
				JSON.stringify(newState) !== JSON.stringify(initialState)
			);
			return newState;
		});
	};

	const handleApply = () => {
		onApply(formState);
		setIsFormChanged(false);
	};

	const handleReset = () => {
		setFormState(initialState);
		setIsFormChanged(false);
		onReset();
	};

	return (
		<aside
			className={clsx(styles.container, {
				[styles.container_open]: isSidebarOpen,
			})}>
			<form
				className={styles.form}
				onSubmit={(e) => e.preventDefault()}
				onClick={(e) => e.stopPropagation()}>
				<div className={styles.formContent}>
					<h2>ЗАДАЙТЕ ПАРАМЕТРЫ</h2>
					<div className={styles.formGroup}>
						<Select
							title='Шрифт'
							selected={formState.fontFamilyOption}
							options={fontFamilyOptions}
							onChange={(value) => handleChange('fontFamilyOption', value)}
							placeholder='Выберите шрифт'
						/>
					</div>
					<div className={styles.formGroup}>
						<RadioGroup
							title='Размер шрифта'
							selected={formState.fontSizeOption}
							options={fontSizeOptionsCustom}
							onChange={(value) => handleChange('fontSizeOption', value)}
							name='fontSize'
						/>
					</div>
					<div className={styles.formGroup}>
						<Select
							title='Цвет шрифта'
							selected={formState.fontColor}
							options={fontColors}
							onChange={(value) => handleChange('fontColor', value)}
							placeholder='Выберите цвет шрифта'
						/>
					</div>
					<div className={styles.formGroup}>
						<Select
							title='Цвет фона'
							selected={formState.backgroundColor}
							options={backgroundColors}
							onChange={(value) => handleChange('backgroundColor', value)}
							placeholder='Выберите цвет фона'
						/>
					</div>
					<div className={styles.formGroup}>
						<Select
							title='Ширина контента'
							selected={formState.contentWidth}
							options={contentWidthArr}
							onChange={(value) => handleChange('contentWidth', value)}
							placeholder='Выберите ширину'
						/>
					</div>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='button'
							type={isFormChanged ? 'apply' : 'clear'}
							onClick={handleReset}
						/>
						<Button
							title='Применить'
							htmlType='button'
							type={isFormChanged ? 'apply' : 'clear'}
							onClick={handleApply}
						/>
					</div>
				</div>
			</form>
		</aside>
	);
};

export default ArticleParamsForm;
