import React from 'react';
import { Link } from 'react-router-dom';

export default function ShopItem({ item }){
    return (
        <div className="card" style={{width: "18rem"}}>
            <ul className="list-group list-group-flush">

                <li className="list-group item">
                    <Link to={`/shop/${item.id}`}> 
                        <img src={ item.img_url } className="card-img-top" alt=''/>
                            <div className="card-body">
                                <h5 className="card-title">{ item.title }</h5>
                                <p className="card-text">{ item.price }</p>
                            </div>
                    </Link>
                </li>
                <li className="list-group item">
                    <a href="/" className="btn btn-primary">Add To Cart</a>
                </li>
            </ul>
        </div>
    )}
