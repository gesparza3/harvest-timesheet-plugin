export type StartTimerSettings = {
  harvestToken: string;
  harvestUserId: string;
  timesheetName: string;
};

/** Settings typeguard to check whether the passed value is an actual settings object */
export function isStartTimerSettings(value: unknown): value is StartTimerSettings {
  return (
    (value as StartTimerSettings).hasOwnProperty('harvestToken')
    && (value as StartTimerSettings).hasOwnProperty('harvestUserId')
    && (value as StartTimerSettings).hasOwnProperty('timesheetName')
  );
}

export const defaultSettings: StartTimerSettings = { harvestToken: '', harvestUserId: '', timesheetName: '' };
