import React from 'react';
import '../Loader.css';

const Loader: React.FC = () => {
    return (
        <div className="loading">
            <svg viewBox="0 0 50 50" className="sc-hFXoIY dqYVkE">
                <path d="M25.8,29.09A3,3,0,0,1,28.85,26H50V0H2.59A2.59,2.59,0,0,0,0,2.59V50H25.8Z"></path>
            </svg>
            <svg viewBox="0 0 50 50" className="sc-hFXoIY fZmhqh">
                <rect width="50" height="26.04"></rect>
            </svg>
            <svg viewBox="0 0 50 50" className="sc-hFXoIY gRzRKq">
                <path d="M47.41,0H0V26H22.81a1.39,1.39,0,0,1,1,2.38L2.21,50H50V2.59A2.59,2.59,0,0,0,47.41,0Z"></path>
            </svg>
            <div className="sc-ehsPLh iUHHJz"></div>
            <svg viewBox="0 0 50 50" className="sc-hFXoIY jrbazH">
                <rect width="25.8" height="50"></rect>
            </svg>
            <svg viewBox="0 0 50 50" className="sc-hFXoIY dqYVkE">
                <polygon points="50 50 50 2.21 2.21 50 50 50"></polygon>
            </svg>
            <svg viewBox="0 0 50 50" className="sc-hFXoIY fZmhqh">
                <polygon points="0 2.21 0 50 50 50 50 0 2.21 0 0 2.21"></polygon>
            </svg>
            <div className="sc-ehsPLh iUHHJz"></div>
            <svg viewBox="0 0 50 50" className="sc-hFXoIY hUOMAI">
                <path d="M28.18,24a1.39,1.39,0,0,1-2.38-1V0H0V47.41A2.59,2.59,0,0,0,2.59,50H50V2.21Z"></path>
            </svg>
            <svg viewBox="0 0 50 50" className="sc-hFXoIY jrbazH">
                <polygon points="2.21 0 0 2.21 0 50 50 50 50 0 2.21 0"></polygon>
            </svg>
            <svg viewBox="0 0 50 50" className="sc-hFXoIY dqYVkE">
                <path d="M0,50H47.41A2.59,2.59,0,0,0,50,47.41V0H0Z"></path>
            </svg>
        </div>
    );
};

export default Loader;
