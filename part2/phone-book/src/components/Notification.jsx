import React, { useEffect, useState } from 'react'

const Notification = ({ message, error, setShowNotification }) => {
   const [visible, setVisible] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setVisible(false);
         setShowNotification(false)
      }, 5000);

      return () => clearTimeout(timer);
   }, []);

   return (
      <div>
         {
            visible &&
            <div className={error ? "notification-error" : "notification-ok"}>
               {message}
            </div>
         }
      </div>
   )
}

export default Notification