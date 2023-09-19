"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const Verify = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const router = useRouter();

  const handleVerification = () => {
    if (verificationCode === '12345') {
        router.push('/signup');
        toast.success("Success👏, register now")
    } else {
      toast.error("Unrecognised Admission number. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center">
    <div className={`mx-auto w-full max-w-lg bg-gray-200/50 rounded-xl p-10`}>
         <div className="space-y-5">
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[60px]">
                        <img src="/favicon.ico" alt="Logo" />
                    </span>
                </div>
                <h2 className="text-center text-3xl font-bold leading-tight text-white">
                        V E R I F I C A T I O N
                </h2>
                <p className="mt-10 text-center text-base text-black">
                        Verify Admission:
                </p>
                <div className="mt-3">
                    <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}                                        
                        placeholder="Enter your Admission Number:"
                        required
                    />
                 </div>
                </div>
            <div>
                <button
                    className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-primary px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-primary/80"
                    onClick={handleVerification}
                    >
                    Verify
                </button>
            </div>
          </div>
        </div>
  );
}


export default Verify;