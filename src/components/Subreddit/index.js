import './index.css'

import Header from '../Header'
import {v4 as uuidv4} from 'uuid'

import { Component } from 'react'
import SubredditItem from '../SubredditItem'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'



class Subreddit extends Component{

    state = {
        listOfSubreddits: [],
        isLoading: true,
    }

    componentDidMount(){
        this.getSubreddits()
    }
    
    getSubreddits = async() => {

        const options = {
            method: 'GET',
        }
        const data = await fetch('https://www.reddit.com/r/posts.json', options)

        const updatedData = await data.json()
        // console.log(updatedData.data.children)
        const response = updatedData.data.children.map(eachData =>({
            id: uuidv4(),
            selftext: eachData.data.selftext,
            authorFullname: eachData.data.author_fullname,
        }))

        this.setState({
            listOfSubreddits: response,
            isLoading:false,
        })
    }

    render(){
        const {isLoading, listOfSubreddits} = this.state
        return(
            <>
                <Header />
                {
                    isLoading ? <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
                    :
                    <>
                    <h1>subreddits</h1>
                    <ul>
                        {
                            listOfSubreddits.map(eachData => (
                                <SubredditItem key={eachData.id} item={eachData} />
                            ))
                        }
                    </ul>
                    </>
                }
                
            </>
        )
    }
}

export default Subreddit
