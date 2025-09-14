"use client";

import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="">
        <div className="text-center py-20 md:py-40 px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <h1 className="font-bold text-4xl md:text-6xl py-5">
              Get Me A Chai
            </h1>
            <img
              className="h-12 w-12 md:h-16 md:w-16"
              src="https://media.tenor.com/yns7a5_vQpkAAAAj/coffee-emoji.gif"
              alt="chai gif"
            />
          </div>
          <h5 className="text-lg md:text-2xl py-5">
            A Crowdfunding platform for creators. Get funded by your fans and
            followers. Start Now!
          </h5>
          <div className="flex flex-col sm:flex-row justify-center gap-4 py-5">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center cursor-pointer">
              Start Here
            </button>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center cursor-pointer">
              Read More
            </button>
          </div>
        </div>

        <hr className="h-1 bg-gray-800" />

        <div className="px-4 md:px-10">
          <h2 className="font-bold text-center text-xl md:text-2xl mt-10">
            Your fans can buy you a chai
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16 py-10 md:py-16 text-center">
            <div className="flex flex-col items-center max-w-xs">
              <img
                className="h-16 w-16 rounded-full"
                src="https://get-me-chai.vercel.app/man.gif"
                alt="Support Yourself"
              />
              <h5 className="mt-3 font-semibold text-lg">Create & Share</h5>
              <span className="text-gray-600 text-sm">
                Share your content with the world and let your creativity shine.
              </span>
            </div>
            <div className="flex flex-col items-center max-w-xs">
              <img
                className="h-16 w-16 rounded-full"
                src="https://get-me-chai.vercel.app/dollar.gif"
                alt="Get Funded"
              />
              <h5 className="mt-3 font-semibold text-lg">Earn Support</h5>
              <span className="text-gray-600 text-sm">
                Your fans can support you directly through small contributions.
              </span>
            </div>
            <div className="flex flex-col items-center max-w-xs">
              <img
                className="h-16 w-16 rounded-full"
                src="https://get-me-chai.vercel.app/group.gif"
                alt="Community"
              />
              <h5 className="mt-3 font-semibold text-lg">Build Community</h5>
              <span className="text-gray-600 text-sm">
                Connect with people who love your work and grow together.
              </span>
            </div>
          </div>
        </div>

        <hr className="h-1 bg-gray-800" />

        <div className="py-10 md:py-20 px-4 md:px-16">
          <h1 className="text-center text-xl md:text-2xl font-bold">
            Learn More About Us
          </h1>
          <div className="mt-6 md:mt-10 flex flex-col gap-y-6 text-center text-base md:text-lg leading-relaxed">
            <p>
              Get Me A Chai exists to support the dreams of developers,
              creators, and influencers by connecting them directly with their
              audiences. Our platform not only provides the tools to secure
              funding for projects and passions but also creates a safe and
              encouraging space where creativity can thrive without limitations.
              We aim to remove the barriers that often hold back innovation,
              ensuring every idea gets the chance to shine.
            </p>

            <p>
              Our goal is to empower individuals to keep doing what they do
              best. Whether you’re coding an innovative app, producing unique
              content, or influencing with purpose, Get Me A Chai ensures you
              have the financial and community backing to bring your vision to
              life. By simplifying support and recognition, we allow creators to
              focus fully on their craft instead of worrying about resources.
            </p>

            <p>
              We value the strength of communities and the remarkable difference
              collective support can make. Every contribution, big or small,
              helps transform dreams into reality and inspires a ripple effect
              of positivity. Through this shared culture of support, we aspire
              to build a world where creativity and innovation are not just
              encouraged but celebrated at every step.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
