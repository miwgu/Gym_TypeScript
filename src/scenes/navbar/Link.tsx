import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from '../../shared/types';

type Props = {
  page:string;
  selectedPage: SelectedPage;
  setSelectedPage: (value:SelectedPage)=> void;
}

const Link = ({
  page,
  selectedPage,
  setSelectedPage,

}: Props) => {
  /*I use as SelectedPage: typeScript identify these match */
 const lowerCasePage =page.toLowerCase().replace(/\s/g,"") as SelectedPage/*delete blank fråm page id our class->ourclass */


  return (
    <AnchorLink
     className={`${selectedPage===lowerCasePage ? "text-primary-400" :""}
         transition duration-500 hover:text-primary-300
         `}
     href={`#${lowerCasePage}`}
     onClick={() => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link