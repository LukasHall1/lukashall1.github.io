(() => {




    //Carousel
    let slideIndex = 1;

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    let index = { display: 'block' };

    function showSlides(n) {
        console.log("showSlides called");
        let i;
        let slides = document.getElementsByClassName("slide");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style = { index };
    }





    class ReactIndex extends React.Component {

        constructor(props) {
            super(props);

        }

        componentDidMount() {
            console.log("ReactIndex mounted");
            console.log(slideIndex);
            showSlides(slideIndex);
        }

        render() {
            return (
                <React.Fragment>
                    {/* whole website } */}
                    <div class="row">
                        <img class="body-overlay" src="Assets/Media/Volcano.png" alt="An image of a volcano which covers the background of the website"></img>


                        <a class="prev" onClick={() => plusSlides(-1)}>&#10094;</a>

                        {/* main body */}
                        <div class="col-10" id="main">
                            <div class="container-fluid" >

                                <div class="row carouselContainer">

                                    <div class="slide">
                                        <section id="home" >
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h1>Lukas Hall, <span>Programmer & Developer</span></h1>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="contact-card" >
                                                        <div class="row">

                                                        </div>
                                                        <img class="img-fluid headShot" src="Assets/Media/headShot.png" alt="A headshot of me"/>
                                                        <div class="row">
                                                            <div class="col-4">
                                                                <a href="https://github.com/LukasHall1"><i class="fa-2x fa-brands fa-github" ></i></a>
                                                            </div>
                                                            <div class="col-4">
                                                                <a href="https://www.linkedin.com/in/lukas-hall-26112a232/"><i class="fa-2x fa-brands fa-linkedin" ></i></a>
                                                            </div>
                                                            <div class="col-4">
                                                                <a href="mailto:lukasjhallm@gmail.com"><i class="fa-2x fa-solid fa-envelope" ></i></a>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                                <div class="col-lg-6 " id="aboutBlurb">
                                                    I'm a sophomore in the Games Interactive Media and Mobile <a href="https://www.boisestate.edu/gimm/">(GIMM)</a> program at BSU and an aspiring game developer. I've been working on learning how to make video games for the past 6 years.
                                                    However making video games isn't the only thing I know how to do. While learning how to make games I've also learned how to do front end and back end programming for websites.
                                                    Organizing a website's contents, sorting data and tables. As well as dabbling in some Arduino. This website is both a showpiece and a gallery to give you some examples of
                                                    what I'm capable of as a developer. My current goals are to complete my degree and to join a team where I make some cool stuff and develop my own skills.
                                                </div>
                                            </div>
                                        </section>
                                    </div>

                                    <div class="slide">
                                        <section id="resume" >

                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <h1>Resume: <span>Experience/Education/Skills</span></h1>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <ul>
                                                        <li><h3>Boise State University Bachelor's of Science:<span><small> Estimated graduation 2026</small></span></h3>
                                                            <ul><li><em>Games, Interactive Media, and Mobile Technologies (Major)</em></li></ul></li>

                                                        <li><h3>Student IT assistant: <span><small>2022-2024</small></span></h3>
                                                            <ul><li><em>For Boise State University</em></li><li>Produced Professional broadcasts</li><li>Wrote scripts to control macros for broadcasts</li></ul></li>

                                                        <li><h3>Game design/Back End Website Development:<span><small> June-August 2021</small></span></h3>
                                                            <ul><li><em>Nerdy Dragon Internship</em></li></ul></li>

                                                    </ul>
                                                </div>
                                            </div>

                                            <p><a href="Misc/Resume.pdf">Here's a link to a pdf copy of my resume</a></p>

                                            <section id="skills">

                                                {/*WebDev skills*/}
                                                <h3>Web Development Skills</h3>
                                                <div class="row">
                                                    <div class="col-md-2 col-sm-4 col-5 skillCard">
                                                        <h3><span>HTML</span></h3>
                                                        <img class="img-fluid" src="Assets/Media/htmlIcon.png" />
                                                    </div>
                                                    <div class="col-md-2 col-sm-4 col-5 skillCard">
                                                        <h3><span>CSS</span></h3>
                                                        <img class="img-fluid" src="Assets/Media/cssIcon.png" />
                                                    </div>
                                                    <div class="col-md-2 col-sm-4 col-5 skillCard">
                                                        <h3><span>Javascript</span></h3>
                                                        <img class="img-fluid" src="Assets/Media/jsIcon.png" />
                                                    </div>
                                                    <div class="col-md-2 col-sm-4 col-5 skillCard">
                                                        <h3><span>Java</span></h3>
                                                        <img class="img-fluid" src="Assets/Media/javaIcon.png" />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-2 col-sm-4 col-5 skillCard">
                                                        <h3><span>JSON</span></h3>
                                                        <img class="img-fluid" src="Assets/Media/jsonIcon.png" />
                                                    </div>
                                                    <div class="col-md-2 col-sm-4 col-5 skillCard">
                                                        <h3><span>SQL</span></h3>
                                                        <img class="img-fluid" src="Assets/Media/sqlIcon.png" />
                                                    </div>
                                                    <div class="col-md-2 col-sm-4 col-5 skillCard">
                                                        <h3><span>React</span></h3>
                                                        <img class="img-fluid" src="Assets/Media/reactIcon.png" />
                                                    </div>
                                                    <div class="col-md-2 col-sm-4 col-5 skillCard">
                                                        <h3><span>PHP</span></h3>
                                                        <img class="img-fluid" src="Assets/Media/phpIcon.png" />
                                                    </div>
                                                </div>
                                                {/*GameDev skills*/}
                                                <h3>Game Development Skills</h3>
                                                <div class="row">
                                                    <div class="col-md-2 col-sm-4 col-5 skillCard">
                                                        <h3><span>Unity</span></h3>
                                                        <img class="img-fluid" src="Assets/Media/unityIcon.png" />
                                                    </div>
                                                    <div class="col-md-2 col-sm-4 col-5 skillCard">
                                                        <h3><span>C#</span></h3>
                                                        <img class="img-fluid" src="Assets/Media/csharpIcon.png" />
                                                    </div>
                                                    <div class="col-md-2 col-sm-4 col-5 skillCard">
                                                        <h3><span>Construct3</span></h3>
                                                        <img class="img-fluid" src="Assets/Media/constructIcon.png" />
                                                    </div>
                                                    <div class="col-md-2 col-sm-4 col-5 skillCard">
                                                        <h3><span>Maya</span></h3>
                                                        <img class="img-fluid" src="Assets/Media/mayaIcon.png" />
                                                    </div>
                                                </div>

                                                {/*General Skills */}
                                                <h3>General Skills</h3>
                                                <div class="row">
                                                    <div class="col-md-2 col-sm-4 col-5 skillCard">
                                                        <h3><span>Office 365</span></h3>
                                                        <img class="img-fluid" src="Assets/Media/microsoftIcon.png" />
                                                    </div>
                                                </div>
                                            </section>

                                        </section>
                                    </div>

                                    <div class="slide">

                                        <h1>Areas of Study/Examples of work</h1>
                                        <section id="services">

                                            <div class="row">

                                                <div class="col-lg-12 specialization-card">
                                                    <div class="row">
                                                        <div class="col-lg-10"><h2>Full-Stack Web Development</h2></div>
                                                        <div class="col-lg-2"><h2><i class="fa-solid fa-code"></i></h2></div>
                                                    </div>
                                                    <p>Development of websites using HTML, CSS, JavaScript, and SQL.
                                                        <br/>
                                                        <br/>
                                                    <h3>Examples:</h3>
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <a href="#" target="_blank"><img class="imgFix" src="Assets/Media/examplePage.png" alt="an image of the resume page of this website"/></a>
                                                        </div>
                                                        <div class="col-6">
                                                            <p>This entire website is an example of what I can do in terms of web development.
                                                                I used React, HTML, and CSS to create this website. I learned a couple of things 
                                                                in making this website like how to better use javascript within a website and a little bit of how to use react.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                    </p>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-12 specialization-card ">
                                                    <div class="row">
                                                        <div class="col-lg-9"><h2>Video Game Development</h2></div>
                                                        <div class="col-lg-3"><h2><i class="fa-solid fa-code"></i></h2></div>
                                                    </div>

                                                    <p>I can use Unity to create 2D and 3D games and have an introductory knowledge of VR development. </p>

                                                        <br/>
                                                        <br/>
                                                    <h3>Examples:</h3>
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <a href="starSaber.html" target="_blank"><img class="imgFix" src="Assets/Media/starSaberTitle.png" alt="an image of star saber's title screen"/></a>
                                                        </div>
                                                        <div class="col-6">
                                                            <p>This is the game star saber which is a project I did in highschool in Unity.
                                                                I used C# as the main programming language and the game is basically a space shooter in a 
                                                                similar vein as galaga or space invaders.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                    <div class="row">
                                                        <div class="col-6">
                                                            {/*<a href="#" target="_blank">*/}<img class="imgFix" src="Assets/Media/RuleofTen.png" alt="an image of Rule of Ten's game screen"/>{/*</a>*/}
                                                        </div>
                                                        <div class="col-6">
                                                            <p>This is the game Rule of Ten which is a project I did for Nerdy Dragon during an internship.
                                                                I used Construct3 to make this game which is just a simple game (quite literally meant for elementary schoolers
                                                                according to the client) where you answer math questions about place value. In doing so the original point was for
                                                                the game to be used as a teaching tool and for the students to get highscores in order to compete with one another.
                                                                Unfortunately the game was never finished due to the graphic designer not being able to finish the assets and so I only have
                                                                the prototype as a proof of concept.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-12 specialization-card ">
                                                    <div class="row">
                                                        <div class="col-lg-9"><h2>Arduino Programming</h2></div>
                                                        <div class="col-lg-3"><h2><i class="fa-solid fa-code"></i></h2></div>
                                                    </div>

                                                    <p>Programming and building Arduino projects.
                                                        <br/>
                                                        <br/>
                                                        <div class="row">
                                                        <div class="col-6">
                                                            
                                                        </div>
                                                        <div class="col-6">
                                                            <p>
                                                            </p>
                                                        </div>
                                                    </div>
                                                        {/* where examples will go */}
                                                    </p>
                                                </div>
                                            </div>
                                        </section>
                                    </div>


                                </div>
                            </div>

                            <a class="next" onClick={() => plusSlides(1)}>&#10095;</a>

                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }



    const container = document.getElementById('body');
    const root = ReactDOM.createRoot(container);
    root.render(<ReactIndex />);
})();
