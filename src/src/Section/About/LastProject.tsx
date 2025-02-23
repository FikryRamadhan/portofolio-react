import { IconFilter } from '@tabler/icons-react';
import React, { useState } from 'react';
import dataProject from '../../Hooks/DataProject';

const LastProject = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const currentDate = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(currentDate.getFullYear() - 1);

    const filteredProjects = dataProject.filter(project => {
        const projectDate = new Date(project.createdAt);
        return projectDate >= oneYearAgo && projectDate <= currentDate;
    });

    const projectTypes = ['all', 'web','bot','dekstop', 'mobile', 'design'];

    const items = filteredProjects.slice(0, 6);

    const filteredItems = items.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === 'all' || item.type === selectedType;
        return matchesSearch && matchesType;
    });

    return (
        <div className="p-10 lg:pl-30 lg:pr-30">
            <h1 className="text-4xl font-bold text-center mb-6 text-slate-100">Last Project</h1>

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 lg:pl-30 lg:pr-30">
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search project..."
                    className="w-full md:w-2/3 p-3 rounded-lg bg-zinc-800 text-slate-100 border border-zinc-700 focus:outline-none focus:border-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Filter Dropdown */}
                <div className="relative">
                    <button
                        className="flex items-start gap-2 px-4 py-2 bg-zinc-800 text-slate-300 rounded-lg hover:bg-zinc-700"
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                        <IconFilter size={20} /> Filter
                    </button>
                    {isFilterOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg overflow-hidden">
                            {projectTypes.map(type => (
                                <button
                                    key={type}
                                    onClick={() => { setSelectedType(type); setIsFilterOpen(false); }}
                                    className={`w-full text-left px-4 py-2 capitalize hover:bg-zinc-800 ${selectedType === type ? 'border-b-2 border-b-custom-brown text-white' : 'text-slate-300'}`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Project List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="p-4 bg-zinc-950 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="text-center">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-100% object-cover rounded-md mb-2"
                                />
                                <span className={`text-xs px-2 py-1 rounded-full mb-2 inline-block ${item.type === 'web' ? 'bg-blue-500' :
                                        item.type === 'mobile' ? 'bg-green-500' :
                                            'bg-purple-500'
                                    } text-white`}>
                                    {item.type}
                                </span>
                                <h3 className="text-lg font-semibold text-slate-100 mb-2">{item.title}</h3>
                                <p className="text-slate-400">{item.desc}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-slate-300 text-center py-12 col-span-full">
                        Tidak ada project yang ditemukan
                    </div>
                )}
            </div>

        </div>
    );
}

export default LastProject;
