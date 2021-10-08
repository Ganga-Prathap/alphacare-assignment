import './index.css'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
const Header = (props) => {

    const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
    
    const renderProfile = () => {
        const {history} = props
        history.push('/user-profile')
    } 

return(
    <div className="header-container">
        <h1 className="header-heading">Alpha Care</h1>
        <div className="header-right-section">
        <img onClick={renderProfile} src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg" alt="user-icon" className="user-profile-icon" />
        <button type="button" className="logout-button" onClick={onClickLogout}>Logout</button>
        </div>
    </div>
    
)
}

export default withRouter(Header)
