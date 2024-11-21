import { useParams } from 'react-router-dom';
import employeesData from '../json/employees.json';
import styles from './EmployeeCard.module.css';
import { Employee } from "../types/employeeTypes";


export const EmployeeCard: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const employee = employeesData.find((emp: Employee) => emp.id === parseInt(id || '', 10));

    if (!employee) {
        return <p>Сотрудник не найден</p>;
    }

    const placeholderPhoto = 'https://via.placeholder.com/150';

    return (
        <div className={styles.container}>
            <img
                src={employee.photo || placeholderPhoto}
                alt="Фото сотрудника"
                className={styles.photo}
            />
            <div className={styles.name}>
                {`${employee.lastName} ${employee.firstName} ${employee.middleName}`}
            </div>
            <div className={styles.info}>
                Дата рождения: {new Date(employee.birthDate).toLocaleDateString()}
            </div>
            <div className={styles.info}>Департамент: {employee.department}</div>
            <div className={styles.info}>Должность: {employee.position}</div>
        </div>
    );
};

