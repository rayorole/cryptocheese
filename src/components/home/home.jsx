import React from 'react'

export default function Home() {
    return (
        <div>
            <div className="body w-3/4 m-auto">
            <header className="flex pt-4 pb-4">
                <div>
                    <a href="/" className="text-white font-medium font-francois text-4xl">Flagnation</a>
                </div>
                <div className="flex justify-between text-center bg-navbar rounded-xl">
                    <div className="flex font-ropa text-gray-200 p-2">
                        <div className="pl-2 pr-2 bg-active-navbar rounded-md"><a href="/">Home</a></div>
                        <div className="pl-2 pr-2"><a href="/market">Market</a></div>
                        <div className="pl-2 pr-2"><a href="/account">Account</a></div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="w-7 h-7 rounded-md show-more-icon">

                </div>
            </header>
            </div>
        </div>
    )
}
