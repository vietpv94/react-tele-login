// TelegramLoginButton.js
import React, { useEffect } from 'react';

const TelegramLoginButton = () => {
  const botUsername = 'anima_test_bot';
  const authUrl = 'http://localhost:4001/api/v1/auth/telegram';

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.dataset.telegramLogin = botUsername;
    script.dataset.size = "large";
    script.dataset.authUrl = authUrl;
    script.dataset.requestAccess = "write";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div id="telegram-login-button"></div>
  );
};

export default TelegramLoginButton;