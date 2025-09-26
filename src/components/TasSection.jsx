
import TaskCard from "./TaskCard";
const TasSection = ({ taskSection, handleResolveTask }) => {
  return (
    <div>
      <p className="text-2xl md:text-4xl font-bold">Task Status</p>
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