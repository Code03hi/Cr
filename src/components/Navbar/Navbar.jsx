import './Navbar.css'
import logo from '../../assets/logo.png'
import icon from '../../assets/arrow_icon.png'
import { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurreny} = useContext(CoinContext)

  const currenyHandler = (event) => {
    switch(event.target.value) {
      case "USD": {
        setCurreny({name: "USD",symbol: "$"})
        break
      }
      case "INR": {
        setCurreny({ name: "INR", symbol: "₹" })
        break
      }
      case "EUR": {
        setCurreny({ name: "EUR", symbol: "$" })
        break
      }
      default: {
        setCurreny({ name: "USD", symbol: "$" })
        break
      }
    }
  }

  return (
    <div className='navbar'>
      <Link to={`/`}><img src={logo} className='logo' alt="" /></Link>
        <ul>
        <Link to={`/`}><li>Home</li></Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right'>
            <select onChange={currenyHandler}>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="EUR">EUR</option>
            </select>
            <button>Sign up <img src={icon} alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar
