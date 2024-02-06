import React from 'react';
import me from './assets/me.jpg'
import resume from './assets/Gabe_Nelson_Resume_2-4-24.pdf'

import discordImage from './assets/discord.png'
import groceryImage from './assets/grocery-list.png'
import hopeImage from './assets/hw_image.png'
import zombieImage from './assets/zombie-disease-game.png'

import bowlsImage from './assets/bowls.jpg'
import mugsImage from './assets/mugs.jpg'
import bikeImage from './assets/bike.jpg'
import groupImage from './assets/bca_group.jpg'

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
            currentColors: getColorThemes()[0],
            changeThemeInterval: null
        }

        this.pageOne = React.createRef();
        this.pageTwo = React.createRef();
        this.pageThree = React.createRef();

        this.handleScroll = this.handleScroll.bind(this);
        this.setPagePositions = this.setPagePositions.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
        this.pageJump = this.pageJump.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true); //unfortunately react onScroll doesn't work.
        this.setPagePositions()
    }

    componentDidUpdate() {
        if (
            ( //case 1: begin transition when no transition is in prog
                !this.state.pageChanging.status && 
                this.state.currentPage!==this.state.currentTheme
            ) ||
            ( //case 2: begin a transition mid transition
                this.state.pageChanging.status &&
                this.state.currentPage!==this.state.pageChanging.targPage
            )) {
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
        let ticksRemaining = 60 - theTick
        let targetColors = getColorThemes()[targetPage]
        let changesObj = {} //this contains the rates at which each rgb value of each color type will change
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
                if (currentColors[colorType].realRed===undefined) { //these real values are more exact but we dont want to use them for our rgb values
                    currentColors[colorType].realRed = currentColors[colorType].intRed //they start undefined so we'll set them to the int values
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
            this.setState({currentColors: currentColors, pageChanging: {status: true, targPage: targetPage, tick: theTick}})
            if (theTick>=60) { //breaks after 60 ticks==1 sec
                clearInterval(this.state.changeThemeInterval)
                this.setState(
                    {
                        currentTheme: targetPage, //we have fully transitioned to this page
                        pageChanging: {status: false, targPage: null, tick: 0},
                        currentColors: targetColors //fix rounding errors
                })
            }
        }, 16.67) //60 changes per second
        this.setState({changeThemeInterval: theInterval})
    }

    pageJump(e) {
        let targetPage = Number(e.target.id.slice(-1))
        let targetPageHeight = 0
        if (targetPage===1) targetPageHeight = this.state.pageOnePosition
        else if (targetPage===2) targetPageHeight = this.state.pageTwoPosition
        else if (targetPage===3) targetPageHeight = this.state.pageThreePosition
        let startHeight = window.scrollY
        let distance = targetPageHeight - startHeight
        let k = distance/900
        let x = 0
        let distanceMoved = startHeight
        let pageJumpInterval = setInterval(() => {
            x++
            distanceMoved += -k*Math.abs(x-30) + k*30
            let distanceThisScroll = distanceMoved - window.scrollY
            window.scrollBy(0, distanceThisScroll)
            if (x>=60) {
                clearInterval(pageJumpInterval)
            }
        }, 16.67)
    }

    handleScroll() {
        let currentPosition = window.scrollY + window.innerHeight/2 //the middle of the viewport
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
        let groceryLink = "https://nelsong1997.github.io/grocery-list/"
        let gymotheeLink = "https://github.com/nelsong1997/gymothee#commands"
        let hopeLink = "https://nelsong1997.github.io/hope-works-2/"
        let zombieLink = "https://nelsong1997.github.io/zombie_game/"

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
        let ruleStyle = {border: `1px solid ${textColorString}`}

        return (
            <div id="main" style={{backgroundColor: backgroundColor1String}}>
                <div id="page-0" className="page" style={evenPageStyle}>
                    <h1 style={textStyle}>Hi, I'm Gabe.</h1>
                    <img id="me-img" src={me} alt="me" style={imageStyle}></img>
                    <h2 className="bb-text" style={textStyle}>I'm a software developer.</h2>
                    <div className="break-bar">
                        <div>
                            <h3 className="bb-text"><a href="https://github.com/nelsong1997" style={linkStyle}>Github</a></h3>
                            <h3 className="bb-spacer" style={textStyle}>|</h3>
                            <h3 className="bb-text"><a href={resume} style={linkStyle}>Resume</a></h3>
                            <h3 className="bb-spacer" style={textStyle}>|</h3>
                            <h3 className="bb-text"><a href="https://www.linkedin.com/in/nelsong1997/" style={linkStyle}>Linkedin</a></h3>
                        </div>
                        <div>
                            <h3 className="bb-spacer" style={textStyle}>|</h3>
                            <h3 className="bb-text"><a href="mailto:nelsong1997@gmail.com" style={linkStyle}>nelsong1997@gmail.com</a></h3>
                        </div>
                    </div>
                    <hr style={ruleStyle}/>
                    <div className="break-bar">
                        <h3 id="jump-1" className="bb-text" style={linkStyle} onClick={this.pageJump}>Featured Projects ↓</h3>
                        <h3 className="bb-spacer" style={textStyle}>|</h3>
                        <h3 id="jump-2" className="bb-text" style={linkStyle} onClick={this.pageJump}>Career ↓</h3>
                        <h3 className="bb-spacer" style={textStyle}>|</h3>
                        <h3 id="jump-3" className="bb-text" style={linkStyle} onClick={this.pageJump}>More About Me ↓</h3>
                    </div>
                </div>
                <div id="page-1" className="page" style={oddPageStyle} ref={this.pageOne}>
                    <h1 style={textStyle}>Featured Projects</h1>
                    <label style={{color: textColorString, maxWidth: "90vw"}}>
                        Click on an image or heading to open a project! (Note: most of these apps are not mobile accessible)
                    </label>
                    <div id="project-boxes">
                        <div className="inner-col">
                            <div className="project-box">
                                <h2><a href={groceryLink} style={linkStyle}>Grocery List</a></h2>
                                <p style={paragraphStyle}>
                                    I wanted a grocery list app that was fine tuned to my own personal needs, so I made one.
                                    This app is designed to work on a phone web browser. You can add items to different categories and then add them to your list.
                                    As you create new items, you can configure them to be quantified or standalone. Local storage is used to save your configuration,
                                    but the app also has import and export functionality.
                                </p>
                                <div className="image-box">
                                    <a href={groceryLink}><img src={groceryImage} alt="grocery list" style={imageStyle}></img></a>
                                </div>
                            </div>
                            <div className="project-box">
                                <h2><a href={gymotheeLink} style={linkStyle}>Gymotheé</a></h2>
                                <p style={paragraphStyle}>
                                    Gymotheé is a <a href="https://discord.com" style={linkStyle}>Discord</a> bot that has a few basic capabilities,
                                    including coin flipping, dice rolling, and welcome messages.
                                    Its more complex features include a reminder system and a voice channel logging system.
                                    The reminder system allows you to create a reminder that triggers after a certain amount of time or at a specific time and date.
                                    Reminders can also be configured to repeat at regular intervals or on certain weekdays.
                                    When a reminder triggers, the bot sends you a customizable message.
                                    The voice channel logging system enables the bot to keep track of when people leave and join the voice channels of your server.
                                </p>
                                <div className="image-box">
                                    <a href={gymotheeLink}><img src={discordImage} alt="gabebot" style={imageStyle}></img></a>
                                </div>
                            </div>
                        </div>
                        <div className="inner-col">
                            <div className="project-box">
                                <h2><a href={zombieLink} style={linkStyle}>Zombie Game</a></h2>
                                <p style={paragraphStyle}>
                                    The Zombie Game simplifies different aspects of diseases and how they spread.
                                    Professor <a style={linkStyle}
                                    href="https://www.bates.edu/faculty-expertise/profile/meredith-l-greer/">Meredith Greer</a> included
                                    this game as part of the curriculum of my capstone seminar 
                                    <em> Advanced Topics in Biomathematics</em>.
                                    Playing by hand can be tedious and takes a while, so I decided as a personal project to turn the game into a web app that
                                    also automatically records data in both a graph and a table.
                                    This app was published on <a href="https://digitalcommons.usu.edu/lemb/8/" style={linkStyle}>Utah State University's website</a>!
                                </p>
                                <div className="image-box">
                                    <a href={zombieLink}><img src={zombieImage} alt="zombie game" style={imageStyle}></img></a>
                                </div>
                            </div>
                            <div className="project-box">
                                <h2><a href={hopeLink} style={linkStyle}>HOPE Works Capstone</a></h2>
                                <p style={paragraphStyle}>
                                    At the end of my time at the <a href="https://www.burlingtoncodeacademy.com/" style={linkStyle}>Burlington Code Academy</a>, 
                                    my group's capstone project was to build a web app for <a href="https://hopeworksvt.org/" style={linkStyle}>HOPE Works</a>, a non-profit
                                    in Burlington that helps survivors of
                                    sexual and domestic violence. My two main focuses for this project were the form that volunteers and employees fill out
                                    to document interactions with survivors and the page that sorts and displays submitted forms. Note that this is a
                                    re-creation of these two parts of this project for demo purposes, so some features are altered or unavailable.
                                </p>
                                <div className="image-box">
                                    <a href={hopeLink}><img src={hopeImage} alt="HOPE Works form viewer" style={imageStyle}></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 id="jump-0" className="bb-text" style={linkStyle} onClick={this.pageJump}>Back to Top ↑</h3>
                </div>
                <div id="page-2" className="page" style={evenPageStyle} ref={this.pageTwo}>
                    <h1 style={textStyle}>Career</h1>
                    <label style={paragraphStyle}>What kind of work do I want to do?</label>
                    <div id="goal-boxes">
                        <div className="inner-col">
                            <div className="goal-box">
                                <h2 style={textStyle}>What</h2>
                                <p style={paragraphStyle}>
                                    The pieces of software I'm interested in creating are basically tools, even if they are just small parts of much bigger applications. 
                                    They are used to make some task simpler, faster, or less
                                    frustrating. No matter what I'm doing, I want to be helping people in some way 
                                    by making the apps they use every day more effective and easier to use.
                                </p>
                            </div>
                            <div className="goal-box">
                                <h2 style={textStyle}>Where</h2>
                                <p style={paragraphStyle}>
                                    I'm currently living in <a style={linkStyle} 
                                        href="https://www.google.com/maps/place/South+Burlington,+VT
                                        /@44.4677575,-73.2981026">South Burlington, Vermont</a>.
                                    I love the Burlington area and working here is great,
                                    but I am always open to moving away and starting my own adventure in a new place.
                                    I am open to different possibilities about where I might work in the future!
                                </p>
                            </div>
                        </div>
                        <div className="inner-col">
                            <div className="goal-box">
                                <h2 style={textStyle}>How</h2>
                                <p style={paragraphStyle}>
                                    I currently work within <a style={linkStyle} href="https://agilemanifesto.org/">Agile</a> and Scrum frameworks, which has
                                    helped guide my understanding of how software can be developed and maintained in a way that is both efficient
                                    and beneficial to customers. This process has taught me how to work together to break tasks down into their smallest
                                    possible size, assess their value, and get them done. Regardless of framework, the important things to me are
                                    collaboration, adaptability, and functional development where teammates respect and support one another.
                                </p>
                            </div>
                            <div className="goal-box">
                                <h2 style={textStyle}>Why</h2>
                                <p style={paragraphStyle}>
                                    I fell in love with math during first semester of college. My <em>Calculus II</em> professor <a
                                    href="https://haboateng.github.io/" style={linkStyle}>
                                    Henry Boateng</a> had an eccentric personality, a wonderful sense of humor, and an infectious laugh, but his homework
                                    problems were often quite challenging! In order to solve them, I had to work with newly made friends in groups
                                    for hours on end. While it was difficult, it was also immensely rewarding to work together to tackle tricky problems. 
                                    Eventually I realized I wanted to be a Mathematics major because of my passion for problem solving. That same
                                    passion drives me to problem solve through programming, in which (to me) the problem solving process is often quite
                                    similar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="goal-box">
                        <div className="image-box">
                            <img src={groupImage} alt="BCA capstone group" style={imageStyle}></img>
                        </div>
                        <label style={paragraphStyle}>Our Burlington Code Academy HOPE Works capstone group</label>
                    </div>
                    <h3 id="jump-0" className="bb-text" style={linkStyle} onClick={this.pageJump}>Back to Top ↑</h3>
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
                                    where in May, 2020 I graduated with a Bachelors degree in <a style={linkStyle}
                                    href="https://www.bates.edu/mathematics/academics/academic-program/">Mathematics</a> with a <a style={linkStyle}
                                    href="https://www.bates.edu/german-russian/academics/russian/academic-program/">minor in Russian</a>.
                                    In the summer of 2020, I moved back to South Burlington and started working at <a style={linkStyle}
                                    href="https://public.vtinfo.com/">Vermont Information Processing</a> as a Support Specialist.
                                    In April 2022, I transitioned to a Software Engineer role at VIP.
                                </p>
                            </div>
                            <div className="about-box">
                                <h2 style={textStyle}>Pottery</h2>
                                <p style={paragraphStyle}>
                                    Pottery is one of my favorite hobbies. I've worked with ceramics on and off since I was young.
                                    Not only is it a lot of fun, it also allows me to share a community with other potters,
                                    express myself, and gift my work to family and friends. Pottery is a challenging and
                                    highly rewarding craft and there's always more to learn. I have made pottery in college classes, at
                                    the <a style={linkStyle} href="https://middleburystudioschool.org/">Middlebury Studio School</a>, 
                                    and at <a style={linkStyle} href="https://www.burlingtoncityarts.org/">Burlington City Arts</a>, where 
                                    I currently volunteer as a studio assistant.
                                </p>
                                <div className="image-box">
                                    <img src={bowlsImage} alt="bowls" style={imageStyle}></img>
                                    <img src={mugsImage} alt="mugs" style={imageStyle}></img>
                                </div>
                                <label style={paragraphStyle}>
                                    See more of my work on <a style={linkStyle} href="https://www.instagram.com/gjn_pottery/">Instagram</a>
                                </label>
                            </div>
                        </div>
                        <div className="inner-col">
                            <div className="about-box">
                                <h2 style={textStyle}>Biking</h2>
                                <p style={paragraphStyle}>
                                    While I've always enjoyed biking, I started biking a lot more since I bought a used road bike in the summer of 2019 
                                    to commute to Burlington Code Academy. Now, I have two bikes and I bike all year round for both fun and function.
                                    For me, it's a great way to get outside, enjoy our beautiful community, and get some exercise.
                                </p>
                                <div className="image-box">
                                    <img src={bikeImage} alt="my bike" style={imageStyle}></img>
                                </div>
                            </div>
                            <div className="about-box">
                                <h2 style={textStyle}>Video Games</h2>
                                <p style={paragraphStyle}>
                                    I've always enjoyed playing video games. For me, they simply are a great way to spend time with others.
                                    I also love grappling with games that challenge me to develop various skills and strategies in order to win.
                                    My favorite game right now is <a style={linkStyle}
                                    href="https://en.wikipedia.org/wiki/Super_Smash_Bros._Melee">Super Smash Bros. Melee</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3 id="jump-0" className="bb-text" style={linkStyle} onClick={this.pageJump}>Back to Top ↑</h3>
                </div>
            </div>
        )
    }
}

