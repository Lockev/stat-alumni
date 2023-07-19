/* eslint-disable no-param-reassign */
import { faker } from '@faker-js/faker';
import { RANDOMIZE } from '../app/constants.js';
import type { Alumnis } from '../types/entities.js';

import usersStaticJSON from '../../data/users.json' assert { type: 'json' };

const usersStaticData: Alumnis = usersStaticJSON;

export function getUsers(randomize = RANDOMIZE) {
	console.log('getUsers');
	const diplomas = ["Mastère Creative Technology", "Mastère Direction artistique", "Mastère Game Art", "Mastère Game design", "Mastère Game Programming", "Mastère Gestion de production 3D", "Mastère Ingénierie web et mobile", "Mastère Interactivité et UX design", "Mastère Management de la Transformation Digitale", "Mastère Marketing et Communication Digitale", "Mastère Product design UX-UI", "Mastère Production et marketing du jeu vidéo", "Mastère Réalisation et animation 3D", "Mastère Stratégie e-business", "Mastère Stratégie social média & influence"];
	const result = randomize
		? usersStaticData.map((p) => {
				p.firstname = faker.name.firstName();
				p.lastname = faker.name.lastName();
				p.email = faker.internet.email();
				p.current_position = faker.name.jobTitle();
				p.current_company = faker.company.name();
				p.graduation_year = faker.datatype.number({min: 2015, max: 2023}).toString();
				const random = Math.floor(Math.random() * diplomas.length);
				p.diploma = diplomas[random]!;
				p.country = faker.address.country();
				return p;
		  })
		: usersStaticData;
	console.log(result)
	return result;
}
