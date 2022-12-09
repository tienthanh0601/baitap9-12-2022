import './style.scss';
import { useState } from 'react';

export function TaskForm() {
    const [title, setTitle] = useState("");
    const [creator, setCreator] = useState("");
    const [decription, setDecription] = useState("");

    const handleTitle = (titleValue) => {
        setTitle(titleValue);
    };

    const handleCreator = (creatorValue) => {
        setCreator(creatorValue);
    };
    const handleDecription = (decriptionValue) => {
        setDecription(decriptionValue);
    };

    const handleSubmit = (e) => {
        if (title === "") {
          alert("Vui long nhap title");
          return;
        }
    
        if (creator === "") {
          alert("Vui long nhap creator");
          return;
        }

        if (decription === "") {
            alert("Vui long nhap decription");
            return;
        }
    
        alert("Dang nhap thanh cong");
        console.log("title: " + title);
        console.log("creator: " + creator);
        console.log( "decription: "+decription);
      };


    return (
        <div className="task-form">
            <div className='form-input'>
                <div className='title-name'>
                Title:
                </div>
                <input type='text' 
                    placeholder='Task Title' 
                    name='title'
                    onChange={(e) => handleTitle(e.target.value)}
                    />
            </div>

            <div className='form-input'>
                <div className='title-name'>
                    Creator:
                </div>
                <input 
                    type='text' 
                    placeholder='Task Creator' 
                    name='creator'
                        onChange={(e) => handleCreator(e.target.value)}
                    />
            </div>

            <div className='form-input'>
                <div className='title-name'>
                Decription:
                </div>
                <input 
                    type='text' 
                    placeholder='Task Decription' 
                    name='decription'
                    onChange={(e) => handleDecription(e.target.value)}
                    />
            </div>

            <div className='form-btn'>
                <button className='btn-save' type='submit' onClick={(e) => handleSubmit(e)}>Save</button>
            </div>

        </div>
    );
}