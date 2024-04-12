import React, { useEffect, useState } from 'react'
import "./navbar.scss"
import { SiCircleci } from "react-icons/si";
import { CgMenuRightAlt } from "react-icons/cg";
const NavBar = () => {
    const [screenSize, setScreenSize] = useState('');

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
                            </ul>
                            <div className='github'>
                                <button>Github Profile</button>
                            </div>
                        </>

                        :
                        <div className='d-flex justify-content-end'>
                            <CgMenuRightAlt   style={{color: "white",
                     fontSize: 29, fontWeight:"bold"}} />
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default NavBar
