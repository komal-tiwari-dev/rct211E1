import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoeCard from "./ShoeCard/ShoeCard"
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";
import style from './ShoeCard/shoes.module.css'
const Shoes = () => {
  const dispatch = useDispatch();
  const { shoes } = useSelector((state) => (state));
  console.log(shoes)
  useEffect(() => {
    getShoesRequest(dispatch);
  },[]);
  return <div className={style.mainDiv}>
    {shoes.map((el)=>{
      return(
        <div key={el.id}>
          <ShoeCard el={el}/>
          </div>
      )
    })}
  </div>;
};

export default Shoes;
