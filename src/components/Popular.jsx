import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom';

function Popular() {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {

        // for our local storage 
        const check = localStorage.getItem('popular');

        if(check){
            setPopular(JSON.parse(check));
        }
        else{
            
            let api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);


            if(api.ok === false){
                api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY2}&number=9`);
            }

            let data = await api.json();

            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data.recipes);
        }


        
    }

  return (
    <div>
        
            
                <Wrapper>
                    <h3>Popular Picks</h3>
                    <Splide options={{
                        perPage: 4,
                        arrows: true,
                        pagination: false,
                        drag: 'free',
                        gap: '2rem',
                    }}>
                    {
                        popular.map((recipe) => {
                            return(
                                <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={'/recipe/' + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt="Image is loading" />
                                    <Gradient />
                                    </Link> 
                                </Card>
                                </SplideSlide>
                            );
                        })
                    }
                    </Splide>
                </Wrapper>
            
       
    </div>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 16rem;
    overflow: hidden;
    border-radius: 1rem;


    position: relative;

    img {
        border-radius: 1rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 12%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 1000;
        font-size: 1.2rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgb(0,0,0,0), rgb(0,0,0,0.8))
`;

export default Popular