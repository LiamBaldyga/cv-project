import { useState } from 'react';

const Work = ({ work, setWork }) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [visible, setVisible] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (name && title && jobDesc && start && end) {
      const obj = {
        name: name,
        title: title,
        desc: jobDesc,
        start: start,
        end: end,
      };
      setWork([...work, obj]);
      setName('');
      setTitle('');
      setJobDesc('');
      setStart('');
      setEnd('');
      setVisible(false);
    }
  };

  if (!visible) {
    return (
      <div className='flex flex-col gap-2 mx-auto w-full p-2'>
        <div className='text-2xl'>Work</div>
        <button onClick={() => setVisible(true)}>Add New</button>
      </div>
    );
  }

  return (
    <form
      id='work'
      className='flex flex-col gap-2 mx-auto w-full p-2'
      onSubmit={onSubmit}
    >
      <div className='text-2xl'>Work Experience</div>
      <div className='name'>
        <label htmlFor='name'></label>
        <input
          value={name}
          onChange={({ target }) => setName(target.value)}
          id='name'
          className='border border-black rounded-md w-full p-1 text-sm px-2'
          placeholder='Company Name'
        />
      </div>
      <div className='title'>
        <label htmlFor='title'></label>
        <input
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          id='title'
          className='border border-black rounded-md w-full p-1 text-sm px-2'
          placeholder='Position Title'
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
      <div className='jobDesc'>
        <label htmlFor='jobDesc'></label>
        <textarea
          id='jobDesc'
          onChange={({ target }) => setJobDesc(target.value)}
          value={jobDesc}
          className='border border-black rounded-md w-full p-1 text-sm px-2 resize-none'
          placeholder='Description'
          rows={3}
        ></textarea>
      </div>
      <button type='submit'>add</button>
    </form>
  );
};

export default Work;
