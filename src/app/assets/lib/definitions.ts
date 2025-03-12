export type ModelProps = {
	id: number;
	label: string;
};

export type PitchesProps = {
	id: number;
	label: string;
};

export type InfraProps = {
	id: number;
	label: string;
};

export type CampingProps = {
	id: number;
	campingName: string;
	label: string;
	description: string;
	photo: string;
	photoCamp: string;
	opening: Date;
	closing: Date;
	email: string;
	tel: number;
	stars: number;
	city: string;
	zipCode: number;
	adress: string;
	infra: string;
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
	size: number;
	electricity: boolean;
	power: number;
	pricePitche: number;
	maxPersPitche: number;
	openingPitche: Date;
	closingPitche: Date;
	photoPitche: string;
	totalPitches: number;
	photoInfra: string;
	infra_name: string;
};
export type CampingInfoProps = {
	id: number;
	campingName: string;
	description: string;
	photoCamp: string;
	opening: Date;
	closing: Date;
	email: string;
	tel: number;
	stars: number;
	city: string;
	zipCode: number;
	adress: string;
	infra: string;
	modelMh: string;
	sizeMh: number;
	max_pers: number;
	pricePerNight: number;
	price_night: string;
	photoMh: string;
	linear: number;
	typePitche: string;
	size: number;
	pricePitche: number;
	maxPersPitche: number;
	photoPitche: string;
	photoInfra: string;
	infra_name: string;
};

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
