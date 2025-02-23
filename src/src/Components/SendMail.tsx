import { IconBrandGmail, IconBrandWhatsapp } from '@tabler/icons-react';
import React, { useState } from 'react'

const SendMail = () => {
    const [isWhatsapp, setIsWhatsapp] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const toggleForm = () => {
        setIsWhatsapp(!isWhatsapp);
        // Reset form saat toggle
        setUsername('');
        setEmail('');
        setMessage('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isWhatsapp) {

        } else {

        }
    };


    return (
        <>
            <form className="space-y-4 mt-20" onSubmit={handleSubmit}>
                <div className="flex content-start items-start mb-6">
                    <button
                        type="button"
                        onClick={() => setIsWhatsapp(true)}
                        className={`flex-1 py-1 ${isWhatsapp
                            ? 'border-b-2 border-black'
                            : ''
                            }`}
                    >
                        Send Whatsapp
                    </button>
                    <button
                        type="button"
                        onClick={toggleForm}
                        className={`flex-1 py-1 ${!isWhatsapp
                            ? 'border-b-2 border-black'
                            : ''
                            }`}
                    >
                        Send Gmail
                    </button>
                </div>

                {!isWhatsapp && (
                    <input
                        type="Email"
                        placeholder="Email"
                        value={username}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-zinc-900"
                        required
                    />
                )}

                <input
                    type="Your Name"
                    placeholder="Your Name"
                    value={email}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 "
                    required
                />

                <textarea
                    placeholder="Your Message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-zinc-900"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-zinc-950 flex gap-4 text-white py-2 rounded-sm hover:bg-zinc-800 transition-colors"
                >
                    <span className='ml-5'>   
                        {isWhatsapp ? <IconBrandWhatsapp /> : <IconBrandGmail />}
                    </span>
                    <span className='ml-5'>
                    {isWhatsapp ? 'Send Whatsapp' : 'Send Gmail'}
                    </span>

                </button>
            </form>
        </>
    )
}

export default SendMail