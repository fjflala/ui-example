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
import Button from './index';

/**
 *  Stories
 */
const stories = storiesOf('Button', module);
const eventsFromNames = actions('onClick');

stories.addDecorator(withKnobs);
stories.add('Default', withInfo()(() => <Button {...eventsFromNames}>{text('children', 'Hello Button')}</Button>));
stories.add('Secondary', withInfo()(() => <Button {...eventsFromNames} modifier={text('modifier', 'secondary')}>{text('children', 'Button Secondary')}</Button>));
stories.add('Disabled', withInfo()(() => <Button {...eventsFromNames} disabled={boolean('disabled', true)}>{text('children', 'Button Disabled')}</Button>));