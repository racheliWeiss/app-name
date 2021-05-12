import { ContextualMenu, Toggle } from "@fluentui/react";
import React from "react";
import { useId, useBoolean } from '@fluentui/react-hooks';

const dialogStyles = { main: { maxWidth: 450 } };
const dragOptions = {
  moveMenuItemText: 'Move',
  closeMenuItemText: 'Close',
  menu: ContextualMenu,
  keepInBounds: true,
};

export const DialogBasicExample: React.FunctionComponent = () => {
  
  const [isDraggable, { toggle: toggleIsDraggable }] = useBoolean(false);
  const labelId: string = useId('dialogLabel');
  const subTextId: string = useId('subTextLabel');

  
  return (
    
      <Toggle label="Is draggable" onChange={toggleIsDraggable} checked={isDraggable} />
     
  );
};


