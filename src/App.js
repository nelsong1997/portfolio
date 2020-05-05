import React from 'react';
import me from './assets/me.jpg'
import resume from './assets/Gabe_Nelson_Resume_5-4-20.pdf'

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
                        <h3 className="bb-text">nelsong1997@gmail.com</h3>
                    </div>
                    <div>
                        <p>
                            Otherwise, stick around and either scroll or jump down to view some of my work and more about me!
                        </p>
                    </div>
                    <div id="break-bar-2" className="break-bar">
                        <h3 className="bb-text"><a>My Work ↓</a></h3>
                        <h3 className="bb-spacer">|</h3>
                        <h3 className="bb-text"><a>Career Aspirations ↓</a></h3>
                        <h3 className="bb-spacer">|</h3>
                        <h3 className="bb-text"><a>More About Me ↓</a></h3>
                    </div>
                </div>
                <div id="page-1" className="page">

                </div>
                
            </div>
        )
    }
}

export default App;
