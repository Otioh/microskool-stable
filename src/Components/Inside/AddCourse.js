import React, {useState, useContext} from 'react';
import GlobalContext from '../Context/GlobalContext';
import { message } from 'antd';
import axios from 'axios';

function AddMyCourse() {
    const [codeSearch, setcodeSearch] = useState("");
    const { theme, courses, RefreshData, profile } = useContext(GlobalContext);

  return (
      <div><div><input className={`form-control ${theme}`} type='search' value={codeSearch} placeholder='Search Course' onChange={(e) => {
          setcodeSearch(e.target.value)
      }} list='browser' />
          <datalist id='browser'>
              {
                  courses.map((course, key) => {

                      return <option value={course.code} key={key}>


                          {course.title}
                          --

                          {course.department} Department
                          --
                          {course.level} Level


                      </option>
                  })}

          </datalist>

          <button className={`btn btn-${theme}`} onClick={() => {

              axios.get("https://microskool.com/api/server/addcourse.php?matric=" + profile.code + "&&code=" + codeSearch).then((response) => {
                  message.info(response.data);
                  RefreshData();
                  setcodeSearch("");
              })
          
          }}>Add Course</button>

      </div></div>
  )
}

export default AddMyCourse;