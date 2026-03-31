import { IUser } from '@/model/user.model';
import React from 'react';
import VendorDashboard from './VendorDashboard';

const VendorPage = ({user}:{user:IUser}) => {

    if(!user){
        return (
            <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6'>
                loading....
            </div>
        );
    }
    
    if(user.verificationStatus == 'approved'){
        return (
            <div className="w-full min-h-screen pt-16">
                <VendorDashboard />
            </div>
        )
    }
    
    if(user.verificationStatus == 'pending'){
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6">
                <div className="text-center space-y-6 max-w-md">
                    <div className="relative">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500 mx-auto"></div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold">Verification Pending</h2>
                        <p className="text-gray-300">
                            Your vendor account is currently under review. Our team will verify your application shortly.
                        </p>
                        <div className="pt-4">
                            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                                <p className="text-sm text-yellow-400">
                                    ⏳ Estimated wait time: 24-48 hours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    // Handle rejected or other statuses
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6">
            <div className="text-center space-y-6 max-w-md">
                <div className="text-red-500 text-5xl">⚠️</div>
                <h2 className="text-2xl font-semibold">Verification Failed</h2>
                <p className="text-gray-300">
                    Your vendor application could not be verified. Please contact support for more information.
                </p>
                <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                    Contact Support
                </button>
            </div>
        </div>
    )
};

export default VendorPage;