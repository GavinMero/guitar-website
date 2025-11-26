import { Link } from 'react-router-dom';

function Header() {

  const headerStyle = {
    width: '100vw',
    // display: 'flex',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    padding: '1rem 0',
    borderBottom: '1px solid black',
    backgroundColor: 'rgba(191, 200, 191, 1)'
  };

  const containerStyle = {
    width: '75%',
    margin: '0 auto',
    // marginTop: '200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0',
    backgroundColor: 'rgba(191, 200, 191, 1)'
  }

  const navStyle = {
    display: 'flex',
    width: '60%',
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
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1>Guitar Academy</h1>
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/courses" style={linkStyle}>Courses</Link>
          <Link to="/lesson/1" style={linkStyle}>Lesson Viewer</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
