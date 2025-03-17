import { type NextRequest, NextResponse } from "next/server";
import { writeFile } from "node:fs/promises";
import path from "node:path";

export const POST = async (req: NextRequest) => {
	const file = await req.formData();

	const photoCamp = file.get("photoCamp") as File;
	const photoMh = file.get("photoMh") as File;
	const photoPitche = file.get("photoPitche") as File;
	const photoInfra = file.get("photoInfra") as File;

	const byteLengthCamp = await photoCamp.arrayBuffer();
	const byteLengthMh = await photoMh.arrayBuffer();
	const byteLengthPitch = await photoPitche.arrayBuffer();
	const byteLengthInfra = await photoInfra.arrayBuffer();

	const bufferDataCamp = await Buffer.from(byteLengthCamp);
	const bufferDataMh = await Buffer.from(byteLengthMh);
	const bufferDataPitch = await Buffer.from(byteLengthPitch);
	const bufferDataInfra = await Buffer.from(byteLengthInfra);

	const uploadDir = path.join(process.cwd(), "public/uploads");
	const generateFileName = (file: File) => {
		const timestamp = Date.now();
		return `${timestamp}-${file.name.replace(/\s/g, "_")}`;
	};

	const photoCampName = generateFileName(photoCamp);
	const photoMhName = generateFileName(photoMh);
	const photoPitchName = generateFileName(photoPitche);
	const photoInfraName = generateFileName(photoInfra);

	const pathCamp = path.join(uploadDir, photoCampName);
	const pathMh = path.join(uploadDir, photoMhName);
	const pathPitch = path.join(uploadDir, photoPitchName);
	const pathInfra = path.join(uploadDir, photoInfraName);

	writeFile(pathCamp, bufferDataCamp);
	writeFile(pathMh, bufferDataMh);
	writeFile(pathPitch, bufferDataPitch);
	writeFile(pathInfra, bufferDataInfra);

	return NextResponse.json({
		photoCampName,
		photoMhName,
		photoPitchName,
		photoInfraName,
	});
};
