import "./list.css";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const List = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [destination, setDestination] = useState(location.state?.destination ?? "");
  const [departure, setDeparture] = useState(location.state?.departure ?? "");
  const [arrival, setArrival] = useState(location.state?.arrival ?? "");
  const [date, setDate] = useState(location.state?.date ?? [{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options ?? { adult: 1, children: 0, room: 1 });

  const dateRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dateRef.current && !dateRef.current.contains(event.target)) {
      setOpenDate(false);
    }
  };

  useEffect(() => {
    if (openDate) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDate]);

  const handleSearch = () => {

    navigate("/flightoptions");
  }
  

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input 
                placeholder="Enter destination" 
                type="text" 
                value={destination} 
                onChange={(e) => setDestination(e.target.value)} 
              />
            </div>
            <div className="lsItem">
              <label>Departure from:</label>
              <input 
                placeholder="Enter departure city" 
                type="text" 
                value={departure} 
                onChange={(e) => setDeparture(e.target.value)} 
              />
            </div>
            <div className="lsItem">
              <label>Arrival to:</label>
              <input 
                placeholder="Enter arrival city" 
                type="text" 
                value={arrival} 
                onChange={(e) => setArrival(e.target.value)} 
              />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <div ref={dateRef}>
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                </div>
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    value={options.adult}
                    onChange={(e) => setOptions({ ...options, adult: e.target.value })}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    value={options.children}
                    onChange={(e) => setOptions({ ...options, children: e.target.value })}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    value={options.room}
                    onChange={(e) => setOptions({ ...options, room: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
