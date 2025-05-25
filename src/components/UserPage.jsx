import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { users } from "../data/User";

export default function UserPage() {
  const { token } = useParams();
  const user = users[token];

  if (!user) return <Navigate to="/unauthorized" />;

  return (
    <div className="min-h-screen bg-[#003049] text-[#FDF0D5] px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#001d2d] border border-[#012a3f] rounded-2xl p-6 text-center shadow-xl">
            <h2 className="text-lg font-semibold mb-2">Offer Letter</h2>
            <a
              href={user.offerLetterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#780000] text-[#FDF0D5] py-2 px-6 rounded-xl hover:bg-[#C1121F] transition duration-300"
            >
              View
            </a>
          </div>
          <div className="bg-[#001d2d] border border-[#012a3f] rounded-2xl p-6 text-center shadow-xl">
            <h2 className="text-lg font-semibold mb-2">Position</h2>
            <p className="text-xl font-medium">{user.role}</p>
          </div>
          <div className="bg-[#001d2d] border border-[#012a3f] rounded-2xl p-6 text-center shadow-xl">
            <h2 className="text-lg font-semibold mb-2">Status</h2>
            <p
              className={`text-xl font-medium ${
                user.duesPaid ? "text-green-400" : "text-red-400"
              }`}
            >
              {user.duesPaid ? "Paid" : "Unpaid"}
            </p>
          </div>
        </div>

        <div className="bg-[#001d2d] border border-[#012a3f] rounded-2xl p-10 text-center mb-10 shadow-xl">
          <h2 className="text-3xl font-bold">Hello, {user.name}</h2>
        </div>

        <div className="text-center">
          {!user.duesPaid ? (
            <>
              <p className="mb-4 text-lg">Please pay your dues</p>
              <button className="bg-[#780000] text-[#FDF0D5] py-3 px-8 rounded-xl font-semibold hover:bg-[#C1121F] hover:scale-105 transform transition duration-300">
                Pay Now
              </button>
            </>
          ) : (
            <p className="text-green-400 font-semibold text-xl">
              Your dues are paid ✅
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
