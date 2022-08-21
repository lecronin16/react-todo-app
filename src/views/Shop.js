// import React, {useState, useEffect} from 'react'

// export default function Shop() {
//     const [products, setProducts] = useState([]);

//     const getShop = async ()=>{
//         const res = await fetch(`http://localhost:5000/api/items`); 
//         const data = await res.json();
//         if (data.status === 'ok') {
//             setProducts(data.products)
//         }
//     }

//     useEffect(()=>{
//         getShop()
//     }, [])

//   return (
//     <div className='row'> 
//         {products.map((p, i)=><Shop key={i} product={p}/>)} 
//     </div>)

// }



