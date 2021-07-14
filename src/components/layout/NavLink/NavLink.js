import { Link } from 'react-router-dom'

const NavLink = ({ children, to }) => (
    <Link to={to} className="text-base font-medium text-gray-500 hover:text-gray-900">
        {children}
    </Link>
)

export default NavLink