import React from 'react';
import { useAuth } from '../../providers/Auth';
import './Ui.styles.css';

function SwitchButton() {
    const { isChecked, setIsChecked } = useAuth();

    function handleChecked() {
        setIsChecked((prev) => !prev )
    }

    return (
        <div onClick={handleChecked}>
            {
                isChecked ? (
                    <div className="switch">
                        <input type="checkbox" checked/>
                        <span className="slider round"></span>
                    </div>
                ):(
                    <div className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </div>
                )
            }
        </div>
    )
}

export default SwitchButton;