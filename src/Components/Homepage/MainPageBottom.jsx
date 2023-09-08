import React from "react";
import TvLogo from "../../assets/imgs/tv-img.png";
import GirlImg from "../../assets/imgs/2nd-box.jpg";
import ThreeKid from "../../assets/imgs/kid-3.png";
import watchPic from "../../assets/imgs/watch-every-where.png";
import { Accordion } from "react-bootstrap";
import BackgroundVideo from "../../assets/videos/video-tv.m4v";

// ... your other imports ...

function MainPageBottom() {
  return (
    <div className="bgChanger">
      <div className="sec">
        <div className="container">
          <div className="sec2">
            <div className="box1">
              <h1>Enjoy on your TV</h1>
              <p>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
            <div className="box2">
              <div className="tv-container">
                <img src={TvLogo} alt="tvImage" className="tv-image" />
                <div className="video-wrapper">
                  <video autoPlay loop muted className="background-video">
                    <source src={BackgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="sec2">
            <div className="box2">
              <div className="tv-container">
                <img src={GirlImg} alt="tvImage" className="tv-image" />
              </div>
            </div>
            <div className="box1">
              <h1>Download your shows to watch offline</h1>
              <p>
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>
          <div className="sec2">
            <div className="box1 padd">
              <h1>Watch everywhere</h1>
              <p>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <div className="box2">
              <div className="tv-container">
                <img src={TvLogo} alt="tvImage" className="tv-image" />
                <div className="video-wrapper watch-wrapper">
                  <video autoPlay loop muted className="background-video">
                    <source src={BackgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="sec2">
            <div className="box2">
              <div className="tv-container">
                <img src={ThreeKid} alt="tvImage" className="tv-image" />
              </div>
            </div>
            <div className="box1">
              <h1>Create profiles for kids</h1>
              <p>
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
          </div>
          <div className="accord">
            <div className="DifBox">
              <h1>Frequently Asked Questions</h1>
              <Accordion defaultActiveKey="0" flush className="accordion">
                <Accordion.Item eventKey="0" className="gape">
                  <Accordion.Header className="accordHead">
                    What is Netflix?
                  </Accordion.Header>
                  <Accordion.Body className="bg-dark text-white">
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries, and
                    more on thousands of internet-connected devices. <br /> <br /> You
                    can watch as much as you want, whenever you want without a
                    single commercial – all for one low monthly price. There's
                    always something new to discover and new TV shows and movies
                    are added every week!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="gape">
                  <Accordion.Header>
                    How much does Netflix cost?
                  </Accordion.Header>
                  <Accordion.Body className="bg-dark text-white">
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250 to Rs1,100 a month. No extra costs, no contracts.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="gape">
                  <Accordion.Header>
                    Where can I watch?
                  </Accordion.Header>
                  <Accordion.Body className="bg-dark text-white">
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br /> <br /> You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="gape">
                  <Accordion.Header>
                    How can i cancle ?
                  </Accordion.Header>
                  <Accordion.Body className="bg-dark text-white">
                    Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="gape">
                  <Accordion.Header>
                    What can I watch on Netflix?
                  </Accordion.Header>
                  <Accordion.Body className="bg-dark text-white">
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className="gape">
                  <Accordion.Header>
                    Is Netflix good for kids?
                  </Accordion.Header>
                  <Accordion.Body className="bg-dark text-white">
                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. <br /> <br />Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="secEdit" style={{ marginTop: "50px" }}>
                <div className="emailSec">
                  <p>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </p>
                  <div>
                    <input type="email" placeholder="Email address" />
                    <button>Get Started &rarr; </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageBottom;
