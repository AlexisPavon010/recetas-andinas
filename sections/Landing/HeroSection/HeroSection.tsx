import { useMemo, useState } from 'react'

import styles from 'sections/Landing/HeroSection/hero_section.module.scss';

import data from 'services/db.json'

import type Ingredient from "types/ingredient";

import IngredientTable from 'components/Tables/IngredientTable';
import ChevronDownIcon from 'components/Icons/ChevronDownIcon';

interface setShowDetailsRecipeProps {
  visible: boolean;
  name: string;
  rating: number;
  ingredients: string[];
  preparation: string;
}

interface HeroSectionProps {
  setShowDetailsRecipe: (value: any) => void
}

const HeroSection = ({ setShowDetailsRecipe }: HeroSectionProps) => {
  const [inputName, setInputName] = useState('')
  const [selected, setSelected] = useState('Todos')

  const ingredients: Ingredient[] = data.ingredients;

  const options = [
    {
      id: 0,
      name: 'Todos',
      label: 'Todos',
    },
    {
      id: 1,
      name: 'Activos',
      label: 'Activos',
    },
    {
      id: 2,
      name: 'Inactivos',
      label: 'Inactivos',
    },
  ]

  const filterRecipe = useMemo(() => {
    if (selected === 'Todos' && inputName.length === 0) {
      return ingredients
    }
    const inputNameLower = inputName.toLowerCase();
    const active = selected === 'Activos'

    let recipiesFitered = ingredients.filter((recipe) =>
      recipe.name.toLowerCase().includes(inputNameLower)
    )

    if (selected !== 'Todos') {
      recipiesFitered = recipiesFitered.filter(recipie => recipie.isCooking == active)
    }

    return recipiesFitered
  }, [inputName, selected])

  const handleInputChange = (e: any) => {
    setInputName(e.target.value)
  }

  const handleIsCheked = (e: any) => {
    setSelected(e.target.id)
  }

  return (
    <main className={styles.hero}>
      <aside className={styles.hero__side}>
        <img className={styles.hero__side_img} src="/assets/hero.png" alt="" />
      </aside>

      <div className={styles.hero__main}>
        <div className={styles.hero__main_header}>
          <h2 className={styles.hero__main_title}>Recetas de Cocina</h2>
          <div className={styles.hero__main_actions}>
            <div className={styles.hero__main_actions_search}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.28514 14.8327C1.38289 10.3567 3.46931 5.18617 7.94528 3.28393C12.4213 1.38168 17.5918 3.4681 19.4941 7.94408C21.3963 12.42 19.3099 17.5906 14.8339 19.4929C10.3579 21.3951 5.18738 19.3087 3.28514 14.8327ZM8.53198 4.66443C4.81844 6.24265 3.08742 10.5325 4.66564 14.246C6.24385 17.9595 10.5337 19.6906 14.2472 18.1124C17.9608 16.5341 19.6918 12.2443 18.1136 8.53077C16.5353 4.81723 12.2455 3.08621 8.53198 4.66443Z" fill="#1E3646" />
                <path fillRule="evenodd" clipRule="evenodd" d="M16.5552 16.5539C16.8481 16.261 17.3229 16.2611 17.6158 16.554L23.8638 22.8029C24.1567 23.0958 24.1567 23.5707 23.8637 23.8635C23.5708 24.1564 23.096 24.1564 22.8031 23.8635L16.5551 17.6146C16.2622 17.3217 16.2622 16.8468 16.5552 16.5539Z" fill="#1E3646" />
              </svg>
              <input onChange={handleInputChange} className={styles.hero__main_actions_search_input} type="text" placeholder='Buscador' />
            </div>
            <div className={styles.hero__main_actions_select}>
              <span>cocido antes: <strong>{selected}</strong></span>

              <ChevronDownIcon className={styles.hero__main_actions_chevron_down} />
              <div className={styles.dropdown}>
                {options.map(({ id, name, label }) => (
                  <div key={id} className={styles.dropdown__item}>
                    <span className={styles.dropdown__item_text}>{label}</span>
                    <input onChange={handleIsCheked} checked={selected === name} className={styles.dropdown__item_input} type="radio" name={name} id={name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <IngredientTable items={filterRecipe} setShowDetailsRecipe={setShowDetailsRecipe} />
      </div>
    </main>
  )
}


export default HeroSection