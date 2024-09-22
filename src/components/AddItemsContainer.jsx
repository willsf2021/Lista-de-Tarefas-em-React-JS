const AddItemsContainer = ({ adicionarTarefa }) => {
  let newTask = "";
  return (
    <div className="add-items-container">
      <input
        type="text"
        onChange={(evt) => {
          newTask = evt.target.value;
        }}
      />
      <button
        onClick={() => {
          if (newTask !== "") {
            adicionarTarefa(newTask);
          }
        }}
      >
        Adicionar
      </button>
    </div>
  );
};

export default AddItemsContainer;
