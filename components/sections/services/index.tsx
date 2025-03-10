"use client";

import React from "react";
import Section from "@/components/layout/section";
import Heading from "../../atoms/heading";
import NFTCard from "@/components/sections/services/NFTCard";
import { nfts } from "@/constants";

type Props = {};

const Services = (props: Props) => {
  return (
    <Section id="how-to-use" className="overflow-hidden">
      <div className="container">
        <Heading
          title="Discover & Collect Unique NFTs"
          text="Own a piece of digital history from Doge Town."
        />

        {/* NFT Display Grid */}
        <div className="relative mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {nfts.map((nft) => (
            <NFTCard
              key={nft.id}
              name={nft.name}
              image={nft.image}
              price={nft.price}
              owner={nft.owner}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
