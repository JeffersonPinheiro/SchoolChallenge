import React, { useEffect, useState } from 'react';
import api from './axiosConfig';
import './Home.css';

const Home = () => {
    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({ name: '', age: '' });
    const [searchId, setSearchId] = useState('');
    const [searchedStudent, setSearchedStudent] = useState(null);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        const response = await api.get('/Student');
        setStudents(response.data);
    };

    const handleAddStudent = async (e) => {
        e.preventDefault();
        const response = await api.post('/Student', newStudent);
        setStudents([...students, response.data]);
        setNewStudent({ name: '', age: '' });
    };

    const handleUpdateStudent = async (id) => {
        const updatedStudent = { ...newStudent, id };
        await api.put(`/Student/${id}`, updatedStudent);
        fetchStudents();
    };

    const handleDeleteStudent = async (id) => {
        await api.delete(`/Student/${id}`);
        setStudents(students.filter((student) => student.id !== id));
    };

    const handleSearchStudent = async (e) => {
        e.preventDefault();
        try {
            const response = await api.get(`/Student/${searchId}`);
            setSearchedStudent(response.data);
        } catch (error) {
            console.error('Student not found', error);
            setSearchedStudent(null);
        }
    };

    return (
        <div className='container'>
            <h2>Students</h2>
            <form onSubmit={handleAddStudent}>
                <input
                    type="text"
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                    placeholder="Student Name"
                    required
                />
                <input
                    type="number"
                    value={newStudent.age}
                    onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
                    placeholder="Student Age"
                    required
                />
                <button type="submit">Add Student</button>
            </form>
            <form onSubmit={handleSearchStudent}>
                <input
                    type="text"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    placeholder="Search Student by ID"
                    required
                />
                <button type="submit">Search Student</button>
            </form>
            {searchedStudent && (
                <div className="student-found">
                    <h3>Student Found:</h3>
                    <p>ID: {searchedStudent.id}</p>
                    <p>Name: {searchedStudent.nome}</p>
                    <p>Age: {searchedStudent.idade}</p>
                </div>
            )}
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        {student.nome} - {student.idade} years old
                        <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;