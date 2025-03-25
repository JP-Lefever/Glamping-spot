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

export interface CampingDetailsProps {
	id: string;
	label: string;
	email: string;
	tel: string;
	city: string;
	zipcode: number;
	adress: string;
	description: string;
	stars: number;
	opening: Date;
	closing: Date;
	photo: string;
	typemh: string;
	openingpitch: Date;
	closingpitch: Date;
	photopitch: string;
	sizepitch: number;
	is_electrified: boolean;
	power: number;
	price_night: number;
	maxperspitch: number;
	typepitch: string;
	sizemh: number;
	maxpersmh: number;
	pricepernight: number;
	openingmh: Date;
	closingmh: Date;
	photomh: string;
	photoinfra: string;
	labelinfra: string;
}

export type UserProps = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	birthdate: Date;
	city: string;
	zipCode: number;
	tel: string;
	role: string;
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
