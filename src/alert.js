import React from "react";

function Alert({ error, alert, setalert }) {
  let interval = () => {
  
    if (alert.show) {
      setTimeout(function () {
        setalert({ type: "", show: false, message: "" });
      }, 2000);
      return <div className={`${error} ?"true":"false"`}>{alert.message}</div>;
    } else {
      return <div></div>;
    }
  };


  return <div className="alert">{interval()}</div>;
}

export default Alert;
