import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [firstNote, setFirstNote] = useState({
    add: false,
    rows: 1,
  });
  // const [rows, setRows] = useState(1);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }

  function handleClick() {
    setFirstNote({
      add: true,
      rows: 3,
    });
  }

  return (
    <div>
      <form className="create-note">
        {firstNote.add ? (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
          />
        ) : null}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={firstNote.rows}
          onChange={handleChange}
          onClick={handleClick}
          value={note.content}
        />
        <Zoom in={firstNote.add}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
