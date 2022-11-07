import ResponsiveAppBar from "./Navbar"
import React from 'react'


export default {
  title: 'Component/ResponsiveAppBar',
  component: ResponsiveAppBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <ResponsiveAppBar {...args} />

export const changeColor = Template.bind({}); //creating a copy of template


changeColor.args = {
  backgroundColor: "red",
};