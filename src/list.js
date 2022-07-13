import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
export default function List({ list, setlist, setname, setid, name, id, setisedit }) {
  console.log(list);
  return (
    <div className="list">
      {list.length > 0
        ? list.map((ele, ind) => {
            return (
              <div key={ind}>
                <p>{ele.name}</p>
                <button
                  onClick={() => {
                    console.log(ele.id);
                    setname(ele.name);
                    setid(ele.id);
                    console.log(name, id);
                    setisedit(true);
                  }}
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => {
                    let i = ele.id;
                    console.log(i);
                    let a = list.filter((elem, k) => {
                      return elem.id != i;
                    });
                    setlist(a);
                    console.log(list);
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            );
          })
        : ""}
      <button class="clear" onClick={() => {
        setlist([]);
      }}>clear all items</button>
    </div>
  );
}
