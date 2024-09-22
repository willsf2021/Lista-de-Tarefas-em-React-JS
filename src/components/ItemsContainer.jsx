import TaskItem from "./TaskItem";
const ItemsContainer = ({ taskList, removerTarefa }) => {
  return (
    <div className="items-container">
      {taskList.map((t, index) => (
        <TaskItem
          task={t}
          removerTarefa={removerTarefa}
          key={`task-item ${index}`}
        />
      ))}
    </div>
  );
};

export default ItemsContainer;
