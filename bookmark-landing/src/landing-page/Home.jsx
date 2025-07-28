import React from 'react'
import rightIMG from "../assets/images/illustration-hero.svg"


import "./Home.css"
import Features from '../added-components/features-tab/Features'
import Extensions from '../added-components/extensions-tab/Extensions'
import FAQ from '../added-components/FAQ-tab/FAQ'


const Home = () => {
  return (
    <>
      <div className='home-panel'>

        <div className='top-panel'>

          <div className="leftXright">
            <div className="left">
              <div className="left-header">
                <h4>
                  A Simple Bookmark
                  Manager
                </h4>
              </div>
             
              <div className="left-para">
                <p>
                  A clean and simole interface to organize your favorite
                  websites. Open a new browser tab and see your sites load
                  instantly. Try it for free
                </p>

              </div>
    
              <div className="buttons">
                <button className='getitONchrome'>Get it on Chrome</button>
                <button className='getitONfirefox'>Get it on Firefox</button>
              </div>
            </div>

            <div className="right">
              {/* INSRT IMAGE */}
              <img src={rightIMG} alt="" />
            </div>
          </div>
        </div>

        <div className="features-panel">
          <div className="features-header">
            <h4>Features</h4>
            
          </div>

          <div className="features-paragraph">
            <p>
              Our aim is to make it quick and easy for you to access your
              favorite websites. Your bookmarks sync between your devices
              so you can access them on the go.
            </p>
          </div>

        </div>

        <div className="MUI-tab">
          {/* INSRT MUI */}
          <Features/>
        </div>

        <div className="download-extension-panel">

          <div className="DEP-header">
            <h4>
              Download the extension
            </h4>
            
          </div>

          <div className="DEP-paragraph">
            <p>
              We've got more browsers in the pipeline. Please do let us know if
              you've got a favorite you'd like us to prioritize.
            </p>
          </div>

          <div className="MUI-CARD">
            {/* INSRT MUI */}
            <Extensions/>
          </div>
        </div>

        <div className="FAQ">
          <div className="FAQ-head">
            <h4>
              Frequently Asked Questions
            </h4>

            <div className="FAQ-para">
              <p>
                Here are some of our FAQs. If you have any other questions
                you'd like answered please feel free to email us
              </p>
            </div>

            <div className="MUI-FaAQ">
              {/* INSRT MUI */}

              <FAQ/>
            </div>

           
          </div>
        </div>

        
      </div>

      <div className="fly-banner-panel">
          <div className="banner-top">
            <p>
              35,000+ ALREADY JOINED
            </p>
          </div>

          <div className="banner-follow-up">
            <p>
              Stay up-to-date with what <br />
              we're doing
            </p>
          </div>

          <div className="input-email">
            <input type="email" placeholder='Enter your email address' />

            <button>Contact Us</button>
          </div>
        </div>

    </>
  )
}

export default Home
