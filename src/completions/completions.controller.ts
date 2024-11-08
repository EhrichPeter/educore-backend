import { Body, Controller, Post } from '@nestjs/common';
import { CompletionsService } from './completions.service';
import { CreateChatCompletionRequestBody } from './dto/create-chat-completion.dto';

@Controller('completions')
export class CompletionsController {
  constructor(private readonly completionsService: CompletionsService) {}

  @Post()
  async createChatCompletion(
    @Body() body: CreateChatCompletionRequestBody,
  ): Promise<string> {
    return this.completionsService.createChatCompletion(body.input);
  }
}
