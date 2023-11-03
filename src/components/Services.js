import React from 'react'
// import { services } from '../data/constants';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { collection, addDoc, query, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { storage, db } from "../firebase";
import styled from 'styled-components';
import { useProductsContext } from '../context/Context';

const Services = () => {
    const [image, setImage] = useState(null);
 const [description, setDescription] = useState('');
 const [images, setImages] = useState([]);
 const {userRole} = useProductsContext();


 useEffect(() => {
    const q = query(collection(db, 'serviceshome'), );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data()}));
      setImages(data);
    });
    return () => unsubscribe();
 }, []);

 const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
 };

 const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
 };

 const handleUpload = async () => {
    const storageRef = ref(storage, `serviceshome/${image.name}`);
    const uploadTask = uploadBytes(storageRef, image);

    await uploadTask;
    const url = await getDownloadURL(storageRef);

    await addDoc(collection(db, 'serviceshome'), {
      name: image.name,
      description: description,
      url: url,
    });
 };

 const handleDelete = async (id) => {
    const storageRef = ref(storage, `serviceshome/${images.find(img => img.id === id).data.name}`);
    await deleteObject(storageRef);
    await deleteDoc(doc(db, 'serviceshome', id));
 };
  return (
    <Wrapper>
        <div className="container">
     <div className="title">
                        <h1>our services</h1>
                            <div className='underline'></div>
                            <p>Elevate Your Events With Our Catering Expertise And Let Us Handle The Flavors.
                                Also, Turn Your Restaurants Dreams Into Reality With Our Consulting Services. 
                                We're Your Partners In Creating Memorable And Thriving Businesses.
                            </p>
                                        { 
                                        userRole && <><input type="file" onChange={handleImageChange} />
                                        <input type="text" onChange={handleDescriptionChange} />
                                        <button onClick={handleUpload}>Upload</button></> 
                                        }
                                <div className="Images" >
                                    {images.map(img => (
                                            <div key={img.id}>
                                              <img src={img.data.url} alt={img.data.name} width='300px' height='270px' />
                                              <div className="description">
                                                    <p>{img.data.description}</p>  
                                                    </div>
                                              {userRole && <button onClick={() => handleDelete(img.id)}>Delete</button>} 
                                            </div>
                                          ))}
                                   
                                </div>
                               
                          
                    </div>
                    <div className="learn">
                        <Link to='/services'> <span className="learn-more">Learn More</span><img width="50" height="50" src="https://img.icons8.com/ios/50/right--v1.png" alt="right--v1"/>  </Link>
                    </div>
                     
                     <hr />
                </div>
                
            </Wrapper>
  )
}


const Wrapper = styled('Services')`

 h1{
        font-size: 2.2rem;
        font-family: 'Cormorant Garamond';
    }

    .underline{
        margin-left: 80px;
    }

.title{
       margin-top: 50px;
    }

    .title > p{
        line-height: 36px;
        margin-top: 10px;
        font-size: 1.3rem;
        font-family: 'Proza Libre';
    }
.Images{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        text-align: center;
        margin-top: 20px;
        flex-wrap: wrap;
          img{
            background-position: center;
            background-repeat: no-repeat;
            object-fit: cover;
            border-radius:10px;
            }
    }

    .description{
        transform: translateY(-64px);
         width: 300px;
         height: 61px;
         background: rgba(0, 0, 0, 0.20);
         backdrop-filter: blur(2px);
         border-radius:10px;
    }

    .description > p{
       line-height: 61px;
       text-align: center;
       color: var(--Neutral, #F5F5DC);
       font-family: 'Cormorant Garamond';
       font-size:23px;

    }
    .learn{
            width: fit-content;
            text-align: center;
            height: 44px;
            margin: auto;

            img{
                transform: translateY(16px);
            }
          }

    .learn-more{
        border-radius: 10px;
        padding: 10px;
        text-transform: uppercase;
        font-weight: 500;
        transition: var(--transition);
        box-shadow: 0 1px 3px rgba(161, 161, 161, 0.2);
        border-color: transparent;
        color: #000;
        font-size: 24px;
        font-weight: 400;
        text-transform: uppercase;
    }

    .learn-more:hover{
        color: var(--clr-primary-1);
        background: #FFCC70;
    }
    
     @media (max-width: 992px) {

      .container{
        text-align: center;
        margin-top: 35px;
      }
      
      .title p{
        padding: 5px;
        font-size: 1.2rem;
      }

      .Images{ 
        display: flex;
        justify-content: space-evenly;
      }
      .underline{
         margin: auto;
      }
}
 @media (min-width: 992px) {

      .container{
       margin-left: 50px;
      }
      .underline{
        margin-left: 60px;
        margin-top: 10px;
      }
}
    `

export default Services
