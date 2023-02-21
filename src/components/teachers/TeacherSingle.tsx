import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { GET_ALL_TEACHER } from "../../redux/actions/types";
import { TeacherDataType } from "../../utility/types";
import { getAction } from "../../utility/api";

import styles from './TeacherSingle.module.css'

const TeacherSingle = () => {
  const { id } = useParams();
  const { data } = useSelector((state: any) => state.teachersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getAction("teachers", GET_ALL_TEACHER));
  }, [dispatch]);

  const map = data.map((a: TeacherDataType) => {
    console.log();
    if (id === a._id) {
      return (
        <div className={styles.body}>
          <header>
            <div>
              <h1>{a.name}</h1>
              <h2>{a.profession}</h2>
            </div>
          </header>
        </div>
      );
    } else {
      return <div key={a.id}>{a.id}</div>;
    }
  });
  return <div>{map}  </div> 
    //  {/* <div  className={styles.body}>
    //       <header>
    //         <div>
    //           <h1>{'name'}</h1>
    //           <h2>{'a.profession'}</h2>
    //         </div>
    //       </header>
    //     </div>*/

  // }
};

export default TeacherSingle;
