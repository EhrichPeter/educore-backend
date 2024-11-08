import { Module } from '@nestjs/common';
import { CompletionsModule } from './completions/completions.module';
import { ConfigModule } from '@nestjs/config';
import { IngestionModule } from './ingestion/ingestion.module';
import { VocabularyModule } from './vocabulary/vocabulary.module';

@Module({
  imports: [
    CompletionsModule,
    ConfigModule.forRoot(),
    IngestionModule,
    VocabularyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
