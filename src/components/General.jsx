const General = (props) => {
  const {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    address,
    setAddress,
    descrption,
    setDescription,
  } = props;

  return (
    <div id='general-info' className='flex flex-col gap-2 mx-auto w-full p-2'>
      <div className='text-2xl'>Personal</div>
      <div className='name'>
        <label htmlFor='name'></label>
        <input
          value={name}
          onChange={({ target }) => setName(target.value)}
          id='name'
          className='border border-black rounded-md w-full p-1 px-2 text-sm'
          placeholder='Name'
        />
      </div>
      <div className='email'>
        <label htmlFor='email'></label>
        <input
          type='email'
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          id='email'
          className='border border-black rounded-md w-full p-1 text-sm px-2'
          placeholder='Email'
        />
      </div>
      <div className='phone'>
        <label htmlFor='phone'></label>
        <input
          value={phone}
          type='tel'
          onChange={({ target }) => setPhone(target.value)}
          id='phone'
          className='border border-black rounded-md w-full p-1 text-sm px-2'
          placeholder='Phone Number (123-456-7890)'
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
        />
      </div>
      <div className='address'>
        <label htmlFor='address'></label>
        <input
          value={address}
          onChange={({ target }) => setAddress(target.value)}
          id='address'
          className='border border-black rounded-md w-full p-1 text-sm px-2'
          placeholder='Address'
        />
      </div>
      <div className='description'>
        <label htmlFor='description'></label>
        <textarea
          id='description'
          onChange={({ target }) => setDescription(target.value)}
          value={descrption}
          className='border border-black rounded-md w-full p-1 text-sm  px-2 resize-none'
          placeholder='Description'
          rows={3}
        ></textarea>
      </div>
    </div>
  );
};

export default General;
