export const useConfirm = (message ="", onConfirm, onCancel) =>{
    if(typeof callback !== "function" || typeof onCancel !== "function"){
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
   