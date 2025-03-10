import Image from "next/image";

type NFTCardProps = {
  name: string;
  image: string;
  price: string;
  owner: string;
};

const NFTCard = ({ name, image, price, owner }: NFTCardProps) => {
  return (
    <div className="rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-lg transition-transform duration-300 hover:scale-105">
      <Image src={image} alt={name} width={300} height={300} className="rounded-lg" />
      <h3 className="mt-4 text-lg font-bold text-white">{name}</h3>
      <p className="text-gray-400">Owned by: {owner}</p>
      <p className="font-semibold text-blue-400">{price}</p>
      <button className="mt-3 w-full rounded-lg bg-blue-600 py-2 text-white transition-all hover:bg-blue-700">
        Buy Now
      </button>
    </div>
  );
};

export default NFTCard;
