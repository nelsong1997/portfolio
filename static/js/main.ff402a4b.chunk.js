(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/me.49f0ad89.jpg"},function(e,t,a){e.exports=a.p+"static/media/Gabe_Nelson_Resume_5-4-20.ccb10d95.pdf"},function(e,t,a){e.exports=a.p+"static/media/zombie-disease-game.ded3188f.png"},function(e,t,a){e.exports=a.p+"static/media/colorchooser.93958466.png"},function(e,t,a){e.exports=a.p+"static/media/dihedral-calculator.632618f6.png"},function(e,t,a){e.exports=a.p+"static/media/bowl.c4ba3d5c.png"},function(e,t,a){e.exports=a.p+"static/media/cups.0dc4b889.jpg"},function(e,t,a){e.exports=a.p+"static/media/bike.19302495.jpg"},function(e,t,a){e.exports=a.p+"static/media/brass.367440bd.jpg"},function(e,t,a){e.exports=a.p+"static/media/bca_group.9764ca0f.jpg"},function(e,t,a){e.exports=a.p+"static/media/hw_image.dff71439.png"},,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),l=a.n(r),i=a(4),s=a(5),c=a(1),m=a(18),h=a(17),d=a(6),u=a.n(d),p=a(7),g=a.n(p),b=a(8),y=a.n(b),f=a(9),w=a.n(f),E=a(10),v=a.n(E),k=a(11),C=a.n(k),x=a(12),I=a.n(x),B=a(13),N=a.n(B),P=a(14),T=a.n(P),G=a(15),R=a.n(G),j=a(16),S=a.n(j);a(24);var M=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={currentPosition:0,pageOnePosition:0,pageTwoPosition:0,pageThreePosition:0,currentPage:0,currentTheme:0,pageChanging:{status:!1,targPage:null,tick:0},currentColors:{textColor:{intRed:49,intGreen:19,intBlue:53},highlightColor:{intRed:247,intGreen:133,intBlue:250},linkColor:{intRed:255,intGreen:187,intBlue:255},backgroundColor1:{intRed:94,intGreen:36,intBlue:102},backgroundColor2:{intRed:247,intGreen:133,intBlue:250}},changeThemeInterval:null},e.pageOne=o.a.createRef(),e.pageTwo=o.a.createRef(),e.pageThree=o.a.createRef(),e.handleScroll=e.handleScroll.bind(Object(c.a)(e)),e.setPagePositions=e.setPagePositions.bind(Object(c.a)(e)),e.changeTheme=e.changeTheme.bind(Object(c.a)(e)),e.pageJump=e.pageJump.bind(Object(c.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll,!0),this.setPagePositions()}},{key:"componentDidUpdate",value:function(){if(!this.state.pageChanging.status&&this.state.currentPage!==this.state.currentTheme||this.state.pageChanging.status&&this.state.currentPage!==this.state.pageChanging.targPage){var e=this.state.pageChanging.tick;this.state.pageChanging.status&&this.state.currentPage!==this.state.currentTheme&&(e=0),clearInterval(this.state.changeThemeInterval),this.changeTheme(this.state.currentColors,this.state.currentPage,e),this.setState({pageChanging:{status:!0,targPage:this.state.currentPage,tick:e}})}}},{key:"changeTheme",value:function(e,t,a){var n=this,o=a,r=60-o,l=[{textColor:{intRed:49,intGreen:19,intBlue:53},highlightColor:{intRed:247,intGreen:133,intBlue:250},linkColor:{intRed:255,intGreen:187,intBlue:255},backgroundColor1:{intRed:94,intGreen:36,intBlue:102},backgroundColor2:{intRed:247,intGreen:133,intBlue:250}},{textColor:{intRed:220,intGreen:220,intBlue:220},highlightColor:{intRed:0,intGreen:0,intBlue:0},linkColor:{intRed:255,intGreen:255,intBlue:255},backgroundColor1:{intRed:50,intGreen:50,intBlue:50},backgroundColor2:{intRed:20,intGreen:20,intBlue:20}},{textColor:{intRed:20,intGreen:71,intBlue:22},highlightColor:{intRed:0,intGreen:255,intBlue:0},linkColor:{intRed:206,intGreen:250,intBlue:201},backgroundColor1:{intRed:41,intGreen:190,intBlue:46},backgroundColor2:{intRed:136,intGreen:230,intBlue:138}},{textColor:{intRed:13,intGreen:10,intBlue:75},highlightColor:{intRed:60,intGreen:218,intBlue:251},linkColor:{intRed:52,intGreen:30,intBlue:253},backgroundColor1:{intRed:119,intGreen:235,intBlue:255},backgroundColor2:{intRed:69,intGreen:122,intBlue:248}}][t],i={};for(var s in e)i[s]={},i[s].red=(l[s].intRed-e[s].intRed)/r,i[s].green=(l[s].intGreen-e[s].intGreen)/r,i[s].blue=(l[s].intBlue-e[s].intBlue)/r;var c=setInterval((function(){o++;var e=n.state.currentColors;for(var a in e)void 0===e[a].realRed&&(e[a].realRed=e[a].intRed),void 0===e[a].realGreen&&(e[a].realGreen=e[a].intGreen),void 0===e[a].realBlue&&(e[a].realBlue=e[a].intBlue),e[a].realRed=e[a].realRed+i[a].red,e[a].realGreen=e[a].realGreen+i[a].green,e[a].realBlue=e[a].realBlue+i[a].blue,e[a].intRed=Math.round(e[a].realRed+i[a].red),e[a].intGreen=Math.round(e[a].realGreen+i[a].green),e[a].intBlue=Math.round(e[a].realBlue+i[a].blue);n.setState({currentColors:e,pageChanging:{status:!0,targPage:t,tick:o}}),o>=60&&(clearInterval(n.state.changeThemeInterval),n.setState({currentTheme:t,pageChanging:{status:!1,targPage:null,tick:0},currentColors:l}))}),16.67);this.setState({changeThemeInterval:c})}},{key:"pageJump",value:function(e){var t=Number(e.target.id.slice(-1)),a=0;1===t?a=this.state.pageOnePosition:2===t?a=this.state.pageTwoPosition:3===t&&(a=this.state.pageThreePosition);var n=window.pageYOffset,o=(a-n)/900,r=0,l=n,i=setInterval((function(){r++;var e=(l+=-o*Math.abs(r-30)+30*o)-window.pageYOffset;window.scrollBy(0,e),r>=60&&clearInterval(i)}),16.67)}},{key:"handleScroll",value:function(){var e=window.pageYOffset+window.innerHeight/2;0!==this.state.currentPage&&e<this.state.pageOnePosition-20?this.setState({currentPage:0}):1!==this.state.currentPage&&e>this.state.pageOnePosition+20&&e<this.state.pageTwoPosition-20?this.setState({currentPage:1}):2!==this.state.currentPage&&e>this.state.pageTwoPosition+20&&e<this.state.pageThreePosition-20?this.setState({currentPage:2}):3!==this.state.currentPage&&e>this.state.pageThreePosition+20&&this.setState({currentPage:3}),this.setPagePositions(),this.setState({currentPosition:e})}},{key:"setPagePositions",value:function(){this.setState({pageOnePosition:this.pageOne.current.offsetTop,pageTwoPosition:this.pageTwo.current.offsetTop,pageThreePosition:this.pageThree.current.offsetTop})}},{key:"render",value:function(){var e="https://nelsong1997.github.io/dihedral_calculator/",t="https://nelsong1997.github.io/zombie_game/",a="https://nelsong1997.github.io/color_chooser/",n="https://nelsong1997.github.io/hope-works-2/",r=this.state.currentColors,l="rgb(".concat(r.textColor.intRed,", ").concat(r.textColor.intGreen,", ").concat(r.textColor.intBlue,")"),i="rgb(".concat(r.highlightColor.intRed,", ").concat(r.highlightColor.intGreen,", ").concat(r.highlightColor.intBlue,")"),s="rgb(".concat(r.linkColor.intRed,", ").concat(r.linkColor.intGreen,", ").concat(r.linkColor.intBlue,")"),c="rgb(".concat(r.backgroundColor1.intRed,", ").concat(r.backgroundColor1.intGreen,", ").concat(r.backgroundColor1.intBlue,")"),m="rgb(".concat(r.backgroundColor2.intRed,", ").concat(r.backgroundColor2.intGreen,", ").concat(r.backgroundColor2.intBlue,")"),h={color:l,textShadow:"1px 1px ".concat(i)},d={border:"1px solid ".concat(i)},p={backgroundImage:"linear-gradient(to bottom, ".concat(c,", ").concat(m)},b={backgroundImage:"linear-gradient(to top, ".concat(c,", ").concat(m)},f={color:s,textShadow:"1px 1px ".concat(l)},E={color:l},k={border:"1px solid ".concat(l)};return o.a.createElement("div",{id:"main",style:{backgroundColor:c}},o.a.createElement("div",{id:"page-0",className:"page",style:p},o.a.createElement("h1",{style:h},"Hi, I'm Gabe."),o.a.createElement("img",{id:"me-img",src:u.a,alt:"me",style:d}),o.a.createElement("h2",{className:"bb-text",style:h},"I'm an aspiring developer."),o.a.createElement("div",{className:"break-bar"},o.a.createElement("div",null,o.a.createElement("h3",{className:"bb-text"},o.a.createElement("a",{href:"https://github.com/nelsong1997",style:f},"Github")),o.a.createElement("h3",{className:"bb-spacer",style:h},"|"),o.a.createElement("h3",{className:"bb-text"},o.a.createElement("a",{href:g.a,style:f},"Resume")),o.a.createElement("h3",{className:"bb-spacer",style:h},"|"),o.a.createElement("h3",{className:"bb-text"},o.a.createElement("a",{href:"https://www.linkedin.com/in/nelsong1997/",style:f},"Linkedin"))),o.a.createElement("div",null,o.a.createElement("h3",{className:"bb-spacer",style:h},"|"),o.a.createElement("h3",{className:"bb-text"},o.a.createElement("a",{href:"mailto:nelsong1997@gmail.com",style:f},"nelsong1997@gmail.com")))),o.a.createElement("hr",{style:k}),o.a.createElement("div",{className:"break-bar"},o.a.createElement("h3",{id:"jump-1",className:"bb-text",style:f,onClick:this.pageJump},"My Work \u2193"),o.a.createElement("h3",{className:"bb-spacer",style:h},"|"),o.a.createElement("h3",{id:"jump-2",className:"bb-text",style:f,onClick:this.pageJump},"Career Aspirations \u2193"),o.a.createElement("h3",{className:"bb-spacer",style:h},"|"),o.a.createElement("h3",{id:"jump-3",className:"bb-text",style:f,onClick:this.pageJump},"More About Me \u2193"))),o.a.createElement("div",{id:"page-1",className:"page",style:b,ref:this.pageOne},o.a.createElement("h1",{style:h},"Featured Projects"),o.a.createElement("label",{style:{color:l,maxWidth:"90vw"}},"Click on an image to open the project! (Note: most of these apps are not mobile accessible)"),o.a.createElement("div",{id:"project-boxes"},o.a.createElement("div",{className:"inner-col"},o.a.createElement("div",{className:"project-box"},o.a.createElement("h2",null,o.a.createElement("a",{href:t,style:f},"Zombie Game")),o.a.createElement("p",{style:E},"The Zombie Game simplifies different aspects of diseases and how they spread. Professor ",o.a.createElement("a",{style:f,href:"https://www.bates.edu/faculty-expertise/profile/meredith-l-greer/"},"Meredith Greer")," included this game as part of the curriculum of my capstone seminar",o.a.createElement("em",null," ",o.a.createElement("a",{style:f,href:"https://www.bates.edu/catalog/?s=current&a=renderDept&d=MATH#495J"},"Advanced Topics in Biomathematics")),". Playing by hand can be tedious and takes a while, so I decided as a personal project to turn the game into a web app that also automatically records data in both a graph and a table."),o.a.createElement("div",{className:"image-box"},o.a.createElement("a",{href:t},o.a.createElement("img",{src:y.a,alt:"zombie game",style:d})))),o.a.createElement("div",{className:"project-box"},o.a.createElement("h2",null,o.a.createElement("a",{href:a,style:f},"Color Chooser")),o.a.createElement("p",{style:E},"The Color Chooser is essentially a highly customizable die. It allows the user to have the app randomly select a color from a personalized list, with different constraints and options, including weighting and pseudo-randomness. Unlike other apps I've created, this app was designed with aesthetics and mobile access in mind."),o.a.createElement("p",{style:E},'To use, click or touch the screen to start choosing a random color. To reset, click/touch and hold. While on the start screen, click/touch and hold to open the options menu (click the "x" to exit).'),o.a.createElement("div",{className:"image-box"},o.a.createElement("a",{href:a,style:f},o.a.createElement("img",{src:w.a,alt:"color chooser",style:d}))))),o.a.createElement("div",{className:"inner-col"},o.a.createElement("div",{className:"project-box"},o.a.createElement("h2",null,o.a.createElement("a",{href:e,style:f},"Dihedral Calculator")),o.a.createElement("p",{style:E},o.a.createElement("a",{style:f,href:"https://en.wikipedia.org/wiki/Dihedral_group"},"Dihedral groups")," are part of ",o.a.createElement("a",{style:f,href:"https://en.wikipedia.org/wiki/Group_theory"},"group theory"),", which is a big part of ",o.a.createElement("a",{style:f,href:"https://en.wikipedia.org/wiki/Abstract_algebra"},"Abstract Algebra")," in advanced Mathematics. As a part of this project I generalized some concepts to better fit into the app and allow for simpler calculations for compositions of elements in dihedral groups. I was inspired to take this on as a personal project while taking ",o.a.createElement("em",null,o.a.createElement("a",{href:"https://www.bates.edu/catalog/?s=current&a=renderDept&d=MATH#379",style:f},"Abstract Algebra II"))," with professor ",o.a.createElement("a",{href:"https://www.bates.edu/faculty-expertise/profile/peter-n-wong/",style:f},"Peter Wong"),"."),o.a.createElement("div",{className:"image-box"},o.a.createElement("a",{href:e},o.a.createElement("img",{src:v.a,alt:"dihedral calculator",style:d})))),o.a.createElement("div",{className:"project-box"},o.a.createElement("h2",null,o.a.createElement("a",{href:n,style:f},"HOPE Works Capstone")),o.a.createElement("p",{style:E},"At the end of my time at ",o.a.createElement("a",{href:"https://www.burlingtoncodeacademy.com/",style:f},"Burlington Code Academy"),", my group's capstone project was to build a web app for ",o.a.createElement("a",{href:"https://hopeworksvt.org/",style:f},"Hope Works"),", a non-profit in Burlington that helps survivors of sexual and domestic violence. My two main focuses for this project were the form that volunteers and employees fill out to document interactions with survivors and the page that sorts and displays submitted forms. Note that this is a re-creation of these two parts of this project for demo purposes, so some features are altered or unavailable."),o.a.createElement("div",{className:"image-box"},o.a.createElement("a",{href:n},o.a.createElement("img",{src:S.a,alt:"HOPE Works form viewer",style:d})))))),o.a.createElement("h3",{id:"jump-0",className:"bb-text",style:f,onClick:this.pageJump},"Back to Top \u2191")),o.a.createElement("div",{id:"page-2",className:"page",style:p,ref:this.pageTwo},o.a.createElement("h1",{style:h},"Work Goals"),o.a.createElement("label",{style:E},"What kind of job am I looking for?"),o.a.createElement("div",{id:"goal-boxes"},o.a.createElement("div",{className:"inner-col"},o.a.createElement("div",{className:"goal-box"},o.a.createElement("h2",{style:h},"What"),o.a.createElement("p",{style:E},"The softwares I'm interested in creating are basically tools, even if they are small parts of much bigger tools. They are used to make some task simpler, faster, or less frustrating. No matter what I end up doing, I want to be helping people in some way. While I would ideally love to work on projects that help people in difficult life situations or that help make our society more equitable, I would settle for making people's day to day lives easier by making the apps they use every day more effective and easier to use. That being said, I definitely don't want to work for any company that is exploitative, deceptive, or predatory in any way.")),o.a.createElement("div",{className:"goal-box"},o.a.createElement("h2",{style:h},"Where"),o.a.createElement("p",{style:E},"I'm currently living with my family in ",o.a.createElement("a",{style:f,href:"https://www.google.com/maps/place/South+Burlington,+VT\r /@44.4677575,-73.2981026"},"South Burlington, Vermont"),". I love the Burlington area and working here would be great, but I am also excited by the idea of moving away to a big city and starting my own adventure in a new place. I am open to different possibilities about where I'll work!")),o.a.createElement("div",{className:"goal-box"},o.a.createElement("h2",{style:h},"When"),o.a.createElement("p",{style:E},"I am currently planning to work for ",o.a.createElement("a",{style:f,href:"https://campabnaki.org/"},"YMCA Camp Abnaki")," as a Village Leader this summer, but we are not sure how the COVID-19 crisis will affect Camp this summer. It seems like, at the very least, drastic changes will have to take place in order for Camp to run. Hopefully I will get to work at Camp this summer and I'll be available starting in the Fall, but it is possible I will be available much sooner!"))),o.a.createElement("div",{className:"inner-col"},o.a.createElement("div",{className:"goal-box"},o.a.createElement("h2",{style:h},"How"),o.a.createElement("p",{style:E},"A lot of software companies nowadays use terms like ",o.a.createElement("a",{style:f,href:"https://agilemanifesto.org/"},"Agile")," to describe their workplace environment, but not all workplaces that claim to follow these types of philosophies actually follow through. To me, it doesn't matter what you call it: I'm for collaborative, adaptable, and functional development where teammates respect and support one another. This will be essential to me especially as I start off, since I am partially a self-taught programmer and I am not aware of a lot of conventions or best practice solutions to problems. While I'll pick these up quickly once I'm on the job, responsive and helpful mentors will be a vital part of my learning.")),o.a.createElement("div",{className:"goal-box"},o.a.createElement("h2",{style:h},"Why"),o.a.createElement("p",{style:E},"I fell in love with math my first year of college. My ",o.a.createElement("em",null,o.a.createElement("a",{style:f,href:"https://www.bates.edu/catalog/?s=current&a=renderDept&d=MATH#MATH106"},"Calculus II"))," professor ",o.a.createElement("a",{href:"https://web.archive.org/web/20190702112805/https://www.bates.edu/faculty-expertise/profile/henry-a-boateng/",style:f},"Henry Boateng")," had an eccentric personality, a wonderful sense of humor, and an infectious laugh, but his homework problems were often quite challenging! In order to solve them, I had to work with newly made friends in groups for hours on end. While it was difficult, it felt so rewarding to work together to tackle tricky problems. Eventually I realized I wanted to be a Mathematics major because of my passion for problem solving. That same passion drives me to problem solve through programming, in which the problem solving process is often quite similar.")))),o.a.createElement("div",{className:"goal-box"},o.a.createElement("div",{className:"image-box"},o.a.createElement("img",{src:R.a,alt:"BCA capstone group",style:d})),o.a.createElement("label",{style:E},"Our Burlington Code Academy HOPE Works capstone group")),o.a.createElement("h3",{id:"jump-0",className:"bb-text",style:f,onClick:this.pageJump},"Back to Top \u2191")),o.a.createElement("div",{id:"page-3",className:"page",style:b,ref:this.pageThree},o.a.createElement("h1",{style:h},"More About Me"),o.a.createElement("div",{id:"about-boxes"},o.a.createElement("div",{className:"inner-col"},o.a.createElement("div",{className:"about-box"},o.a.createElement("h2",{style:h},"Short Bio"),o.a.createElement("p",{style:E},"I was born and raised in ",o.a.createElement("a",{style:f,href:"https://www.google.com/maps/place/South+Burlington,+VT\r /@44.4677575,-73.2981026"},"South Burlington, Vermont"),". I went to ",o.a.createElement("a",{style:f,href:"https://www.sbschools.net/Domain/8"},"South Burlington High School")," and later attended ",o.a.createElement("a",{style:f,href:"https://www.bates.edu/"},"Bates College"),", where in May I will graduate with a Bachelors degree in ",o.a.createElement("a",{style:f,href:"https://www.bates.edu/mathematics/academics/academic-program/"},"Mathematics"),", with a ",o.a.createElement("a",{style:f,href:"https://www.bates.edu/german-russian/academics/russian/academic-program/"},"Russian minor")," and a ",o.a.createElement("a",{style:f,href:"https://www.bates.edu/catalog/?s=current&a=renderDept&d=GEC#C084"},"Learning and Teaching")," General Education Concentration.")),o.a.createElement("div",{className:"about-box"},o.a.createElement("h2",{style:h},"Pottery"),o.a.createElement("p",{style:E},"Pottery is one of my favorite hobbies. I've done it on and off since I was young. Not only is it relaxing and fun to do, it also allows me to express myself and share my final products with my family and friends. Pottery is a challenging craft and there's always more to learn, and it's more rewarding the more you do it. If you're in or around Burlington, check out ",o.a.createElement("a",{style:f,href:"https://www.burlingtoncityarts.org/"},"Burlington City Arts"),", where I've done most of my pottery."),o.a.createElement("div",{className:"image-box"},o.a.createElement("img",{src:C.a,alt:"a bowl",style:d}),o.a.createElement("img",{src:I.a,alt:"some cups",style:d})),o.a.createElement("label",{style:E},"Some of my work")),o.a.createElement("div",{className:"about-box"},o.a.createElement("h2",{style:h},"Video Games"),o.a.createElement("p",{style:E},"Like a lot of people my age, especially during this Pandemic, I play a lot of video games. I particularly enjoy competitive multiplayer games that combine skill and execution with strategy and planning. They're also just a great way to spend time with friends doing something fun. My favorite game right now is ",o.a.createElement("a",{style:f,href:"https://en.wikipedia.org/wiki/Super_Smash_Bros._Melee"},"Super Smash Bros. Melee"),"."))),o.a.createElement("div",{className:"inner-col"},o.a.createElement("div",{className:"about-box"},o.a.createElement("h2",{style:h},"Biking"),o.a.createElement("p",{style:E},"While I've always enjoyed biking, I've really started biking a lot more since I bought a used road bike last summer. I used it to commute to Burlington Code Academy from home. For me, it's a great way to get outside and enjoy our beautiful community and get some exercise."),o.a.createElement("div",{className:"image-box"},o.a.createElement("img",{src:N.a,alt:"my bike",style:d}))),o.a.createElement("div",{className:"about-box"},o.a.createElement("h2",{style:h},"Music"),o.a.createElement("p",{style:E},"I love both playing and listening to music. I've been playing music since 2nd grade, and I have played the piano, recorder, clarinet, and euphonium. In college I played in the ",o.a.createElement("a",{style:f,href:"https://www.bates.edu/music/the-brass-ensemble/"},"Bates Brass Ensemble")," (pictured below). Most of my enjoyment comes from playing as part of a group, but I don't know if I'll have any opportunities to continue playing in an ensemble now that I've graduated."),o.a.createElement("div",{className:"image-box"},o.a.createElement("img",{src:T.a,alt:"Bates Brass Ensemble",style:d}))))),o.a.createElement("h3",{id:"jump-0",className:"bb-text",style:f,onClick:this.pageJump},"Back to Top \u2191")))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.ff402a4b.chunk.js.map