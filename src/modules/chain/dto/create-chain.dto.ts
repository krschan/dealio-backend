import { IsString, IsUrl } from 'class-validator';

export class CreateChainDto {
  @IsString()
  name: string;

  @IsUrl()
  website: string;

  @IsUrl()
  logoUrl?: string;
}
