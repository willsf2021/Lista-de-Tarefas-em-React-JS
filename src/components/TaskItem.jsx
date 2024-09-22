const TaskItem = ({ task, removerTarefa }) => {
  return (
    <div className="task-item">
      <p>
        {task}
      </p>
      <button onClick={() => removerTarefa(task)}>Remover Tarefa</button>
    </div>
  );
};

export default TaskItem;
