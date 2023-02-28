const DD = {

  };
  
  export default new (class pagesConfig {
    getPage(id){
      return PAGE[id];
    }
    getAllPage(){
      return PAGE;
    }
  })();