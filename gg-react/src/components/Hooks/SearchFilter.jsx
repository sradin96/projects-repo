export const useSearchFilter = () => {
    const setSearchFilter = (array, value, callback) => {
        callback(array?.filter((arr) => {
            return value.toLowerCase() === '' ? arr : arr.name.toLowerCase().includes(value) || arr.genre.toLowerCase().includes(value)
        }))
     }
     return { setSearchFilter };
}