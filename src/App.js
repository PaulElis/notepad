import "./App.css";
import NotepadTitle from "./components/NotepadTitle.jsx";
import CreateNote from "./components/CreateNote.jsx";
import NotesList from "./components/NotesList.jsx";

const App = () => {
  return (
    <div>
      <NotepadTitle />
      <CreateNote />
      <NotesList />
    </div>
  );
};

export default App;
