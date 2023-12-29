import React from 'react'

const About = () => {
  return (
    <div className="container" class="h-screen p-2.5 flex">
        <div className="person" class="block justify-center p-2.5 h-fit border-4">
            
            <div className="name" class="m-4">
                <h3>Kartik Anand</h3>
            </div>

              <div className="description-role" class="content-center">
                   Hello! I'm a Full-Stack Developer with a passion for building robust and engaging applications. Along with this I also bring a strong foundation of DSA 
            </div>

            <div className="social-links" class="content-center text-center italic">
                links
            </div>
        </div>
    </div>
    
  )
}

export default About