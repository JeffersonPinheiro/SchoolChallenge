import React from 'react';
import axios from 'axios';

const Dashboard = ({ token }) => {
    const [students, setStudents] = React.useState([]);

    React.useEffect(() => {
        const fetchStudents = async () => {
            const response = await axios.get('https://localhost:7287/Student', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setStudents(response.data);
        };
        fetchStudents();
    }, [token]);

    return (
        <div>
            <h2>Dashboard</h2>
            {/* <ul>
                {students.map((student) => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul> */}
        </div>
    );
};

export default Dashboard;