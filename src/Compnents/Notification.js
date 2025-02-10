import React from 'react';
import { useShop } from '../Context/ShopContext';

const Notification = () => {
  const { notification } = useShop();

  if (!notification.visible) return null;

  return (
    <div
      className="fixed top-24 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-out z-50"
    >
      {notification.message}
    </div>
  );
};

export default Notification;
