import { Plugin } from '@rweich/streamdeck-ts';
import Harvest from 'harvest';

import { defaultSettings, isStartTimerSettings } from './StartTimerSettings';

export const onNewStartTimer = (plugin: Plugin, context: string, receivedSettings: unknown) => {
  const settings = isStartTimerSettings(receivedSettings) ? receivedSettings : defaultSettings;

  // just set the title to whatever the new values are ...
  plugin.setTitle(`${settings.harvestToken}\n${settings.timesheetName}`, context);
};
