//set applied job data in local storage
const addToDb = id => {
    let appliedJobs = {}
    const storedCard = localStorage.getItem('applied-jobs')
    if (storedCard) {
        appliedJobs = JSON.parse(storedCard)
    }
    // add quantity
    const quantity = appliedJobs[id]
    if (!quantity) {
        appliedJobs[id] = 1
    }
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs))
}
//get the applied jobs data from local storage
const getStoredData = () => {
    let appliedJobs = {}
    const storedData = localStorage.getItem('applied-jobs')
    if (storedData) {
        appliedJobs = JSON.parse(storedData)
    }
    return appliedJobs;
}
export { addToDb, getStoredData}