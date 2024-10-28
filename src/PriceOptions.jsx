import PriceOption from "./PriceOption";


const PriceOptions = () => {
    const PriceOptionData = [
        {
          "id": 1,
          "name": "Basic",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 personal training session"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 49.99,
          "features": [
            "Access to gym equipment",
            "Locker room and shower access",
            "3 personal training sessions",
            "Group fitness classes",
            "Free Wi-Fi"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 79.99,
          "features": [
            "24/7 gym access",
            "Locker room with private shower",
            "5 personal training sessions",
            "Unlimited group fitness classes",
            "Free guest passes (3 per month)",
            "Priority equipment booking",
            "Access to sauna and steam room"
          ]
        },
        {
          "id": 4,
          "name": "VIP",
          "price": 109.99,
          "features": [
            "All-inclusive 24/7 gym access",
            "Exclusive VIP locker room and lounge",
            "10 personal training sessions",
            "Customized meal plan",
            "Unlimited guest passes",
            "Access to all amenities (sauna, steam room, pool)",
            "Massage therapy sessions (2 per month)",
            "Priority customer service"
          ]
        }
      ]
    return (
        <div className="m-12">
           <h2 className="text-5xl">Best Prices</h2>
           <div className="grid md:grid-cols-3 gap-6">
           {
          PriceOptionData.map(option => <PriceOption
          key={option.id} option={option}></PriceOption>)
           }
           </div>
          
        </div>
    );
};

export default PriceOptions;