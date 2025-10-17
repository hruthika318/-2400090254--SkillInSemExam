import "./App.css";

// Welcome component receives name as prop
function Welcome({ name }) {
  return <div className="greeting">Welcome, {name}!</div>;
}

// Sidebar component
function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Dashboard</h3>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Courses</li>
        <li>Grades</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

// Main content component
function MainContent() {
  const students = ["Deepak", "Hruthika", "Aarav", "Sneha"]; // dynamic names

  return (
    <div className="main">
      {students.map((student, index) => (
        <Welcome key={index} name={student} />
      ))}
    </div>
  );
}

// App component
function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
