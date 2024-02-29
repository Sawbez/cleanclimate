"use client"
import React, { ReactNode, useState } from 'react';
import Image from 'next/image';

interface FAQProps {
  question: string;
  href?: string;
  children: ReactNode;
}

const FAQComponent: React.FC<FAQProps> = (props) => {

  const { question, href, children} = props;
  const [isShown, setIsShown] = useState(false);

  return (
    <div className='bg-neutral-900 p-5 mb-5 flex-grow rounded-md'>

      <div>
        <button onClick={()=>{setIsShown(!isShown)}}>
          <p className='inline-block mr-2 font-bold'>{question}</p>

          <Image 
            src="/down-arrow.svg"
            alt="Description of image"
            width={20}
            height={20}
            
            className={`inline ${isShown ? "transition-all" : "-rotate-90 transition-all"}`}
            >
          </Image>
          
        </button>
      </div>
      
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isShown ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        
        <div className="overflow-hidden">
          {children}
          {href && <Image src={href} width={100} height={100} alt='optional picture'></Image>}
        </div>

      </div>

    </div>
  );
};

export default FAQComponent;