import React from "react";
import CustomerServiceLogo from "../../assets/png/customerServiceLogo.png";
import { NavLink, useLocation } from "react-router-dom";
import {
  CustomerSvg,
  DasboardSvg,
  LogoutSvg,
  ServiceRequestSvg,
  ServicesSvg,
  SettingSvg,
  SubsciptionSvg,
  ComplaintsSvg,
  VerticalVilotSettingSvg,
  VerticalVilotgSvg,
} from "../../assets/icon/Icon";

function SideBar() {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div className="bg-white pt-[11px] pb-10  rounded-[10px] h-full overflow-y-auto scrollRemove">
      <div className="px-6 pb-[11px]">
        <NavLink 
        state={"Plan, prioritize, and accomplish your tasks with ease."}
        to="/dashboard">
          <img
            className="max-w-[150px] xl:max-w-[222px]"
            src={CustomerServiceLogo}
            alt="logo"
          />
        </NavLink>
      </div>
      <div className="px-4 xl:px-[35px]">
        <div className="mt-3 xl:mt-5">
          <h6 className="text-[#00000099] font-normal text-base ps-2.5">
            Menu
          </h6>
        </div>
        <div className="flex items-center mt-3 xl:mt-4 group_hover">
        <VerticalVilotgSvg pathName={pathName} currentPath="/dashboard"/>
          <NavLink
            
            state={"Plan, prioritize, and accomplish your tasks with ease."}
            to="/dashboard"
            className="flex items-center py-2.5 px-2 xl:px-[15px] gap-3 xl:gap-5 ms-[5px] w-full"
          >
            <DasboardSvg pathName={pathName} />
            <span
              className={`font-normal text-sm xl:text-base ${
                pathName == "/dashboard" ? "text-[#6c4def]" : "text-[#00000099]"
              }`}
            >
              Dashboard
            </span>
          </NavLink>
        </div>
        <div className="flex items-center mt-3 xl:mt-5 group_hover">      
        <VerticalVilotSettingSvg pathName={pathName} checkpath="/dashboard/usersList"/>
          <NavLink
            
            state={"Plan, prioritize, and accomplish your tasks with ease."}
            to="/dashboard/usersList"
            className="flex items-center py-2.5 px-2 xl:px-[15px] gap-3 xl:gap-5 ms-[5px] w-full"
          >
            <CustomerSvg pathName={pathName} />
            <span
              className={`font-normal text-sm xl:text-base ${
                pathName.startsWith("/dashboard/usersList")
                  ? "text-[#6c4def]"
                  : "text-[#00000099]"
              }`}
            >
              Users
            </span>
          </NavLink>
        </div>
        <div className="flex items-center mt-3 xl:mt-5 group_hover">
        <VerticalVilotSettingSvg pathName={pathName} checkpath="/dashboard/subscription"/>
          <NavLink
            
            state={"Plan, prioritize, and accomplish your tasks with ease."}
            to="/dashboard/subscription"
            className="flex items-center gap-3 xl:gap-5 py-2.5 px-2 xl:px-[15px] ms-[5px] w-full"
          >
            <SubsciptionSvg pathName={pathName} />
            <span
              className={`font-normal text-sm xl:text-base ${
                pathName == "/dashboard/subscription"
                  ? "text-[#6c4def]"
                  : "text-[#00000099]"
              }`}
            >
              Subscription
            </span>
          </NavLink>
        </div>

        <div className="flex items-center mt-3 xl:mt-5 group_hover">
        <VerticalVilotSettingSvg pathName={pathName} checkpath="/dashboard/serviceRequest"/>
          <NavLink
            
            state={"Plan, prioritize, and accomplish your tasks with ease."}
            to="/dashboard/serviceRequest"
            className="flex items-center py-2.5 px-2 xl:px-[15px] gap-3 xl:gap-5 ms-[5px] w-full"
          >
            <ServiceRequestSvg pathName={pathName} />
            <span
              className={`font-normal text-sm xl:text-base ${
                pathName == "/dashboard/serviceRequest"
                  ? "text-[#6c4def]"
                  : "text-[#00000099]"
              }`}
            >
              Service Request
            </span>
          </NavLink>
        </div>
        <div className="flex items-center mt-3 xl:mt-5 group_hover">
        
        <VerticalVilotSettingSvg pathName={pathName} checkpath="/dashboard/services"/>
          <NavLink
            
            state={"Plan, prioritize, and accomplish your tasks with ease."}
            to="/dashboard/services"
            className="flex items-center py-2.5 px-2 xl:px-[15px] gap-3 xl:gap-5 ms-[5px] w-full"
          >
            <ServicesSvg pathName={pathName} />
            <span
              className={`font-normal text-sm xl:text-base ${
                pathName == "/dashboard/services"
                  ? "text-[#6c4def]"
                  : "text-[#00000099]"
              }`}
            >
              Services
            </span>
          </NavLink>
        </div>

        <div className="flex items-center mt-3 xl:mt-5 group_hover">
           <VerticalVilotSettingSvg pathName={pathName} checkpath="/dashboard/complaints"/>
          <NavLink
            
            state={"Plan, prioritize, and accomplish your tasks with ease."}
            to="/dashboard/complaints"
            className="flex items-center py-2.5 px-2 xl:px-[15px] gap-3 xl:gap-5 ms-[5px] w-full"
          >
            <ComplaintsSvg pathName={pathName} />
            <span
              className={`font-normal text-sm xl:text-base ${
                  pathName.startsWith("/dashboard/complaints")
                  ? "text-[#6c4def]"
                  : "text-[#00000099]"
              }`}
            >
              Complaints
            </span>
          </NavLink>
        </div>
        <div className=" my-4">
          <h6 className="text-[#00000099] font-normal text-base ps-2.5">
            General
          </h6>
        </div>
        <div className="flex items-center group_hover duration-500">
            <VerticalVilotSettingSvg pathName={pathName} checkpath="/dashboard/setting"/>
     
          <NavLink
            
            state={"Manage your platform"}
            to="/dashboard/setting"
            className="flex items-center py-2.5 px-2 xl:px-[15px] gap-3 xl:gap-5 ms-[5px] w-full"
          >
            <SettingSvg pathName={pathName} />
            <span
              className={`font-normal text-sm xl:text-base ${
                pathName.startsWith("/dashboard/setting")
                  ? "text-[#6c4def]"
                  : "text-[#00000099]"
              }`}
            >
              Setting
            </span>
          </NavLink>
        </div>
        <div className="flex items-center group_hover mt-3 xl:mt-5">
        <VerticalVilotSettingSvg pathName={pathName} checkpath="/dashboard/logout"/>
         
          <NavLink
            
            state={"Plan, prioritize, and accomplish your tasks with ease."}
            to="/dashboard/logout"
            className="flex items-center py-2.5 px-2 xl:px-[15px] gap-3 xl:gap-5 ms-[5px] w-full"
          >
            <LogoutSvg pathName={pathName} />
            <span
              className={`font-normal text-sm xl:text-base ${
                pathName == "/dashboard/logout"
                  ? "text-[#6c4def]"
                  : "text-[#00000099]"
              }`}
            >
              Logout
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
