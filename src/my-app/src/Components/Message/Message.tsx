import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Message.css';

function Message({ msg, type }: { msg: string; type: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const form = document.getElementById("form");

    const logSubmit = (event: Event) => {
      event.preventDefault(); 
      console.log("error");
    };

    if (form) {
      form.addEventListener("submit", logSubmit);
    }

    if (!msg) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      if (form) {
        form.removeEventListener("submit", logSubmit);
      }
      clearTimeout(timer);
    };
  }, [msg]);

  return (
    <>
      {visible && (
        <div className={`message ${type}`} role="alert">
          <p>{msg}</p>
        </div>
      )}
    </>
  );
}

export default Message;
