import React, { useState } from 'react';
import avatar from '../assets/avatar.png';
import { FaAngleDown } from 'react-icons/fa';
import ActionUserPupUp from './Popups/ActionUserPupUp';
import { Link } from 'react-router-dom';
import {
  DropdownIconChat,
  SpikendCirclChat,
  SpikStartCirclChat,
  ArrowIconRigth,
  ArrowIconLeft,
} from '.././assets/icon/Icons';

const CustomerData = ({ mapData }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [mainCheckbox, setMaincheckbox] = useState(false);
  const [selectitem, setSelectitem] = useState([]);

  function handleMainCheckboxChange() {
    setMaincheckbox(!mainCheckbox);
  }

  function handlePopup() {
    setShowPopup(!showPopup);
  }

  function checkhandler(e) {
    const isselected = e.target.checked;
    const value = parseInt(e.target.value);

    if (isselected) {
      setSelectitem([...selectitem, value]);
    } else {
      setSelectitem((prevdata) => prevdata.filter((id) => id !== value));
    }
  }

  function maincheckbox() {
    if (mapData.length === selectitem.length) {
      setSelectitem([]);
    } else {
      const postids = mapData.map((items) => items.id);
      setSelectitem(postids);
    }
  }

  const [showItemsDropdown, setShowItemsDropdown] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const toggleItemsDropdown = () => {
    setShowItemsDropdown(!showItemsDropdown);
  };

  const handleItemsSelect = (value) => {
    setItemsPerPage(value);
    setShowItemsDropdown(false);
    console.log(`Items per page set to: ${value}`);
  };

  return (
    <div className="bg-[#FFFFFF] p-5 rounded-[10px]">
      <div className="overflow-x-auto scrollRemove">
        <table className="w-full text-left border-collapse whitespace-nowrap rounded-[10px]">
          <thead>
            <tr className="py-[8px]">
              <th className="px-[19px] py-[8px] md:px-[24px]">
                <input
                  className="w-[16px] h-[16px]"
                  type="checkbox"
                  checked={mapData.length === selectitem.length}
                  onChange={maincheckbox}
                />
              </th>
              <th className="px-[19px] py-[8px] md:px-[24px] font-medium text-sm md:text-base">
                Customer Id
              </th>
              <th className="px-[19px] py-[8px] md:px-[24px] font-medium text-sm md:text-base">
                Full Name
              </th>
              <th className="px-[19px] py-[8px] md:px-[24px] font-medium text-sm md:text-base">
                Email
              </th>
              <th className="px-[19px] py-[8px] md:px-[24px] font-medium text-sm md:text-base">
                Mobile
              </th>
              <th className="px-[19px] py-[8px] md:px-[24px] font-medium text-sm md:text-base w-[120px]">
                Address
              </th>
              <th className="px-[19px] py-[8px] md:px-[24px] font-medium text-sm md:text-base">
                Start Date
              </th>
              <th className="px-[19px] py-[8px] md:px-[24px] font-medium text-sm md:text-base">
                End Date
              </th>
              <th className="px-[19px] py-[8px] md:px-[24px] font-medium text-sm md:text-base">
                Status
              </th>
              <th className="px-[19px] py-[8px] md:px-[24px] font-medium text-sm md:text-base sticky right-0 bg-white">
                Action
              </th>
            </tr>
            <tr>
              <td colSpan="10">
                <div className="w-full border border-dashed border-[#00000066]"></div>
              </td>
            </tr>
          </thead>
          <tbody>
            {mapData.map((customer, index) => (
              <tr key={index}>
                <td className="px-[19px] md:px-[24px] py-[8px]">
                  <input
                    className="w-[16px] h-[16px]"
                    type="checkbox"
                    onChange={checkhandler}
                    checked={selectitem.includes(customer.id)}
                    value={customer.id}
                  />
                </td>
                <td className="px-[19px] md:px-[24px] py-[8px] text-sm font-normal text-[#000000]">
                  {customer.id}
                </td>
                <Link to={`/dashboard/usersList/userDetails/${customer.id}`}>
                  <td className="px-[19px] md:px-[24px] text-[#6C4DEF] py-[8px] flex items-center gap-2 min-w-[160px]">
                    <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full me-2" />
                    {customer.name}
                  </td>
                </Link>
                <td className="px-[19px] md:px-[24px] py-[8px] w-full text-sm font-normal text-[#000000]">
                  {customer.email}
                </td>
                <td className="px-[19px] md:px-[24px] py-[8px] text-sm font-normal text-[#000000]">
                  {customer.phone}
                </td>
                <td className="px-[19px] md:px-[24px] py-[8px] text-sm font-normal text-[#000000] w-[120px] truncate">
                  {customer.address}
                </td>
                <td className="px-[19px] md:px-[24px] py-[8px] text-sm font-normal text-[#000000]">
                  {customer.start}
                </td>
                <td className="px-[19px] md:px-[24px] py-[8px] text-sm font-normal text-[#000000]">
                  {customer.end}
                </td>
                <td
                  className={`px-[19px] md:px-[24px] py-[8px] text-sm font-normal text-[#000000] ${customer.TextColor}`}>
                  {customer.status}
                </td>
                <td
                  className="px-[19px] md:px-[24px] py-[8px] text-center sticky right-0 bg-white"
                  onClick={handlePopup}>
                  <button className="text-2xl font-medium">&#8942;</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-white rounded-[10px]">
        {/* Existing code... */}
        <div className="flex justify-end ">
          <div className="flex items-center">
            <h2 className="me-3">Items per page:</h2>
            <div
              className="relative border-[1px] py-1 w-[70px] rounded-[10px] flex justify-center items-center cursor-pointer me-9"
              onClick={toggleItemsDropdown}>
              <h2 className="pe-3 text-sm font-medium">{itemsPerPage}</h2>
              <DropdownIconChat />
              {showItemsDropdown && (
                <div className="absolute top-full left-0 mt-1 bg-white border rounded shadow-lg w-full z-10 ">
                  {[5, 10, 15, 20].map((item) => (
                    <button
                      key={item}
                      onClick={() => handleItemsSelect(item)}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100">
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="pe-3 text-sm font-medium">1-{itemsPerPage}</h2>
            <span className=" pe-5">of 0</span>
            <div className="pe-7 flex ">
              <SpikStartCirclChat />
              <div className=" ps-5">
                <ArrowIconLeft />
              </div>
            </div>
            <div className=" pe-3">
              <ArrowIconRigth />
            </div>
            <SpikendCirclChat />
          </div>
        </div>
      </div>
      {showPopup && <ActionUserPupUp handlePopup={handlePopup} />}
    </div>
  );
};

export default CustomerData;
