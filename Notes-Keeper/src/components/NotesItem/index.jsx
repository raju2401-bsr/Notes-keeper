const NotesItem=(props)=>{
    const {editnote, deletenote, notedetails}=props
    const {id, title, description}=notedetails

    const onclickedit=()=>{
        editnote(notedetails)
    }
    const onclickdelete=()=>{
        deletenote(id)
    }

    return (
        <li>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <button type="button" onClick={onclickedit}>Edit</button>
                <button type="button" onClick={onclickdelete}>Delete</button>
            </div>
        </li>
    )

}
export default NotesItem