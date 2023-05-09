import { Streamdeck } from '@rweich/streamdeck-ts';

import { initStartTimerPi } from './startTimer/StartTimerPi';

const pi = new Streamdeck().propertyinspector();
pi.on('websocketOpen', ({ uuid }) => pi.getSettings(uuid));
pi.on('didReceiveSettings', ({ action, settings }) => {
  if (pi.pluginUUID === undefined) {
    console.error('pi has no uuid! is it registered already?', pi.pluginUUID);
    return;
  }

  switch (action.split('.').pop()) {
    case 'starttimer': {
      initStartTimerPi(pi, pi.pluginUUID, settings);
      break;
    }
    default: {
      throw new Error('no init function for action: ' + action);
    }
  }
});

export default pi;
