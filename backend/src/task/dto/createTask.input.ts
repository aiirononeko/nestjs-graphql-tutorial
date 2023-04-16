import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsDateString } from 'class-validator';

@InputType()
export class CreateTaskInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsDateString()
  dueDate: string;

  @Field({ nullable: true })
  description?: string;
}
