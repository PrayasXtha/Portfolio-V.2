import React from 'react'

const contact = () => {
  return (

    <section  id="Fifth_Page"> 

    <div id="Right_Content">
    <div id='second_RC' data-aos="fade-up" data-aos-duration="2000">
    
    <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-10 mx-auto sm:px-2 sm:py-2">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-xl text-2xl font-medium title-font mb-4 sm:mb-2 text-gray-900" data-aos="fade-down" data-aos-duration="3000"><b>LETS GET IN TOUCH</b></h1>
      <p class="lg:w-2/3 sm:w-1/2 mx-auto leading-relaxed text-base text-gray-800">Have a sweet project in mind or just want to say hi?<br></br> Feel free to send me a message or email directly on <b>@prayasshrestha100@gmail.com</b> </p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full">
          <button data-aos="zoom-in" data-aos-duration="3000" class="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-500 rounded text-lg">Connect</button>
        </div>
     
      </div>
    </div>
  </div>
</section>
    </div>
    </div>
    
    </section>
  )
}

export default contact
