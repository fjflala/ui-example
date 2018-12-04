/**
 *  Module dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { actions } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import './style.scss';

/**
 *  Component
 */
import Textfield from './index';

/**
 *  Stories
 */
const stories = storiesOf('Textfield', module);
const eventsFromNames = actions('onClick', 'onFocus', 'onHover', 'onBlur', 'onChange');

stories.addDecorator(withKnobs);
stories.add('Default', withInfo()(() => (
  <Textfield
    {...eventsFromNames}
    label="Ciudad"
    hint="Por ejemplo: Barcelona, París"
  />
)));