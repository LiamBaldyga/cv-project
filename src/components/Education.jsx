import { useState } from 'react';

const Education = ({ education, setEducation }) => {
  const [school, setSchool] = useState('');
  const [major, setMajor] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [desc, setDesc] = useState('');
  const [visible, setVisible] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (school && major && start && end) {
      const obj = {
        name: school,
        title: major,
        desc: desc,
        start: start,
        end: end,
      };
      setEducation([...education, obj]);
      setSchool('');
      setMajor('');
      setStart('');
      setEnd('');
      setDesc('');
      setVisible(false);
    }
  };

  if (!visible) {
    return (
      <div className='flex flex-col gap-2 mx-auto w-full p-2'>
        <div className='text-2xl'>Education</div>
        <button onClick={() => setVisible(true)}>Add New</button>
      </div>
    );
  }

  return (
    <form
      id='education'
      className='flex flex-col gap-2 mx-auto w-full p-2'
      onSubmit={onSubmit}
    >
      <div className='text-2xl'>Education</div>
      <div className='school'>
        <label htmlFor='school'></label>
        <input
          id='school'
          value={school}
          onChange={({ target }) => setSchool(target.value)}
          className='border border-black rounded-md w-full p-1 text-sm px-2'
          placeholder='School Name'
        />
      </div>
      <div className='major'>
        <label htmlFor='major'></label>
        <input
          id='major'
          value={major}
          onChange={({ target }) => setMajor(target.value)}
          className='border border-black rounded-md w-full p-1 text-sm px-2'
          placeholder='Area of Study'
        />
      </div>
      <div className='start'>
        <label htmlFor='start'></label>
        <input
          id='start'
          value={start}
          onChange={({ target }) => setStart(target.value)}
          className='border border-black rounded-md w-full p-1 text-sm px-2'
          placeholder='Start Year'
        />
      </div>
      <div className='end'>
        <label htmlFor='end'></label>
        <input
          id='end'
          value={end}
          onChange={({ target }) => setEnd(target.value)}
          className='border border-black rounded-md w-full p-1 text-sm px-2'
          placeholder='End Year'
        />
      </div>
      <div className='desc'>
        <label htmlFor='desc'></label>
        <textarea
          id='desc'
          onChange={({ target }) => setDesc(target.value)}
          value={desc}
          className='border border-black rounded-md w-full p-1 text-sm px-2 resize-none'
          placeholder='Description (Optional)'
          rows={3}
        ></textarea>
      </div>
      <button type='submit'>Add</button>
    </form>
  );
};

export default Education;
