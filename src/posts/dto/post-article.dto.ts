import { ApiProperty } from "@nestjs/swagger";

export class PostArticleDto {
  @ApiProperty({
    description: '글 제목'
  })
  title: string;
  @ApiProperty({
    description: '글 내용'
  })
  description: string;
}