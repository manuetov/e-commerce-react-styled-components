import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext()
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        lo sentimos, no existe ningún producto con esas características...
      </h5>
    )
  }
  if (grid_view === false) {
    return <ListView products={products} />
  }
  return <GridView products={products}>Listado de Productos</GridView>
}

export default ProductList
