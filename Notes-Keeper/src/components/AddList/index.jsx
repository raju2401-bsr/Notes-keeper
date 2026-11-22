import NotesItem from '../NotesItem'

const AddList=(props)=>{
    const {filteredNotes, totalnotes, searchinput, editnote, deletenote}=props
    if(totalnotes===0){
        return <p>No Notes Available. Add Your First Note!...</p>
    }
    if(filteredNotes.length===0){
        return <p>No Matching Notes Found/...</p>
    }
    return (
        <ul>
            {filteredNotes.map(each=>(<NotesItem key={each.id} editnote={editnote} deletenote={deletenote} notedetails={each}/>))}
        </ul>
    )
}
export default AddList