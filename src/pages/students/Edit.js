import StudentForm from './components/StudentForm';

const Edit = () => {
  const student = {
    name: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '1234567890',
    address: '123 Main Street',
    age: 20,
    gender: 'male',
    typeDocument: 'passport',
    typeSubject: 'machine_learning',
    numberDocument: '328d32099203',
    dateBirth: '2023-05-18'
  };

  return <StudentForm student={student} isEdit />;
};

export default Edit;
