const AddToDb = (newBreake) => {
    localStorage.setItem('breake time', JSON.stringify(newBreake))
}


export { AddToDb }

