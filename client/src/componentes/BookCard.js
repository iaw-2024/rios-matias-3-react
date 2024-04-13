import { FaStar } from 'react-icons/fa'
import "../styles/BookCard.css"

function BookCard(data){
    console.log(data)
    const {name,author, edition, review, reviewCount, stars} = data.data
    return (
        <div className='card'>
            <h2>{name} - {author}</h2>
            <h3> {edition} </h3>
            <p>{review}</p>
            <p>
                {stars} 
                <FaStar 
                    className='rate-star' 
                    color="#FFD300"
                    size={20}/>
                ({reviewCount})
            </p>

        </div>
    );
}

export default BookCard