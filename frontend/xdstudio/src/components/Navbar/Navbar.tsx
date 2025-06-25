import { CircleUser, HandCoins, House, Landmark, LogIn, Menu, Store } from 'lucide-react'
import React from 'react'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className="bg-[#180000f8] w-full border-b-1 z-30 top-0 border-b-[#6b2c2c] fixed">
        <nav className="text-white container mx-auto max-w-5xl p-5">
            <div className="flex gap-10 items-center justify-between md:justify-start">
                <div className="w-22">
                    XD TECH
                </div>
                <div className="md:flex hidden items-center justify-between w-full">
                    <div className="flex gap-5">
                        <div className="navbar-items"><House /> หน้าแรก</div>
                        <div className="navbar-items"><Landmark />  เติมเงิน</div>
                        <div className="navbar-items"><Store /> ร้านค้า</div>
                        <div className="navbar-items"><HandCoins /> ร้านค้ายอดสะสม</div>
                        <div className="navbar-items"><CircleUser /> ติดต่อเรา</div>
                    </div>
                    <div className="flex gap-5">
                        <div className="navbar-items"><LogIn /> เข้าสู่่ระบบ</div>
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
  )
}