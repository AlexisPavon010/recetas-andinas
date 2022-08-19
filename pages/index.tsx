import { useState } from 'react'
import type { NextPage } from 'next'

import HeroSection from 'sections/Landing/HeroSection'

import AddRecipeModal from 'components/Modals/AddRecipeModal'
import DetailsRecipeModal from 'components/Modals/DetailsRecipeModal'
import EditRecipeModal from 'components/Modals/EditRecipeModal'
import PlusButton from 'components/Buttons/PlusButton'

import withLayout from 'hocs/withLayout'

import MainLayout from 'layouts/MainLayout'

import compose from 'utils/compose'

const LandingPage: NextPage = () => {
  const [showAddRecipe, setShowAddRecipe] = useState(false)
  const [showDetailsRecipe, setShowDetailsRecipe] = useState({
    visible: false,
    rating: 0,
    name: '',
    isCooking: false,
    ingredients: [''],
    preparation: ''
  })
  const [showEditRecipe, setShowEditRecipe] = useState(false)

  return (
    <>
      <HeroSection setShowDetailsRecipe={setShowDetailsRecipe} />

      <PlusButton setShowAddRecipe={setShowAddRecipe} />
      <AddRecipeModal showAddRecipe={showAddRecipe} setShowAddRecipe={setShowAddRecipe} />
      <DetailsRecipeModal showDetailsRecipe={showDetailsRecipe} setShowDetailsRecipe={setShowDetailsRecipe} setShowEditRecipe={setShowEditRecipe} />
      <EditRecipeModal showEditRecipe={showEditRecipe} setShowEditRecipe={setShowEditRecipe} />
    </>
  )
}

export default compose(
  withLayout(MainLayout),
)(LandingPage);


