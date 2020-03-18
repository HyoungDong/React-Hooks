import { useEffect, useState } from "react";

export const useConfirm = (message ="", onConfirm, onCancel) =>{
    if(typeof onConfirm !== "function" || typeof onCancel !== "function"){
      return;
    }
    const confirmAction = () =>{
      if(window.confirm(message)){
        onConfirm();
      }else{
        onCancel();
      }
    }
    return confirmAction;
  }
   