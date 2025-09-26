const TicketCard = ({ ticket, handleCardClick }) => {
  return (
    <div
      onClick={() => handleCardClick(ticket)}
      className="border-2 border-gray-300 card 
      w-full shadow-md cursor-pointer p-4 md:p-6 rounded-2xl md:rounded-3xl"
    >
 <div className="card-body">
 
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
    <h2 className="card-title font-semibold text-gray-800 text-lg md:text-xl">
      {ticket.title}
    </h2>
    <p
      className={`text-sm md:text-base px-3 py-1 rounded-[20px] font-semibold ${
        ticket.status === "Open"
          ? "bg-green-500 text-white"
          : ""
      } ${
        ticket.status === "In-Progress"
          ? "bg-yellow-500 text-white"
          : ""
      }`}
    >
      {ticket.status}
    </p>


  </div>

 
  <p className="font-semibold py-2 text-gray-600 text-sm md:text-base">
    {ticket.description}
  </p>

 
  <div className="flex flex-col md:flex-row md:justify-between gap-2 md:gap-4">
    <div className="flex gap-4">
      <p className="font-semibold text-gray-800">{ticket.id}</p>
      <p
        className={`${
          ticket.priority === "High" ? "text-red-500 font-bold px-2" : ""
        } ${
          ticket.priority === "Medium" ? "text-yellow-400 font-bold px-2" : ""
        } ${
          ticket.priority === "Low" ? "text-green-500 font-bold px-2" : ""
        }`}
      >
        {ticket.priority}
      </p>
    </div>

    <div className="flex flex-col md:flex-row gap-1 md:gap-4">
      <p className="font-bold text-gray-500">{ticket.assignee}</p>
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
