import React, { useEffect, useRef, useState } from 'react'
import "./navbar.scss"
import { SiCircleci } from "react-icons/si";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from 'react-scroll';


const NavBar = () => {
    const [screenSize, setScreenSize] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);

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


    useEffect(() => {
        function handleClickOutside(event) {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={navbarRef} className=" sidebar container">
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
                                <Link
                                    className="custom-link"
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    onClick={() => setIsOpen(false)}
                                    offset={-70} // Adjust offset if necessary to account for fixed navbar
                                    duration={500}
                                >  <li>About</li></Link>

                                <Link
                                    className="custom-link"
                                    activeClass="active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    onClick={() => setIsOpen(false)}
                                    offset={-70} // Adjust offset if necessary to account for fixed navbar
                                    duration={500}
                                > <li>Skills</li>
                                </Link>
                                <Link
                                    className="custom-link"
                                    activeClass="active"
                                    to="experience"
                                    spy={true}
                                    smooth={true}
                                    onClick={() => setIsOpen(false)}
                                    offset={-100} // Adjust offset if necessary to account for fixed navbar
                                    duration={500}
                                >
                                    <li>Experience</li>
                                </Link>
                                <Link
                                    className="custom-link"
                                    activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    onClick={() => setIsOpen(false)}
                                    offset={-70} // Adjust offset if necessary to account for fixed navbar
                                    duration={500}
                                >
                                    <li>Projects</li>
                                </Link>
                                <Link
                                    className="custom-link"
                                    activeClass="active"
                                    to="contacts"
                                    spy={true}
                                    smooth={true}
                                    onClick={() => setIsOpen(false)}
                                    offset={-100} // Adjust offset if necessary to account for fixed navbar
                                    duration={500}
                                >
                                    <li>Contacts</li>
                                </Link>
                            </ul>
                            <div className='github'>
                                <a href='https://github.com/sakthimuthuselvan' target='_blank' rel="noreferrer"><button>Github Profile</button></a>
                            </div>
                        </>

                        :
                        <div className='menuside'>
                            <div className='d-flex justify-content-end'>
                                <CgMenuRightAlt
                                    onClick={() => toggleSidebar()}
                                    style={{
                                        color: "white",
                                        fontSize: 30, fontWeight: "bold"
                                    }} />
                            </div>
                            <div className={!isOpen ? `w-100 custom-sidebar` : "comeNav"}>
                                <div className='d-flex justify-content-between pt-4 px-2'>
                                    <div className='w-100 d-flex justify-content-center'>
                                        <ul>

                                            <Link
                                                className="custom-link"
                                                activeClass="active"
                                                to="about"
                                                spy={true}
                                                smooth={true}
                                                onClick={() => setIsOpen(false)}
                                                offset={-70} // Adjust offset if necessary to account for fixed navbar
                                                duration={500}
                                            ><li>About</li></Link>
                                            <Link
                                                className="custom-link"
                                                activeClass="active"
                                                to="skills"
                                                spy={true}
                                                smooth={true}
                                                onClick={() => setIsOpen(false)}
                                                offset={-30} // Adjust offset if necessary to account for fixed navbar
                                                duration={500}
                                            ><li>Skills</li></Link>
                                            <Link
                                                className="custom-link"
                                                activeClass="active"
                                                to="experience"
                                                spy={true}
                                                smooth={true}
                                                onClick={() => setIsOpen(false)}
                                                offset={-60} // Adjust offset if necessary to account for fixed navbar
                                                duration={500}
                                            ><li>Experience</li></Link>
                                            <Link
                                                className="custom-link"
                                                activeClass="active"
                                                to="projects"
                                                spy={true}
                                                smooth={true}
                                                onClick={() => setIsOpen(false)}
                                                offset={-70} // Adjust offset if necessary to account for fixed navbar
                                                duration={500}
                                            ><li>Projects</li></Link>
                                            <Link
                                                className="custom-link"
                                                activeClass="active"
                                                to="contacts"
                                                spy={true}
                                                smooth={true}
                                                onClick={() => setIsOpen(false)}
                                                offset={-70} // Adjust offset if necessary to account for fixed navbar
                                                duration={500}
                                            ><li>Contacts</li></Link>
                                        </ul>
                                    </div>
                                    <p><AiOutlineCloseCircle className='pointer text-white' onClick={() => setIsOpen(false)} /></p>
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
