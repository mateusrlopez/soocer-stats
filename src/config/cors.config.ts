import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

import * as env from '@shared/helpers/env.helper';

export const CorsConfig: CorsOptions = {
    exposedHeaders: env.getArrayVariable('CORS_EXPOSED_HEADERS'),
    origin: env.getVariable('CORS_ORIGIN'),
};
