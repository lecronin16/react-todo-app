import React, {useState, useEffect} from 'react'

export default function Shop() {
    const [items, setProducts] = useState([]);

    const getShop = async ()=>{
        const res = await fetch(`http://127.0.0.1:5000/api/items`); 
        const data = await res.json();
        if (data.status === 'ok') {
            setProducts(data.items)
        }}
    

    useEffect(()=>{
        getShop()
    }, [])

    const showShop = () => {
        return products.map(p=><Product key={p.id} addToCart={addToCart} product={p} user={user}/>)
    }

  return (
    <div className='row'> 
        {showShop()}
    </div>)

}



