import './style.scss';
import { useState } from 'react';

export function DemoForm() {

    const [username, setusename] = useState("");
    const [ password, setpassword] = useState("");

    const handleChangeUsername = (usernameValue) => {
        setusename(usernameValue);
    };
    const handleChangePassword = (passwordValue) => {
            setpassword(passwordValue);
    };

    const handleSubmit = (e) => {
        if (username === "") {
          alert("Vui long nhap user name");
          return;
        }
    
        if (password === "") {
          alert("Vui long nhap password");
          return;
        }
    
        alert("Dang nhap thanh cong");
        console.log(username);
        console.log(password);
      };

    return (
        <div className="demo-form">
      <div>
        User Name:{" "}
        <input
          name="usename"
          onChange={(e) => handleChangeUsername(e.target.value)}
          type="text"
        />
      </div>
      <div>
        Password:{" "}
        <input
          name="password"
          onChange={(e) => handleChangePassword(e.target.value)}
          type="password"
        />
      </div>
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
    );
}