import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { useState } from 'react';
import { OptionType } from 'src/constants/articleProps'; // Убедитесь, что путь корректен

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

const SelectWithState = () => {
  const options: OptionType[] = [
    { label: '1 опция', title: '1 опция', value: '1 опция', className: '', optionClassName: 'option-1' },
    { label: '2 опция', title: '2 опция', value: '2 опция', className: '', optionClassName: 'option-2' },
    { label: '3 опция', title: '3 опция', value: '3 опция', className: '', optionClassName: 'option-3' },
    { label: '4 опция', title: '4 опция', value: '4 опция', className: '', optionClassName: 'option-4' },
  ];
  const [selected, setSelected] = useState<OptionType>(options[0]);

  return (
    <>
      <Select
        selected={selected}
        onChange={setSelected}
        options={options}
        title='Название выпадающего списка'
      />
    </>
  );
};

export const SelectStory: Story = {
  render: () => <SelectWithState />,
};
