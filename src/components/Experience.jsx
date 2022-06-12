const Experience = ({ name, title, start, end, desc }) => {
  return (
    <div className='grid grid-cols-4 pb-3'>
      <div className='col-span-1'>
        <div className='text-lg'>{name}</div>
        <div className='text-xs'>
          {start} - {end}
        </div>
      </div>
      <div className='col-span-3'>
        <div>{title}</div>
        <div className='text-xs'>{desc}</div>
      </div>
    </div>
  );
};

export default Experience;
