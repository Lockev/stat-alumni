import type { endpointsToOperations } from '../pages/api/[...entity].js';
import type { playgroundActions } from '../pages/playground/_actions.js';

export type EndpointsToOperations = typeof endpointsToOperations;
export type Endpoint = keyof EndpointsToOperations;

export type Products = Product[];
export interface Product {
	name: string;
	category: string;
	technology: string;
	id: number;
	description: string;
	price: string;
	discount: string;
}

export type Alumnis = Alumni[];
export interface Alumni {
	id: number;
	firstname: string;
	lastname: string;
	avatar: string;
	diploma_file: string;
	email: string;
	graduation_year: string;
	diploma: string;
	linkedin: string;
	current_position: string;
	current_company: string;
	last_post: string;
	current_type_post: string;
	country: string;
	freelance: boolean;
}

export type PlaygroundAction = (typeof playgroundActions)[number];
