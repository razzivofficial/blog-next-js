import React from "react";
import "./studentlist.css";

export default function StudentList() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline bg-red-500">Student List</h1>
      <ul className="namelist">
        <li>Rajiv</li>
        <li>Ashish</li>
        <li>Rishu</li>
        <li>Sid</li>
        <li>Rohit</li>
        <li>Nunurag</li>
        <li>Tushar</li>
        <li>Aniket</li>
        <li>Animesh</li>
      </ul>
    </div>
  );
}
