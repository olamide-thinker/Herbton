import SecondHero from "@/components/sharedUi/SecondHero";
import React from "react";

// Distributor data
const distributors = [
  {
    id: 1,
    name: "Excel Natural Wellness",
    email: "folakeadelusi.fa@gmail.com",
    location: "Oodua Shopping Complex Ojota.",
    phone: "08024073411",
  },
  {
    id: 2,
    name: "Deborah Herbal Tour",
    email: "Dejuzhealthandwellness@gmail.com",
    location: "114, Igi Olugbin Road, Awofodu Bus Stop, Bariga, Lagos",
    phone: "07082553905",
  },
  {
    id: 3,
    name: "Mrs Ladun",
    email: "everythinglala1@gmail.com",
    location:
      "19 Orimolade Estate, Abba Johnson Akora Villa, Adeniyi Jones, Ikeja.",
    phone: "08091093383",
  },
  {
    id: 4,
    name: "Global New Herbal Life",
    email: "thenewherballife@gmail.com",
    location:
      "Aranse Complex, Ile Oba Roundabout Molipa, Ijebu Ode, Ogun State",
    phone: "08058814775",
  },
  {
    id: 5,
    name: "Global New Herbal Life",
    email: "info@globalnewherballife.com",
    location: "229, Herbert Macauley way, Alagomeji, Yaba.",
    phone: "08124831039",
  },
];

// Card component to display distributor details
const DistributorCard = ({
  distributor,
}: {
  distributor: (typeof distributors)[0];
}) => {
  return (
    <div className="p-4 transition-all bg-white border rounded-lg shadow-md hover:shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800">
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
    <div className="space-y-4 ">
      <SecondHero
        title={"Active Distributors"}
        image={"/assets/delivery/delivery.jpg"}
      />
      {/* <h2 className="mb-6 text-2xl font-bold text-center">
        List of Active Distributors
      </h2> */}
      <div className="grid grid-cols-1 gap-6 p-16 sm:grid-cols-2 lg:grid-cols-3">
        {distributors.map((distributor) => (
          <DistributorCard key={distributor.id} distributor={distributor} />
        ))}
      </div>
    </div>
  );
};

export default DistributorListPage;
