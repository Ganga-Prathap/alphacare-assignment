import Header from '../Header'

const Home = (props) => {

    const renderSubreddit = () =>{
        const {history} = props
        history.push('/subreddits')
    }

    return (<>
    <Header />
    <div className="home-container">
        <h1>Welcome to Alpha care home</h1>

        <button type="button" onClick={renderSubreddit}>Go to subreddit page</button>
    </div>
    </>
)
    }

export default Home