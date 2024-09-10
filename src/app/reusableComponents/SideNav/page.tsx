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
        <div className='w-3/12'>
            <a
                href="#collapse1"
                onClick={(e) => {
                    e.preventDefault();
                    toggleMainCollapse();
                }}
            >
                <h1 className="bg-red-300 border-neutral-200 border-2 w-full h-16 pt-0 pr-7	 flex justify-around items-center">
                    Category
                    <i className="fa-solid fa-angle-down float-right"></i>
                </h1>
            </a>
            <div id="collapse1" className={isMainCollapsed ? '' : ''}>
                <a
                    href="#collapse2"
                    onClick={(e) => {
                        e.preventDefault();
                        toggleSubCollapse();
                    }}
                >
                    <h2 className='hover:text-red-300 border-neutral-200 border-2 w-full h-10  pt-0 pr-7 flex justify-around items-center'>
                        Dresses
                    <i className="fa-solid fa-angle-down float-right "></i>
                    </h2>
                </a>
                    <div  id="collapse2" className={isSubCollapsed ? 'collapse' : ''} >
                    <ul className='list-none p-0 m-0 absolute'>

                        <li className='bg-purple-100  h-10 hover:bg-gray-50 text-base w-full' onClick={() => handleItemClick("Men's Dresses")}>
                            <a href='#'onClick={()=>{
                                toggleSubCollapse();
                            }} className='block p-2 ml-12'>Men's Dresses</a>
                        </li>
                        <li className='bg-purple-100 w-full h-10 hover:bg-gray-50 text-base' onClick={() => handleItemClick("Women's Dresses")}>
                            <a href='#' onClick={()=>{
                                toggleSubCollapse();
                            }} className='block p-2 ml-12'>Women's Dresses</a>
                        </li>
                        <li className='bg-purple-100 w-full h-10 hover:bg-gray-50 text-base' onClick={() => handleItemClick("Baby's Dresses")}>
                            <a href='#'onClick={()=>{
                                toggleSubCollapse();
                            }} className='block p-2 ml-12'>Baby's Dresses</a>
                        </li>
                    </ul>
                    </div>
                <ul className="list-none p-0 m-0">
                    <li className='hover:text-red-300 border-neutral-200 border-2 w-full h-10 text-base	'>
                        <a href='#' className='block p-2 ml-12'>Jeans</a>
                    </li>
                    <li className='hover:text-red-300 border-neutral-200 border-2 w-full h-10 text-base	'>
                        <a href='#' className='block p-2 ml-12'>Swimwear</a>
                    </li>
                    <li className='hover:text-red-300 border-neutral-200 border-2 w-full h-10 text-base	'>
                        <a href='#' className='block p-2 ml-12'>Sleepwear</a>
                    </li>
                    <li className='hover:text-red-300 border-neutral-200 border-2 w-full h-10 text-base	'>
                        <a href='#' className='block p-2 ml-12'>Sportswear</a>
                    </li>
                    <li className='hover:text-red-300 border-neutral-200 border-2 w-full h-10 text-base	'>
                        <a href='#' className='block p-2 ml-12'>Jumpsuits</a>
                    </li>
                    <li className='hover:text-red-300 border-neutral-200 border-2 w-full h-10 text-base	'>
                        <a href='#' className='block p-2 ml-12'>Blazers</a>
                    </li>
                    <li className='hover:text-red-300 border-neutral-200 border-2 w-full h-10 '>
                        <a href='#' className='block p-2 ml-12 text-base'>Jeans</a>
                    </li>
                    <li className='hover:text-red-300 border-neutral-200 border-2 w-full h-10 text-base	'>
                        <a href='#' className='block p-2 ml-12'>Shoes</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;