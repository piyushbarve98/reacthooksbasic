import React , {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
function Language() {
    const [langArray, setState] = useState([
        {title: 'Javascript', id: 1},
        {title: 'React', id: 2},
        {title: 'Node.js', id: 3},
        {title: 'Bulma', id: 4},
    ])

    const addLang = () => {  
        let input = document.getElementById('langInput');
        setState([...langArray , {title: input.value, id: uuidv4() }]);
        input.value = '';
    }
    
    const removeLang = (id)=>{
        let newArray = langArray.filter(lang=>{
            return lang.id !== id;
        })
        setState(newArray);
    }
  return (
    <div className="langDiv">
        <h1>Lanuguages for this project</h1>
        <ul>
            {langArray.map(lang=>{
                return (<li key={lang.id} onClick={()=>{removeLang(lang.id)}}>{lang.title}</li>);
            })}
        </ul>
        <input type='text' id='langInput'/>
        <button onClick={addLang}>Add Language</button> 
    </div>
  );
}

export default Language;