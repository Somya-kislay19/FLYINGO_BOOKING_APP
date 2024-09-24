import React, { useState, useEffect, useRef } from "react";
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"; 
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import SignInRegisterModal from "./SignInRegisterModal"; 

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [modalContent, setModalContent] = useState("login"); 

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  const handleBookFlight = () => {
    navigate("/booking", { state: { destination, date } });
  };

  const dateRef = useRef();
  const optionsRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setOpenDate(false);
      }
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setOpenOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };
const stay=()=>{
  navigate("/location");

}
const flight=()=>{

}
const taxi=()=>{

}
const hotels=()=>{

};

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <button className="btn" onClick={stay}>Stays</button> 
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <button className="btn" onClick={flight}>Flight</button> 
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <button className="btn" onClick={taxi}>Airport Taxis</button> 
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <button className="btn" onClick={hotels}>Hotels</button> 
          </div>
          
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
            Your <span>Journey</span>, Our <span>Passion</span>.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or more with a free new user account
            </p>
           
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                        type="text"
                        placeholder="Choose your flight"
                        className="headerSearchInput"
                        onChange={(e) => setDestination(e.target.value)}
                        list="destinations"
                    />
                    <datalist id="destinations">
                        <option value="Air-India" />
                        <option value="Emirates" />
                        <option value="IndiGo" />
                        <option value="Spicejet" />
                    </datalist>
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <div ref={dateRef}>
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                      minDate={new Date()}
                    />
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options" ref={optionsRef}>
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">{options.adult}</span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">{options.room}</span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
                <button className="headerBtn" onClick={handleBookFlight}>
                  Book Flight
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <SignInRegisterModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Header;
