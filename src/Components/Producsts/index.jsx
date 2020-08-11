import React from 'react';
import Container from '../Container/Container';
import SmallCard from '../SmallCard';
import "./index.css";

const featured = [
    { img: "/smallCard1.jpg", title: "Tablet Elitebook Revolve 810 G6", stars: new Array(5).fill(1), newCost: "$1,300", oldCost:"$1,400"},
    { img: "/smallCard2.jpg", title: "Tablet Elitebook Revolve 810 G6", stars: new Array(5).fill(1), newCost: "$1,300", oldCost:"$1,400"},
    { img: "/smallCard3.jpg", title: "Tablet Elitebook Revolve 810 G6", stars: new Array(5).fill(1), newCost: "$1,300", oldCost:"$1,400"},
];

const seiling = [
    { img: "/seiling1.jpg", title: "Tablet Elitebook Revolve 810 G6", stars: new Array(5).fill(1), newCost: "$1,300", oldCost:"$1,400"},
    { img: "/seiling2.jpg", title: "Tablet Elitebook Revolve 810 G6", stars: new Array(5).fill(1), newCost: "$1,300", oldCost:"$1,400"},
    { img: "/seiling3.jpg", title: "Tablet Elitebook Revolve 810 G6", stars: new Array(5).fill(1), newCost: "$1,300", oldCost:"$1,400"},
];

const onSale = [
    { img: "/sale1.jpg", title: "Tablet Elitebook Revolve 810 G6", stars: new Array(5).fill(1), newCost: "$1,300", oldCost:"$1,400"},
    { img: "/sale2.jpg", title: "Tablet Elitebook Revolve 810 G6", stars: new Array(5).fill(1), newCost: "$1,300", oldCost:"$1,400"},
    { img: "/sale3.jpg", title: "Tablet Elitebook Revolve 810 G6", stars: new Array(5).fill(1), newCost: "$1,300", oldCost:"$1,400"},
];

function Producrs(){
    return(
        <div className = "products">
            <Container>
                <div className = "products-head">
                    <h1><span className = "yellow-bordered">Featured</span> Products</h1>
                    <h1><span className = "yellow-bordered">Top Seilings</span> Products</h1>
                    <h1><span className = "yellow-bordered">On Sale</span> Products</h1>
                </div>
                <div className = "products-items">
                    <div>
                        {featured.map((f, i) => <SmallCard {...f} key = {i} /> )}
                    </div>
                    <div>
                        {seiling.map((f, i) => <SmallCard {...f} key = {i} /> )}
                    </div>
                    <div>
                        {onSale.map((f, i) => <SmallCard {...f} key = {i} /> )}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Producrs;