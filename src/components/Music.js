import React from 'react';

function Music() {
    return (
    <div>
        <div className='music'>
            <div className='videos'>
            <h2>Videos</h2>
                <div>
                <h3>Variations on Circular Motion - April 2021</h3>
                <h4>Percussion, Guzheng (4'30")</h4>
                <p>“Variations on Circular Motion” is a piece for percussion and guzheng, 
                    which captures the feeling of dizziness. It is structured as a series of 
                    variations based on different motives from the main section of the piece. 
                    However, unlike a typical presentation, this piece presents the variations 
                    before the listener hears the main theme.</p>
                <br></br>
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/bLg7wZN7yuY" 
                title="Variation on Circular Motion" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
                </iframe>
                </div>

                <br/><br/>
            
                <div>
                <h3>Graceland Too (Cover) - April 2021</h3>
                <p>This is a cover of "Graceland Too" originally written by Phoebe Bridgers that I performed alongside
                    Kyleigh Brisson, Luke Blackmore, and Emma Hamilton.
                </p>
                <br/><br/>
                <iframe width="560" 
                height="315" 
                src="https://www.youtube.com/embed/zGG38aBJOgQ" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
                </iframe>
                </div>

                
                
            </div> 
            <div className='audio'>
            <h2>Audio</h2>

            </div>

        </div>
        
        
        

    </div>

    );

}

export default Music;