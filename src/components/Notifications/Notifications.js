import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { UiContext } from '../../contexts/uiContext';

import Notification from './Notification';

const Notifications = () => {
  const { openedNotification, notificationState, setOpenedNotification } = React.useContext(UiContext);
  const [ root, setRoot ] = useState();

  useEffect(() => {
    const rootNode = document.getElementById('root');
    setRoot(rootNode);
  }, []);

  const closeHandler = () => setOpenedNotification(false);

  if (openedNotification && root) {
    return ReactDOM.createPortal(
      <Notification payload={notificationState} onClose={closeHandler} />,
      root
    );
  }

  return null;
}

export default Notifications;
