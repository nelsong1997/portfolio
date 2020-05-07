import React from 'react';
import me from './assets/me.jpg'
import resume from './assets/Gabe_Nelson_Resume_5-4-20.pdf'
import zombieImage from './assets/zombie-disease-game.png'
import colorChooserImage from './assets/colorchooser.png'
import dihedralImage from './assets/dihedral-calculator.png'
import bowlImage from './assets/bowl.png'
import cupsImage from './assets/cups.jpg'
import bikeImage from './assets/bike.jpg'
import brassImage from './assets/brass.jpg'
import groupImage from './assets/bca_group.jpg'
import hopeImage from './assets/hw_image.png'

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            property: "value"
        }
    }

    render() {
        let dihedralLink = "https://nelsong1997.github.io/dihedral_calculator/"
        let zombieLink = "https://nelsong1997.github.io/zombie_game/"
        let colorLink = "https://nelsong1997.github.io/color_chooser/"
        let hopeLink = "https://nelsong1997.github.io/hope-works-2/"

        return (
            <div id="main">
                <div id="page-0" className="page">
                    <h3>(I'm still working on this, but feel free to check it out (desktop recommended)</h3>
                    <h1>Hi, I'm Gabe.</h1>
                    <img src={me} alt="me" style={{height: "200px", width: "200px", borderRadius: "50%", border: "1px solid rgb(247, 133, 250)"}}></img>
                    <div id="break-bar-0" className="break-bar">
                        <h2 className="bb-text">Aspiring Developer</h2>
                        <h2 className="bb-spacer">|</h2>
                        <h2 className="bb-text">Recent College Grad</h2>
                        <h2 className="bb-spacer">|</h2>
                        <h2 className="bb-text">Human Being</h2>
                    </div>
                    <div>
                        <p>
                            Let's get right to it... If you're looking for important links, I'll put those right below:
                        </p>
                    </div>
                    <div id="break-bar-1" className="break-bar">
                        <h3 className="bb-text"><a href="https://github.com/nelsong1997">Github</a></h3>
                        <h3 className="bb-spacer">|</h3>
                        <h3 className="bb-text"><a href={resume}>Resume</a></h3>
                        <h3 className="bb-spacer">|</h3>
                        <h3 className="bb-text"><a href="https://www.linkedin.com/in/nelsong1997/">Linkedin</a></h3>
                        <h3 className="bb-spacer">|</h3>
                        <h3 className="bb-text"><a href="mailto:nelsong1997@gmail.com">nelsong1997@gmail.com</a></h3>
                    </div>
                    <div>
                        <p>
                            Otherwise, stick around and either scroll or jump down to view some of my work and more about me!
                        </p>
                    </div>
                    <div id="break-bar-2" className="break-bar">
                        <h3 className="bb-text"><a href="#page-1">My Work ↓</a></h3>
                        <h3 className="bb-spacer">|</h3>
                        <h3 className="bb-text"><a href="#page-2">Career Aspirations ↓</a></h3>
                        <h3 className="bb-spacer">|</h3>
                        <h3 className="bb-text"><a href="#page-3">More About Me ↓</a></h3>
                    </div>
                </div>
                <div id="page-1" className="page">
                    <h1>Featured Projects</h1>
                    <label>Click on an image to open the project!</label>
                    <div id="project-boxes">
                        <div className="project-box">
                            <h2><a href={zombieLink}>Zombie Game</a></h2>
                            <p>
                                The Zombie Game simplifies different aspects of diseases and how they spread.
                                Professor <a
                                href="https://www.bates.edu/faculty-expertise/profile/meredith-l-greer/">Meredith Greer</a> included
                                this game as part of the curriculum of my capstone seminar 
                                <em> <a href="https://www.bates.edu/catalog/?s=current&a=renderDept&d=MATH#495J">Advanced Topics in Biomathematics</a></em>.
                                Playing by hand can be tedious and takes a while, so I decided as a personal project to turn the game into a web app that
                                also automatically records data in both a graph and a table.
                            </p>
                            <div className="image-box">
                                <a href={zombieLink}><img src={zombieImage} alt="zombie game"></img></a>
                            </div>
                        </div>
                        <div className="project-box">
                            <h2><a href={colorLink}>Color Chooser</a></h2>
                            <p>
                                The Color Chooser is essentially a highly customizable die. It allows the user to have the app randomly 
                                select a color from a user selected list, with different constraints and options, including weighting and 
                                pseudo-randomness. Unlike other apps I've created, this app designed with aesthetics and mobile access in mind.
                            </p>
                            <div className="image-box">
                                <a href={colorLink}><img src={colorChooserImage} alt="color chooser"></img></a>
                            </div>
                        </div>
                        <div className="project-box">
                            <h2><a href={dihedralLink}>Dihedral Calculator</a></h2>
                            <p>
                                <a href="https://en.wikipedia.org/wiki/Dihedral_group">Dihedral groups</a> are part of <a
                                href="https://en.wikipedia.org/wiki/Group_theory">group theory</a>,
                                which is a big part of <a href="https://en.wikipedia.org/wiki/Abstract_algebra">Abstract Algebra</a> in advanced Mathematics.
                                As a part of this project I generalized some concepts to better fit into the app and allow for simpler calculations
                                for compositions of elements in dihedral groups. I was inspired to take this on as a personal project while taking <em><a
                                href="https://www.bates.edu/catalog/?s=current&a=renderDept&d=MATH#379">Abstract Algebra II</a></em> with professor <a
                                href="https://www.bates.edu/faculty-expertise/profile/peter-n-wong/">Peter Wong</a>.
                            </p>
                            <div className="image-box">
                                <a href={dihedralLink}><img src={dihedralImage} alt="dihedral calculator"></img></a>
                            </div>
                        </div>
                        <div className="project-box">
                            <h2><a href={hopeLink}>HOPE Works Capstone</a></h2>
                            <p>
                                At the end of my time at <a href="https://www.burlingtoncodeacademy.com/">Burlington Code Academy</a>, 
                                my group's capstone project was to build a web app for <a href="https://hopeworksvt.org/">Hope Works</a>, a non-profit
                                in Burlington that helps survivors of
                                sexual and domestic violence. My main focuses for this project were the form that volunteers and employees fill out
                                to document interactions with survivors, and this sub-project: the page that sorts and displays submitted forms.
                            </p>
                            <div className="image-box">
                                <a href={hopeLink}><img src={hopeImage} alt="HOPE Works form viewer"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="page-2" className="page">
                    <h1>Work Goals</h1>
                    <label>What kind of job am I looking for?</label>
                    <div id="goal-boxes">
                        <div className="goal-box">
                            <h2>What</h2>
                            <p>
                                The softwares I'm interested in creating are basically tools, even if they are small parts of much bigger tools. 
                                They are used to make some task simpler, faster, or less
                                frustrating. No matter what I end up doing, I want to be helping people in some way. While I would ideally love to work
                                on projects that help people in difficult life situations or that help make our society more equitable, I would settle 
                                for making people's day to day lives easier by making the apps they use every day more effective and easier to use. That
                                being said, I definitely don't want to work for any company that is exploitative, deceptive, or predatory in any way.
                            </p>
                        </div>
                        <div className="goal-box">
                            <h2>Where</h2>
                            <p>
                                I'm currently living with my family in <a 
                                    href="https://www.google.com/maps/place/South+Burlington,+VT
                                    /@44.4677575,-73.2981026">South Burlington, Vermont</a>.
                                I love the Burlington area and working here would be
                                great, but I am also excited by the idea of moving away to a big city and starting my own adventure in a new place.
                                I am open to different possibilities about where I'll work!
                            </p>
                        </div>
                        <div className="goal-box">
                            <h2>When</h2>
                            <p>
                                I am currently planning to work for <a href="https://campabnaki.org/">YMCA Camp Abnaki</a> as a Village Leader this summer,
                                but we are not sure how the COVID-19
                                crisis will affect Camp this summer. It seems like, at the very least, drastic changes will have to take place in order for
                                Camp to run. Hopefully I will get to work at Camp this summer and I'll be available starting in the Fall, but it is possible
                                I will be available much sooner!
                            </p>
                        </div>
                        <div className="goal-box">
                            <h2>How</h2>
                            <p>
                                A lot of software companies nowadays use terms like <a href="https://agilemanifesto.org/">Agile</a> to describe
                                their workplace environment, but not all workplaces
                                that claim to follow these types of philosophies actually follow through. To me, it doesn't matter what you call it:
                                I'm for collaborative, adaptable, and functional development where teammates respect and support one another. This will
                                be essential to me especially as I start off, since I am partially a self-taught programmer and I am not aware of a lot
                                of conventions or best practice solutions to problems. While I'll pick these up quickly once I'm on the job, responsive
                                and helpful mentors will be a vital part of my learning.
                            </p>
                        </div>
                        <div className="goal-box">
                            <h2>Why</h2>
                            <p>
                                I fell in love with math my first year of college. My <em>
                                <a href="https://www.bates.edu/catalog/?s=current&a=renderDept&d=MATH#MATH106">Calculus II</a></em> professor <a
                                href="https://web.archive.org/web/20190702112805/https://www.bates.edu/faculty-expertise/profile/henry-a-boateng/">
                                Henry Boateng</a> and an eccentric personality, a wonderful sense of humor, and an infectious laugh, but his homework
                                problems were often quite challenging! In order to solve them, I had to work with newly made friends in groups
                                for hours on end. While it was difficult, it felt so rewarding to work together to tackle tricky problems. 
                                Eventually I realized I wanted to be a Mathematics major because of my passion for problem solving. That same
                                passion drives me to problem solve through programming, in which the problem solving process is often quite
                                similar.
                            </p>
                        </div>
                        <div className="goal-box">
                            <div className="image-box">
                                <img src={groupImage} alt="BCA capstone group"></img>
                            </div>
                            <label>Our Burlington Code Academy HOPE Works capstone group</label>
                        </div>
                    </div>
                    
                </div>
                <div id="page-3" className="page">
                    <h1>More About Me</h1>
                    <div id="about-boxes">
                        <div className="about-box">
                            <h2>Short Bio</h2>
                            <p>
                                I was born and raised in <a 
                                href="https://www.google.com/maps/place/South+Burlington,+VT
                                /@44.4677575,-73.2981026">South Burlington, Vermont</a>. I went to <a
                                href="https://www.sbschools.net/Domain/8">South Burlington High School</a> and later attended <a
                                href="https://www.bates.edu/">Bates College</a>,
                                where in May I will graduate with a Bachelors degree in <a
                                href="https://www.bates.edu/mathematics/academics/academic-program/">Mathematics</a>, with a <a
                                href="https://www.bates.edu/german-russian/academics/russian/academic-program/">Russian minor</a> and a <a
                                href="https://www.bates.edu/catalog/?s=current&a=renderDept&d=GEC#C084">Learning and Teaching</a> General
                                Education Concentration.
                            </p>
                        </div>
                        <div className="about-box">
                            <h2>Pottery</h2>
                            <p>
                                Pottery is one of my favorite hobbies. I've done it on and off since I was young. Not only is it relaxing and fun to do,
                                it also allows me to express myself and share my final products with my family and friends. Pottery is a challenging craft and
                                there's always more to learn, and it's more rewarding the more you do it. If you're in or around Burlington, check out <a 
                                href="https://www.burlingtoncityarts.org/">Burlington City Arts</a>, where I've done most of my pottery.
                            </p>
                            <div className="image-box">
                                <a href="google.com"><img src={bowlImage} alt="a bowl"></img></a>
                                <a href="google.com"><img src={cupsImage} alt="some cups"></img></a>
                            </div>
                        </div>
                        <div className="about-box">
                            <h2>Video Games</h2>
                            <p>
                                Like a lot of people my age, especially during this Pandemic, I play a lot of video games. I particularly enjoy competitive
                                multiplayer games that combine skill and execution with strategy and planning. They're also just a great way to spend time with 
                                friends doing something fun. My favorite game right now is <a
                                href="https://en.wikipedia.org/wiki/Super_Smash_Bros._Melee">Super Smash Bros. Melee</a>.
                            </p>
                        </div>
                        <div className="about-box">
                            <h2>Biking</h2>
                            <p>
                                While I've always enjoyed biking, I've really started biking a lot more since I bought a used road bike last summer. I
                                used it to commute to Burlington Code Academy from home. For me, it's a great way to get outside and enjoy our beautiful
                                community and get some exercise.
                            </p>
                            <div className="image-box">
                                <a href="google.com"><img src={bikeImage} alt="my bike"></img></a>
                            </div>
                        </div>
                        <div className="about-box">
                            <h2>Music</h2>
                            <p>
                                I love both playing and listening to music. I've been playing music since 2nd grade, and I have played the piano, recorder,
                                clarinet, and euphonium. In college I played in the <a
                                href="https://www.bates.edu/music/the-brass-ensemble/">Bates Brass Ensemble</a> (pictured below). Most of my enjoyment comes 
                                from playing as part of a group, but I don't know if I'll have
                                any opportunities to continue playing in an ensemble now that I've graduated.
                            </p>
                            <div className="image-box">
                                <a href="google.com"><img src={brassImage} alt="Bates Brass Ensemble"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//flesh out details
//   links
//   edits
//   get form viewer app running
//   etc
//color changing on page switch
//responsive/mobile accessible
//apps hosted on gh pages
//html only version

export default App;
