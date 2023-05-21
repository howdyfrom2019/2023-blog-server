import { ApiProperty } from '@nestjs/swagger';
import { IPostState } from '../posts.model';

export class PostArticleDto {
  @ApiProperty({
    title: '글 제목',
  })
  title: string;
  @ApiProperty({
    description: '글 내용',
  })
  description: string;
}

export class PatchArticleDto {
  @ApiProperty({
    title: '글 제목',
  })
  title: string;
  @ApiProperty({
    description: '글 내용',
  })
  description: string;
  @ApiProperty({
    type: '0: 공개글, 1. 비공개글',
  })
  type: IPostState;
}
