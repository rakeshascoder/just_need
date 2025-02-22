import React, { useEffect, useState } from "react";
import {
  Editicon,
  Greenicon,
  Plusicon,
  DisableRedicon,
  Searchicon,
} from "../../assets/icon/Icons";
import Actions from "../Popups/Actions";
import AddNewServicePopUp from "../Popups/AddNewServicePopUp";
import EnablePopUp from "../Popups/EnablePopUp";
import DisablePopUp from "../Popups/DisablePopUp";
import overlay from "../../../public/overlay.png";
import { useServiceContext } from "../../store/ServiceContext";
import AddSubCategoryPopUp from "../Popups/SubcategoryPopup";

function Services() {
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showNewServicePopUp, setShowNewServicePopUp] = useState(false);
  const [showEnablePopup, setShowEnablePopup] = useState(false);
  const [showDisablePopup, setShowDisablePopup] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("");
  const [subcategorypopup, setSubCategoryPopup] = useState(false);

  const {
    categories,
    updateSubcategoryName,
    toggleSubcategoryStatus,
    getCategoriesWithSubcategories,
  } = useServiceContext();

  const [selectedCategory, setSelectedCategory] = useState(categories);
  // console.log(categories,"data will be come here")

  useEffect(() => {
    getCategoriesWithSubcategories();
  }, []);

  const handleNewServicePopUp = () => {
    setShowNewServicePopUp(!showNewServicePopUp);
  };

  function handleSubcategory() {
    setSubCategoryPopup(!subcategorypopup);
  }

  const handleEditClick = (index, categoryName) => {
    // console.log(index,categoryName) getting index or name of subcategory ===============
    setEditIndex(index);
    setEditData(categoryName);
  };

  const handleInputChange = (e) => {
    setEditData(e.target.value);
  };

  const handleSaveEdit = (subcategoryId) => {
    if (editData.trim() !== "") {
      updateSubcategoryName(subcategoryId, editData); // Use the correct function
      setEditIndex(null); // Exit edit mode
    }
  };

  const handleItemClick = (item) => {
    console.log(item, "item");
    setSelectedItem(item);
    setShowPopup(true);
  };

  const handleOverlayClick = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const handleDisableClick = (subcategoryId) => {
    setCurrentCardIndex(subcategoryId);
    setShowDisablePopup(true);
  };

  const handleEnableClick = (subcategoryId) => {
    setCurrentCardIndex(subcategoryId);
    setShowEnablePopup(true);
  };

  const toggleDisableCard = (subcategoryId, newStatus, action) => {
    if (action === "confirm") {
      toggleSubcategoryStatus(subcategoryId, newStatus); // Update status in context
    }

    setShowEnablePopup(false);
    setShowDisablePopup(false);
    setCurrentCardIndex(null);
    // window.location.reload();
  };

  const filteredCategoriesData = categories.filter((item) =>
    item.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-[14px] rounded-[10px] shadow-md bg-white">
      <div className="xl:flex-row flex-col flex xl:items-center justify-between">
        <h1 className="font-medium text-[22px]">Education</h1>
        <div className="flex items-center mt-[20px] xl:mt-[0px]">
          <div className="bg-[#F1F1F1] w-[337px] px-[16px] py-2.5 h-[42px] rounded-[10px]">
            <div className="flex items-center">
              <Searchicon />
              <input
                className="text-[16px] font-normal outline-none ms-[10px] bg-transparent"
                type="text"
                placeholder="Search Task"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div
            onClick={handleNewServicePopUp}
            className="whitespace-nowrap cursor-pointer bg-[#0832DE] flex items-center h-[42px] px-[16px] py-2.5 rounded-[10px] ms-[20px]"
          >
            <Plusicon />
            <p className="font-normal text-[16px] text-white ms-[12px]">
              Add New Service
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 relative">
        <div className="flex items-center gap-4 cursor-pointer overflow-x-auto whitespace-nowrap scrollbar-hide ">
          {filteredCategoriesData.map((items, index) => (
            <div
              key={index}
              className={`flex items-center pb-2 border-b-2 px-5 ${
                activeTab === index ? "border-blue-500" : "border-transparent"
              }`}
              onClick={() => {
                setActiveTab(index); // Set active tab
              }}
            >
              <p className="font-normal text-base transition mx-[5px]">
                {items.categoryName}
              </p>
              <span className="font-normal text-xs flex justify-center items-center w-[25px] h-[17px] bg-[#0000000F] rounded-[60px] py-1 px-1.5 me-1">
                32
              </span>
              <div className="border-r px-2">
                <Editicon />
                <div className="border-r border"></div>
              </div>
              <div className="ms-2">
                <DisableRedicon />
              </div>
            </div>
          ))}

          <div>
            <img
              className="absolute -top-[10%] right-0 w-[300px] h-[60px] z-10"
              src={overlay}
              alt="#"
            />
          </div>

          {/* Fixed Button */}
          <div className="absolute right-[1%] top-[3%] z-10">
            <button className="text-[#6C4DEF] font-normal text-base">
              View Blocked list
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-[18px] mt-6 flex-wrap whitespace-nowrap cursor-pointer">
        {filteredCategoriesData
          .flatMap((item) => item.subcategory)
          .map((sub, index) => (
            <div
              key={index}
              className="group hover:bg-[#6C4DEF1A] hover:border-[#6C4DEF1A] border border-[#0000001A] p-5 rounded-[10px] h-full transition"
            >
              <div className="flex items-center justify-between">
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editData}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border border-black me-2 focus:outline-none p-1 rounded-[10px]"
                    autoFocus
                  />
                ) : (
                  <p className="font-normal text-sm text-[#00000099] mx-[5px] transition group-hover:text-[#6C4DEF]">
                    {sub.categoryName}
                  </p>
                )}

                <div className="flex gap-2">
                  {editIndex === index ? (
                    <div
                      className="cursor-pointer"
                      onClick={() => handleSaveEdit(sub.id)}
                    >
                      <Greenicon />
                    </div>
                  ) : (
                    <>
                      <div
                        onClick={() => handleEditClick(index, sub.categoryName)}
                        className="cursor-pointer"
                      >
                        <Editicon />
                      </div>
                      <div
                        className="ms-[20px] cursor-pointer"
                        onClick={() =>
                          !sub.isActive
                            ? handleDisableClick(sub.id)
                            : handleEnableClick(sub.id)
                        }
                      >
                        {sub.isActive ? (
                          <DisableRedicon />
                        ) : (
                          <span className="text-xs font-normal text-[#0DA800]">
                            Enable
                          </span>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="inline-block mt-8">
        <div
          onClick={handleSubcategory}
          className="whitespace-nowrap cursor-pointer bg-[#0832DE] flex items-center h-[42px] px-[16px] py-2.5 rounded-[10px]"
        >
          <Plusicon />
          <p className="font-normal text-[16px] text-white ms-[12px]">
            Add Sub Category
          </p>
        </div>
      </div>
      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[50] flex items-center justify-center"
          onClick={handleOverlayClick}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Actions
              selectedItem={selectedItem}
              handleOverlayClick={handleOverlayClick}
            />
          </div>
        </div>
      )}
      {showNewServicePopUp && (
        <AddNewServicePopUp handleNewServicePopUp={handleNewServicePopUp} />
      )}

      {subcategorypopup && (
        <AddSubCategoryPopUp
          handleClose={handleSubcategory}
          setSelectedCategory={selectedCategory?.id}
        />
      )}

      {showEnablePopup && (
        <EnablePopUp
          onConfirm={() => toggleDisableCard(currentCardIndex, true, "confirm")}
          onCancel={() => setShowEnablePopup(false)}
        />
      )}

      {showDisablePopup && (
        <DisablePopUp
          onConfirm={() =>
            toggleDisableCard(currentCardIndex, false, "confirm")
          }
          onCancel={() => setShowDisablePopup(false)}
        />
      )}
    </div>
  );
}

export default Services;
