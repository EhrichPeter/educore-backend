import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class CompletionsService {
  constructor(private readonly openai: OpenAI) {}

  public async createChatCompletion(input: string): Promise<string> {
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        {
          role: 'user',
          content: input,
        },
      ],
    });

    return completion.choices[0].message.content;
  }
}
