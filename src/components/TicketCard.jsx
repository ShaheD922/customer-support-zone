const TicketCard = ({ ticket, handleCardClick }) => {
  return (
    <div
      onClick={() => handleCardClick(ticket)}
      className="border-2  border-gray-300  card bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 w-full shadow-md cursor-pointer p-[20px] rounded-3xl"
    >
      <div className="card-body">
        <div className="grid grid-cols-2 items-stretch">
          <h2 className="card-title font-semibold text-gray-600">{ticket.title}</h2> 
        <p
  className={`justify-self-end ${
    ticket.status === "Open" ? "bg-violet-500  font-semibold p-1 rounded-[20px] text-white" : ""
  } ${ticket.status === "In-Progress" ? "bg-indigo-300 font-semibold text-white p-1 rounded-[20px]" : ""}`}
>
  {ticket.status}
</p>
        </div>
        <p className=" font-semibold py-2 text-gray-600">{ticket.description}</p>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <p className=" font-semibold text-gray-800">{ticket.id}</p>
            <p
              className={`${
                ticket.priority === "High" ? "text-red-800 font-bold px-2 " : ""
              } ${ticket.priority === "Medium" ? "text-orange-500 font-bold px-2" : ""} ${
                ticket.priority === "Low" ? "text-green-800 font-bold px-2" : ""
              }`}
            >
              {ticket.priority}
            </p>
          </div>

          <div className="flex gap-4">
            <p className="">{ticket.assignee}</p>
            <p className="flex gap-1 items-center font-semibold text-gray-600">
              📅 {ticket.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

