import React from "react";
import "./main.scss";
export default function SearchBar() {
	return (
		<form action='#' className='search'>
			<input type='text' className='search__input' placeholder='Search' />
			<button className='search__button'>
				<svg className='search__icon'>
					<use href='/images/symbol-defs.svg#icon-magnifying-glass'></use>
				</svg>
			</button>
		</form>
	);
}
