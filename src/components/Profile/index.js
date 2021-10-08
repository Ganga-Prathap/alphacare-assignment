import './index.css'

import { Component } from 'react'

class Profile extends Component {
    state = {
        username: '',
        gmail:'',
        dateOfBirth: '',
        showUpdatedResponse: false
    }

    usernameRender = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    gmailRender = (event) => {
        this.setState({
            gmail: event.target.value
        })
    }

    dateOfBirthRender = (event) => {
        this.setState({
            dateOfBirth: event.target.value
        })
    }

    updateDetails = async () => {
        // const {username, gmail, dateOfBirth} = this.state

        // const userUpdatedDetails = {
        //     username, gmail, dateOfBirth
        // }

        // const options = {
        //     method: 'GET',
        //     headers: {
        //         "Content-Type": 'application/json',
        //         Accept: 'application/json',
        //         Authorization: 'BEARER TOKEN',
        //     },
        //     body: JSON.stringify(userUpdatedDetails)
        // }

        // const response = await fetch('http://localhost:3000/user-profile', options)
        // if(response.ok === true){
        //     this.setState({
        //         showUpdatedResponse: true
        //     })
        // }

        this.setState({
            showUpdatedResponse: true,
        })


    }

    renderHome = () => {
        const {history} = this.props
        history.push('/')
    }

    render(){
        const {username, gmail, dateOfBirth, showUpdatedResponse} = this.state
        return(
            <div className="user-profile-container">
                <div className="profile-content">
                    <label htmlfor="username" className="label-element">Username</label><br />
                    <input onChange={this.usernameRender} value={username} id="username" type="text" placeholder="username" className="input-element"/><br />
                    <label htmlfor="email" className="label-element">Email</label><br />
                    <input onChange={this.gmailRender} value={gmail} id="email" type="email" placeholder="email" className="input-element"/> <br/>
                    <lable htmlfor="date" className="label-element">Date of birth</lable><br />
                    <input onChange={this.dateOfBirthRender} value={dateOfBirth} id="date" type="date" className="input-element"/>
                    <div>
                        <button type="button" className="button" onClick={this.updateDetails}>Update</button>
                        <button type="button" className="button" onClick={this.renderHome}>Cancel</button>
                    </div>
                    {showUpdatedResponse && <p>user details has been updated successfully!...</p>}
                </div>
            </div>
        )
    }
}

export default Profile
