import React, { Component } from 'react';
import mike from './images/mike.jpg';
import jack from './images/jackross.jpg';
import brent from './images/brent.jpg'

class Instructors extends Component {
  render() {
    return (
      <div className="Instructors">
      <div className="brent">
        <img className="img-circle" src={brent}></img>
        <div className="brentDescription">
          <h1>Brent Baumgartner</h1>
          <p>
            Brent Baumgartner, a UVA graduate, is the founder of Helme and a software engineer at TwinThread.
            He is fluent in Spanish, so if you're ever going to Spain, you know who to take. He is also engaged,
            so sorry ladies. In his free time, Brent enjoys sitting back and refactoring. One of Brent's all time
            favorite hobbies is sending people links to Google. Brent is the leader of Boat Crew 2, arguably the
            best Boat Crew to grace these lands. Brent went to Thomas Jefferson High School, proving that he went from a mere
            boy genius in high school to a man genius in the real world. Brent also watches The Bachelorette. He is a class act
            and a great developer.
          </p>
        </div>
      </div>
      <div className="mike">
        <img className="img-circle" src={mike}></img>
        <div className="mikeDescription">
          <h1>Mike Ross</h1>
          <p>Mike Ross, a Georgia Tech graduate, is a Solutions Architect for WillowTree, Inc. 
            He also speaks Spanish with Brent and has been endorsed by 21(!!) people for Data Analysis.
            In his free time, he likes
            waking up at ungodly hours, completing tasks that normal humans do not have the heart or mind for,
             lifting very heavy objects, and running many a mile. He
            also has a very good dog, who goes by the name of Viper. There have been rumors
            circulating throughout HackCville that Nojan may be stronger than Mike. Mike also
            thinks there are 2.7 billion apps in the App Store, but that is no testament to his
            intelligence. Out of all the muscles in his body, Mike flexes his brain the most. With a work ethic as strong as his
            bicep, Mike Ross is a standout developer.
          </p>
        </div>
      <div className="jack">
        <img className="img-circle" src={jack}></img>
        <div className="jackDescription">
          <h1>Jack Ross</h1>
          <p>
            Jack Ross, a UVA graduate, is the Co-Founder of Beanstalk and Pickup Guitar Club. He also speaks Spanish. I'm beginning to think that
            fluency in Spanish is a prerequisite for joining the Instructor clique. Jack was one of the first 50,000 people to put an app on the
            App Store. In his free time, he likes taking aparts the gifts his father gives him, starting companies, and mocking his brother, Mike Ross.
            Jack's best features are his voice and his entrepenuership abilities, which were endorsed by 28 people on LinkedIn. No one knows what happens
            in their everyday lives, but it is assumed that Mike and Jack join Brent and his fiance in their Bachelorette escapades. It also assumed that
            Jack was one of Mike's dumbbells in their younger days. Jack is a great developer and great entrepenuer.
          </p>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Instructors;