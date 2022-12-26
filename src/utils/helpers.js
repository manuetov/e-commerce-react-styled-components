export const formatPrice = (number) => {
   return new Intl.NumberFormat('es-ES', {
     style: 'currency',
     currency: 'EUR',
   }).format(number / 100)
 }
 // type is a dinamic parameter from Filters
 export const getUniqueValues = (data, type) => {
   let unique = data.map((item) => item[type])
   if (type === 'colors') {
    // flat() => create a new unique array from an array with multiple nested.
     unique = unique.flat()
   }
   return ['all', ...new Set(unique)]
 }