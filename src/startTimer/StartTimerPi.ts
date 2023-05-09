// eslint-disable-next-line node/no-unpublished-import
import { FormBuilder } from '@rweich/streamdeck-formbuilder';
import { PropertyInspector } from '@rweich/streamdeck-ts';

import { type StartTimerSettings, defaultSettings, isStartTimerSettings } from './StartTimerSettings';

export const initStartTimerPi = (pi: PropertyInspector, pluginContext: string, settings: unknown) => {
  const builder = new FormBuilder<StartTimerSettings>(isStartTimerSettings(settings) ? settings : defaultSettings);

  // create a text input and bind it to the property
  builder.addElement('harvestToken', builder.createInput().setLabel('PAT').setPlaceholder('xxxxx'));
  builder.addElement('timesheetName', builder.createInput().setLabel('Timesheet').setPlaceholder('[Project] Example'));

  // append the formbuilder (html) to the propertyinspector
  builder.appendTo(document.querySelector('.sdpi-wrapper') ?? document.body);

  // send the new settings to the propertyinspector whenever they change
  builder.on('change-settings', () => pi.setSettings(pluginContext, builder.getFormData()));
};
