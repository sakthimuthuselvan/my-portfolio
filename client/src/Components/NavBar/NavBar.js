import React, { useEffect, useState } from 'react'
import "./navbar.scss"
import { SiCircleci } from "react-icons/si";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";
const NavBar = () => {
    const [screenSize, setScreenSize] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 992) {
                setScreenSize('lg');
            } else if (width >= 768) {
                setScreenSize('md');
            } else {
                setScreenSize('sm');
            }
        };

        // Initial check
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
        <div className=" sidebar container">
            <div className='overall-nav'>
                <div className='part-1'>
                    {screenSize === "lg" ?
                        <SiCircleci style={{
                            color: "white",
                            fontSize: 29
                        }} />
                        :
                        <div>
                            <SiCircleci style={{
                                color: "white",
                                fontSize: 29
                            }} />
                        </div>
                    }

                    <h3 className='bold'>Portfolio</h3>
                </div>
                <div className={screenSize === "lg" ? 'part-2' : "d-flex -justify-content-end"}>
                    {screenSize === "lg" ?
                        <>
                            <ul>
                                <li>About</li>
                                <li>Skills</li>
                                <li>Experience</li>
                                <li>Projects</li>
                                <li>Contacts</li>
                            </ul>
                            <div className='github'>
                                <button>Github Profile</button>
                            </div>
                        </>

                        :
                        <div className='menuside'>
                            <div className='d-flex justify-content-end'>
                                <CgMenuRightAlt style={{
                                    color: "white",
                                    fontSize: 29, fontWeight: "bold"
                                }} />
                            </div>
                            <div className={`custom-sidebar`}>
                               <div className='d-flex justify-content-between pt-4 px-2'>
                               <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Services</li>
                                    <li>Contact</li>
                                </ul>
                                <p><AiOutlineCloseCircle className='pointer text-white'/></p>
                               </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default NavBar
