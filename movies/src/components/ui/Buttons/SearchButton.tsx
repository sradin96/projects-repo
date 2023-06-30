import { SearchButtonType } from "../../../types/types"

function SearchButton({ text }: SearchButtonType){
  return (
    <button className="filters__btn" type="submit">
        {text}
    </button>
  )
}

export default SearchButton
