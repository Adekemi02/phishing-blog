import React from 'react';
import Image from 'next/image';
import PhishingAlert from './PhishingAlert';



const PhishingBlog: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <PhishingAlert />

            <div className="container mx-auto px-4 py-8">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                        <div className="w-full md:w-1/3 lg:w-1/4">
                            <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                                <Image 
                                    src="/images/phishing-900.jpg" 
                                    alt="Phishing Awareness" 
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 lg:w-3/4 space-y-6">
                            <h1 className="text-2xl font-bold"> WhatsApp Phishing </h1>
                            <p className="text-lg leading-relaxed text-gray-700">
                                In today's digital world, staying connected through platforms like WhatsApp is essential. Unfortunately, cybercriminals have caught on and are now using these very channels to trick unsuspecting individuals into giving up their personal information.
                            </p>

                            <p className="text-lg leading-relaxed text-gray-700">
                                This practice, known as phishing, has become more sophisticated and dangerous. Scammers pose as trusted entities, like your bank, favorite brands, or even friends, in order to steal sensitive information such as passwords, OTPs, and bank details.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-2xl font-semibold mb-4">What is WhatsApp Phishing?</h3>
                        <p className="text-start mx-auto">
                            Phishing is a type of cyber attack where scammers pretend to be a trustworthy source to trick you into sharing sensitive information. On WhatsApp, phishing usually involves urgent or too-good-to-be-true messages.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-2xl font-semibold mb-4">Common Signs</h3>
                        <ul className="list-disc list-inside text-start">
                            <li>Unsolicited messages from unknown contacts</li>
                            <li>Links to external websites</li>
                            <li>Requests for personal information</li>
                            <li>Messages urging immediate action</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-2xl font-semibold mb-4">How to Protect Yourself</h3>
                        <ul className="list-disc list-inside text-start">
                            <li>Don't click on suspicious links</li>
                            <li>Verify the sender</li>
                            <li>Enable Two-Step Verification</li>
                            <li>Educate yourself and loved ones</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-blue-100 rounded-lg p-6 md:p-8 mb-8">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-800">How Phishing Attacks Work</h3>
                            <div className="relative aspect-[5/6] w-full max-w-md mx-auto overflow-hidden rounded-lg shadow-md">
                                <Image 
                                    src="/images/phishing-attack2.png" 
                                    alt="Phishing Attack Diagram"
                                    layout="fill"
                                    objectFit="contain"
                                    className="transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-800">What to Do if You've Been Scammed</h3>
                            <ol className="list-decimal text-start list-inside space-y-3 text-lg text-blue-900">
                                <li className="pl-2">Change your passwords immediately</li>
                                <li className="pl-2">Contact your bank</li>
                                <li className="pl-2">Enable Two-Step Verification</li>
                                <li className="pl-2">Report the scam</li>
                                <li className="pl-2">Monitor your accounts closely</li>
                                <li className="pl-2">Educate others</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <h1 className="text-2xl font-semibold mb-4"> How to prevent Phishing Attack </h1>
                <hr />
                <br />
                <div className="mx-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
                    <div className="text-justify">
                        {/* <h1 className="text-3xl font-bold mb-4">Tip: 1</h1> */}
                        <h2 className="text-2xl font-semibold mb-2">Stop, Look, Think</h2>
                        <p className="mb-4">Did anything look out of the ordinary? Did you recognize the sender&apos;s address? Was it similar but not the same as an official email?</p>
                        {/* <div> */}
                        <Image 
                            src="/images/Stop_look_think.jpg" 
                            alt="Phishing Awareness"
                            width={500}
                            height={600} 
                            // layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 hover:scale-105"
                        />
                        {/* </div> */}

                    </div>

                    <div className="text-justify">
                        {/* <h1 className="text-3xl font-bold mb-4">Tip: #2</h1> */}
                        <h2 className="text-2xl font-semibold mb-2">Do you spot a red flag?</h2>
                        <p className="mb-4">To help protect yourself from phishing attacks, always ensure that any email from an external sender displays a caution message at the top. Do you see this warning banner in your emails?</p>
                        <Image 
                            src="/images/phishing-attacks.jpg" 
                            alt="Caution Banner" 
                            width={300} height={200} 
                            layout="responsive"
                            className="transition-transform duration-300 hover:scale-105" 
                        />
                    </div>

                    <div className="text-justify">
                        {/* <h1 className="text-3xl font-bold mb-4">Tip: #3</h1> */}
                        <h2 className="text-2xl font-semibold mb-2">When in doubt throw it out</h2>
                        <p className="mb-4">
                            If you ever feel that an email seems suspicious, it's always better to be safe. Avoid clicking on any links or sharing personal information, and report it to the relevant authorities or your email provider.
                        </p>
                        <Image 
                            src="/images/safe-lock.png" 
                            alt="Phishing Awareness"
                            width={500}
                            height={600} 
                            // layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>


                <div className="bg-yellow-100 text-justify rounded-lg p-6 mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Educating Our Parents: Why It's So Important</h3>
                    <p className="mb-4 ">
                        Our parents and older relatives may not be as familiar with the latest cyber threats, making them prime targets for phishing scams. It's crucial to educate them about these risks.
                    </p>

                    <ul className="list-disc list-inside">
                        <li>Simplify the explanation</li>
                        <li>Use real-world examples</li>
                        <li>Set up protections for them</li>
                        <li>Be patient</li>
                    </ul>
                </div>

                <div className="text-center">
                    {/* <h3 className="text-2xl font-semibold mb-4">Conclusion: Raising Awareness to Keep Everyone Safe</h3> */}
                    <p className="text-lg text-center">
                        Let's stay vigilant, protect ourselves, and help others avoid these scams. Together, we can make our online space a safer place.
                    </p>

                    <p className="text-xl font-bold mt-4">
                        Stay Safe. Stay Informed. Protect Yourself and Your Loved Ones.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PhishingBlog;