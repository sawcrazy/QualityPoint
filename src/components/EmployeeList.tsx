import { useState } from 'react';
import { Link } from 'react-router-dom';
import employeesData from '../json/employees.json';
import styles from './EmployeeList.module.css';

interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    department: string;
    position: string;
}

const EmployeeList: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const filteredEmployees = employeesData.filter((employee: Employee) =>
        `${employee.lastName} ${employee.firstName} ${employee.middleName}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Поиск сотрудника"
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <table className={styles.table}>
                <thead>
                <tr>
                    <th>Ф.И.О.</th>
                    <th>Департамент</th>
                    <th>Должность</th>
                </tr>
                </thead>
                <tbody>
                {filteredEmployees.map((employee: Employee) => (
                    <tr key={employee.id}>
                        <td>
                            <Link to={`/employee/${employee.id}`} className={styles.link}>
                                {`${employee.lastName} ${employee.firstName} ${employee.middleName}`}
                            </Link>
                        </td>
                        <td>{employee.department}</td>
                        <td>{employee.position}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;

