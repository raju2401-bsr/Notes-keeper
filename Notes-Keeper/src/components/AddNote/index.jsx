import {useState} from 'react'



const AddNote=(props)=>{
    const {saveNote, cancelform, editingnote}=props
 
    const [title, settitle]=useState(editingnote?editingnote.title:'')
    const [description, setdescription]=useState(editingnote?editingnote.description:'')

    const onsubmit=(event)=>{
        event.preventDefault()
        if(title.trim()===''||description.trim()===''){
            alert("Please enter both title and description")
            return
        }
        saveNote(title.trim(),description.trim())
    }
    return (
        <div>
            <h2>{editingnote?"Edit Note":"Create a Note"}</h2>
            <form onSubmit={onsubmit}>
                <label htmlFor="title">Title</label>
                <input id="title" placeholder="Enter your Title" type="text" value={title} onChange={event=>settitle(event.target.value)}/>
                <label htmlFor="description">Description</label>
                <textarea id="description" placeholder="Enter Your Description" type="text" value={description} onChange={event=>setdescription(event.target.value)}/>
                <div>
                    <button type="submit">{editingnote?"Update Note":"Save Note"}</button>
                    <button type="button" onClick={cancelform}>Cancel</button>
                </div>
            </form>

        </div>
    )
}
export default AddNote