//-------- color theme objs -------------//

function getColorThemes() {
    return (
        [
            { //theme 0
                textColor: {intRed: 49, intGreen: 19, intBlue: 53},
                highlightColor: {intRed: 247, intGreen: 133, intBlue: 250},
                linkColor: {intRed: 255, intGreen: 187, intBlue: 255},
                backgroundColor1: {intRed: 94, intGreen: 36, intBlue: 102},
                backgroundColor2: {intRed: 247, intGreen: 133, intBlue: 250}
            },
            { //theme 1
                textColor: {intRed: 220, intGreen: 220, intBlue: 220},
                highlightColor: {intRed: 0, intGreen: 0, intBlue: 0},
                linkColor: {intRed: 255, intGreen: 255, intBlue: 255},
                backgroundColor1: {intRed: 50, intGreen: 50, intBlue: 50},
                backgroundColor2: {intRed: 20, intGreen: 20, intBlue: 20}
            },
            { //theme 2
                textColor: {intRed: 20, intGreen: 71, intBlue: 22},
                highlightColor: {intRed: 0, intGreen: 255, intBlue: 0},
                linkColor: {intRed: 206, intGreen: 250, intBlue: 201},
                backgroundColor1: {intRed: 41, intGreen: 190, intBlue: 46},
                backgroundColor2: {intRed: 136, intGreen: 230, intBlue: 138}
            },
            { //theme 3
                textColor: {intRed: 13, intGreen: 10, intBlue: 75},
                highlightColor: {intRed: 60, intGreen: 218, intBlue: 251},
                linkColor: {intRed: 52, intGreen: 30, intBlue: 253},
                backgroundColor1: {intRed: 119, intGreen: 235, intBlue: 255},
                backgroundColor2: {intRed: 69, intGreen: 122, intBlue: 248}
            }
        ]
    )
}

export default App;
