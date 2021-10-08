
import './index.css'


const SubredditItem = (props) => {

    const {item} = props
    const {selftext, authorFullname} = item
    console.log(selftext, authorFullname)

    return (

        <li className="item">
            <h1>{selftext}</h1>
            <p>{authorFullname}</p>
        </li>
    )


}

export default SubredditItem