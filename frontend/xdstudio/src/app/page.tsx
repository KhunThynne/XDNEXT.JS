
import React from "react";
import Marquee from "react-fast-marquee";
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

      <Navbar/>
      <div className="relative min-h-screen mt-[10vh]">
        <div className="container mx-auto max-w-5xl text-white mt-10 pb-[80vh]">
          <div className="">
            {/* <SwiperComponent /> */}
          </div>

          <div className="border-1 bg-[#181818ad] border-[#e20202] mt-5 rounded-md glass-effect">
            <div className="flex items-center gap-4">
              <div className="bg-[#a81010] p-2 box-shadow rounded-md px-4">
                <BellRing />
              </div>

              <div className="w-full p-2 rounded-xs bg-[#ff8b8b00]">
                <Marquee pauseOnHover speed={30} gradient={false}>
                  <p style={{ marginRight: "2rem" }}>
                    โปรโมชั่น Fivem กรอกโค๊ดรับส่วนลด 20%
                  </p>
                </Marquee>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-md h-[40vh]">
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
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {product.map((items: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className="p-3 rounded-md glass-effect"
                    >
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
                        <div className="btn-buy mt-3 flex items-center gap-2 box-shadow">
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
