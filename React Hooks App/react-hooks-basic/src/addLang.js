import React  from 'react';

function AddLang({addLanguage}){
    const addFunc = (e)=>{
        e.preventDefault();
        let input = document.getElementById('langInput');
        addLanguage(input.value);
        input.value = '';
    }
    return(
        <form onSubmit={addFunc}>
        <input type='text' id='langInput' required/>
        <input type='submit' value='Add Language' />
        </form>
    )
}
export default AddLang;