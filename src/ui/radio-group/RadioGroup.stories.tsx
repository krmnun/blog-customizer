import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';
import { useState } from 'react';
import { OptionType } from 'src/constants/articleProps'; // Импортируем OptionType

const meta: Meta<typeof RadioGroup> = {
	component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const RadioGroupWithState = () => {
	const options: OptionType[] = [
		{
			label: '1 опция',
			title: '1 опция',
			value: '1 опция',
			className: '',
			optionClassName: 'option-1',
		},
		{
			label: '2 опция',
			title: '2 опция',
			value: '2 опция',
			className: '',
			optionClassName: 'option-2',
		},
		{
			label: '3 опция',
			title: '3 опция',
			value: '3 опция',
			className: '',
			optionClassName: 'option-3',
		},
		{
			label: '4 опция',
			title: '4 опция',
			value: '4 опция',
			className: '',
			optionClassName: 'option-4',
		},
	];
	const [selected, setSelected] = useState(options[0]);

	return (
		<>
			<RadioGroup
				selected={selected}
				name='radio'
				onChange={setSelected}
				options={options}
				title='Название радиогруппы'
			/>
		</>
	);
};

export const RadioGroupStory: Story = {
	render: () => <RadioGroupWithState />,
};
