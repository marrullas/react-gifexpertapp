import React, {useState, useEffect} from 'react'

//
import { GifGridItem } from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ({ category}) => {



    const {data:images, loading} = useFetchGifs( category );

    



    //getGifs();


  return (
      <>
    <h3 className="animate__animated  animate__fadeInLeft">{category}</h3>

    {loading && <p>loading</p>}
    <div className="card-grid animate__animated animate__fadeInLeft">
        
        

            {images.map((img) => (
                <GifGridItem 
                key={img.id}
                 {...img} 
                
                />
            ))}
        

    </div>
    </>
  )
}
