import React, { useEffect, useState } from 'react';
import './Admin.css';
const Admin = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/v1/product',)
            .then(res => res.json())
            .then(data => setProducts(data.data))           
    }, [])
    return (
        <div className='flex flex-row basis-4'>
            <div className='sidebar'>
               <h3 className='mt-2 text-white text-lg ml-3'>Admin Name</h3>
                <p className='text-white text-lg mt-4 ml-4'>Manage Products</p>
                
            </div>



            <div>
   
            </div>

        </div>
    );
};

export default Admin;