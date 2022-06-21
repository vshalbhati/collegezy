import React from 'react'
import { Link } from 'react-router-dom'

function home() {

  return (
    <div>
      <div className="color-overlay">
      <div className="pic">
      <img src='/assets/3.jpg'/>
      </div>
      <div className="vid">
      <video autoPlay loop muted>
        <source src='/assets/vid.mp4' type='video/mp4'/>
      </video>
      </div>
      
      </div>
      
      
      <nav>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M45.63 79.75L52 81.25v58.5C45 143.9 40 151.3 40 160c0 8.375 4.625 15.38 11.12 19.75L35.5 242C33.75 248.9 37.63 256 43.13 256h41.75c5.5 0 9.375-7.125 7.625-13.1L76.88 179.8C83.38 175.4 88 168.4 88 160c0-8.75-5-16.12-12-20.25V87.13L128 99.63l.001 60.37c0 70.75 57.25 128 128 128s127.1-57.25 127.1-128L384 99.62l82.25-19.87c18.25-4.375 18.25-27 0-31.5l-190.4-46c-13-3-26.62-3-39.63 0l-190.6 46C27.5 52.63 27.5 75.38 45.63 79.75zM359.2 312.8l-103.2 103.2l-103.2-103.2c-69.93 22.3-120.8 87.2-120.8 164.5C32 496.5 47.53 512 66.67 512h378.7C464.5 512 480 496.5 480 477.3C480 400 429.1 335.1 359.2 312.8z"/></svg>
        <div className="nam">
        <div className="col1">C</div>
        <div className="col2">o</div>
        <div className="col3">l</div>
        <div className="col4">l</div>
        <div className="col5">e</div>
        <div className="col6">g</div>
        <div className="col7">E</div>
        <div className="col8">z</div>
        <div className="col9">y</div>
      </div>
      <div className="rit">
        <Link to="/join">
        <button className="log">LOG IN</button>
        </Link>
        <Link to="/register">
        <button className="join">JOIN</button>
        </Link>

      </div>
        </nav>
    <div className="Bot">
        <svg id="Bot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M9.375 233.4C3.375 239.4 0 247.5 0 256v128c0 8.5 3.375 16.62 9.375 22.62S23.5 416 32 416h32V224H32C23.5 224 15.38 227.4 9.375 233.4zM464 96H352V32c0-17.62-14.38-32-32-32S288 14.38 288 32v64H176C131.8 96 96 131.8 96 176V448c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V176C544 131.8 508.3 96 464 96zM256 416H192v-32h64V416zM224 296C201.9 296 184 278.1 184 256S201.9 216 224 216S264 233.9 264 256S246.1 296 224 296zM352 416H288v-32h64V416zM448 416h-64v-32h64V416zM416 296c-22.12 0-40-17.88-40-40S393.9 216 416 216S456 233.9 456 256S438.1 296 416 296zM630.6 233.4C624.6 227.4 616.5 224 608 224h-32v192h32c8.5 0 16.62-3.375 22.62-9.375S640 392.5 640 384V256C640 247.5 636.6 239.4 630.6 233.4z"/></svg>
    </div>


    <div className="g">
    <img src='/assets/2.jpg'/>
      <div className="mess">
        <div className="mes">
<div className="txt">
<h3>Having issues with your hostel mess?</h3>
        <li>File your Mess rebate</li>
        <li>Track your Attendance</li>
        <li>Pay your mess bill</li>
        <Link to="/mess">
        <button >LESGO</button>
        </Link>
</div>
        

        </div>
      </div>
      <div className="cm2"></div>
      <div className="cm">
        <div className="cm1">
        <h3>A student community</h3>
      <li>Share your experiences</li>
      <li>Make posts </li>
      <li>Connect with people and friends</li>
      <li>Do a lot of fun stuff</li>
      <Link to="/stc">
      <button>Take me there!</button>
      </Link>
        </div>
        <div className="cm3"></div>

    </div>
    <div className="fut">
      <div className="wrd">
      <p>ALL RIGHTS RESERVED</p>
      <p>MADE BY D U D E C R E W</p>
      </div>
      <div className="con">
      <p>CONNECT WITH US</p>
      <div className="lnk">
      <p>instagram</p>
      <p>|</p>
      <p>facebook</p>
      <p>|</p>
      <p>twitter</p>
      <p>|</p>
      <p>linkedIn</p>
      </div>
     


      </div>
    
    </div>
    </div>
    
        
    </div>
  )
}

export default home