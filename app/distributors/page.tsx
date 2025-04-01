import SecondHero from "@/components/sharedUi/SecondHero";
import React from "react";

// Distributor data
const distributors = [
  {
    id: 1,
    name: "Excel Natural Wellness",
    email: "folakeadelusi.fa@gmail.com",
    location: "Wema, Ojota, Lagos",
    phone: "8024073411",
  },
  {
    id: 2,
    name: "Deborah Herbal Tour",
    email: "Dejuzhealthandwellness@gmail.com",
    location: "114 Igi Olugbin Road Awofodu Bus Stop Bariga Lagos",
    phone: "7082553905",
  },
  {
    id: 3,
    name: "Mrs Ladun",
    email: "everythinglala1@gmail.com",
    location:
      "19 Orimolade Estate, Abba Johnson Akora Villa, Adeniyi Jones, Ikeja.",
    phone: "8091093383",
  },
  {
    id: 4,
    name: "Global New Herbal Life",
    email: "thenewherballife@gmail.com",
    location:
      "Aranse Complex, Ile Oba Roundabout Molipa, Ijebu Ode (Erunwon Ogun State)",
    phone: "8058814775",
  },
];

// Card component to display distributor details
const DistributorCard = ({
  distributor,
}: {
  distributor: (typeof distributors)[0];
}) => {
  return (
    <div className="bg-white p-4 border rounded-lg shadow-md hover:shadow-lg transition-all">
      <h3 className="font-semibold text-xl text-gray-800">
        {distributor.name}
      </h3>
      <p className="text-gray-600">Email: {distributor.email}</p>
      <p className="text-gray-600">Location: {distributor.location}</p>
      <p className="text-gray-600">Phone: {distributor.phone}</p>
    </div>
  );
};

const DistributorListPage = () => {
  return (
    <div className="container space-y-4 ">
      <SecondHero
        title={"Active Distributors"}
        image={"/assets/delivery/delivery.jpg"}
      />
      {/* <h2 className="text-2xl font-bold mb-6 text-center">
        List of Active Distributors
      </h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 p-16 lg:grid-cols-3 gap-6">
        {distributors.map((distributor) => (
          <DistributorCard key={distributor.id} distributor={distributor} />
        ))}
      </div>
    </div>
  );
};

export default DistributorListPage;
