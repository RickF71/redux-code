import React, {useState} from 'react'; 

function Checkbox(props) { 
  const [checked, setChecked] = useState(false); 
  const checkedText = props.onText; 
  const uncheckedText = props.offText; 
  const togglePreference = props.togglePreference; 
  const favcolor = props.favcolor; 
  const handleChange = () => { 
    setChecked(!checked); togglePreference(favcolor); 
  }; 
  return ( 
    <div>
      <div>
        <input type="checkbox" onChange={handleChange} />
        {checked ? checkedText : uncheckedText}
      </div> 
    </div> 
  ); 
}; 

export {Checkbox};