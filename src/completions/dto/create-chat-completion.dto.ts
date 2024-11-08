import { IsNotEmpty, IsString } from 'class-validator';

export class CreateChatCompletionRequestBody {
  @IsString()
  @IsNotEmpty()
  input: string;
}
