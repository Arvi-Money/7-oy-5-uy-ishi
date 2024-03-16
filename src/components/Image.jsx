import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from 'react';

function Image() {
    const [img, setImg] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        fetch("https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw1yjVnHHdxvGxNQYjucRMcG&ust=1710564406997000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMjQ1ZK79YQDFQAAAAAdAAAAABAE")
                .then(res => res.blob())
                .then(data => {
                    setImg(URL.createObjectURL(data))
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    setLoading(false)
                })
    }, [])
  return (
    <div>
        {
            loading && <Skeleton width={300} height={300}></Skeleton>
        }
        {
            !loading && <img src={img} width={300} height={300}/>
        }
    </div>
  )
}

export default Image