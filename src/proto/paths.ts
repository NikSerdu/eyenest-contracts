import { join } from 'path'

export const PROTO_PATHS = {
	AUTH: join(__dirname, '../../proto/auth.proto'),
	CAMERA: join(__dirname, '../../proto/camera.proto'),
	VIDEO: join(__dirname, '../../proto/video.proto'),
} as const
