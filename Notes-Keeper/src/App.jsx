import './App.css'
import {IoSearch} from 'react-icons/io5'
import AddNote from './components/AddNote'
import AddList from './components/AddList'
import {useState,useEffect} from 'react'

function App() {
    const [isicon, setisicon]=useState(true)
     const [isSearch, setisSearch] = useState(false)
    const [searchinput, setsearchinput]=useState("")


    const [noteslist, setnoteslist]=useState(()=>{
        const savednotes=localStorage.getItem('noteslist')
        return savednotes? JSON.parse(savednotes):[]
    })


    const [editingnote, seteditingnote]=useState(null)

    const saveNote=(title,description)=>{
        if(editingnote!==null){
            const updaatedlist=noteslist.map(each=>each.id===editingnote.id?{...each, title, description}:each)
        
            setnoteslist(updaatedlist)
            seteditingnote(null)
        }
        else{
            const newnote={
                id: Date.now(),
                title,
                description,
            }
            setnoteslist(prev=>[...prev,newnote])
        }
        setisicon(true)
    }
    const isIconClicked=()=>{
        setisicon(false)
    }

    useEffect(()=>{
        localStorage.setItem('noteslist',JSON.stringify(noteslist))
    },[noteslist])

    const deletenote=id=>{
        const updaatedlist=noteslist.filter(each=>each.id!==id)
        setnoteslist(updaatedlist)
    }

    const editnote=note=>{
        seteditingnote(note)
        setisicon(false)
    }

    const cancelform=()=>{
        setisicon(true)
        seteditingnote(null)
    }
    const filteredNotes=noteslist.filter(each=>each.title.toLowerCase().includes(searchinput.toLowerCase())||each.description.toLowerCase().includes(searchinput.toLowerCase()))
    return (
        <div>
            <img src="https://i.postimg.cc/rpgt9NKy/noteslogo-image.jpg" alt="notes-logo" height="50px"/>
            <h1>Notes Keeper</h1>
            <p>Capture Your Thoughts, Keep Your Memories...</p>
             {isSearch ? (
                <input type="search" placeholder="Search notes by title or description..." value={searchinput} onChange={event => setsearchinput(event.target.value)} />) : (
                <button type="button" onClick={() => setisSearch(true)} >
                    <IoSearch size={25} />
                </button>
            )}
            {isicon?
                    (<div> 
                    <button type="button" onClick={isIconClicked}>+</button>
                    </div>):(<AddNote saveNote={saveNote} cancelform={cancelform} editingnote={editingnote}/>)}
            <AddList filteredNotes={filteredNotes} totalnotes={noteslist.length} searchinput={searchinput} editnote={editnote} deletenote={deletenote}/>
    </div>
)
}

export default App
