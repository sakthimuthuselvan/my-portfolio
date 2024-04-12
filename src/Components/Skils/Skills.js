import React from 'react'
import "./skills.scss"
import Html from "../../assets/html.png"
import Css from "../../assets/css.png"
import Javascript from "../../assets/javascript.png"
import Bootstrap from "../../assets/bootstrap.png"
import MaterialUI from "../../assets/materialui.png"
import ReactJs from "../../assets/reactjs.png"
import MongoDB from "../../assets/mongodb.jpeg"
import ExpressJS from "../../assets/expressjs.png"
import NodeJS from "../../assets/nodejs.png"
import Vscode from "../../assets/vscode.jpeg"
import Git from "../../assets/git.png"
import GitLab from "../../assets/gitlab.png"
import Typescript from "../../assets/typescript.png"

const Skills = () => {
    return (
        <div className='pt-5'>
            <div className='overall-skills pt-4'>
                <div className='container'>
                    <h1>Skills</h1>
                    <div className='content'>
                        <p>
                            Here are some of my skills on which I have been working on for the past 2 years.
                        </p>

                        <div className='row pt-4'>

                            <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                                <div className='box'>
                                    <h4>Frontend</h4>
                                    <div className=' border-boxs flex-wrap'>
                                        <div>
                                            <img src={Html} alt='html' />
                                            Html</div>
                                        <div>
                                            <img src={Css} alt='css' />
                                            Css
                                        </div>
                                        <div>
                                            <img src={Javascript} alt='javascript' />
                                            Javascript
                                        </div>
                                        <div>
                                            <img src={Bootstrap} alt='boostrap' />

                                            Bootstrap
                                        </div>
                                        <div>
                                            <img src={MaterialUI} alt='material_ui' />

                                            Material UI</div>
                                        <div className='p-2'>
                                            <img src={ReactJs} alt='react_js' />
                                            React Js
                                        </div>
                                        <div className='p-2'>
                                            <img src={Typescript} alt='react_js' />
                                            Typescript
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                                <div className='box'>
                                    <h4>Backend & Database</h4>
                                    <div className=' border-boxs flex-wrap'>
                                        <div className='d-block'>
                                            <img src={NodeJS} alt='node_js' />
                                            Node Js
                                        </div>
                                        <div>
                                            <img src={ExpressJS} alt='express_js' />
                                            Express Js
                                        </div>
                                        <div>
                                            <img src={MongoDB} alt='mongo_db' />
                                            MongoDB
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                                <div className='box'>
                                    <h4>Others</h4>
                                    <div className=' border-boxs flex-wrap'>
                                        <div className='d-block'>
                                            <img src={Git} alt='git' />
                                            Git
                                        </div>
                                        <div>
                                            <img src={GitLab} alt='git_lab' />
                                            Gitlab
                                        </div>
                                        <div>
                                            <img src={Vscode} alt='vs_code' />
                                            VS Code
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
