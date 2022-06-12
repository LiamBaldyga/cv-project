import Experience from './Experience';

const Preview = ({
  education,
  work,
  name,
  email,
  phone,
  address,
  description,
}) => {
  if (!name) {
    return (
      <div className='w-1/3 bg-slate-50 m-7 p-3 border border-black rounded-lg'></div>
    );
  }

  return (
    <div className='w-1/3 bg-slate-50 m-7 p-3 border border-black rounded-lg'>
      <div className='grid grid-cols-3 w-full border-b-2 border-b-slate-300 p-3 '>
        <div className='text-5xl my-auto w-auto col-span-2'>
          <div className='uppercase'>{name}</div>
          <div className='text-sm'>{description}</div>
        </div>
        <div className='flex flex-col ml-auto col-span-1 text-sm'>
          <div>{email}</div>
          <div>{address}</div>
          <div>{phone}</div>
        </div>
      </div>
      {work.length > 0 && (
        <div className='p-3 border-b-2 border-b-slate-300'>
          <div className='text-2xl'>Work Experience</div>
          {work.map((w) => (
            <Experience
              key={w.name}
              name={w.name}
              title={w.title}
              start={w.start}
              end={w.end}
              desc={w.desc}
            />
          ))}
        </div>
      )}
      {education.length > 0 && (
        <div className='p-3 border-b-slate-300'>
          <div className='text-2xl'>Education</div>
          {education.map((e) => (
            <Experience
              key={e.name}
              name={e.name}
              title={e.title}
              start={e.start}
              end={e.end}
              desc={e.desc}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Preview;
