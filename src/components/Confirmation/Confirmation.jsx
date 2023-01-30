import React from 'react';
import './style.css';
import { useGlobalContext } from '../../context';

const Confirmation = ({ handleIsDelete }) => {
    const { functions } = useGlobalContext();

    const handleDeletePost = () => {
        functions.deletePost()
        handleIsDelete();
    }

    return (
        <aside className='confirmation-overlay'>
            <div className='confirmation'>
                <h1>Are you sure to delete this post?</h1>
                <div className='buttons'>
                    <button className='cancel-button' onClick={() => handleIsDelete()}>Cancel</button>
                    <button className='delete-button' onClick={handleDeletePost}>Delete</button>
                </div>
            </div>
        </aside>
    );
};

export default Confirmation;