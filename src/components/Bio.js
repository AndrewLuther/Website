import pic from '../images/QuidiVidiHeadshot.jpg'
import {Link} from 'react-router-dom'

function Bio() {


    return (
        <div>
        
        <div className = 'bio'>
        
            <div className = 'biotext'>
            <h2>About Me v4</h2>
            <p>I am a music enthusiast and an aspiring software development researcher. I have a passion for both music composition and computer science, 
                and I am particularly interested in the application of computer science for electronic music composition, production, and analysis.</p>
            <p>I graduated with a Bachelor of Music (Honours) in 2021 from Memorial University, where I studied piano under Dr. Kristina Szutor and music composition under Dr. Andrew Staniland and Dr. Clark Ross.  
                You can find some of my music compositions <Link to='/Music' >here</Link>. I performed with the Memorial University Jazz Band and Wind Ensemble under the direction of Dr. Florian Hoefner and Dr. Bill Brennan, respectively.</p>
            <p>I have also been pursuing a Bachelor of Science with a major in Computer Science at Memorial University, and I have been developing my programming and research skills. You can find some of my programming projects <Link to='/Code'>here</Link>. Currently, I am working on a research project with Dr. Antonina Kolokolova, where I am developing code to extract the most meaningful elements from a musical melody to alter its level of difficulty. 
                I am also excited to advance my skills using artificial intelligence and machine learning to solve complex problems of benefit to society. </p>
            <p>When I am not coding or composing, I enjoy hiking, gaming, and listening to music (of course!).</p>
            </div>
            <div className = 'headshot'>
            <img className = 'image' src={pic} align="right" alt="qvheadshot" width={300} height={300}/>
            </div>
        </div>
        <h2>Links</h2>
            <p>
            <a href="https://github.com/AndrewLuther">Github</a>    <a href='https://linkedin.com/in/andrewgluther/'>LinkedIn</a>    <a href='https://www.youtube.com/channel/UC9IHtxObCD8zjsGBcTVUH5g'>YouTube</a>    
            </p>
        </div>
    )
}

export default Bio;