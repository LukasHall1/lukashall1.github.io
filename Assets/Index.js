(() => {


    function showContent(id) {
        document.getElementById(id).style.display = "block";
    }
    
    function hideContent(id) {
        document.getElementById(id).style.display = "none";
    }

    const Filters = (props) => {
    
        return (
            <React.Fragment>
            {/* whole website } */}
            <div class="row">
                {/* contact card */}
                <div class="col-3">
                    <img class="body-overlay" src="media/Volcano.gif"></img>
                    <div class="contact-card" >
                        <div class="row">
                            <div class="col-lg-4"><h3>Lukas:</h3></div>
                            <div class="col-lg-8"><h3><span>Software Developer</span></h3></div>
                            
                        </div>
                            <img class="img-fluid" src="media/headShot.png"/>
                            <div class="row">
                                <div class="col-3">
                                    <a href="tel:+1 208 841 9691"><i class="fa-solid fa-phone"></i></a>
                                </div>
                                <div class="col-3">
                                    <a href="mailto:hallsweb.lh@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                                </div>
                                <div class="col-3">
                                    <a href="https://github.com/LukasHall1"><i class="fa-brands fa-github" ></i></a>
                                </div>
                                <div class="col-3">
                                    <a href="https://www.linkedin.com/in/lukas-hall-26112a232/"><i class="fa-brands fa-linkedin" ></i></a>
                                </div>
                        </div>

                            
                    </div>
                </div>

                
                
                {/* main body */}
                <div class="col-9">
                    <div class="container-fluid" >
                
                        <div class="row">
                            <div class="col-lg-2">&nbsp;</div>
                            <div class="col-lg-8">
                                <section id="home" >
                                    <div class="row">
                                        <div class="col-lg-12">
                                        <h4 class="section-title"> <i class="fa-solid fa-house"></i> Introduction</h4>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h1>Lukas Hall, <span>Programmer & Developer</span></h1>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            I'm a sophomore in the <a href="https://www.boisestate.edu/gimm/">GIMM</a> program at BSU and an aspiring game developer. I've been working on learning how to make video games for the past 6 years.
                                            However making video games isn't the only thing I know how to do. While learning how to make games I've also learned how to do front end and back end programming for websites.
                                            Organizing a website's contents, sorting data and tables. As well as dabbling in some Arduino. This website is both a showpiece and a gallery to give you some examples of
                                            what I'm capable of as a developer. My current goals are to complete my degree and to join a team where I make some cool stuff and develop my own skills.
                                        </div>
                                    </div>
                                </section>


                                <section id="resume" >
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h4 class="section-title"> <i class="fa-solid fa-id-card"></i> Experience/Education</h4>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h1>Background <span>Experience & Education</span></h1>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <ul>
                                                <li><h2>GIMM Bachelor's of Science:<span><small> Estimated graduation 2026</small></span></h2>
                                                <ul><li>Boise State University</li><li>Games, Interactive Media, and Mobile Technologies</li></ul></li>
                                                
                                                <li><h2>Game design/Back End Website Development:<span><small> June-August 2021</small></span></h2>
                                                <ul><li>Nerdy Dragon</li></ul></li>
                                                
                                                <li><ul><h2>Student IT assistant: <span><small>2022-2024</small></span></h2>
                                                <li>Produced Professional broadcasts</li><li>Wrote scripts to control macros for broadcasts</li></ul></li>
                                
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="col-lg-10 specialization-card collapsible" onMouseOver={() => showContent("collapsibleContent3")} onMouseOut={() => hideContent("collapsibleContent3")}>
                                        <div class="row">
                                            <div class="col-lg-9"><h2>Resume</h2></div>
                                        </div>

                                        <div class="content" id="collapsibleContent3">
                                            <div class="row">
                                                <object data="Misc/Resume.pdf" width="800" height="500" />
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="services" >

                                    <div class="row">
                                        <div class="col-lg-12">
                                        <h4 class="section-title"><i class="fa-solid fa-list"></i> Services</h4>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h1>Areas of <span>Expertise</span></h1>
                                        </div>
                                    </div>
                                    <div class="row">
                                        
                                        <div class="col-lg-10 specialization-card collapsible" onMouseOver={() => showContent("collapsibleContent")} onMouseOut={() => hideContent("collapsibleContent")}>
                                            <div class="row">
                                                <div class="col-lg-10"><h2>Full-Stack Web Development</h2></div>
                                                <div class="col-lg-2"><h2><i class="fa-solid fa-code"></i></h2></div>
                                            </div>
                                            <p>Development of websites using HTML, CSS, JavaScript, and SQL.
                                                <br/>&nbsp;
                                                <br/>&nbsp;
                                                <br/>&nbsp;<span>Knowledgeable</span>
                                            </p>

                                            <div class="content" id="collapsibleContent">
                                                <p>Examples of work:
                                                    <br/>
                                                    <a href="#skills">This Website</a>
                                                </p>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-10 specialization-card collapsible" onMouseOver={() => showContent("collapsibleContent1")} onMouseOut={() => hideContent("collapsibleContent1")}>
                                            <div class="row">
                                                <div class="col-lg-9"><h2>Video Game Development</h2></div>
                                                <div class="col-lg-3"><h2><i class="fa-solid fa-code"></i></h2></div>
                                            </div>

                                            <p>I can use Unity to create 2D and 3D games and have an introductory knowledge of VR development.
                                                <br/>&nbsp;
                                                <br/>&nbsp;
                                                <br/>&nbsp;<span>Comfortable</span>
                                            </p>

                                            <div class="content" id="collapsibleContent1">
                                                <p>Examples of work:
                                                    <br/>
                                                    <a href="starSaber.html">StarSaber</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-10 specialization-card collapsible" onMouseOver={() => showContent()} onMouseOut={() => hideContent()}>
                                            <div class="row">
                                                <div class="col-lg-9"><h2>Arduino Programming</h2></div>
                                                <div class="col-lg-3"><h2><i class="fa-solid fa-code"></i></h2></div>
                                            </div>

                                            <p>Programming and building Arduino projects.
                                                <br/>&nbsp;
                                                <br/>&nbsp;
                                                <br/>&nbsp;<span>Acquainted</span>
                                            </p>

                                            <div class="content" id="collapsibleContent2">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section id="skills">
                                    <div class="row">
                                        <div class="col-lg-12">
                                        <h4 class="section-title"><i class="fa-solid fa-star"></i>Portfolio Artifact</h4>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-lg-12">
                                            <p>
                                                This entire website is a portfolio artifact because of the fact that this is the first time
                                                I've put my skills in react, d3, bootstrap, html, css, and javascript together to form a cohesive 
                                                site that looks good.
                                            </p>
                                        </div>
                                    </div>
                                </section> 

                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            </React.Fragment>
        )
    }

    


    
    const container = document.getElementById('body');
    const root = ReactDOM.createRoot(container);
    root.render(<Filters />);
})();
