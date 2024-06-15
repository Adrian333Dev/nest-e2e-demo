import { IsNotEmpty, IsString, MinLength, IsEmail } from 'class-validator';
import { OmitType } from '@nestjs/mapped-types';

export class SignUpInput {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}

export class SignInInput extends OmitType(SignUpInput, ['name']) {}
