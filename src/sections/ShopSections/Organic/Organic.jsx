import ProductList from "../../../components/ProductList";

const organicItems = [
    {
        id: 1,
        title: "Health Mixes",
        items: [
            "Nutri Mix",
            "Hot Chocolate Mix",
            "Chocolate Health Mix Powder",
        ].sort(),
        image: "",
    },
    {
        id: 2,
        title: "Spreads",
        items: [
            "Peanut Butter",
            "Choco Peanut Butter",
            "Hazelnut Peanut Choco Spread",
            "Hazelnut Choco Spread",
        ].sort(),
        image: "",
    },
    {
        id: 3,
        title: "Instant Dosa Mix",
        items: [
            "Instant Pearl Dosa Mix",
            "Instant Proso Dosa Mix",
            "Instant Kodo Dosa Mix",
        ].sort(),
        image: "",
    },
    {
        id: 4,
        title: "Puttu Podi",
        items: [
            "Corn Puttu Podi",
            "Rice Puttu Podi",
            "Oats Puttu Podi",
            "Wheat Puttu Podi",
        ].sort(),
        image: "",
    },
    {
        id: 5,
        title: "Masala Powders",
        items: [
            "Sambar",
            "Garam Masala",
            "Rasam Powder",
            "Chammanthi Podi",
            "Chicken Masala",
            "Meat Masala",
            "Fish Masala",
            "Egg Masala",
            "Vegetable Masala",
            "Fish Fry Masala",
        ].sort(),
        image: "",
    },
    {
        id: 6,
        title: "Millet Steamed Puttu Powder",
        items: [
            "Barnyard Puttu Podi",
            "Foxtail Puttu Podi",
            "Jowar Puttu Podi",
            "Kodo Puttu Podi",
            "Little Millet Puttu Podi",
            "Ragi Puttu Podi",
            "Pearl Puttu Podi",
            "Proso Puttu Podi",
        ].sort(),
        image: "",
    },
    {
        id: 7,
        title: "Spice Powders",
        items: [
            "Chilli Powder",
            "Kashmiri Chilli",
            "Turmeric Powder",
            "Coriander Powder",
            "Pepper Powder",
            "Crushed Chilli",
            "Crushed Pepper",
        ].sort(),
        image: "",
    },
    {
        id: 8,
        title: "Oils, Honey, Butter",
        items: [
            "Coconut Oil",
            "Peanut Oil",
            "Almond Oil",
            "Gingelly Oil (Sesame Oil)",
            "Virgin Coconut Oil",
            "Black Cumin Oil",
            "Olive Oil",
            "Cow Ghee",
            "Honey",
            "Forest Honey",
            "A2 Ghee",
        ].sort(),
        image: "",
    },
    {
        id: 9,
        title: "Millet Noodles",
        items: [
            "Finger Millet Noodles",
            "Foxtail Millet Noodles",
            "Barnyard Millet Noodles",
            "Little Millet Noodles",
            "Kodo Millet Noodles",
            "Wheat Noodles",
            "Moringa Noodles",
            "Navagrain Millet Noodles",
        ].sort(),
        image: "",
    },
    {
        id: 10,
        title: "Millet Dosa Mix",
        items: [
            "Jowar Dosa Mix",
            "Ragi Dosa Mix",
            "Pearl Dosa Mix",
            "Little Millet Dosa Mix",
            "Foxtail Millet Dosa Mix",
            "Kodo Millet Instant Dosa Mix",
            "Barnyard Millet Dosa Mix",
            "Instant Pearl Dosa Mix",
            "Instant Proso Dosa Mix",
        ].sort(),
        image: "",
    },
    {
        id: 11,
        title: "Baby Products",
        items: [
            "Kannankaya Powder",
            "Kannankaya Slices",
            "Banana Powder",
            "Banana Slices",
            "Nutri Mix",
            "Ragi Powder",
            "Ragi Whole",
            "Palm Sugar Powder",
            "Palm Sugar",
            "Koovapodi",
            "Almond Oil",
            "Virgin Coconut Oil",
        ].sort(),
        image: "",
    },
    {
        id: 12,
        title: "Millet And Millet Products",
        items: [
            "Bajra (Pearl Millet)",
            "Bajra Flour",
            "Foxtail Millet",
            "Foxtail Flour",
            "Barnyard Millet",
            "Ragi Flakes",
            "Pearl Millet Flakes",
            "Bride Groom Flakes",
            "Barnyard Flour",
            "Little Millet",
            "Little Millet Flour",
            "Kodo Millet",
            "Kodo Millet Flour",
            "Foxtail Flakes",
            "Jowar Flakes",
            "Kodo Millet Flakes",
            "Mixed Millet Flour",
            "Proso Millet",
            "Ragi",
            "Jowar",
            "Jowar Powder",
            "Barley Flakes",
            "Barnyard Flakes",
            "Chama Flakes",
        ].sort(),
        image: "",
    },
    {
        id: 13,
        title: "Tea Powder",
        items: [
            "White Tea",
            "Black Rosa Tea",
            "Long Leaf Green Tea",
            "Hibiscus Tea",
            "Kashmiri Kahwa Green Tea",
            "Tulsi Cardamom Green Tea",
            "Lemon Ginger Green Tea",
            "Ayurvedic Functional Tea Slimming",
            "Ayurvedic Functional Tea Detox",
            "Ayurvedic Functional Tea Diabetes",
            "Ayurvedic Functional Tea Digestion",
            "Ayurvedic Functional Tea Stress Relief",
            "Gold Tea",
            "Classic Tea",
        ].sort(),
        image: "",
    },
    {
        id: 14,
        title: "Cookies And Snacks",
        items: [
            "Multi-Grain Palm Sugar Cookies",
            "Barnyard Palm Sugar Cookies",
            "Baby Mum",
            "Wheat Badam Cookies",
            "Wheat Nature Cookies",
            "Coconut Cookies",
            "Flax Seed Cookies",
            "Foxtail Millet Dates And Almond Cookies",
            "Barnyard Millet Rusk",
            "Foxtail Millet Rusk",
            "Little Millet Rusk",
            "Navagrain Millet Rusk",
            "Finger Peanut Sweet Ball",
            "Almond POP",
            "Little Millet Apple Mum",
            "Foxtail Millet Banana Mum",
            "Little Millet Choco Chip With Oats Cookies",
        ].sort(),
        image: "",
    },
    {
        id: 15,
        title: "Nuts & Dry Fruits",
        items: [
            "Dry Fig",
            "Apricot",
            "Indian Dry Grapes",
            "Black Pearl Wet Dates",
            "Mabroom Wet Dates",
            "Medjool Wet Dates",
            "Jumbo Medjool",
            "Algeria Dates",
            "Mebroom Jumbo",
            "Safawi Jumbo",
            "Sukri",
            "Badam",
            "Organic Almond",
            "Chia Seeds",
            "Pista",
            "Iranian Pista",
            "Walnut",
            "Dry Grapes Golden",
            "Dry Grapes Seedless",
            "Dry Grapes Seedless Imported",
            "Iranian Dates",
            "Sunflower Seeds",
            "Prunes",
            "Cashew Skin",
            "Cashew 180",
            "Raw Peanuts",
            "Hazelnut",
            "Pumpkin Seeds",
            "Flax Seeds",
            "Blueberry",
            "Melon Seeds",
            "Lotus Seeds",
            "Green Raisins",
            "7 Seeds Roast Mix",
        ].sort(),
        image: "",
    },
    {
        id: 16,
        title: "Cereals And Cereal Products",
        items: [
            "Wheat Powder",
            "Wheat Flour Sujatha MP",
            "Wheat Flour Sona Moti",
            "Steamed Rice Puttu Podi",
            "Wheat Flour Bansi Brown",
            "Green Gram Powder",
            "Raagi Puttu Podi",
            "Corn Puttu Podi",
            "Fried Wheat Puttu Podi",
            "Wheat Flakes",
            "Ragi Powder",
            "Multi-Grain Atta",
            "Nutri Mix",
            "Oats Puttu Podi",
            "Rice Powder",
            "Steel Cut Oats",
            "Instant Oats",
            "Wheat Noodles",
            "Rolled Oats",
            "Rawa",
            "Koovapodi",
            "Maize Flour",
            "Matta Rice Bran 80%",
            "Matta Rice Bran 50%",
            "Jaggery Powder",
            "Jaggery Cubes",
            "Brown Rice Flakes",
            "Besan Flour",
        ].sort(),
        image: "",
    },
    {
        id: 17,
        title: "Raw Items Spices, Cereals, Pulses",
        items: [
            "Pappadam",
            "Pink Salt Pouch",
            "Sugar Pouch",
            "Cinnamon",
            "Cardamom",
            "Cloves",
            "Cumin",
            "Fennel",
            "Fenugreek",
            "Mustard",
            "Bayleaf",
            "Nutmeg",
            "Mace",
            "Star Anise",
            "Turmeric",
            "Chilli",
            "Kashmiri Chilli",
            "Coriander",
            "Dry Ginger",
            "Sesame Seeds",
            "Cinnamon Quills",
            "Karimjeerakam",
            "Panamkalkandam",
            "Wheat Organic",
            "Chana Dal",
            "Urad Dal",
            "Green Gram",
            "Toor Dal",
            "Cow Pea",
            "Soya Bean",
            "Basmati Rice",
            "Quinoa White",
            "Idly Rice",
            "Puli (Tamarind)",
            "Kabuli Chana",
            "Kadala",
            "Kudampuli",
            "Cinnamon Powder",
            "Fenugreek Powder",
            "Fennel Powder",
            "Cardamom Powder",
            "Dry Ginger Powder",
            "Peas Dal",
            "Palm Sugar Powder",
            "Kaskas (Poppy Seeds)",
            "Vietnam Cinnamon Quills",
            "Curry Leaves",
            "Ajwain",
            "Maize",
            "Dry Oregano",
        ].sort(),
        image: "",
    },
];

export default function Organic() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            {organicItems.map((item) => (
                <ProductList key={item.id} title={item.title} items={item.items} image={item.image} />
            ))}
        </div>
    );
}
