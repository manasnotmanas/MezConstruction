import { useNavigate } from "react-router-dom";

const jobs = [
  "Truck Driver", "Bike Rider", "Helper", "Cleaner", "Store Keeper", "Office Boy",
  "Machine Operator", "Marketing Associate", "Market Manager", "Supervisor",
  "Administrator", "Receptionist", "Accountant/Cashier", "Warehouse Manager",
  "Light Vehicle Driver", "Laboratory Technician"
];

const CareerPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#003049] py-16 px-6">
      <h1 className="text-4xl text-[#fdf0d5] font-bold text-center mb-10">
        Career Opportunities
      </h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {jobs.map((job, index) => (
          <div
            key={index}
            onClick={() => navigate(`/apply/${encodeURIComponent(job)}`)}
            className="cursor-pointer bg-[#780000] text-[#fdf0d5] rounded-2xl p-6 text-center font-semibold text-lg shadow-lg hover:bg-[#c1121f] transition-all duration-300"
          >
            {job}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPage;
