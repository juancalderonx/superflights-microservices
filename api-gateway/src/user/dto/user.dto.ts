import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { IsEmail, IsIn, IsOptional, IsString, Matches, MaxLength, MinLength, IsNotEmpty } from "class-validator";

export class userDTO {

  @IsString() @MinLength(1) @IsNotEmpty()
  @ApiProperty()
  readonly username: string;

  @IsString() @MinLength(1) @IsNotEmpty()
  @ApiProperty()
  readonly fullname: string;

  @IsString() @IsEmail()  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;

  @IsString() @MinLength(6) @MaxLength(50) @IsNotEmpty()
  @ApiProperty()
  @Matches(
    /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'The password must have a Uppercase, lowercase letter and a number'
  })
  readonly password: string;

  @IsIn(['active', 'inactive', 'erased']) @IsOptional()
  @IsNotEmpty()
  readonly status?: string;

}