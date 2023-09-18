import { useState, useEffect } from "react"

const Expensive = ({posts})=> {
    const [highestPrice, setHighestPrice] = useState(0)
    const [pricePost, setPricePost] = useState(null)
    const prices = []
    
    useEffect(()=> {
        const getExpensive = ()=> {
            posts.forEach(post => {
                if(isNaN(post.price*1) === false){
                    prices.push(post.price*1)
                }
            })
            const bigPrice = prices.sort(compareFN).at(prices.length - 1)
            setHighestPrice(bigPrice)
            setPricePost(posts.find(post => post.price === `${bigPrice}`))
            console.log(setPricePost)
            console.log(pricePost)
            console.log(bigPrice)
        }
        getExpensive()
    }, [posts])

    
    function compareFN(a, b){
        if(a > b){
            return 1;
        }else if(a < b){
            return -1;
        }
        return 0;
    }

    return (
        <div>
            <h1>Most Expensive Item Price : (${ highestPrice })</h1>
            {pricePost ?
            <div>
                <h2>{pricePost.title} | Posted by: {pricePost.author.username}</h2>
                <p>Description: {pricePost.description}</p>
                <p>Location: {pricePost.location}</p>
                <p>{pricePost.price}</p>
            </div>
            : null}
        </div>
    )
    //can't figure out the pricepost issue
}

export default Expensive