import React, { useState, useEffect } from 'react'
import ShopItem from '../components/shopitem'
import { useParams, Link } from 'react-router-dom'

export default function SingleProd({ user }) {
    const { itemId }  = useParams()
    const [ item, setItem ] = useState({})

    const getSingleProd = async () => {
        const res = await fetch(`http://127.0.0.1:5000/api/items/${itemId}`)
        const data = await res.json();
        if (data.status === 'ok'){
            setItem(data.item)
        }
    }

    useEffect(()=>{
        getSingleProd()
    }, [])

  return (
    <div>
        <ShopItem item={item} />
    </div>
  )
}