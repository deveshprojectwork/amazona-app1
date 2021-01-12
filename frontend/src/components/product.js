import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import {connect} from "react-redux"

var obAddress = [
  {name:"Devesh Srivastava"},
  {add1: "E-410"},
  {city: "Gurgaon"}
]

function Product(props) {
  const { product } = props;
  // console.log("Product props", props)
  return (
    <div key={product._id} className="card">
      <a href={`/product/${product._id}`} >
        <img className="medium" 
        src={product.image} alt={product.name} />
      </a>
      <button onClick= {()=> props.getProfileName(obAddress)}>Show NN</button>
      
      <div className="card-body">
        <a href={`/product/${product._id}`} >
          <h2>{product.name}</h2>
          <h2>{props.myname}</h2>
          <h2>{props.myaddress}</h2>
          {console.log(props)}
        </a>
        
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="row">
          <div className="price">${product.price}</div>
           
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  // ({}) because we are passing as object
  myname:state.cname,
  myaddress:state.address
})

const mapDispatchToProps = dispatch =>({
  getProfileName : obAddress => {
    dispatch({type:"DIPLAY_ADDRESS", value:obAddress})
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Product)
 