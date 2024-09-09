import { useEffect, useState } from "react";
import './home.css';

export default function Home() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] =useState(null)

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
       try{
        setLoading(true)
        const dummy = await fetch('http://universities.hipolabs.com/search?country=United+States')
            .then(res => res.json())
        console.log(dummy)
        setData(dummy)
        setLoading(false)
       }
       catch(error){
       setError(error)
       }
    }

    if(loading) return <div className="hh"> <div className="loading"></div> </div>
    if(error) return <div > {error} </div>

    return (
        
        <div>

            
            {

             
                    data.map((prod) => (
                        <div style={{ border: '1px solid black' }} key={(prod.id)}>
                            <span>
                                {prod?.name}
                            </span>
                            <p> {prod?.country}</p>
                            <p> {prod?.domains}</p>
                            <p> {prod?.web_pages}</p>
                            <p> {prod?.alpha_two_code}</p>
                        </div>
                    ))
                

            }
            <div className="hh">
           
            </div>
        </div>
    );
}