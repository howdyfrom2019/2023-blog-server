import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiProperty, ApiTags } from '@nestjs/swagger';
import { IPostItem } from './posts.model';
import { PostArticleDto } from './dto/post-article.dto';

@ApiTags('Post')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('/')
  @ApiOperation({ summary: '모든 포스트에 대한 GET', description: '발행된 모든 포스트 정보를 받는다.'})
  getAllPosts() {
    return this.postsService.getAllPosts();
  }

  @Post('/')
  @ApiOperation({ summary: '하나의 포스트 발행', description: '한 포스트를 발행한다.'})
  createPost(@Body() postArticleDto: PostArticleDto) {
    return this.postsService.createPost(postArticleDto.title, postArticleDto.description);
  }
}
