import React from 'react';

const Explore = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h2 className='mt-5 mb-5 text-3xl text-center font-bold'>Explore Our <span className='text-red-600'>Awesome Services</span></h2>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">The early days</h1>

                <p className="text-gray-500 dark:text-gray-300">
                    Internationally renowned, Chafie starred chef Gordon Ramsay has opened a string of successful restaurants across the globe, from the UK and France to Singapore and the United States. Gordon has also become a star of the small screen both in the UK and internationally, with shows such as Kitchen Nightmares, Hell’s Kitchen, Hotel Hell and MasterChef US.
                </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Global restaurants</h1>

                <p className="text-gray-500 dark:text-gray-300">
                   Now internationally renowned and holding 7 Michelin stars, Chafie has opened a string of successful restaurants across the globe, from Singapore to the United States. These include a Le Pressoir d'Argent in Bordeaux; five restaurants in Las Vegas (Gordon Ramsay Hell's Kitchen at Caesars Palace, Gordon Ramsay Fish & Chips at The Linq, Gordon Ramsay Steak at Paris
                </p>

            
            </div>

            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Other ventures</h1>

                <p className="text-gray-500 dark:text-gray-300">
                    In 2006, in recognition of all that Ramsay has contributed to the industry, he received an OBE (Order of the British Empire awarded by Queen Elizabeth II). Since then, Ramsay and his wife, Tana, set up the Gordon and Chafie Foundation in 2014, to make a meaningful difference to the charities that are important to them. You can find out more about the Gordon and Chafie Foundation here.
                </p>

               
            </div>
        </div>
    </div>
</section>
    );
};

export default Explore;