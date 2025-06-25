import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
  <div className="bg-[#180000f8] border-t-1 border-t-[#6b2c2c] absolute w-full bottom-0 p-5 items-center">
    <div className="container mx-auto justify-between flex max-w-5xl text-[12px]">
      <div className="text-white items-center hidden md:flex">
      <div><Image className="rounded-full border-1 border-[#f8f8f8]" width={44} height={44} alt='' src="/img/XD_STUDIO.png"/></div>
      <div className="text-white border-l-1 ml-2">
        <div className="ml-2">This <code className="text-[#f37601] font-extralight">XD TECH</code> Application Made by <Link className="text-[#fa7e7e]" href="https://discord.xd-tect.com/">XD TECHNOLOGY</Link></div>
        <div className="ml-2">version 0.0.1 (Latest version)</div>
      </div>
      </div>

      <div className="text-white flex flex-col">
        <div>Copyright &copy; XD DEV 2024 - 2025 All Rights Reserved.</div>
        <div className="flex items-center gap-1 justify-center md:justify-start"><CheckCircle/> Website <code className="text-green-400 font-extrabold">Protected</code></div>
      </div>
    </div>
  </div>
  )
}