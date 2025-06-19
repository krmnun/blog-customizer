export const fontFamilyClasses = [
	'open-sans',
	'ubuntu',
	'cormorant-garamond',
	'days-one',
	'merriweather',
] as const;

export type FontFamiliesClasses = (typeof fontFamilyClasses)[number];

export type OptionType = {
	label: string;
	title: string;
	value: string;
	className: string;
	optionClassName?: string;
};

export const fontFamilyOptions: OptionType[] = [
	{
		label: 'Open Sans',
		title: 'Open Sans',
		value: 'Open Sans',
		className: fontFamilyClasses[0],
		optionClassName: 'option-' + fontFamilyClasses[0],
	},
	{
		label: 'Ubuntu',
		title: 'Ubuntu',
		value: 'Ubuntu',
		className: fontFamilyClasses[1],
		optionClassName: 'option-' + fontFamilyClasses[1],
	},
	{
		label: 'Cormorant Garamond',
		title: 'Cormorant Garamond',
		value: 'Cormorant Garamond',
		className: fontFamilyClasses[2],
		optionClassName: 'option-' + fontFamilyClasses[2],
	},
	{
		label: 'Days One',
		title: 'Days One',
		value: 'Days One',
		className: fontFamilyClasses[3],
		optionClassName: 'option-' + fontFamilyClasses[3],
	},
	{
		label: 'Merriweather',
		title: 'Merriweather',
		value: 'Merriweather',
		className: fontFamilyClasses[4],
		optionClassName: 'option-' + fontFamilyClasses[4],
	},
	{
		label: 'Merriweather',
		title: 'Шрифт Merriweather',
		value: 'Merriweather',
		className: 'font-merriweather',
		optionClassName: 'option-font-merriweather',
	},
];

export const fontColors: OptionType[] = [
	{
		label: 'Черный',
		title: 'Черный',
		value: '#000000',
		className: 'font-black',
		optionClassName: 'option-black',
	},
	{
		label: 'Белый',
		title: 'Белый',
		value: '#FFFFFF',
		className: 'font-white',
		optionClassName: 'option-white',
	},
	{
		label: 'Серый',
		title: 'Серый',
		value: '#C4C4C4',
		className: 'font-gray',
		optionClassName: 'option-gray',
	},
	{
		label: 'Розовый',
		title: 'Розовый',
		value: '#FEAFE8',
		className: 'font-pink',
		optionClassName: 'option-pink',
	},
	{
		label: 'Ярко-розовый',
		title: 'Ярко-розовый',
		value: '#FD24AF',
		className: 'font-fuchsia',
		optionClassName: 'option-fuchsia',
	},
	{
		label: 'Жёлтый',
		title: 'Жёлтый',
		value: '#FFC802',
		className: 'font-yellow',
		optionClassName: 'option-yellow',
	},
	{
		label: 'Зелёный',
		title: 'Зелёный',
		value: '#80D994',
		className: 'font-green',
		optionClassName: 'option-green',
	},
	{
		label: 'Голубой',
		title: 'Голубой',
		value: '#6FC1FD',
		className: 'font-blue',
		optionClassName: 'option-blue',
	},
	{
		label: 'Фиолетовый',
		title: 'Фиолетовый',
		value: '#5F0DEE',
		className: 'font-purple',
		optionClassName: 'option-purple',
	},
	{
		label: 'Розовый',
		title: 'Цвет розовый',
		value: '#FFAFEB',
		className: 'font-pink',
		optionClassName: 'option-pink',
	},
	{
		label: 'Жёлтый',
		title: 'Цвет жёлтый',
		value: '#FCF802',
		className: 'font-yellow',
		optionClassName: 'option-yellow',
	},
];

export const backgroundColors: OptionType[] = [
	{
		label: 'Белый',
		title: 'Белый',
		value: '#FFFFFF',
		className: 'bg-white',
		optionClassName: 'option-white',
	},
	{
		label: 'Черный',
		title: 'Черный',
		value: '#000000',
		className: 'bg-black',
		optionClassName: 'option-black',
	},
	{
		label: 'Серый',
		title: 'Серый',
		value: '#C4C4C4',
		className: 'bg-gray',
		optionClassName: 'option-gray',
	},
	{
		label: 'Розовый',
		title: 'Розовый',
		value: '#FEAFE8',
		className: 'bg-pink',
		optionClassName: 'option-pink',
	},
	{
		label: 'Ярко-розовый',
		title: 'Ярко-розовый',
		value: '#FD24AF',
		className: 'bg-fuchsia',
		optionClassName: 'option-fuchsia',
	},
	{
		label: 'Жёлтый',
		title: 'Жёлтый',
		value: '#FFC802',
		className: 'bg-yellow',
		optionClassName: 'option-yellow',
	},
	{
		label: 'Зелёный',
		title: 'Зелёный',
		value: '#80D994',
		className: 'bg-green',
		optionClassName: 'option-green',
	},
	{
		label: 'Голубой',
		title: 'Голубой',
		value: '#6FC1FD',
		className: 'bg-blue',
		optionClassName: 'option-blue',
	},
	{
		label: 'Фиолетовый',
		title: 'Фиолетовый',
		value: '#5F0DEE',
		className: 'bg-purple',
		optionClassName: 'option-purple',
	},
	{
		label: 'Белый',
		title: 'Цвет белый',
		value: '#FFFFFF',
		className: 'bg-white',
		optionClassName: 'option-white',
	},
	{
		label: 'Чёрный',
		title: 'Цвет чёрный',
		value: '#000000',
		className: 'bg-black',
		optionClassName: 'option-black',
	},
];

export const contentWidthArr: OptionType[] = [
	{
		label: 'Широкий',
		title: 'Широкий',
		value: '1394px',
		className: 'width-wide',
		optionClassName: 'option-wide',
	},
	{
		label: 'Узкий',
		title: 'Узкий',
		value: '948px',
		className: 'width-narrow',
		optionClassName: 'option-narrow',
	},
];

export const fontSizeOptions: OptionType[] = [
	{
		label: '18px',
		title: '18px',
		value: '18px',
		className: 'font-size-18',
		optionClassName: 'option-size-18',
	},
	{
		label: '25px',
		title: '25px',
		value: '25px',
		className: 'font-size-25',
		optionClassName: 'option-size-25',
	},
	{
		label: '38px',
		title: '38px',
		value: '38px',
		className: 'font-size-38',
		optionClassName: 'option-size-38',
	},
	{
		label: '15px',
		title: 'Размер 15px',
		value: '15px',
		className: 'font-size-15',
		optionClassName: 'option-size-15',
	},
	{
		label: '25px',
		title: 'Размер 25px',
		value: '25px',
		className: 'font-size-25',
		optionClassName: 'option-size-25',
	},
	{
		label: '35px',
		title: 'Размер 35px',
		value: '35px',
		className: 'font-size-35',
		optionClassName: 'option-size-35',
	},
];

export const defaultArticleState = {
	fontFamilyOption: fontFamilyOptions[0],
	fontColor: fontColors[0],
	backgroundColor: backgroundColors[0],
	contentWidth: contentWidthArr[0],
	fontSizeOption: fontSizeOptions[0],
};

export type ArticleStateType = typeof defaultArticleState;
