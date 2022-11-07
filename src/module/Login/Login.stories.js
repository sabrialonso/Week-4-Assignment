import BasicExample from ".Login/"
import React from 'react'


export default {
  title: 'Component/BasicExample',
  component: BasicExample,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <BasicExample {...args} />

export const changeColor = Template.bind({}); //creating a copy of template


changeColor.args = {
  backgroundColor: "red",
};

