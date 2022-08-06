import {
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
} from 'wagmi';

import { ethers, BigNumber } from 'ethers';

import ERC721Drop from '../abi/ERC721Drop.json';

export const Collect = () => {
  const pricePerMint = BigNumber.from(
    ethers.utils.parseEther('0.025')
  ).toString();
  const { config, error } = usePrepareContractWrite({
    addressOrName:
      '0x63d46079D920E5dd1f0A38190764Aa1845DC4Bc6',
    contractInterface: ERC721Drop,
    functionName: 'purchase',
    args: ['1'],
    overrides: {
      value: pricePerMint,
    },
  });

  const { write } = useContractWrite(config);

  return (
    <div className='mt-4 text-right'>
      {/* <button
        onClick={() => write?.()}
        // className='hover:text-[#808080]'
      >
        Collect an edition
        
      </button> */}
      <h1>Minting complete</h1>
      <p className='mt-1 font-light text-[#808080] leading-5'>
        NFTs may be available on the{' '}
        <a className='underline' href='https://zora.co/collections/0x63d46079d920e5dd1f0a38190764aa1845dc4bc6'>
          secondary market
        </a>
      </p>
    </div>
  );
};
