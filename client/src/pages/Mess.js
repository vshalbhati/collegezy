import React from 'react'
import { Link } from 'react-router-dom'


function Mess() {
  return (
    <div>
      <div className="img">
        <img src='assets/1.jpg'></img>
      </div>
      <div className="m">
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
      {/* <div className="navi">
      <Link to="/">
        <button className='hom'>HOME</button>
        </Link>
      </div> */}
      
      <div className="rit">
        <Link to="/join">
        <button className="log">LOG IN</button>
        </Link>
        <Link to="/register">
        <button className="join">JOIN</button>
        </Link>

      </div>
        </nav>
      </div>
     
         <div className="container">
         <h2>REBATE FORM</h2>
        <form className='form' action="">
            <div className="name">
            <input type="text" name="name" required placeholder="Enter Your Name"/>
            </div>
            <div className="no">
            <input placeholder="Enter your roll number" type="number" name="roll_no" id="roll_no" required />
            </div>
            <div className="hos">
            <select name="hostelNo" id="hostelNo">
            <option value="">Select Hostel</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>

        </select>
            </div>
         
        <div className="date">
            <div className="from">
                <p>From</p>
                <input type="date" name="from" id="from"/>
            </div>
            <div className="to">
                <p>To </p>
                <input type="date" name="to" id="to"/>
            </div>
        </div>
        <input type="submit" value="Submit"/>
    </form>
    </div>
    </div>
  )
}

export default Mess