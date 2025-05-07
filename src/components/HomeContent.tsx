"use client";

import { useAccount } from "wagmi";
import AirdropForm from "@/components/AirdropForm";

const HomeContent = () => {
  const { isConnected } = useAccount();

  return (
    <div>
      {isConnected ? (
        <div className="flex items-center justify-center p-4 md:p-6 xl:p-8">
          <AirdropForm />
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <h2 className="text-xl font-medium text-zinc-600">
            Please connect a wallet...
          </h2>
        </div>
      )}
    </div>
  );
};

export default HomeContent;
