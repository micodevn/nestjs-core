import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { DocumentSchema } from '@app/common';

@Schema({ timestamps: true })
export class TodoEntity extends DocumentSchema {
  @Prop({ required: true })
  name: string;
}

export const TodoSchema = SchemaFactory.createForClass(TodoEntity);
