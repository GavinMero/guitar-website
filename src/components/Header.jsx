import { Link } from 'react-router-dom';

function Header() {
  const navStyle = {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#f9f9f9',
  };

  const linkStyle = {
    padding: '0.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
    fontSize: '1rem',
  };
  return (
    <header>
      <h1>Guitar Academy</h1>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/courses" style={linkStyle}>Courses</Link>
        <Link to="/lesson/1" style={linkStyle}>Lesson Viewer</Link>
      </nav>
    </header>
  );
}

export default Header;
