import React from 'react'
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import Contect from './_components/Contect';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    // <div className='p-10 flex flex-col items-center justify-center' >
    //   <h1 className='red font-bold text-[22px]'>Welcome to AI Mock Interview</h1>
    // <a  ><h1><Button>Start</Button></h1></a>
    // </div>

    <div>
      <Head>
        <title>AI Mock Interview</title>
        <meta name="description" content="Ace your next interview with AI-powered mock interviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        {/* Header Section */}
        <header className="w-full py-6 bg-white border-b border-gray-200 fixed top-0 z-50">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CarrerWise</h1>
            </div>
            <nav className="flex flex-col sm:flex-row flex-wrap items-center justify-between mt-4 md:mt-0 space-y-4 sm:space-y-0 sm:space-x-8">
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/RathodViraj/CarrerWise_exp"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FaGithub className="w-6 h-6" />
                  <span className="hidden md:inline">GitHub</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 md:px-0">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Master Your</span>
                  <br />
                  <span className="text-gray-800">Interview Skills</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Practice with AI-powered mock interviews and get personalized feedback to ace your next interview.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="/dashboard"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    Start Practicing
                  </a>
                  <a
                    href="#features"
                    className="px-8 py-4 border-2 border-gray-200 text-gray-600 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold">AI</span>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-2xl">
                        <p className="text-gray-700">Tell me about your experience with React.js</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 justify-end">
                      <div className="bg-blue-100 p-4 rounded-2xl">
                        <p className="text-gray-700">I have 2 years of experience working with React...</p>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold">U</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50 px-6 md:px-0">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to prepare for your next interview
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI-Powered Interviews</h3>
                <p className="text-gray-600">Experience realistic interview scenarios with our advanced AI technology.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Instant Feedback</h3>
                <p className="text-gray-600">Get immediate, detailed feedback on your performance and answers.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Progress Tracking</h3>
                <p className="text-gray-600">Monitor your improvement over time with detailed analytics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-6 md:px-0">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hear from people who aced their interviews with our help
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">👨‍💼</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Alex Johnson</h4>
                    <p className="text-gray-600">Software Engineer at Google</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The AI mock interviews were incredibly realistic. I felt much more confident going into my real interview and landed my dream job!"
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">👩‍💻</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">Sarah Williams</h4>
                    <p className="text-gray-600">Product Manager at Microsoft</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The feedback was spot on and helped me improve my answers significantly. I highly recommend this service to anyone preparing for interviews."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 px-6 md:px-0">
          <Contect />
        </section>
      </main>

      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-gray-600">© 2025 CarrerWise. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default page