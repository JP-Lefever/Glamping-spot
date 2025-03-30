import argon from "argon2";

const hashingOption = {
	memoryCost: 19 * 2 ** 10,
	timeCost: 2,
	parallelism: 1,
};

export const hashPassword = async (password: string) => {
	const newPassord = argon.hash(password, hashingOption);

	return newPassord;
};
