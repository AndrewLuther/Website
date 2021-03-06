import React from 'react';
import KingDomino from '../audio/Kingdomino.mp3'
import Cave from '../audio/Cave of Mysteries.mp3'
import Boogie from '../audio/Blitzkrieg Boogie.mp3'

function Music() {
    return (
    <div>
        <div className='music'>
            <div className='videos'>
            <h2>Videos</h2>

                <div className = 'musicText'>
                <h3>Getaway - June 2022</h3>
                <p>"Getaway" is a peaceful electronic composition written about a rocky beach in York Harbour. 
                It's about nature, and it's capability to give one an escape from everyday life. This music video features appearances by 
                Bridget Swift and her two dogs, Wally and Olive.
                </p>
                <br/><br/>
                <iframe className = 'videoFrame'
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/1huNw8_9xAA" 
                title="Getaway" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>    
                </iframe>
                </div>

                <br/><br/>

                <div className = 'musicText'>
                <h3>Variations on Circular Motion - March 2021</h3>
                <h4>Percussion, Guzheng (4'30")</h4>
                <p>“Variations on Circular Motion” is a piece for percussion and guzheng, 
                    which captures the feeling of dizziness. It is structured as a series of 
                    variations based on different motives from the main section of the piece. 
                    However, unlike a typical presentation, this piece presents the variations 
                    before the listener hears the main theme.</p>
                <br></br>
                <iframe className = 'videoFrame'
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/bLg7wZN7yuY" 
                title="Variations on Circular Motion" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
                </iframe>
                </div>                
                
            </div> 

            <br></br><br></br>

            <div className='audio'>
            <h2>Audio</h2>
            <div className = 'musicText'>
                <h3>Kingdomino Title Theme - March 2022</h3>
                <p>"Kingdomino Title Theme" was written for a group project
                    with Ayon Debnath, Sahil Mahey, Benjamin Stanley, and Muhammad Bilal Naseer. 
                    Together we designed a digital vesion of the "Kingdomino" board game. 
                    I composed this piece to be used for the project.</p>
            </div>
            <br/>
            <audio controls 
            src={KingDomino}>
                Your browser does not support the audio element.
            </audio>
            <br/><br/>

            <div className = 'musicText'>
                <h3>Cave of Mysteries - August 2021</h3>
                <p>"Cave of Mysteries" was written using Sonic Pi, a code-based music-creation and performance tool. The code can
                    be run in the Sonic Pi software, which uses a Ruby-based coding environment. Find the code <a href="https://github.com/AndrewLuther/Cave-of-Mysteries">here</a>.</p>
            </div>
            <br/>
            <audio controls
            src={Cave}>
                Your browser does not support the audio element.
            </audio>
            <br/><br/>

            <div className = 'musicText'>
                <h3>Blitzkrieg Boogie - February 2020</h3>
                <p>“Blitzkrieg Boogie” is a groove-based electronic composition that was written using Audio Mulch. 
                    It is a fun piece that is meant to make the listener want to dance.</p>
            </div>
            <br/>
            <audio controls
            src={Boogie}>
                Your browser does not support the audio element.
            </audio>
            <br/><br/>

            

            </div>  

            

        </div>
        
        
        

    </div>

    );

}

export default Music;