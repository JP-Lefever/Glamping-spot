export type ModelProps = {
	id: number;
	labelLocation: string;
	label: string;
};

export type PitchesProps = {
	id: number;
	labelPitches: string;
	label: string;
};

export type InfraProps = {
	id: number;
	labelInfra: string;
	label: string;
};

export type CampingInfo = {
	id: string;
	campingName: string;
	description: string;
	photoCampName: string;
	openingCamp: string;
	closingCamp: string;
	email: string;
	tel: string;
	stars: number;
	city: string;
	zipCode: number;
	adress: string;
};

export type RentalProps = {
	id: string;
	modelMh: string;
	sizeMh: number;
	maxPers: number;
	pricePerNight: number;
	formattedOpeningMh: string;
	formattedclosingMh: string;
	photoMhName: string;
	linear: number;
};

export type PitchProps = {
	id: string;
	typePitche: string;
	sizePitche: number;
	electricity: boolean;
	power: number;
	pricePitche: number;
	maxPersPitche: number;
	formattedOpeningPitch: string;
	formattedclosingPitch: string;
	photoPitchName: string;
	totalPitches: number;
};

export type Infra = {
	id: string;
	infra: string;
	photoInfra: string;
};

export type PhotoProps = {
	photoCampName: string;
	photoMhName: string;
	photoPitchName: string;
	photoInfraName: string;
};

export type CampingProps = {
	id: string;
	campingName: string;
	description: string;
	photoCamp: string;
	opening: Date;
	closing: Date;
	email: string;
	tel: string;
	stars: number;
	city: string;
	zipCode: number;
	adress: string;
	modelMh: string;
	sizeMh: number;
	maxPers: number;
	pricePerNight: number;
	openingMh: Date;
	closingMh: Date;
	photoMh: string;
	linear: number;
	typePitche: string;
	sizePitche: number;
	electricity: boolean;
	power: number;
	pricePitche: number;
	maxPersPitche: number;
	openingPitche: Date;
	closingPitche: Date;
	photoPitche: string;
	totalPitches: number;
	infra: string;
	photoInfra: string;
};

// export type CampingInfoProps = {
// 	id: number;
// 	campingName: string;
// 	description: string;
// 	photoCamp: string;
// 	opening: Date;
// 	closing: Date;
// 	email: string;
// 	tel: number;
// 	stars: number;
// 	city: string;
// 	zipCode: number;
// 	adress: string;
// 	infra: string;
// 	modelMh: string;
// 	sizeMh: number;
// 	max_pers: number;
// 	pricePerNight: number;
// 	price_night: string;
// 	photoMh: string;
// 	linear: number;
// 	typePitche: string;
// 	size: number;
// 	pricePitche: number;
// 	maxPersPitche: number;
// 	photoPitche: string;
// 	photoInfra: string;
// 	infra_name: string;
// };

export type UserProps = {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	birthdate: Date;
	city: string;
	zipCode: number;
	tel: number;
	password: string;
	confirmpassword: string;
};

export type ConnectedProps = {
	user: boolean;
	setUser: (s: boolean) => void;
};

export type OutletContextType = {
	addCampingOpen: boolean;
	addMhOpen: boolean;
	setAddCampingOpen: (s: boolean) => void;
	setAddMhOpen: (s: boolean) => void;
	addPitchesOpen: boolean;
	setPitchesOpen: (s: boolean) => void;
	addInfraOpen: boolean;
	setAddInfraOpen: (s: boolean) => void;
};
