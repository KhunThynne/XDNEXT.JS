import React from "react";

import Image from "next/image";
import Footer from "@/components/Foodter/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { BellRing, ShoppingBasket } from "lucide-react";

const product = [
  {
    name: "Gashapon v2",
    img: "https://placehold.co/300x300/png",
    price: "20",
  },
  {
    name: "Gashapon v3",
    img: "https://placehold.co/300x300/png",
    price: "40",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative mt-[10vh] min-h-screen">
        <div className="container mx-auto mt-10 max-w-5xl pb-[80vh] text-white">
          <div className="">{/* <SwiperComponent /> */}</div>

          <div className="border-1 glass-effect mt-5 rounded-md border-[#e20202] bg-[#181818ad]">
            <div className="flex items-center gap-4">
              <div className="box-shadow rounded-md bg-[#a81010] p-2 px-4">
                <BellRing />
              </div>

              <div className="rounded-xs w-full bg-[#ff8b8b00] p-2">
                <p style={{ marginRight: "2rem" }}>
                  โปรโมชั่น Fivem กรอกโค๊ดรับส่วนลด 20%
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 h-[40vh] rounded-md">
            <div className="flex items-center gap-2">
              <div className="text-6xl">
                {/* <CiShop /> */}
                <ShoppingBasket size={50} />
              </div>
              <div className="flex flex-col">
                <div className="text-2xl">สินค้าแนะนำ</div>
                <div className="text-[12px]">Recommended Product</div>
              </div>
            </div>
            <div className="mt-3">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
                {product.map((items: any, index: any) => {
                  return (
                    <div key={index} className="glass-effect rounded-md p-3">
                      <div>
                        <Image
                          src={items.img}
                          className="rounded-md"
                          width={500}
                          height={300}
                          alt="xd-shop"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="text-2xl">{items.name}</p>
                        <div className="btn-buy box-shadow mt-3 flex items-center gap-2">
                          <ShoppingBasket />
                          Buy {items.price} P.
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
