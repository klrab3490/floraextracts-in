// images
import bread from './assets/bread.png'
import cake from './assets/cake.png'
import beverages from './assets/fruit&beverages.png'
import hummus from './assets/hummus.png'
import jam from './assets/jam&jellies.png'
import mayonnaise from './assets/mayonnaise.png'
import oil from './assets/oil.png'
import paprika from './assets/paprika.png'
import processedmeat from './assets/processedmeat.png'
import rawmeat from './assets/rawmeat.png'
import sweets from './assets/sweets.png'

export default function Food() {
    const food = [
        {
            id:1,
            name:"Breads",
            microbes:"Bacillus sp | Rhizopus sp | Penicillium sp",
            action:"Combating Oxidative and Microbial Rancidity",
            img:bread
        },{
            id:2,
            name:"Cakes",
            microbes:"Bacillus sp., Rhizopus sp. | Penicillium sp.",
            action:"Combating Oxidative and Microbial Rancidity",
            img:cake
        },{
            id:3,
            name:"Processed Meat",
            microbes:"Yeast,Lactic acid bacteria |Pseudomonas sp., Rhizopus sp. | Aspergillus sp.,Enterococci.",
            action:"Combating Oxidative and Microbial Rancidity",
            img: processedmeat
        },{
            id:4,
            name:"Raw Meat",
            microbes:"Yeast, Coliforms | Pseudomonas sp.,Salmonella sp. | Listeria sp. | Clostridium sp.",
            action:"Enzyme Inhibition | Interfere Cell wall Synthesis",
            img:rawmeat
        },{
            id:5,
            name:"Fruit Juices & Beverages",
            microbes:"Yeast, Lactobacillus sp. | Acetic acid bacteria | Bacillus sp | Aspergillus sp.,& Rhizopus sp.",
            action:"Enzyme Inhibition | Interfere Cell wall Synthesis",
            img: beverages
        },{
            id:5,
            name:"Mayonnaise",
            microbes:"Bacillus sp.,Yeast | Aspergillus sp.,Penicillium sp.",
            action:"Combating Oxidative and Microbial Rancidity",
            img: mayonnaise
        },{
            id:5,
            name:"Hummus",
            microbes:"Bacillus sp., Yeast | Aspergillus sp.,Penicillium sp.| Staphylococcus sp.,Coliform",
            action:"Combating Oxidative and Microbial Rancidity",
            img:hummus
        },{
            id:5,
            name:"Jam & Jellies",
            microbes:"Yeast,Lactobacillus sp. | Penicillium sp.",
            action:"Combating Oxidative and Microbial Rancidity",
            img: jam
        },{
            id:5,
            name:"Frying Oil",
            benefits:"Anti-oxidant, lowers oil consumption, reduces oil cost, creates healthier products, increases productivity",
            action:"Oxidation Inhibition",
            img: oil
        },{
            id:5,
            name:"Sweets",
            microbes:"Yeast, Lactobacillus sp., Penicillium sp.",
            action:"Combating Oxidative and Microbial Rancidity",
            img: sweets
        },{
            id:5,
            name:"Paprika Oleoresin",
            benefits:"Stabiliser",
            action:"Combating Oxidative and Microbial Rancidity",
            img: paprika
        },
        // {
        //     id:1,
        //     name:"Breads",
        //     microbes:"11",
        //     action:"11",
        //     img:'app'
        // },
    ];

    return (
        <div className='grid sm:grid-cols-2 grid-cols-1 py-5'>
            {food.map((data,index) => (
                <div key={index} className='sm:p-5 p-2'>
                    <div className='flex flex-col xl:flex-row border-[2px] border-black h-full p-5 rounded-xl group transition-transform transform xl:hover:scale-105'>
                        <div className='flex justify-center items-center'>
                            <img src={data.img} className='w-[400px] h-[300px] rounded-xl object-cover' />
                        </div>
                        <div className='w-full font-normal text-2xl sm:rpx-4 px-2'>
                            <div className="text-4xl font-bold mb-2 text-center">{data.name}</div>
                            <div className="flex flex-col sm:flow-row"> <span className="font-medium">Targeted Microbes : </span> {data.microbes}</div>
                            <div className="flex flex-col sm:flow-row"> <span className="font-medium">Mechanism Of Actions : </span> {data.action}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}