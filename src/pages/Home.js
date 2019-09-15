import React, {Fragment} from 'react'
import { ListOfPhotosCards } from '../container/ListOfPhotoCards'
import { ListOfCategories } from '../components/ListOfCategories'

export const Home = ({ id }) => (
    <Fragment>
        <ListOfCategories />
        <ListOfPhotosCards categoryId={id} />       
    </Fragment>
)