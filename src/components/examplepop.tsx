import * as React from 'react';
import { Dialog, DialogFooter } from '@fluentui/react/lib/Dialog';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { ChoiceGroup } from '@fluentui/react/lib/ChoiceGroup';
import { useBoolean } from '@fluentui/react-hooks';
import { TextField } from '@fluentui/react';

const modelProps = {
  isBlocking: true,
  topOffsetFixed: true,
};

const options = [
  {
    key: 'A',
    iconProps: { iconName: 'CalendarDay' },
    text: 'Day',
  },
  {
    key: 'B',
    iconProps: { iconName: 'CalendarWeek' },
    text: 'Week',
  },
  {
    key: 'C',
    iconProps: { iconName: 'Calendar' },
    text: 'Month',
  },
];

export const DialogTopOffsetFixedExample: React.FunctionComponent = () => {
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);



  return (
    <>
      <DefaultButton secondaryText="Opens the Sample Dialog" onClick={toggleHideDialog} text="Open Dialog" />
      <Dialog hidden={hideDialog} onDismiss={toggleHideDialog} modalProps={modelProps}>
       
        <DialogFooter>
            <TextField/>
            <TextField/>
            <TextField/>
            <TextField/>
          <PrimaryButton onClick={toggleHideDialog} text="Save" />
          <DefaultButton onClick={toggleHideDialog} text="Cancel" />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default DialogTopOffsetFixedExample;