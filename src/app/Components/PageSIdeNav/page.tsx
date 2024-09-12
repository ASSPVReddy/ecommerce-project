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

    const handleItemClick = (itemName: string) => {
    };
    return (
        <div className='w-full '>
            <div>
            <a
                href="#collapse1"
                onClick={(e) => {
                    e.preventDefault();
                    toggleMainCollapse();
                }}

            >
                <h1 className="bg-red-300 border w-full h-16 flex items-center justify-between pl-8 ">
                    Categories
                    <i className="fa-solid fa-angle-down float-right pr-8"></i>
                </h1>
            </a>
            </div>

            <div id="collapse1" className={isMainCollapsed ? 'collapse' : ''}>
                <div >
                    <a
                        href="#collapse2"
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSubCollapse();
                        }}
                    >
                        <h2 className='bg-white hover:text-red-300 border w-full h-10  flex justify-between items-center pl-8'>
                            Dresses
                            <i className="fa-solid fa-angle-down float-right pr-8"></i>
                        </h2>
                    </a>
                    <div className=' w-full'>
                        <div id="collapse2" className={isSubCollapsed ? 'collapse' : ''} >
                        <ul className=' absolute  w-80 '>
                            <li className='w-full h-10 hover:bg-gray-50 text-base bg-indigo-50 ' onClick={() => handleItemClick("Men's Dresses")}>
                                <a href='#' onClick={() => {
                                    toggleSubCollapse();
                                }} className='block p-2 ml-6 '>Men's Dresses</a>
                            </li>
                            <li className=' h-10 hover:bg-gray-50 text-base bg-indigo-50' onClick={() => handleItemClick("Women's Dresses")}>
                                <a href='#' onClick={() => {
                                    toggleSubCollapse();
                                }} className='block p-2 ml-6'>Women's Dresses</a>
                            </li>
                            <li className=' h-10 hover:bg-gray-50 text-base bg-indigo-50' onClick={() => handleItemClick("Baby's Dresses")}>
                                <a href='#' onClick={() => {
                                    toggleSubCollapse();
                                }} className='block p-2 ml-6'>Baby's Dresses</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <ul className="bg-white list-none p-0 m-0">
                    <li className='hover:text-red-300 border-neutral-200 border w-full h-10 text-base	'>
                        <a href='#' className='block p-2 ml-6'>Jeans</a>
                    </li>
                    <li className='hover:text-red-300 border-neutral-200 border w-full h-10 text-base	'>
                        <a href='#' className='block p-2 ml-6'>Swimwear</a>
                    </li>
                    <li className='hover:text-red-300 border-neutral-200 border w-full h-10 text-base	'>
                        <a href='#' className='block p-2 ml-6'>Sleepwear</a>
                    </li>
                    <li className='hover:text-red-300 border-neutral-200 border w-full h-10 text-base	'>
                        <a href='#' className='block p-2 ml-6'>Sportswear</a>
                    </li>
                    <li className='hover:text-red-300 border-neutral-200 border w-full h-10 text-base	'>
                        <a href='#' className='block p-2 ml-6'>Jumpsuits</a>
                    </li>
                    <li className='hover:text-red-300 border-neutral-200 border w-full h-10 text-base	'>
                        <a href='#' className='block p-2 ml-6'>Blazers</a>
                    </li>
                    <li className='hover:text-red-300 border-neutral-200 border w-full h-10 '>
                        <a href='#' className='block p-2 ml-6 text-base	'>Jeans</a>
                    </li>
                    <li className='hover:text-red-300 border-neutral-200 border w-full h-10 text-base	'>
                        <a href='#' className='block p-2 ml-6'>Shoes</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;