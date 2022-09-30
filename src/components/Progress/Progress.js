import React from "react";
import "./Progress.css";

const Progress = () => {
  return (
    <>
      <div className="progress-container">
        <div className="heading1">Progress</div>
        <div className="progress">
          <div className="information">
            <div className="continue">
              <i className="play-icon fa-solid fa-circle-play"></i>
              <span>Continue</span> AWS Activate Credits
            </div>
            <div className="next">
              <i className="play-icon fa-solid fa-circle-play"></i>
              <span>Next</span> GCP Startup Credits
            </div>
          </div>
          <div className="chart">
            <div className="course-chart">
              <div className="course-pie"></div>
              <p>Course Progress</p>
            </div>
            <div className="current-chart">
              <div className="current-pie"></div>
              <p>Milestone Progress</p>
            </div>
          </div>
        </div>
      </div>

      <div className="milestones-container">
        <div className="heading2">Milestones</div>
        <div className="content">
          <div className="milestones-list">
            <div className="milestone">
              Y Combinator Startup School Certification
              <i className="check-icon fa-solid fa-check"></i>
            </div>
            <div className="milestone">
              Greater than 100 followers on LinkedIn Company Page
              <i className="check-icon fa-solid fa-check"></i>
            </div>
            <div className="milestone">
              Greater than 50 followers on Twitter Company Page
              <i className="check-icon fa-solid fa-check"></i>
            </div>
            <div className="milestone">
              AWS Activate Credits
              <i className="next-icon fa-solid fa-angle-right"></i>
            </div>
            <div className="milestone">
              GCP Startup Credits
              <i className="next-icon fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div class="refer-card flip-card" tabIndex="0">
            <img
              className="refer-image"
              src="https://media.istockphoto.com/vectors/refer-a-friend-with-loudspeaker-in-speech-bubble-vector-id1156197725?k=20&m=1156197725&s=612x612&w=0&h=DI6NU9PZqu-TIuJjn8Puzi7MLzkxwLTIgeXaqME_CHg="
              alt="refer a friend"
            />
            <p>
              You will get USD $50 for every referral of a like minded friend
              with entrepreneurial mindset who completes the course fulfilling
              all the necessary milestones. Please email to
              referral@dreadnought.school along with the Name and Email address
              of the friend while keeping them in CC in your email.
            </p>
            <div className="social-menu">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/hrishabh-jain/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="handles-icon fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/hrishabhcodes" target="blank">
                    <i className="handles-icon fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/hrishabh.hj/"
                    rel="noopener noreferrer"
                    target="blank"
                  >
                    <i className="handles-icon fa-brands fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="mailto:hrishabh507@gmail.com"
                  >
                    <i className="handles-icon fa-solid fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
