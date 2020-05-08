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
import './style.css'

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            currentPosition: 0,
            pageOnePosition: 0,
            pageTwoPosition: 0,
            pageThreePosition: 0,
            currentPage: 0,
            currentTheme: 0,
            pageChanging: {
                status: false,
                targPage: null,
                tick: 0
            },
            currentColors: {
                textColor: {
                    intRed: 49,
                    intGreen: 19,
                    intBlue: 53
                },
                highlightColor: {
                    intRed: 247,
                    intGreen: 133,
                    intBlue: 250
                },
                linkColor: {
                    intRed: 218,
                    intGreen: 39,
                    intBlue: 215
                },
                backgroundColor1: {
                    intRed: 94,
                    intGreen: 36,
                    intBlue: 102
                },
                backgroundColor2: {
                    intRed: 247,
                    intGreen: 133,
                    intBlue: 250
                }
            },
            changeThemeInterval: null
        }

        this.pageOne = React.createRef();
        this.pageTwo = React.createRef();
        this.pageThree = React.createRef();

        this.handleScroll = this.handleScroll.bind(this);
        this.setPagePositions = this.setPagePositions.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true); //unfortunately react onScroll doesn't work.
        this.setPagePositions()
    }

    componentDidUpdate() {
        if ((!this.state.pageChanging.status && this.state.currentPage!==this.state.currentTheme) ||
        (
            this.state.pageChanging.status &&
            this.state.currentPage===this.state.currentTheme &&
            this.state.currentTheme!==this.state.pageChanging.targPage)
        ) {
            let tick = this.state.pageChanging.tick
            if (this.state.pageChanging.status && (this.state.currentPage!==this.state.currentTheme)) tick = 0
            clearInterval(this.state.changeThemeInterval)
            this.changeTheme(this.state.currentColors, this.state.currentPage, tick)
            this.setState(
                {
                    pageChanging: {
                        status: true,
                        targPage: this.state.currentPage,
                        tick: tick
                    }
                }
            )
        }
    }

    changeTheme(startColors, targetPage, tick) {
        let theTick = tick
        let ticksRemaining = 90 - theTick
        let targetColors = colorThemes[targetPage]
        let changesObj = {}
        for (let colorType in startColors) {
            changesObj[colorType] = {}
            changesObj[colorType].red = (targetColors[colorType].intRed - startColors[colorType].intRed)/ticksRemaining
            changesObj[colorType].green = (targetColors[colorType].intGreen - startColors[colorType].intGreen)/ticksRemaining
            changesObj[colorType].blue = (targetColors[colorType].intBlue - startColors[colorType].intBlue)/ticksRemaining
        }
        let theInterval = setInterval(() => {
            theTick++
            let currentColors = this.state.currentColors
            for (let colorType in currentColors) {
                if (currentColors[colorType].realRed===undefined) {
                    currentColors[colorType].realRed = currentColors[colorType].intRed
                }
                if (currentColors[colorType].realGreen===undefined) {
                    currentColors[colorType].realGreen = currentColors[colorType].intGreen
                }
                if (currentColors[colorType].realBlue===undefined) {
                    currentColors[colorType].realBlue = currentColors[colorType].intBlue
                }
                currentColors[colorType].realRed = currentColors[colorType].realRed + changesObj[colorType].red
                currentColors[colorType].realGreen = currentColors[colorType].realGreen + changesObj[colorType].green
                currentColors[colorType].realBlue = currentColors[colorType].realBlue + changesObj[colorType].blue
                currentColors[colorType].intRed = Math.round(currentColors[colorType].realRed + changesObj[colorType].red)
                currentColors[colorType].intGreen = Math.round(currentColors[colorType].realGreen + changesObj[colorType].green)
                currentColors[colorType].intBlue = Math.round(currentColors[colorType].realBlue + changesObj[colorType].blue)
            }
            console.log(currentColors)
            this.setState({currentColors: currentColors, pageChanging: {status: true, targPage: targetPage, tick: theTick}})
            if (theTick>=90) {
                clearInterval(this.state.changeThemeInterval)
                this.setState(
                    {
                        currentTheme: targetPage, 
                        pageChanging: {status: false, targPage: null, tick: 0},
                        currentColors: colorThemes[targetPage]
                })
            }
        }, 16.67)
        this.setState({changeThemeInterval: theInterval})
    }

    handleScroll() {
        let currentPosition = window.pageYOffset + window.innerHeight/2 //the middle of the viewport
        if (this.state.currentPage!==0 && currentPosition < this.state.pageOnePosition - 20) {
            this.setState({currentPage: 0})
        } else if (
            this.state.currentPage!==1 &&
            (currentPosition > this.state.pageOnePosition + 20 &&
            currentPosition < this.state.pageTwoPosition - 20)) {
                this.setState({currentPage: 1})
        } else if (
            this.state.currentPage!==2 &&
            (currentPosition > this.state.pageTwoPosition + 20 &&
            currentPosition < this.state.pageThreePosition - 20)) {
                this.setState({currentPage: 2})
        } else if (this.state.currentPage!==3 && currentPosition > this.state.pageThreePosition + 20) {
            this.setState({currentPage: 3})
        }
        this.setPagePositions()
        this.setState({currentPosition: currentPosition}) 
    }

    setPagePositions() {
        this.setState(
            {
                pageOnePosition: this.pageOne.current.offsetTop,
                pageTwoPosition: this.pageTwo.current.offsetTop,
                pageThreePosition: this.pageThree.current.offsetTop
            }
        )
    }

    render() {
        let dihedralLink = "https://nelsong1997.github.io/dihedral_calculator/"
        let zombieLink = "https://nelsong1997.github.io/zombie_game/"
        let colorLink = "https://nelsong1997.github.io/color_chooser/"
        let hopeLink = "https://nelsong1997.github.io/hope-works-2/"

        let currentColors = this.state.currentColors
        let textColorString = `rgb(${currentColors.textColor.intRed}, ${currentColors.textColor.intGreen}, ${currentColors.textColor.intBlue})`
        let highlightColorString = `rgb(${currentColors.highlightColor.intRed}, ${currentColors.highlightColor.intGreen}, ${currentColors.highlightColor.intBlue})`
        let linkColorString = `rgb(${currentColors.linkColor.intRed}, ${currentColors.linkColor.intGreen}, ${currentColors.linkColor.intBlue})`
        let backgroundColor1String = `rgb(${currentColors.backgroundColor1.intRed}, ${currentColors.backgroundColor1.intGreen}, ${currentColors.backgroundColor1.intBlue})`
        let backgroundColor2String = `rgb(${currentColors.backgroundColor2.intRed}, ${currentColors.backgroundColor2.intGreen}, ${currentColors.backgroundColor2.intBlue})`

        let textStyle = {color: textColorString, textShadow: `1px 1px ${highlightColorString}`}
        let imageStyle = {border: `1px solid ${highlightColorString}`}
        let evenPageStyle = {backgroundImage: `linear-gradient(to bottom, ${backgroundColor1String}, ${backgroundColor2String}`}
        let oddPageStyle = {backgroundImage: `linear-gradient(to top, ${backgroundColor1String}, ${backgroundColor2String}`}
        let linkStyle = {color: linkColorString, textShadow: `1px 1px ${textColorString}`}
        let paragraphStyle = {color: textColorString}

        return (
            <div id="main">
                <div id="page-0" className="page" style={evenPageStyle}>
                    <h1 style={textStyle}>Hi, I'm Gabe.</h1>
                    <img id="me-img" src={me} alt="me" style={imageStyle}></img>
                    <div id="break-bar-0" className="break-bar">
                        <h2 className="bb-text" style={textStyle}>Aspiring Developer</h2>
                        <h2 className="bb-spacer" style={textStyle}>|</h2>
                        <h2 className="bb-text" style={textStyle}>Recent College Grad</h2>
                        <h2 className="bb-spacer" style={textStyle}>|</h2>
                        <h2 className="bb-text" style={textStyle}>Human Being</h2>
                    </div>
                    <div className="paragraph">
                        <p style={paragraphStyle}>
                            Let's get right to it... If you're looking for important links, I'll put those right below:
                        </p>
                    </div>
                    <div id="break-bar-1" className="break-bar">
                        <h3 className="bb-text"><a href="https://github.com/nelsong1997" style={linkStyle}>Github</a></h3>
                        <h3 className="bb-spacer" style={textStyle}>|</h3>
                        <h3 className="bb-text"><a href={resume} style={linkStyle}>Resume</a></h3>
                        <h3 className="bb-spacer" style={textStyle}>|</h3>
                        <h3 className="bb-text"><a href="https://www.linkedin.com/in/nelsong1997/" style={linkStyle}>Linkedin</a></h3>
                        <h3 className="bb-spacer" style={textStyle}>|</h3>
                        <h3 className="bb-text"><a href="mailto:nelsong1997@gmail.com" style={linkStyle}>nelsong1997@gmail.com</a></h3>
                    </div>
                    <div className="paragraph">
                        <p style={paragraphStyle}>
                            Otherwise, stick around and either scroll or jump down to view some of my work and more about me!
                        </p>
                    </div>
                    <div id="break-bar-2" className="break-bar">
                        <h3 className="bb-text"><a href="#page-1" style={linkStyle}>My Work ↓</a></h3>
                        <h3 className="bb-spacer" style={textStyle}>|</h3>
                        <h3 className="bb-text"><a href="#page-2" style={linkStyle}>Career Aspirations ↓</a></h3>
                        <h3 className="bb-spacer" style={textStyle}>|</h3>
                        <h3 className="bb-text"><a href="#page-3" style={linkStyle}>More About Me ↓</a></h3>
                    </div>
                </div>
                <div id="page-1" className="page" style={oddPageStyle} ref={this.pageOne}>
                    <h1 style={textStyle}>Featured Projects</h1>
                    <label>Click on an image to open the project!</label>
                    <div id="project-boxes">
                        <div className="inner-col">
                            <div className="project-box">
                                <h2><a href={zombieLink} style={linkStyle}>Zombie Game</a></h2>
                                <p style={paragraphStyle}>
                                    The Zombie Game simplifies different aspects of diseases and how they spread.
                                    Professor <a style={linkStyle}
                                    href="https://www.bates.edu/faculty-expertise/profile/meredith-l-greer/">Meredith Greer</a> included
                                    this game as part of the curriculum of my capstone seminar 
                                    <em> <a style={linkStyle} href="https://www.bates.edu/catalog/?s=current&a=renderDept&d=MATH#495J">Advanced Topics in Biomathematics</a></em>.
                                    Playing by hand can be tedious and takes a while, so I decided as a personal project to turn the game into a web app that
                                    also automatically records data in both a graph and a table.
                                </p>
                                <div className="image-box">
                                    <a href={zombieLink}><img src={zombieImage} alt="zombie game" style={imageStyle}></img></a>
                                </div>
                            </div>
                            <div className="project-box">
                                <h2><a href={colorLink} style={linkStyle}>Color Chooser</a></h2>
                                <p style={paragraphStyle}>
                                    The Color Chooser is essentially a highly customizable die. It allows the user to have the app randomly 
                                    select a color from a user selected list, with different constraints and options, including weighting and 
                                    pseudo-randomness. Unlike other apps I've created, this app designed with aesthetics and mobile access in mind.
                                </p>
                                <div className="image-box">
                                    <a href={colorLink} style={linkStyle}><img src={colorChooserImage} alt="color chooser" style={imageStyle}></img></a>
                                </div>
                            </div>
                        </div>
                        <div className="inner-col">
                            <div className="project-box">
                                <h2><a href={dihedralLink} style={linkStyle}>Dihedral Calculator</a></h2>
                                <p style={paragraphStyle}>
                                    <a style={linkStyle} href="https://en.wikipedia.org/wiki/Dihedral_group">Dihedral groups</a> are part of <a style={linkStyle}
                                    href="https://en.wikipedia.org/wiki/Group_theory">group theory</a>,
                                    which is a big part of <a style={linkStyle} href="https://en.wikipedia.org/wiki/Abstract_algebra">Abstract Algebra</a> in advanced Mathematics.
                                    As a part of this project I generalized some concepts to better fit into the app and allow for simpler calculations
                                    for compositions of elements in dihedral groups. I was inspired to take this on as a personal project while taking <em><a
                                    href="https://www.bates.edu/catalog/?s=current&a=renderDept&d=MATH#379" style={linkStyle}>Abstract Algebra II</a></em> with professor <a
                                    href="https://www.bates.edu/faculty-expertise/profile/peter-n-wong/" style={linkStyle}>Peter Wong</a>.
                                </p>
                                <div className="image-box">
                                    <a href={dihedralLink}><img src={dihedralImage} alt="dihedral calculator" style={imageStyle}></img></a>
                                </div>
                            </div>
                            <div className="project-box">
                                <h2><a href={hopeLink} style={linkStyle}>HOPE Works Capstone</a></h2>
                                <p style={paragraphStyle}>
                                    At the end of my time at <a href="https://www.burlingtoncodeacademy.com/" style={linkStyle}>Burlington Code Academy</a>, 
                                    my group's capstone project was to build a web app for <a href="https://hopeworksvt.org/" style={linkStyle}>Hope Works</a>, a non-profit
                                    in Burlington that helps survivors of
                                    sexual and domestic violence. My main focuses for this project were the form that volunteers and employees fill out
                                    to document interactions with survivors, and this sub-project: the page that sorts and displays submitted forms.
                                </p>
                                <div className="image-box">
                                    <a href={hopeLink}><img src={hopeImage} alt="HOPE Works form viewer" style={imageStyle}></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="page-2" className="page" style={evenPageStyle} ref={this.pageTwo}>
                    <h1 style={textStyle}>Work Goals</h1>
                    <label>What kind of job am I looking for?</label>
                    <div id="goal-boxes">
                        <div className="inner-col">
                            <div className="goal-box">
                                <h2 style={textStyle}>What</h2>
                                <p style={paragraphStyle}>
                                    The softwares I'm interested in creating are basically tools, even if they are small parts of much bigger tools. 
                                    They are used to make some task simpler, faster, or less
                                    frustrating. No matter what I end up doing, I want to be helping people in some way. While I would ideally love to work
                                    on projects that help people in difficult life situations or that help make our society more equitable, I would settle 
                                    for making people's day to day lives easier by making the apps they use every day more effective and easier to use. That
                                    being said, I definitely don't want to work for any company that is exploitative, deceptive, or predatory in any way.
                                </p>
                            </div>
                            <div className="goal-box">
                                <h2 style={textStyle}>Where</h2>
                                <p style={paragraphStyle}>
                                    I'm currently living with my family in <a style={linkStyle} 
                                        href="https://www.google.com/maps/place/South+Burlington,+VT
                                        /@44.4677575,-73.2981026">South Burlington, Vermont</a>.
                                    I love the Burlington area and working here would be
                                    great, but I am also excited by the idea of moving away to a big city and starting my own adventure in a new place.
                                    I am open to different possibilities about where I'll work!
                                </p>
                            </div>
                            <div className="goal-box">
                                <h2 style={textStyle}>When</h2>
                                <p style={paragraphStyle}>
                                    I am currently planning to work for <a style={linkStyle} href="https://campabnaki.org/">YMCA Camp Abnaki</a> as a Village Leader this summer,
                                    but we are not sure how the COVID-19
                                    crisis will affect Camp this summer. It seems like, at the very least, drastic changes will have to take place in order for
                                    Camp to run. Hopefully I will get to work at Camp this summer and I'll be available starting in the Fall, but it is possible
                                    I will be available much sooner!
                                </p>
                            </div>
                        </div>
                        <div className="inner-col">
                            <div className="goal-box">
                                <h2 style={textStyle}>How</h2>
                                <p style={paragraphStyle}>
                                    A lot of software companies nowadays use terms like <a style={linkStyle} href="https://agilemanifesto.org/">Agile</a> to describe
                                    their workplace environment, but not all workplaces
                                    that claim to follow these types of philosophies actually follow through. To me, it doesn't matter what you call it:
                                    I'm for collaborative, adaptable, and functional development where teammates respect and support one another. This will
                                    be essential to me especially as I start off, since I am partially a self-taught programmer and I am not aware of a lot
                                    of conventions or best practice solutions to problems. While I'll pick these up quickly once I'm on the job, responsive
                                    and helpful mentors will be a vital part of my learning.
                                </p>
                            </div>
                            <div className="goal-box">
                                <h2 style={textStyle}>Why</h2>
                                <p style={paragraphStyle}>
                                    I fell in love with math my first year of college. My <em>
                                    <a style={linkStyle} href="https://www.bates.edu/catalog/?s=current&a=renderDept&d=MATH#MATH106">Calculus II</a></em> professor <a
                                    href="https://web.archive.org/web/20190702112805/https://www.bates.edu/faculty-expertise/profile/henry-a-boateng/" style={linkStyle}>
                                    Henry Boateng</a> and an eccentric personality, a wonderful sense of humor, and an infectious laugh, but his homework
                                    problems were often quite challenging! In order to solve them, I had to work with newly made friends in groups
                                    for hours on end. While it was difficult, it felt so rewarding to work together to tackle tricky problems. 
                                    Eventually I realized I wanted to be a Mathematics major because of my passion for problem solving. That same
                                    passion drives me to problem solve through programming, in which the problem solving process is often quite
                                    similar.
                                </p>
                            </div>
                        </div>
                    </div>
                        <div className="goal-box">
                            <div className="image-box">
                                <img src={groupImage} alt="BCA capstone group" style={imageStyle}></img>
                            </div>
                            <label>Our Burlington Code Academy HOPE Works capstone group</label>
                        </div>
                    
                </div>
                <div id="page-3" className="page" style={oddPageStyle} ref={this.pageThree}>
                    <h1 style={textStyle}>More About Me</h1>
                    <div id="about-boxes">
                        <div className="inner-col">
                            <div className="about-box">
                                <h2 style={textStyle}>Short Bio</h2>
                                <p style={paragraphStyle}>
                                    I was born and raised in <a style={linkStyle} 
                                    href="https://www.google.com/maps/place/South+Burlington,+VT
                                    /@44.4677575,-73.2981026">South Burlington, Vermont</a>. I went to <a style={linkStyle}
                                    href="https://www.sbschools.net/Domain/8">South Burlington High School</a> and later attended <a style={linkStyle}
                                    href="https://www.bates.edu/">Bates College</a>,
                                    where in May I will graduate with a Bachelors degree in <a style={linkStyle}
                                    href="https://www.bates.edu/mathematics/academics/academic-program/">Mathematics</a>, with a <a style={linkStyle}
                                    href="https://www.bates.edu/german-russian/academics/russian/academic-program/">Russian minor</a> and a <a style={linkStyle}
                                    href="https://www.bates.edu/catalog/?s=current&a=renderDept&d=GEC#C084">Learning and Teaching</a> General
                                    Education Concentration.
                                </p>
                            </div>
                            <div className="about-box">
                                <h2 style={textStyle}>Pottery</h2>
                                <p style={paragraphStyle}>
                                    Pottery is one of my favorite hobbies. I've done it on and off since I was young. Not only is it relaxing and fun to do,
                                    it also allows me to express myself and share my final products with my family and friends. Pottery is a challenging craft and
                                    there's always more to learn, and it's more rewarding the more you do it. If you're in or around Burlington, check out <a style={linkStyle} 
                                    href="https://www.burlingtoncityarts.org/">Burlington City Arts</a>, where I've done most of my pottery.
                                </p>
                                <div className="image-box">
                                    <img src={bowlImage} alt="a bowl" style={imageStyle}></img>
                                    <img src={cupsImage} alt="some cups" style={imageStyle}></img>
                                </div>
                            </div>
                            <div className="about-box">
                                <h2 style={textStyle}>Video Games</h2>
                                <p style={paragraphStyle}>
                                    Like a lot of people my age, especially during this Pandemic, I play a lot of video games. I particularly enjoy competitive
                                    multiplayer games that combine skill and execution with strategy and planning. They're also just a great way to spend time with 
                                    friends doing something fun. My favorite game right now is <a style={linkStyle}
                                    href="https://en.wikipedia.org/wiki/Super_Smash_Bros._Melee">Super Smash Bros. Melee</a>.
                                </p>
                            </div>
                        </div>
                        <div className="inner-col">
                            <div className="about-box">
                                <h2 style={textStyle}>Biking</h2>
                                <p style={paragraphStyle}>
                                    While I've always enjoyed biking, I've really started biking a lot more since I bought a used road bike last summer. I
                                    used it to commute to Burlington Code Academy from home. For me, it's a great way to get outside and enjoy our beautiful
                                    community and get some exercise.
                                </p>
                                <div className="image-box">
                                    <img src={bikeImage} alt="my bike" style={imageStyle}></img>
                                </div>
                            </div>
                            <div className="about-box">
                                <h2 style={textStyle}>Music</h2>
                                <p style={paragraphStyle}>
                                    I love both playing and listening to music. I've been playing music since 2nd grade, and I have played the piano, recorder,
                                    clarinet, and euphonium. In college I played in the <a style={linkStyle}
                                    href="https://www.bates.edu/music/the-brass-ensemble/">Bates Brass Ensemble</a> (pictured below). Most of my enjoyment comes 
                                    from playing as part of a group, but I don't know if I'll have
                                    any opportunities to continue playing in an ensemble now that I've graduated.
                                </p>
                                <div className="image-box">
                                    <img src={brassImage} alt="Bates Brass Ensemble" style={imageStyle}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//-------- color theme objs -------------//

const colorThemes = [
    {
        textColor: {
            intRed: 49,
            intGreen: 19,
            intBlue: 53
        },
        highlightColor: {
            intRed: 247,
            intGreen: 133,
            intBlue: 250
        },
        linkColor: {
            intRed: 218,
            intGreen: 39,
            intBlue: 215
        },
        backgroundColor1: {
            intRed: 94,
            intGreen: 36,
            intBlue: 102
        },
        backgroundColor2: {
            intRed: 247,
            intGreen: 133,
            intBlue: 250
        }
    },
    {
        textColor: {
            intRed: 0,
            intGreen: 0,
            intBlue: 0
        },
        highlightColor: {
            intRed: 0,
            intGreen: 0,
            intBlue: 0
        },
        linkColor: {
            intRed: 0,
            intGreen: 0,
            intBlue: 0
        },
        backgroundColor1: {
            intRed: 0,
            intGreen: 0,
            intBlue: 0
        },
        backgroundColor2: {
            intRed: 0,
            intGreen: 0,
            intBlue: 0
        }
    }
]

//color changing on page switch
//html only version
//make some guides/help for apps
//transparency on entry?
//smooth internal linking
//fix color chooser
// add event listener for page resize

export default App;
