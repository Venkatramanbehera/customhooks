import React from 'react'

const Input = () => {
    const [value, setValue] = React.useState('');
    const [list, setList] = React.useState([]);
    const [isPending, startTransition] = React.useTransition();
    const handleChange = (e) => {
        setValue(e.target.value);
        startTransition(() => {
            const result = [];
            for (let i = 0; i < 2000; i++){
                result.push(e.target.value);
            }
            setList(result);
        })
    }
  return (
      <div>
          <input type={'text'} onChange={handleChange} value={value} /> 
              {
                 isPending ? "Loading" : list.map((res, index) => {
                      return (<h3 key={index}>{ res}</h3>)
                  })
              }
    </div>
  )
}

export default Input