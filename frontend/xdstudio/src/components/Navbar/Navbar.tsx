import {
  CircleUser,
  HandCoins,
  House,
  Landmark,
  LogIn,
  Menu,
  Store,
} from "lucide-react";
import React from "react";

type Props = object;

export default function Navbar({}: Props) {
  return (
    <div className="border-b-1 fixed top-0 z-30 w-full border-b-[#6b2c2c] bg-[#180000f8]">
      <nav className="container mx-auto max-w-5xl p-5 text-white">
        <div className="flex items-center justify-between gap-10 md:justify-start">
          <div className="w-22">XD TECH</div>
          <div className="hidden w-full items-center justify-between md:flex">
            <div className="flex gap-5">
              <div className="navbar-items">
                <House /> หน้าแรก
              </div>
              <div className="navbar-items">
                <Landmark /> เติมเงิน
              </div>
              <div className="navbar-items">
                <Store /> ร้านค้า
              </div>
              <div className="navbar-items">
                <HandCoins /> ร้านค้ายอดสะสม
              </div>
              <div className="navbar-items">
                <CircleUser /> ติดต่อเรา
              </div>
            </div>
            <div className="flex gap-5">
              <div className="navbar-items">
                <LogIn /> เข้าสู่่ระบบ
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <div className="hover:cursor-pointer">
              <Menu />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
