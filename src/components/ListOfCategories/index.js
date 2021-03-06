import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index'
import { Item, List } from './styles'

function useCategoriesData() {
    const [categories, setCategories] = useState([])
    const [loading, setLoading ] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://minegram-api.now.sh/categories')
            .then(res => res.json())
            .then(response => {
                setCategories(response)
                setLoading(false)
            })
    }, [])

    return { categories, loading }
}

export const ListOfCategories = () => {
    const { categories, loading } = useCategoriesData()
    const [showFixed, setFixed] = useState(false)



    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            showFixed != newShowFixed && setFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    const renderList = (fixed) => (
        <List fixed={fixed}>
        {
            loading
               ? <Item key={'loading'}> <Category /></Item>
               : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
        }
        </List>
    )

    return(
        <React.Fragment>
            {   renderList(false) }
            {   showFixed && renderList(true)  }    
        </React.Fragment>
    )
}