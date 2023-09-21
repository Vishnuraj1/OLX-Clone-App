import React, { useEffect, useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';

import { useSearch } from '../../store/SearchContext';

import './Post.css';

function Posts() {

  const { firebase } = useContext(FirebaseContext)
  const [Products, setProducts] = useState([])
  const {setPostDetails} =useContext(PostContext)

  const navigate = useNavigate()

  //For Name searching
  const { searchTerm } = useSearch();

  useEffect(() => {

     // Retrieve data from local storage
     const storedData = JSON.parse(localStorage.getItem('Olx-data'));

     // Check if the data exists in local storage
     if (storedData) {
       setProducts(storedData);
     }

    firebase.firestore().collection('olx-Products').get().then((snapshot) => {
      const allPosts = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
    
    setProducts(allPosts);

      // Save the fetched data to local storage
      localStorage.setItem('Olx-data', JSON.stringify(allPosts));
 
    })
  }
 
  ,[ firebase])


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>

        <div className="cards">

          {Products.filter((product)=>{
            if(searchTerm == ""){
            return product;
             }else if(product.Name.toLowerCase().includes(searchTerm.toLowerCase())){
              return product;
             }
          }).map((product,index) => {

       return     <div
       key={index}
              className="card"
              onClick={()=>{
                setPostDetails(product)
                navigate('./view')
              }}
            >
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.Price}</p>
                <span className="kilometer">Category: {product.Category}</span>
                <p className="name">  {product.Name}</p> 
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>

          })

          }

        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
