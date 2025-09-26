const TicketCard = ({ ticket, handleCardClick }) => {
  return (
    <div
      onClick={() => handleCardClick(ticket)}
      className="border-2 border-gray-300  card bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 w-full shadow-sm cursor-pointer p-[20px] rounded-3xl"
    >
      <div className="card-body">
        <div className="grid grid-cols-2 items-stretch">
          <h2 className="card-title">{ticket.title}</h2> 
        <p
  className={`justify-self-end ${
    ticket.status === "Open" ? "bg-violet-500  font-semibold p-1 rounded text-white" : ""
  } ${ticket.status === "In-Progress" ? "bg-indigo-300 font-semibold text-white p-1 rounded-[20px]" : ""}`}
>
  {ticket.status}
</p>
        </div>
        <p>{ticket.description}</p>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <p>{ticket.id}</p>
            <p
              className={`${
                ticket.priority === "High" ? "text-red-600" : ""
              } ${ticket.priority === "Medium" ? "text-yellow-500" : ""} ${
                ticket.priority === "Low" ? "text-green-700" : ""
              }`}
            >
              {ticket.priority}
            </p>
          </div>

          <div className="flex gap-4">
            <p>{ticket.assignee}</p>
            <p className="flex gap-1 items-center">
              📅 {ticket.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

//

