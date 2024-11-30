import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <p>
        You can go back to the <Link to="/">Home Page</Link>.
      </p>
    </div>
  )
}
export default NotFound