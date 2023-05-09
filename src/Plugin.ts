import { Streamdeck } from '@rweich/streamdeck-ts';

import { onNewStartTimer } from './startTimer/StartTimer';

const plugin = new Streamdeck().plugin();

plugin.on('willAppear', ({ context }) => plugin.getSettings(context));
plugin.on('didReceiveSettings', ({ action, context, settings }) => {
  switch (action.split('.').pop()) {
    case 'starttimer': {
      onNewStartTimer(plugin, context, settings);
      break;
    }
    default: {
      throw new Error('no init function for action: ' + action);
    }
  }
});

export default plugin;
