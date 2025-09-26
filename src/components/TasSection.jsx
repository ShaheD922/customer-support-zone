
import TaskCard from "./TaskCard";
const TasSection = ({ taskSection, handleResolveTask }) => {
  return (
    <div>
      <p className="text-2xl md:text-3xl font-bold">Task Status</p>
      <p className="text-gray-400">Select a ticket to add to Task Status</p>
      <div className="grid gap-y-5 md:mt-7">
        {taskSection.map((task) => (
          <TaskCard
            task={task}
            key={task.id}
            handleResolveTask={handleResolveTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TasSection;














// sm