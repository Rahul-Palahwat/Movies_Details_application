import { create } from 'apisauce'

import {movies} from '../baseURL'


export const data_all = create({
    baseURL: movies,
	headers: {
		Accept: "application/json",
		"Cache-Control": "no-cache",
		"Content-Type": "application/json",
	},
	timeout: 45000,
})
