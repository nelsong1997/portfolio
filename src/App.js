import React from 'react';
import me from './assets/me.jpg'
import resume from './assets/Gabe_Nelson_Resume_5-4-20.pdf'
import zombieImage from './assets/zombie-disease-game.png'
import colorChooserImage from './assets/colorchooser.png'
import dihedralImage from './assets/dihedral-calculator.png'

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            property: "value"
        }
    }

    render() {
        return (
            <div id="main">
                <div id="page-0" className="page">
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
                            <h2>Zombie Game</h2>
                            <p>
                                The Zombie Game app is based on a game created by Jim Powell and Matt Lewis, professors at Utah State University. 
                                I learned about this game from my professor Meredith Greer during my capstone seminar 
                                <em> Advanced Topics in Biomathematics</em>. The game simplifies different aspects of diseases and how they
                                spread. Playing by hand can be tedious and takes a while, so I decided to turn the game into a web app that
                                also automatically records data in both a graph and a table.
                            </p>
                            <div className="image-box">
                                <img src={zombieImage}></img>
                            </div>
                        </div>
                        <div className="project-box">
                            <h2>Color Chooser</h2>
                            <p>
                                The Color Chooser is simply a complicated, highly customizable die. It allows the user to have the app randomly 
                                select a color from a user selected list, with different constraints and options, including weighting and 
                                pseudo-randomness. Unlike other apps I've created, this app designed with aesthetics and mobile in mind.
                            </p>
                            <div className="image-box">
                                <img src={colorChooserImage}></img>
                            </div>
                        </div>
                        <div className="project-box">
                            <h2>Dihedral Calculator</h2>
                            <p>
                                Dihedral groups are part of group theory, which is a big part of Abstract Algebra in advanced Mathematics.
                                As a part of this project I generalized some concepts to better fit into the app and allow for simpler calculations
                                for compositions of elements in dihedral groups. This app would definitely be useful for a student of Abstract Algebra!
                            </p>
                            <div className="image-box">
                                <img src={dihedralImage}></img>
                            </div>
                        </div>
                        <div className="project-box">
                            <h2>Hope Works Form Viewer</h2>
                            <p>
                                At the end of my time at BCA (Burlington Code Academy), all students worked on capstone projects in groups of four.
                                Our group's task was to build a web app for Hope Works, a non-profit in Burlington that helps support survivors of
                                sexual and domestic violence. My main focuses for this project were the form that volunteers and employees fill out
                                to document interactions with survivors, and this sub-project: the page that sorts through and displays submitted forms.
                            </p>
                            <div className="image-box">
                                <img src={colorChooserImage}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="page-2" className="page">
                    <h1>Work Goals</h1>
                </div>
                <div id="page-3" className="page">
                    <h1>More About Me</h1>
                </div>
            </div>
        )
    }
}

export default App;
