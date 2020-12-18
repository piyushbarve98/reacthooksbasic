import React , {useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddLang from './addLang';
function Language() {
    const [langArray, setState] = useState([
        {title: 'Javascript', id: 1},
        {title: 'React', id: 2},
        {title: 'Node.js', id: 3},
        {title: 'Bulma', id: 4},
    ])

   
    const addLanguage = (input)=>{setState([...langArray, {title: input, id: uuidv4()}]);}
    const removeLang = (id)=>{
        let newArray = langArray.filter(lang=>{
            return lang.id !== id;
        })
        setState(newArray);
    }

    useEffect(() => {
        console.log('change is made',langArray);
    }, [langArray])
  return (
    <div className="langDiv">
        <h1>Lanuguages for this project</h1>
        <ul>
            {langArray.map(lang=>{
                return (<li key={lang.id} onClick={()=>{removeLang(lang.id)}}>{lang.title}</li>);
            })}
        </ul>
      <AddLang addLanguage={addLanguage}/>
    </div>
  );
}

export default Language;