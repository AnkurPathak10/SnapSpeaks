"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export function NavbarMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="bg-transparent">
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white hover:text-yellow-300 hover:bg-transparent">
            Home
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-black text-white rounded-lg shadow-lg">
            <ul className="p-4 w-[200px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="block p-2 hover:bg-yellow-300 hover:text-black rounded-md"
                  >
                    Overview
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Projects */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white hover:text-yellow-300 hover:bg-transparent">
            Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-black text-white rounded-lg shadow-lg">
            <ul className="p-4 w-[200px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/projects/saas"
                    className="block p-2 hover:bg-yellow-300 hover:text-black rounded-md"
                  >
                    SaaS Ads
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/projects/motion"
                    className="block p-2 hover:bg-yellow-300 hover:text-black rounded-md"
                  >
                    3D Motion Graphics
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/projects/saas"
                    className="block p-2 hover:bg-yellow-300 hover:text-black rounded-md"
                  >
                    long Form Videos
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/projects/ui"
                    className="block p-2 hover:bg-yellow-300 hover:text-black rounded-md"
                  >
                    UI Niche
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/projects/saas"
                    className="block p-2 hover:bg-yellow-300 hover:text-black rounded-md"
                  >
                    Talking Head Videos
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* About */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white hover:text-yellow-300 hover:bg-transparent">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-black text-white rounded-lg shadow-lg">
            <ul className="p-4 w-[200px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="block p-2 hover:bg-yellow-300 hover:text-black rounded-md"
                  >
                    Who We Are
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/team"
                    className="block p-2 hover:bg-yellow-300 hover:text-black rounded-md"
                  >
                    Our Team
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Contact */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white hover:text-yellow-300 hover:bg-transparent">
            Contact
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-black text-white rounded-lg shadow-lg">
            <ul className="p-4 w-[200px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="block p-2 hover:bg-yellow-300 hover:text-black rounded-md"
                  >
                    Get in Touch
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/schedule"
                    className="block p-2 hover:bg-yellow-300 hover:text-black rounded-md"
                  >
                    Schedule a Call
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>

      {/* 👇 Required for functionality */}
      <NavigationMenuViewport className="absolute top-full left-0 w-full bg-black rounded-b-lg shadow-lg" />
    </NavigationMenu>
  )
}
