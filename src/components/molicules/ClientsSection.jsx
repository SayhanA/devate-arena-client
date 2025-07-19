import SectionDescripton from "../atoms/SectionDescripton";
import SectionTitle from "../atoms/SectionTitle";

const ClientSection = () => {
  // Sample client data - you can replace with real client images
  const clients = {
    row1: [
      {
        id: 1,
        name: "John Smith",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 2,
        name: "Sarah Johnson",
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 3,
        name: "Mike Davis",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 4,
        name: "Emily Wilson",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 5,
        name: "David Brown",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 6,
        name: "Lisa Garcia",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 7,
        name: "James Miller",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 8,
        name: "Anna Taylor",
        image:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 100,
        name: "John Smith",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 200,
        name: "Sarah Johnson",
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 300,
        name: "Mike Davis",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 40,
        name: "Emily Wilson",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 50,
        name: "David Brown",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 60,
        name: "Lisa Garcia",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 70,
        name: "James Miller",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 80,
        name: "Anna Taylor",
        image:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop&crop=face",
      },
    ],
    row2: [
      {
        id: 900,
        name: "Robert Anderson",
        image:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 10,
        name: "Jennifer Lee",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 11,
        name: "Chris Wilson",
        image:
          "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 12,
        name: "Maria Rodriguez",
        image:
          "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 13,
        name: "Kevin Thompson",
        image:
          "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 90023,
        name: "Robert Anderson",
        image:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 1032,
        name: "Jennifer Lee",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 1132,
        name: "Chris Wilson",
        image:
          "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 1232,
        name: "Maria Rodriguez",
        image:
          "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 1332,
        name: "Kevin Thompson",
        image:
          "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 1432,
        name: "Rachel Green",
        image:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 1532,
        name: "Daniel White",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 1632,
        name: "Sophie Clark",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 900,
        name: "Robert Anderson",
        image:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 106,
        name: "Jennifer Lee",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 116,
        name: "Chris Wilson",
        image:
          "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 126,
        name: "Maria Rodriguez",
        image:
          "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 136,
        name: "Kevin Thompson",
        image:
          "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 146,
        name: "Rachel Green",
        image:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 156,
        name: "Daniel White",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 166,
        name: "Sophie Clark",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      },
    ],
    row3: [
      {
        id: 17,
        name: "Alex Johnson",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 18,
        name: "Emma Davis",
        image:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 19,
        name: "Ryan Martinez",
        image:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 20,
        name: "Olivia Brown",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 21,
        name: "Tyler Wilson",
        image:
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 22,
        name: "Grace Taylor",
        image:
          "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 23,
        name: "Nathan Lee",
        image:
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 24,
        name: "Chloe Anderson",
        image:
          "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 177,
        name: "Alex Johnson",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 187,
        name: "Emma Davis",
        image:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 197,
        name: "Ryan Martinez",
        image:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 207,
        name: "Olivia Brown",
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 217,
        name: "Tyler Wilson",
        image:
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 227,
        name: "Grace Taylor",
        image:
          "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 237,
        name: "Nathan Lee",
        image:
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop&crop=face",
      },
      {
        id: 247,
        name: "Chloe Anderson",
        image:
          "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=150&h=150&fit=crop&crop=face",
      },
    ],
  };

  const duplicatedRow1 = [...clients.row1, ...clients.row1];
  const duplicatedRow2 = [...clients.row2, ...clients.row2];
  const duplicatedRow3 = [...clients.row3, ...clients.row3];

  return (
    <section className="bg-background/0 overflow-hidden py-16">
      <div className="mb-12 text-center">
        <SectionTitle>Our Happy Clients</SectionTitle>
        <SectionDescripton className="mt-5">
          Join thousands of satisfied customers who trust RentCar for their
          transportation needs. From business professionals to families, we
          serve everyone with excellence.
        </SectionDescripton>
      </div>

      <div className="mt-10 space-y-2">
        {/* Row 1 */}
        <div className="scroller relative">
          <div className="scroller_inner flex w-screen space-x-6">
            {duplicatedRow1.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="group flex-shrink-0 cursor-pointer"
              >
                <div className="relative opacity-40 hover:opacity-100">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg transition-transform duration-300 group-hover:scale-110 dark:border-gray-700"
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <p className="mt-2 text-center text-sm font-medium text-gray-700 opacity-40 transition-opacity duration-300 group-hover:opacity-100 dark:text-gray-300">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="scroller-2 relative">
          <div className="scroller_inner-2 flex w-screen space-x-6">
            {duplicatedRow2.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="group flex-shrink-0 cursor-pointer"
              >
                <div className="relative opacity-40 hover:opacity-100">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg transition-transform duration-300 group-hover:scale-110 dark:border-gray-700"
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <p className="mt-2 text-center text-sm font-medium text-gray-700 opacity-40 transition-opacity duration-300 group-hover:opacity-100 dark:text-gray-300">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="scroller relative">
          <div className="scroller_inner flex w-screen space-x-6">
            {duplicatedRow3.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="group flex-shrink-0 cursor-pointer"
              >
                <div className="relative opacity-40 hover:opacity-100">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg transition-transform duration-300 group-hover:scale-110 dark:border-gray-700"
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <p className="mt-2 text-center text-sm font-medium text-gray-700 opacity-40 transition-opacity duration-300 group-hover:opacity-100 dark:text-gray-300">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
