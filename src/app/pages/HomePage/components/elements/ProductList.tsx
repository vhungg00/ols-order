import React, { useState } from 'react'
import { products, Product } from '../../const' // Import product data
import { Box, SimpleGrid, Heading, Text, Select, Flex } from '@chakra-ui/react' // Import Chakra components
import LazyLoadImage from './LazyLoad'

const ProductList: React.FC = () => {
  const [filter, setFilter] = useState<string>('') // State for filtering products

  // Function to handle filtering
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value)
  }

  // Filter products based on the selected category
  const filteredProducts = products.filter(
    (product: Product) => filter === '' || product.category === filter,
  )

  return (
    <Flex flexDirection={'column'} p={4} bg="white">
      <Heading mb={4}>Lazy Load Products with Filter</Heading>

      {/* Filter dropdown */}
      <Select value={filter} onChange={handleFilterChange} mb={6} maxW="300px">
        <option value="">All</option>
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
      </Select>

      {/* Product List */}
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {filteredProducts.map(product => (
          <Box
          flexDirection={'column'}
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            w={'240px'}
            p={4}
            transition="all 0.3s"
            _hover={{ boxShadow: 'xl' }}
          >
            <LazyLoadImage
              src={product.imageSrc}
              alt={product.name}
              placeholderSrc="https://example.com/placeholder.jpg" // Optional placeholder
              loadDelay={1000} // Optional delay before loading the image
              threshold={0.1} // Load when 10% of the image is in view
            />
            <Heading size="md" mt={4}>
              {product.name}
            </Heading>
            <Text mt={2} color="gray.600">
              {product.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export default ProductList
