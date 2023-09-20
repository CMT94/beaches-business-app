import React from "react";

import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            possimus illo beatae recusandae assumenda voluptatem eaque, deserunt
            aperiam ipsa maiores ipsam aspernatur, impedit voluptas officiis
            tempora vel a dolorum accusantium praesentium ab! Cumque non omnis
            quia, nam voluptatibus doloremque fuga natus voluptates, doloribus
            rerum cupiditate necessitatibus nostrum, facere iste! Voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            vero iusto quasi nostrum reiciendis magni corporis iure officiis
            repellendus harum.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">Leading Service</h3>
              <p className="p-1">All-inclusive company for 20 years in-a-row</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">Automated Bookings</h3>
              <p className="p-1">All-inclusive company for 20 years in-a-row</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center p-5">
          <p>GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>

        <form onSubmit={(ev) => ev.preventDefault()} className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Grande Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Tortuga</option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label>Check-in</label>
            <input type="date" className="border rounded-md p-2" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-out</label>
            <input type="date" className="border rounded-md p-2" />
          </div>
          <button className="w-full my-4">Let's book !</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
