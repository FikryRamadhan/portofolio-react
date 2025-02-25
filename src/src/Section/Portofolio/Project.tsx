import { IconFilter } from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import dataProject from "../../Hooks/DataProject";
import dataSertifikasi from "../../Hooks/DataSertifikasi"; // Data sertifikasi
import DetailProject from "./DetailProject";

const Project = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("project"); // "project" or "sertifikasi"

  // Filter untuk project berdasarkan tanggal (dalam 1 tahun terakhir)
  const currentDate = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(currentDate.getFullYear() - 1);

  const filteredProjects = dataProject;

  const filteredSertifikasi = dataSertifikasi; // Data sertifikasi langsung diambil

  const projectTypes = ["all", "web", 'bot', 'dekstop', "mobile", "design"];

  // Menentukan data yang akan ditampilkan berdasarkan tab yang dipilih
  const dataToDisplay = activeTab === "project" ? filteredProjects : filteredSertifikasi;

  // Filter data berdasarkan pencarian dan kategori
  const filteredItems = dataToDisplay.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || item.type === selectedType;
    return matchesSearch && matchesType;
  });


  const [isOpenSidebar, setOpenSidebar] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);
  let [dataDetail, setDatadetail] = useState([])
  // const menuRef = useRef<HTMLDivElement>(null);

  function toggleSidebar() {
    setOpenSidebar(!isOpenSidebar);
  }

  

  const handleProjectClick = (data) => {
    setDatadetail(data)
    toggleSidebar()
  }

  return (
    <div className="p-10 lg:pl-30 lg:pr-30">
      <h1 className="text-4xl font-bold text-center mb-6 text-slate-100">Portofolio</h1>

      {/* Tab Menu */}
      <div className="flex justify-center mb-6 ">
        <button
          onClick={() => setActiveTab("project")}
          className={`px-4 py-2 text-lg font-semibold rounded-md mx-2 transition-all ${activeTab === "project" ? "bg-custom-brown text-white" : "bg-zinc-800 text-gray-300"
            }`}
        >
          Project
        </button>
        <button
          onClick={() => setActiveTab("sertifikasi")}
          className={`px-4 py-2 text-lg font-semibold rounded-md mx-2 transition-all ${activeTab === "sertifikasi" ? "bg-custom-brown text-white" : "bg-zinc-800 text-gray-300"
            }`}
        >
          Sertifikasi
        </button>
        <button
          onClick={() => setActiveTab("sertifikasi")}
          className={`px-4 py-2 text-lg font-semibold rounded-md mx-2 transition-all ${activeTab === "sertifikasi" ? "bg-custom-brown text-white" : "bg-zinc-800 text-gray-300"
            }`}
        >
          Career
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 ">
        {/* Search Input */}
        <input
          type="text"
          placeholder={`Search ${activeTab}...`}
          className="w-full md:w-2/3 p-3 rounded-lg bg-zinc-800 text-slate-100 border border-zinc-700 focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filter Dropdown (hanya muncul jika di tab Project) */}
        {activeTab === "project" && (
          <div className="relative">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-zinc-800 text-slate-300 rounded-lg hover:bg-zinc-700"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <IconFilter size={20} /> Filter
            </button>
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg overflow-hidden">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 capitalize hover:bg-zinc-800 ${selectedType === type ? "border-b-2 border-custom-brown text-white" : "text-slate-300"
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* List Project / Sertifikasi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-zinc-950 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer"
              onClick={() => handleProjectClick(item)} // Tambahkan event onClick
            >
              <div className="text-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-100% object-cover rounded-md mb-2"
                />
                <span
                  className={`text-xs px-2 py-1 rounded-full mb-2 inline-block ${item.type === "web"
                    ? "bg-blue-500"
                    : item.type === "mobile"
                      ? "bg-green-500"
                      : item.type === "design"
                        ? "bg-purple-500"
                        : "bg-gray-500"
                    } text-white`}
                >
                  {item.type}
                </span>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-slate-300 text-center py-12 col-span-full">
            Tidak ada data yang ditemukan
          </div>
        )}

      </div>

      {isOpenSidebar && (
        <div className="m-0 font-sans  transition-all duration-500 z-50">
          <div
            ref={sidebarRef}
            className="fixed h-full w-[300px] top-0 bg-white shadow-xl transition-all duration-500 z-50 p-6 right-0"
          >
            <DetailProject {...dataDetail} />
          </div>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleSidebar}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Project;
