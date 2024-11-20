import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import EmployeeCard from './components/EmployeeCard';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EmployeeList />} />
                <Route path="/employee/:id" element={<EmployeeCard />} />
            </Routes>
        </Router>
    );
};

export default App;


