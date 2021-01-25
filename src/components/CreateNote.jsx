const CreateNote = () => {
  return (
    <>
      <div>My Notes</div>
      <div style={{ display: "flex", flexDirection: "column", width: 280 }}>
        <input type="text" placeholder="Enter note title..." />
        <textarea name="" id="" cols="30" rows="10" />
        <button>Add</button>
      </div>
    </>
  );
};

export default CreateNote;
