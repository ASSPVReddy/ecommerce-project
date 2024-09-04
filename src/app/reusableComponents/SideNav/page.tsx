'use client'
import React, { useState } from 'react';

const SideNav: React.FC = () => {
    const [isMainCollapsed, setIsMainCollapsed] = useState<boolean>(true);
    const [isSubCollapsed, setIsSubCollapsed] = useState<boolean>(true);

    const toggleMainCollapse = () => {
        setIsMainCollapsed(prevState => !prevState);
    };

    const toggleSubCollapse = () => {
        setIsSubCollapsed(prevState => !prevState);
    };

    return (
        <div>
            <h1>
                <a
                    href="#collapse1"
                    onClick={(e) => {
                        e.preventDefault();
                        toggleMainCollapse();
                    }}
                    className='bg-rose-400'
                >
                    Category
                </a>
            </h1>
            <div id="collapse1" className={isMainCollapsed ? 'collapse' : ''}>
                <h2>
                    <a 
                        href="#collapse2"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubCollapse();
                        }} 
                    >
                        Dresses
                    </a>
                </h2>
                <div id="collapse2" className= {isSubCollapsed ? 'collapse' : ''} >
                    <ul className="border-separate">
                        <li>Men's Dresses</li>
                        <li>Women's Dresses</li>
                        <li>Baby's Dresses</li>
                    </ul>
                </div>
                <ul className="">
                    <li className='border-sky-500 border-2'>Jeans</li>
                    <li>Swimwear</li>
                    <li>Sleepwear</li>
                    <li>Sportswear</li>
                    <li>Jumpsuit</li>
                    <li>Blazers</li>
                    <li>Jackets</li>
                    <li>Shoes</li>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;
