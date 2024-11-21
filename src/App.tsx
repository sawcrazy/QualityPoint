import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {EmployeeList} from './components/EmployeeList';
import {EmployeeCard} from './components/EmployeeCard';

export const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EmployeeList />} />
                <Route path="/employee/:id" element={<EmployeeCard />} />
            </Routes>
        </Router>
    );
};



