import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import {ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { collection, addDoc, query, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { storage, db } from "../firebase";
import { Helmet } from 'react-helmet-async';
import { useProductsContext } from '../context/Context';

const Products = () => {
  const [image, setImage] = useState(null);
 const [description, setDescription] = useState('');
 const [images, setImages] = useState([]);
 const {userRole} = useProductsContext();

 useEffect(() => {
    const q = query(collection(db, 'images'), );
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
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytes(storageRef, image);

    await uploadTask;
    const url = await getDownloadURL(storageRef);

    await addDoc(collection(db, 'images'), {
      name: image.name,
      description: description,
      url: url,
    });
 };

 const handleDelete = async (id) => {
    const storageRef = ref(storage, `images/${images.find(img => img.id === id).data.name}`);
    await deleteObject(storageRef);
    await deleteDoc(doc(db, 'images', id));
 };
   return (<>
   <Helmet>
        <title>ViridFood Products</title>
        <meta name='description' content='Purchase Affordable Chicken, Smoked Fish, Meatpie.'/>
        <link rel="canonical" href="/products" />
        </Helmet>
<Wrapper>
            <div className="container">
                    <div className="title">
                        <h1>our Products</h1>
                            <div className='underline'></div>
                            <p>Our Products Are The Embodiment Of Culinary Artistry, Combining Fresh Ingredients
                                To Create Delicious And Visually Stunning Dishes.
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
                <div className="btn"><a href="https://wa.me/+2348137038442">Purchase Now</a></div>  
            </div>
                 
            </Wrapper>
           </> 
  )
}
const Wrapper = styled('Services')`
    h1{
        font-size: 2.2rem;
        font-family: 'Cormorant Garamond';
    }

   

   .title{
       margin-top: 50px;
    }

    .title > p{
        line-height: 36px;
        margin-top: 10px;
        font-size: 1.3rem;
        font-family: Proza Libre;
    }
     
     
    .Images{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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
       color:var(--Neutral, #F5F5DC);
       font-family: 'Cormorant Garamond';
       font-size:23px;

    }

    .btn{
        width: fit-content;
    }
    .btn a{
        color:hsl(22, 28%, 21%);
    }
     @media (max-width: 992px) {
      .container{
        text-align: center;
        margin-bottom: 50px;
      }
      .Images{ 
        display: flex;
        justify-content: space-evenly;
      }
    }
    @media (min-width: 992px) {

      .container{
        margin-top: 30px;
        margin-bottom: 50px;
        padding: 30px;
      }
      
      .underline{
        margin-left: 60px;
        margin-top: 10px;
      }
      .btn{
        width: fit-content;
        position: absolute;
        left: 45%;
    }
}

    `

export default Products
