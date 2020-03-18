export const useNotification = (title, options) =>{
    if(!("Notification" in window)){
      return;
    }
    const fireNotif = () =>{
      if(Notification.permission !== "granted"){
        Notification.requestPermission().then((perm) =>{
          if(perm ==="granted"){
            new Notification(title,options);
          }else{
            return;
          }
  
        });
      }else{
        console.log(options);
        new Notification(title,options)
      }
    }
  
    return fireNotif;
  };