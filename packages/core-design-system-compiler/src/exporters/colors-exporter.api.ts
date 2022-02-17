import { ExtractOptions } from '../compile';
import { ColorTokens } from '../models/figma-colors.model';

export type ColorsExporter = (colorTokens: ColorTokens, options: ExtractOptions) => string;
