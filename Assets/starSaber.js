(() => {


    let slideIndex = 1;


    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style = { display: 'block' };
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
                    <div class="row" id="textBox">
                        <img class="body-overlay" src="Assets/Media/star.png"></img>
                        <p id="returnLink"><i class="fa-solid fa-arrow-left"></i><a href="Index.html"> <span>Back to Main website</span></a></p>

                        {/* left side of website */}
                        <section class="col-6">
                            <h1>Star Saber: <span>A unity game</span></h1>
                            <p>
                                Star Saber is a 2D fixed shooter in the vein of galaga or space invaders.
                                The player controls a ship that can move left and right and shoot at enemies.
                                The game is hypothetically endless and will continue until the player loses all of
                                their hearts that are shown at the bottom of the ship model.
                                The game is made in unity and uses C# as the programming language.
                                Star Saber was not a wholly original project as it's a senior capstone project that was passed down from previous years.
                            </p>

                            {/* game image gallery */}
                            <div class="resize">
                                <img src="Assets/Media/starSaberTitle.png" class="resize" />
                                <img src="Assets/Media/starSaberGame.png" class="resize" />
                            </div>
                        </section>

                        {/* right side of website */}
                        <section class="col-6">
                            <h1>Star Saber Powerups: <span>My main contribution</span></h1>
                            <p>
                                Star Saber has 4 power ups that will randomly spawn while the game runs.
                                The four power ups are an enlarge, a shrink ray, a health pack, and an invincibility.
                                The enlarge power up will increase the size of the player's ship and make it purple while slowing the player's ship a little.
                                The shrink makes the ship small and blue and speeds the ship up a little.
                                The health pack gives the player an extra heart underneath the ship as a "health bar" to a maximum of 5.
                                The invincibility power up makes the ship yellow-gold and unable to take damage from anything (which is good because the ship can
                                still deal damage to enemies and destroy them by colliding with them).
                            </p>

                            {/* powerup image gallery */}
                            <div class="container">
                                <div class="slides" >
                                    <img src="Assets/Media/Big.png" class="gallery-image" />
                                </div>
                                <div class="slides">
                                    <img src="Assets/Media/Health.png" class="gallery-image" />
                                </div>
                                <div class="slides">
                                    <img src="Assets/Media/invincible.png" class="gallery-image" />
                                </div>
                                <div class="slides">
                                    <img src="Assets/Media/mini.png" class="gallery-image" />
                                </div>
                                <div class="slides">
                                    <img src="Assets/Media/Player.png" class="gallery-image" />
                                </div>
                                <div class="slides">
                                    <img src="Assets/Media/PlayerUpgrade_Bullet1.png" class="gallery-image" />
                                </div>
                                <div class="slides">
                                    <img src="Assets/Media/PlayerUpgrade_Invince.png" class="gallery-image" />
                                </div>
                                <div class="slides">
                                    <img src="Assets/Media/PlayerUpgrade_Laser.png" class="gallery-image" />
                                </div>
                                <div class="slides">
                                    <img src="Assets/Media/PlayerUpgrade_Small.png" class="gallery-image" />
                                </div>

                                <a class="prev" onClick={() => plusSlides(-1)} >&#10094;</a>
                                <a class="next" onClick={() => plusSlides(1)} >&#10095;</a>

                            </div>

                        </section>

                        <section class="col-12">
                            <h1>Power up c# code:</h1>
                            <object data="Misc/PowerUpData.cs" width="1300" height="1000" />
                        </section>
                    </div>
                </React.Fragment>
            )
        }
    }





    const container = document.getElementById('body');
    const root = ReactDOM.createRoot(container);
    root.render(<ReactIndex />);
})();
