import snowKing from '../images/big_snow_king.png'
import chord from '../images/chord.png'
import code from '../images/code.png'
import robopet from '../images/RoboPet.png'

function Projects() {
    return(
        <div>
            <div className='projects'>
            <h2 className='projectHeader'>Projects</h2>
                <div className='project'>
                    
                    <div className='projectText'>
                    
                    <h3>Kingdomino (Java)</h3>
                    <h4>April 2022</h4>
                    <p className='projectText'>Kingdomino is a digital version of the board game, developed in Java. 
                    This was a group project with Ayon Debnath, Sahil Mahey, Benjamin Stanley, and Muhammad Bilal Naseer.</p>
                    <a href="https://github.com/AndrewLuther/Kingdomino">Github</a>
                    </div>

                    <div>
                        <img className = 'image' src={snowKing} align="right" alt="qvheadshot" width={300} height={300}/>
                    </div>
                </div>
            <br/>
            <br/>
                <div className='project'>

                    <div className='projectText'>
                    <h3>Chord Progression Generator (Java)</h3>
                    <h4>April 2022</h4>
                    <p>Chord Progression Generator outputs a random list of chords 
                     in any user-defined major or minor scale (e.g. C major).</p>
                    <a href="https://github.com/AndrewLuther/Chord_Progression_Generator">Github</a>
                    </div>

                    <div>
                        <img className = 'image' src={chord} align="right" alt="qvheadshot" width={300} height={300}/>
                    </div>

                </div>
            
            <br/>
            <br/>

                <div className='project'>
                    <div className='projectText'>
                    <h3>Music Chord Generator (Python)</h3>
                    <h4>December 2021</h4>
                    <p>Outputs a complete list of naturally occurring chords in any given major or natural minor scale. 
                    It is based on music theory, and it is a useful tool for music composition.</p>
                    <a href="https://github.com/AndrewLuther/Music-Chord-Generator">Github</a>
                    </div>

                    <div>
                        <img className = 'image' src={code} align="right" alt="qvheadshot" width={300} height={300}/>
                    </div>
                </div>

            
            <br/>
            <br/>

                <div className='project'>
                    <div className='projectText'>
                    <h3>RoboPet (Java)</h3>
                    <h4>November 2021</h4>
                    <p>A virtual pet (inspired by “Tamagotchi”) with GUI.</p>
                    <a href="https://github.com/AndrewLuther/RoboPet">Github</a>
                    </div>

                    <div>
                        <img className = 'image' src={robopet} align="right" alt="qvheadshot" width={300} height={300}/>
                    </div>

                </div>

            
        </div>

        </div>
        
    );

}

export default Projects;