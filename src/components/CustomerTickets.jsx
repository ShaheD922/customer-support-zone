import TicketCard from "./TicketCard";
const CustomerTickets = ({ ticketss, handleCardClick }) => {
  return (
    <div>
      <p className="  text-2xl md:text-4xl font-bold">Customer Tickets</p>
      <div className=" grid md:grid-cols-2 gap-4 mt-7">
        {ticketss.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;