import { useState } from 'react';
import Education from './components/Education.jsx';
import General from './components/General.jsx';
import Preview from './components/Preview.jsx';
import Work from './components/Work.jsx';

function App() {
  const [work, setWork] = useState([]);
  const [education, setEducation] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='App flex flex-wrap justify-center bg-slate-200 h-screen overflow-auto'>
      <div className='w-1/3 bg-slate-50 m-7 p-3 border border-black rounded-lg'>
        <General
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          address={address}
          setAddress={setAddress}
          description={description}
          setDescription={setDescription}
        />
        <Education setEducation={setEducation} education={education} />
        <Work setWork={setWork} work={work} />
      </div>
      <Preview
        education={education}
        work={work}
        name={name}
        email={email}
        phone={phone}
        address={address}
        description={description}
      />
    </div>
  );
}

export default App;

