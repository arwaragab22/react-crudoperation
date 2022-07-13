import React, { useState, useRef } from "react";

export default function Form({
    name,
    setname,
    list,
    setlist,
    isedit,
    setisedit,
    alert,
    setalert,
    setid,
    id,
    seterror,
}) {
    const handlesubmit = (e) => {
        e.preventDefault();

        if (name && !isedit) {
            console.log("iiiii");
            
            let d = new Date().getTime().toString();

            setid(d);
            setlist([...list, { name: name, id: d }]);
          
            setalert({ show: true, message: "item add", type: "add" });
              console.log(list);
            setname("");
            setid("");
            seterror(false)
        } else if (name && isedit === true) {
            list.map((elem, i) => {
                if (elem.id ===id) {
                    elem.name = name;
                }
            });
            setisedit(false)
            setalert({ show: true, message: "item updated", type: "update" });
            seterror(false);
            setid("");
            setname("");
        } else {
          
            setalert({ show: true, message: "item not valid", type: "" });
            seterror(true)
        }
    };
    return (
        <form onSubmit={handlesubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => {
                    setname(e.target.value);
                }}
                placeholder="enter item"
            />
            <button type="submit">{isedit?"update":"add"}</button>
        </form>
    );
}
