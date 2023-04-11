const addToDb = id => {
   let appliedJobs = {}
   // get the shopping cart from local storage
    const storedCard = localStorage.getItem('applied-jobs')
    if (storedCard) {
      appliedJobs = JSON.parse(storedCard)
    }
  
    // add quantity
    const quantity = appliedJobs[id]
    if (!quantity) {
        // const newQuantity = quantity + 1
        // appliedJobs[id] = newQuantity
    //     toast.success('Already applied! 👌', { autoClose: 500 })
    //   } else {
        appliedJobs[id] = 1
      }
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs))
  }
export { addToDb}