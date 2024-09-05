'use client'
import React, { useState } from 'react';
<<<<<<< HEAD
=======

>>>>>>> d9e9dbe8ea37c1f5cbf1ff6bdd74300e3a8e2e68
const SideNav: React.FC = () => {
    const [isMainCollapsed, setIsMainCollapsed] = useState<boolean>(true);
    const [isSubCollapsed, setIsSubCollapsed] = useState<boolean>(true);

    const toggleMainCollapse = () => {
        setIsMainCollapsed(prevState => !prevState);
    };

    const toggleSubCollapse = () => {
        setIsSubCollapsed(prevState => !prevState);
    };

<<<<<<< HEAD
    const handleItemClick = (itemName: string) => {
        console.log(`Clicked on ${itemName}`);
    };
    return (
        <div>
            <a
                href="#collapse1"
                onClick={(e) => {
                    e.preventDefault();
                    toggleMainCollapse();
                }}
            >
                <h1 className="bg-pink-600 border-neutral-200 border-2 w-64 h-12 flex justify-between items-center">
                    Category
                    <i className="fa-solid fa-angle-down float-right"></i>
                </h1>
            </a>
            <div id="collapse1" className={isMainCollapsed ? 'collapse' : ''}>
                <a
                    href="#collapse2"
                    onClick={(e) => {
                        e.preventDefault();
                        toggleSubCollapse();
                    }}
                >
                    <h2 className='hover:text-pink-600 border-neutral-200 border-2 w-64 h-12 flex justify-between items-center'>
                        Dresses
                    <i className="fa-solid fa-angle-down float-right"></i>
                    </h2>
                </a>
                    <div  id="collapse2" className={isSubCollapsed ? 'collapse' : ''} >
                    <ul className='list-none p-0 m-0 absolute'>

                        <li className='bg-purple-100 w-64 hover:bg-gray-50' onClick={() => handleItemClick("Men's Dresses")}>
                            <a href='#'onClick={()=>{
                                toggleSubCollapse();
                            }} className='block p-2'>Men's Dresses</a>
                        </li>
                        <li className='bg-purple-100 w-64 hover:bg-gray-50' onClick={() => handleItemClick("Women's Dresses")}>
                            <a href='#' onClick={()=>{
                                toggleSubCollapse();
                            }} className='block p-2'>Women's Dresses</a>
                        </li>
                        <li className='bg-purple-100 w-64 hover:bg-gray-50' onClick={() => handleItemClick("Baby's Dresses")}>
                            <a href='#'onClick={()=>{
                                toggleSubCollapse();
                            }} className='block p-2'>Baby's Dresses</a>
                        </li>
                    </ul>
                    </div>
                <ul className="list-none p-0 m-0 ">
                    <li className='hover:text-pink-600 border-neutral-200 border-2 w-64'>
                        <a href='#' className='block p-2'>Jeans</a>
                    </li>
                    <li className='hover:text-pink-600 border-neutral-200 border-2 w-64'>
                        <a href='#' className='block p-2'>Swimwear</a>
                    </li>
                    <li className='hover:text-pink-600 border-neutral-200 border-2 w-64'>
                        <a href='#' className='block p-2'>Sleepwear</a>
                    </li>
                    <li className='hover:text-pink-600 border-neutral-200 border-2 w-64'>
                        <a href='#' className='block p-2'>Sportswear</a>
                    </li>
                    <li className='hover:text-pink-600 border-neutral-200 border-2 w-64'>
                        <a href='#' className='block p-2'>Jumpsuit</a>
                    </li>
                    <li className='hover:text-pink-600 border-neutral-200 border-2 w-64'>
                        <a href='#' className='block p-2'>Blazers</a>
                    </li>
                    <li className='hover:text-pink-600 border-neutral-200 border-2 w-64'>
                        <a href='#' className='block p-2'>Jeans</a>
                    </li>
                    <li className='hover:text-pink-600 border-neutral-200 border-2 w-64'>
                        <a href='#' className='block p-2'>Shoes</a>
                    </li>
=======
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
>>>>>>> d9e9dbe8ea37c1f5cbf1ff6bdd74300e3a8e2e68
                </ul>
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default SideNav;
=======
export default SideNav;
>>>>>>> d9e9dbe8ea37c1f5cbf1ff6bdd74300e3a8e2e68
